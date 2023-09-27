function getMinMax(str) {
  let numberOnly = [];
  let result = {};
  
  str.split(' ').filter(item => +item).forEach(item => numberOnly.push(+item));
  
  result.min = (Math.min(...numberOnly));
  result.max = (Math.max(...numberOnly));
  
  return result;
}
