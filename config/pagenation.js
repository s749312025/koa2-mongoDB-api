const pagenation = (obj) => {
  let pageIndex = 1;
  let pageSize = 10;
  if(obj) {
    obj.pageIndex ? pageIndex = obj.pageIndex : '';
    obj.pageSize ? pageSize = obj.pageSize : '';
  }
  pageIndex -= 1;
  return {
    pageIndex,
    pageSize,
    skipNum: pageIndex*pageSize,
  }
}

module.exports = pagenation;