/**团队下拉列表key */
export enum TeamDropItemKey {
  /**协作者*/
  TEAMWORKER = 'teamworker',
  /**您的团队 */
  TEAMLIST = 'teamlist',
  /**邀请团队成员 */
  INIVTEMEMBERS = 'invite-members',
  /**创建团队 */
  CREATETEAM = 'create-team'
}

export const initTeamDropList = [
  {
    key: TeamDropItemKey.TEAMWORKER,
    type: 'group',
    label: '您的协作者',
    children: [
      {
        key: TeamDropItemKey.INIVTEMEMBERS,
        label: '邀请团队成员'
      },
      {
        key: TeamDropItemKey.CREATETEAM,
        label: '创建团队'
      }
    ]
  },
  {
    key: TeamDropItemKey.TEAMLIST,
    type: 'group',
    label: '您的团队',
    children: [
      {
        key: '1-1',
        label: 'xxx团队123'
      },
      {
        key: '1-2',
        label: 'xxx团队321'
      }
    ]
  }
]
