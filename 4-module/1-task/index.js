function makeFriendsList(friends) {
  const list = document.createElement('ul');
  list.innerHTML = `
       <li></li>
       <li></li>
       <li></li>
  `;

  document.body.append(list);
  
  for (let i = 0; i < friends.length; i++) {
    let friend = friends[i].firstName + ' ' + friends[i].lastName;
    
    const listItem = document.getElementsByTagName('li')[i];
    listItem.innerHTML = friend;
  }
  
  return document.querySelector('ul');
}