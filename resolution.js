function squareDigits(num){
  let numStr = String(num);
  let res = '';
  
  for (let i of numStr) {
    res += Math.pow(Number(i), 2);
  }
  
  return Number(res);
}