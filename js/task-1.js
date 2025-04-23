const categoriesContainer = document.querySelector('#categories');
const categoriesList = categoriesContainer.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`);
for (const category of categoriesList) {
  const title = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
}
