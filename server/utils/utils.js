/**
 * 判断对象或者数组是否为空
 * @param obj
 */
export function isEmpty(obj: any): boolean {
  return [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;
}
