/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    const table = document.createElement('table');
    this.elem = table;
    table.innerHTML = `
        <thead>
            <tr>
                <th>Имя</th>
                <th>Возраст</th>
                <th>Зарплата</th>
                <th>Город</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        </tbody>
      `;
    let workers = []; 

    rows.map(row => {
      this.name = row.name;
      this.age = row.age;
      this.salary = row.salary;
      this.city = row.city;
      
      workers.push(this.#template());
    });

    workers = workers.join('');
    table.querySelector('tbody').innerHTML = workers;

    let buttons = table.querySelectorAll('button');
    buttons.forEach(item => item.addEventListener('click', () => {
      item.parentElement.parentElement.remove();
    }));
  }

  #template() {
    return `
      <tr>
          <td>${this.name}</td>
          <td>${this.age}</td>
          <td>${this.salary}</td>
          <td>${this.city}</td>
          <td><button>X</button></td>
      </tr>
    `;
  }
}
