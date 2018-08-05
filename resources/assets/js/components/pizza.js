import PizzaService from '../services/PizzaService';

async function addPizza() {
  const name = document.querySelector('#new_pizza_name').value;
  const description = document.querySelector('#new_pizza_description').value || '';
  const price = document.querySelector('#new_pizza_price').value;
  if (name === '' || price === '') {
    alert('Please add a name and a valid price');
    return;
  }
  // put new values into db
  let data;
  try {
    data = await PizzaService.create({ name, description, price });
  } catch (error) {
    console.log(error);
    return;
  }
  const { id } = data;
  // add new tr
  // this returns us the table body (first child of a talbe)
  const table = document.querySelector('#pizzas').children[0];
  const content = `<td>${name}</td>
            <td>${description}</td>
            <td>${price}&euro;</td>
            <td>
                <input type='checkbox' class='checkbox' id=${id} name=${id}/>
            </td>`;
  const tr = document.createElement('tr');
  tr.innerHTML = content;
  // add new tr before the add pizza tr
  table.insertBefore(tr, table.children[table.children.length - 1]);
  // clear values
  document.querySelector('#new_pizza_name').value = '';
  document.querySelector('#new_pizza_description').value = '';
  document.querySelector('#new_pizza_price').value = '';
}

async function getPizzas() {
  try {
    // use var because it is function scoped
    const data = await PizzaService.getPizzas();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function deletePizza(id) {
  try {
    // use var because it is function scoped
    const data = await PizzaService.delete(id);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function removeDeleteArea() {
  const bin = document.querySelector('#bin');
  if (typeof bin !== 'undefined') bin.remove();
}

function dropPizza(event) {
  event.preventDefault();
  const id = event.dataTransfer.getData('text');
  deletePizza(id.split('_')[1])
    .then(() => {
      const tr = document.querySelector(`#${id}`);
      if (typeof tr !== 'undefined') tr.remove();
    })
    .catch(err => console.log(err));
}

function showDeleteArea() {
  const bin = document.createElement('div');
  bin.setAttribute('style', 'width: 30vw; height: 5vh; padding: 10px; border: 1px solid #FF0000; opacity: 0.70; '
    + 'background-color: #E5E4E2;'
    + 'position: fixed; top: 15vh; right: 30vw');
  bin.setAttribute('id', 'bin');
  bin.setAttribute('class', 'md-box');
  bin.innerHTML = '<i class="far fa-trash-alt" style="height: 3vh; width: 2vw"></i>Place a pizza here to delete it!';
  bin.ondrop = dropPizza;
  bin.ondragover = event => event.preventDefault();
  document.querySelector('#app').appendChild(bin);
}

function dragPizza(event) {
  showDeleteArea();
  event.dataTransfer.setData('text', event.target.id);
}


// make functions global
window.addPizza = addPizza;
window.getPizzas = getPizzas;
window.deletePizza = deletePizza;
window.dragPizza = dragPizza;
window.removePizzaDeleteArea = removeDeleteArea;
