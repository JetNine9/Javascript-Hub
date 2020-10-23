let firstItem = document.getElementById('list').firstElementChild.nextElementSibling;

let coffeeItem = [...document.querySelectorAll('li')] // turns the node list into an array
// [ramen, coffee, poptarts, twinkies]
firstItem.innerHTML = "Fair trade coffee";



var x = document.getElementById("list").lastElementChild.remove()

let cheeseWiz = document.createElement('li')
cheeseWiz.innerHTML = 'CheeseWiz'
firstItem.appendChild(cheeseWiz)


let GNCproducts = ['protein powder', 'muscle milk', 'power bars']

let list = document.getElementById('list')
list.innerHTML = ''

GNCproducts.forEach( (item) => {


  let li = document.createElement('li');

  item === 'muscle milk' ? li.classList.add('important') : null

  li.innerHTML = item
  list.appendChild(li);
})
