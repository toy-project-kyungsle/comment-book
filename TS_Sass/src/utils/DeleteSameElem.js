export default function DeleteSameElem(arr) {
  let result = [];
  new Set(arr).forEach((e) => result.push(e));
  return result;
}
