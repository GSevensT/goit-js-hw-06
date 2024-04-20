const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
const numCategories = categoryItems.length;
console.log("Number of categories:", numCategories);

categoryItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent.trim();
  const elements = category.querySelectorAll("ul > li");
  const numElements = elements.length;
  console.log("Category:", categoryName);
  console.log("Elements:", numElements);
});
