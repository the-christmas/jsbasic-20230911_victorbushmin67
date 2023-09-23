function sumSalary(obj) {
  let totalSalaries = 0;
  
  for (let key in obj) {
    if (isNaN(obj[key]) || obj[key] == Infinity || obj[key] == -Infinity) {
      obj[key] = 0;
    }
    
    if (typeof obj[key] === 'number') {
      totalSalaries = totalSalaries + obj[key];
    }
  }
  
  return totalSalaries;
};