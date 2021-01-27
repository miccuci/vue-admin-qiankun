
export default function toChildrenStruct(pidArray, nodeId = 'id', nodeName = 'name', parentId = 'parentId') {
  // 将pid结构的树型数据转换成children结构
  const childrenArray = []
  const itemMap = {}
  if (!pidArray) {
    return childrenArray
  } else {
    for (const item of pidArray) {
      item.tempId = item.id // 目的是保存item原有的id 从而在数据库进行查找，之后对数据做修改操作的时候记得更改回来
      item.id = item[nodeId] // 唯一标识，作为下拉树去筛选的唯一条件 https://vue-treeselect.js.org/
      item.key = item[nodeId]
      item.value = item[nodeId]
      item.label = item[nodeName]
      itemMap[item[nodeId]] = item
    }
    for (const item of pidArray) {
      const parent = itemMap[item[parentId]]
      if (typeof parent === 'undefined') {
        // pid不存在，是顶级元素
        childrenArray.push(item)
      } else {
        if (typeof parent.children === 'undefined') {
          parent.children = []
        }
        parent.children.push(item)
      }
    }
  }
  return childrenArray
}
