// set function parseTime,formatTime to filter
import dayjs from 'dayjs'

export function toThousandFilter(number, decimals = 2, dec_point = '.', thousands_sep = ',') {
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')
  const n = !isFinite(+number) ? 0 : +number
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  const sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep
  const dec = (typeof dec_point === 'undefined') ? '.' : dec_point
  let s = ''
  const toFixedFix = function(n, prec) {
    const k = Math.pow(10, prec)
    return '' + Math.floor(n * k) / k
  }
  s = (prec ? toFixedFix(n, prec) : '' + Math.floor(n)).split('.')
  const re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}
/*
全局过滤器日期格式化
使用示例： date|dateFormat('YYYY-MM-DD HH:mm:ss')
*/
export function dateFormat(time, format = 'YYYY-MM-DD') {
  if (time) {
    return dayjs(time).format(format)
  }
  return ''
}
