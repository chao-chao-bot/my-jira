import * as React from 'react'

enum Stat {
  IDEL = 'idle',
  LOADING = 'loading',
  ERROR = 'error',
  SUCCESS = 'success'
}

interface State<D> {
  error: Error | null
  data: D | null
  stat: Stat
}

const defaultConfig = {
  throwOnError: false
}
const defaultInitState: State<null> = {
  stat: Stat.IDEL,
  data: null,
  error: null
}
export const useAsync = <D>(initialState?: State<D>, initialConfig?: typeof defaultConfig) => {
  const config = { ...defaultConfig, initialConfig }
  const [state, setState] = React.useState<State<D>>({
    ...defaultInitState,
    ...initialState
  })
  const setData = (data: D) =>
    setState({
      data,
      stat: Stat.SUCCESS,
      error: null
    })
  const setError = (error: Error) =>
    setState({
      error,
      stat: Stat.ERROR,
      data: null
    })

  const run = (promise: Promise<D>) => {
    if (!promise || !promise.then) {
      throw new Error('请传入Promise 类型数据')
    }
    setState({ ...state, stat: Stat.LOADING })
    return promise
      .then(data => {
        setData(data)
        return data
      })
      .catch(error => {
        setError(error)
        if (config.throwOnError) {
          return Promise.reject(error)
        }

        return error
      })
  }
  return {
    isIdel: state.stat === Stat.IDEL,
    isSuccess: state.stat === Stat.SUCCESS,
    isError: state.stat === Stat.ERROR,
    isLoading: state.stat === Stat.LOADING,
    run,
    setData,
    setError,
    ...state
  }
}
