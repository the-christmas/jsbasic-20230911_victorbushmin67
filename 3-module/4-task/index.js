function showSalary(users, age) {
  let namesBalance = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].age <= age) {
      let currentUser = [];

      currentUser.push(users[i].name);
      currentUser.push(users[i].balance);

      namesBalance.push(currentUser.join(', '));
    }
  }

  return namesBalance.join('\n');
}
