import config from '@/config'
import login from './api-config/login'
import baseData from './api-config/baseData'
import metaDataQuality from './api-config/metaDataQuality'
import businessDataQuality from './api-config/businessDataQuality'
import auditMonitor from './api-config/auditMonitor'
import ruleManage from './api-config/ruleManage'

const commonDomainArray = [login, baseData, metaDataQuality, businessDataQuality, auditMonitor, ruleManage]
const urlObj = {}
for (const item of commonDomainArray) {
  item[Object.keys(item)[0]].domain = config.baseUrl
  // 全部整合到一个空对象里面
  Object.assign(urlObj, item)
}
const apiConfig = Object.assign(urlObj)

export default function getUrl(type, path) {
  const env = process.env.NODE_ENV === 'development' ? 'dev' : 'pro'
  return (`${apiConfig[type].domain[env]}/${apiConfig[type].path[path]}`)
}
