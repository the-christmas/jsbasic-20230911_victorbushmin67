function ucFirst(str) {
  if (!Boolean(str)) {
    return '';
  }

  return str[0].toUpperCase() + str.slice(1);
}
