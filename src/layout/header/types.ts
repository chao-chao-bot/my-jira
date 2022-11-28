import { MenuOption } from '@/types'

import { map } from 'lodash-es'
/**用户信息 */
export enum UserInfoItemSetting {
  PersonalData = 'personal-data',
  PersonalSettings = 'personal-settings',
  LogOut = 'log-out'
}
export const UserInfoItemSettingMap: Record<UserInfoItemSetting, MenuOption> = {
  [UserInfoItemSetting.PersonalData]: {
    key: UserInfoItemSetting.PersonalData,
    label: '个人资料'
  },
  [UserInfoItemSetting.PersonalSettings]: {
    key: UserInfoItemSetting.PersonalSettings,
    label: '个人设置'
  },
  [UserInfoItemSetting.LogOut]: {
    key: UserInfoItemSetting.LogOut,
    label: '注销'
  }
}
export const UserInfoItemSettingList = map(UserInfoItemSettingMap)
