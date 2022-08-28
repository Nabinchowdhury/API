
const loadFood = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => showFood(data.meals))
}

const showFood = (foods) => {
    const foodContainer = document.getElementById('food-container')
    foodContainer.innerHTML = ``;

    foods.forEach(food => {

        const foodItems = document.createElement('div')
        foodItems.classList.add("text-center")

        foodItems.classList.add("col")
        // console.log(food)
        foodItems.innerHTML =
            `
           <div class="card" onclick="loadSelectedFood(${food.idMeal})">
           <img src="${food.strMealThumb}" class="card-img-top" alt="...">
           <div class="card-body">
           <h5 class="card-title">${food.strMeal}</h5>
           <p class="card-text">${food.strInstructions.slice(0, 100)}</p>
           </div>
           </div>
            `
        foodContainer.appendChild(foodItems)
    })
}


const searchFood = () => {
    const serched = document.getElementById('search-bar')
    const searchedFood = serched.value
    loadFood(searchedFood);
    serched.value = ""
    // console.log(searchedFood)
}
const loadSelectedFood = (id) => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => showSelectedFood(data.meals[0]))
}

const showSelectedFood = meal => {
    // console.log(meal)
    const foodDetails = document.getElementById("food-detail")
    foodDetails.innerHTML = ``;
    const selectedFood = document.createElement("div")
    selectedFood.classList.add("card")
    selectedFood.innerHTML = `
    <img src="${meal.strMealThumb}" class="card - img - top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
        `;
    foodDetails.appendChild(selectedFood)
}

loadFood("");

