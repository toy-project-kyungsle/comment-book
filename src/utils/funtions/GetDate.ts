function GetDate(date: string) {
  let result = date ? date.slice(0, 4) + '.' + date.slice(4, 6) + '.' + date.slice(6, 8) : '';
  return result;
}

export default GetDate;
