function namify(users) {
  let names = [];
  
  users.filter(item => item.name).forEach(item => names.push(item.name));
  
  return names;
};