import { Raw } from '@/types'
import { Select, SelectProps } from 'antd'
import * as React from 'react'

// type SelectProps = React.ComponentProps<typeof Select>
interface IdSelectProps
  extends Omit<SelectProps, 'value' | 'onChange' | 'options' | 'defaultOptionName'> {
  value: Raw | undefined | null
  onChange: (value: number | undefined) => void
  defaultOptionName?: string
  options?: { username: string; id: number }[]
}

/**
 *
 *  @param props
 *  value 可以传入多种类型的值
 *  onChange 只会回调 number | nudefinded类型
 *  当isNaN(Number(value)) 为true的时候，代表选择默认类型
 *  代表选择默认类型的时候，onChange只回调 undefined
 * @returns
 */
export const IdSelect: React.FC<IdSelectProps> = props => {
  const { value, onChange, defaultOptionName, options, ...resetProps } = props
  return (
    <Select
      value={options?.length ? toNumber(value) : 0}
      onChange={value => onChange(toNumber(value) || undefined)}
      {...resetProps}
    >
      {defaultOptionName ? <Select.Option value={0}>{defaultOptionName}</Select.Option> : null}
      {options?.map(option => (
        <Select.Option key={option.id} value={option.id}>
          {option.username}
        </Select.Option>
      ))}
    </Select>
  )
}

const toNumber = (value: unknown) => (isNaN(Number(value)) ? 0 : Number(value))
