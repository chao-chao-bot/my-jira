import * as React from 'react'
import { Handler, HandlerBoolean } from '@/types'
import usePersistCallback from './usePersistCallback'
import { useEventBus } from '@/hooks'

export interface IDialogConfig {
  /**打开对话框执行 */
  onOpen?: Handler
  /**打开对话框前执行 */
  onBeforeOpen?: HandlerBoolean
}
export const useDialog = (eventName: string, config?: IDialogConfig) => {
  const { onOpen, onBeforeOpen } = config || {}
  const [visible, setVisible] = React.useState<boolean>(false)
  /**打开对话框 */
  const dialogOpen = usePersistCallback(async (...args: any[]) => {
    let flag = true
    if (onBeforeOpen) {
      flag = await onBeforeOpen(...args)
    }
    if (!flag) return
    setVisible(true)
    onOpen?.(...args)
  })

  useEventBus(eventName, dialogOpen)
  /**关闭对话框 */
  const dialogClose = () => {
    setVisible(false)
  }

  const dialogProps = React.useMemo(() => {
    return {
      open: visible,
      onCancel: dialogClose,
      width: '50rem',
      maskClosable: false,
      centerd: false,
      okText: '确认',
      cancelText: '取消'
    }
  }, [visible])

  return {
    visible,
    dialogOpen,
    dialogClose,
    setVisible,
    dialogProps
  }
}
