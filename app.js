import { food } from './food.js';

const foodList = document.getElementById('food-list');

function renderItem(foodItem) {
    const li = document.createElement('li');
    li.classList.add('food-item');

    const foodImg = document.createElement('img');
    foodImg.src = foodItem.img;

    const foodName = document.createElement('span');
    foodName.classList.add('food-name');
    foodName.textContent = foodItem.name;

    li.append(foodImg, foodName);

    return li;
}

for (let foodItem of food) {
    const foodLi = renderItem(foodItem);
    foodList.append(foodLi);
}
