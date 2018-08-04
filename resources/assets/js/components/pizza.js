import PizzaService from '../services/PizzaService';

async function addPizza() {
  const name = document.querySelector('#new_pizza_name').value;
  const description = document.querySelector('#new_pizza_description').value;
  const price = document.querySelector('#new_pizza_price').value;
  if (name === '' || price === '') {
    alert('Please add a name and a valid price');
    return;
  }
  // put new values into db
  let data;
  try {
    data = await PizzaService.create({
      name, description, price,
    });
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
                <input type='checkbox' class='form-control' id=${id} name=${id}/>
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


// make addPizza global
window.addPizza = addPizza;
window.getPizzas = getPizzas;
window.deletePizza = deletePizza;
