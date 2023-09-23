function isEmpty(obj) {
  let quantity = 0;
  
  for (let key in obj) {
    quantity = quantity + 1;
  }
  
  if (quantity == 0) {
    return true;
  } else {
    return false;
  }
}
