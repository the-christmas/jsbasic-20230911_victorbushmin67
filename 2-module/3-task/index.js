let calculator = {
  read(num1, num2) {
    // this.num1 = +prompt('Please type number 1', 0); Если в браузере для пользователя
    // this.num2 = +prompt('Please type number 2', 0); Если в браузере для пользователя

    this.num1 = num1; //npm test тоько так пропустил
    this.num2 = num2; //npm test тоько так пропустил
  },
  
  sum() {
    return this.num1 + this.num2;
  },

  mul() {
    return this.num1 * this.num2;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
