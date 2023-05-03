const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listRef = document.querySelector('#ingredients');

const itemsToAdd = ingredients.map(item => {
  const readyItem = document.createElement('li');
  readyItem.classList.add('item');
  readyItem.textContent = item;
  return readyItem;
})

listRef.append(...itemsToAdd);
