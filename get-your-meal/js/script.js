
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
           <div class="card">
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

loadFood("");