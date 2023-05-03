const commonListRef = document.querySelector('#categories');
const commonListItemRef = [...commonListRef.children];

console.log(`Number of categories: ${commonListRef.children.length}`);
console.log('\n');

commonListItemRef.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
    console.log('\n');
});