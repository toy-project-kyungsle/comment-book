export default function DeleteSameElem(arr: any[]) {
  let result = [];
  new Set(arr).forEach((e) => result.push(e));
  return result;
}
