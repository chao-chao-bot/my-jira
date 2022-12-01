/**
 * 获取URL Search参数
 *
 * @export getParams
 * @param {string} str 需要获取的URL Search字符串
 * @returns {UrlParamsType}
 */
export const getUrlParams = (str?: string) => {
  const url = str || window.location.search.slice(1)

  const queries: Record<string, string> = {}
  if (!url) {
    return queries
  }
  const searchParams = new URLSearchParams(url)
  searchParams.forEach((value, key) => {
    queries[key] = value
  })
  return queries
}
