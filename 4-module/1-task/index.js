function makeFriendsList(friends) {
  const list = document.createElement('ul');
  list.innerHTML = `
       <li></li>
       <li></li>
       <li></li>
  `;
  
  for (let i = 0; i < friends.length; i++) {
    let friend = friends[i].firstName + ' ' + friends[i].lastName;
    
    const listItem = list.getElementsByTagName('li')[i];
    listItem.innerHTML = friend;
  }
  
  return list;
}