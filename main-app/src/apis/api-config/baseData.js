export default {
  baseData: {
    path: {
      // getUserInfo base接口，需要指定  getUrl('baseData', 'userInfo','base')
      userInfo: 'api/v1/base/user/get_information',
      // 根据术语id和关键字获取术语
      dictData: 'api/v1/app_material_mdm/concept/search',
      // 获取术语信息
      dictDataList: 'api/v1/data_quality_bas/concept/query',

      sqlExceptionList: 'api/v1/data_quality_bas/sql_check_result/query',
      sqlExceptionDetailList: 'api/v1/data_quality_bas/sql_check_detail/query',
      sqlTableTitleList: 'api/v1/data_quality_bas/rule_sql_field/query'
    }
  }
}
