import { ItemType } from 'antd/lib/menu/hooks/useItems'
export type Handler<T extends any[] = any[]> = (...args: T) => void
export type HandlerBoolean<T extends any[] = any[]> = (...args: T) => Promise<boolean>
/**下拉Select选项 */
export type SelectOption<T = any> = {
  value: string | number
  label: string
  disabled?: boolean
  sequence?: number
  extra?: T
  [key: string]: any
}

/** 下拉菜单选项 */
type ParentMenuOption = Omit<SelectOption, 'value'>
export type MenuOption = ItemType &
  ParentMenuOption & {
    key?: string
    children?: MenuOption[]
    type?: string
  }

/**Tab 标签页选项 */
export type TabsOption = MenuOption
