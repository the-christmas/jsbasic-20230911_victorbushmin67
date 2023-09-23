function truncate(str, maxlength) {
  let newStr = [];

  if (str.length > maxlength) {
    for (let i = 0; i < str.length; i++) {
      if (i == maxlength - 1) {
        break;
      }

      newStr.push(str[i]);
    }

    let oldStr = '';

    for (let i = 0; i < newStr.length; i++) {
      oldStr = oldStr + newStr[i];
    }

    str = oldStr + '…';
  }

  return str;
}