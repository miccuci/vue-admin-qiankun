// write your lib here...
import getUrl from '@/apis'
import { post } from '@/service/request.js'
/**
 * @description 获取术语list方法
 * @param {dictCodeList} 术语code集合
 * @returns dictDataList 二维数组，返回对应的术语列表，与 dictCodeList 索引值对应，
 *                       如：dictDataList[0]表示dictCodeList[0]所对应的术语集合
 */
export async function findDictData(dictCodeList) {
  const url = getUrl('baseData', 'dictDataList')
  const res = await post(url, { codeSystemIds: dictCodeList })
  let tempData = {}
  const tempList = []
  if (res.data && res.data.length) {
    dictCodeList.forEach(item => {
      tempData = res.data.find(element => element.codeSystemId === item)
      if (tempData && tempData.valueSets) {
        tempList.push(tempData.valueSets)
      }
    })
  }
  return tempList
}

export default {}
