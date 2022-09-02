const loadProducts = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => showProducts(data))
}

const showProducts = (products) => {
    const searchField = document.getElementById("search-field")
    const productCards = document.getElementById('product-cards')

    const itemsArray = [];
    const itemContainer = document.getElementById('items-container')

    for (const product of products) {


        const { category, description, image, price } = product
        if (itemsArray.indexOf(category) === -1) {
            itemsArray.push(category)
            const li = document.createElement('li')
            li.innerHTML = `<a>${category}</a>`
            itemContainer.appendChild(li)
        }

    }

    document.getElementById('search-field').addEventListener('keypress', function (event) {
        if (event.key === "Enter") {


            productCards.innerHTML = ""
            const searchedProduct = searchField.value


            const searchedAll = products.filter(product => product.category.includes(searchedProduct))
            // console.log(searchedProduct)

            console.log(searchedAll)
            for (eachSearched of searchedAll) {

                const div = document.createElement('div')
                div.classList.add('card', 'bg-base-100', 'shadow-xl')
                div.innerHTML = `
            <figure><img src="${eachSearched.image}" alt="Shoes" class="h-80 w-full" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    ${eachSearched.title}
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>Price: ${eachSearched.price}</p>

            </div>
            `
                productCards.appendChild(div)

                searchField.value = ""
            }



        }
    })

}

// document.getElementById('search-field').addEventListener('keypress', function (event) {
//     if (event.key === "Enter") {
//         loadSearched()
//     }
// })
// const loadSearched = () => {
//     const searchField = document.getElementById("search-field")
//     const searchedProduct = searchField.value
//     console.log(searchedProduct)
// }



loadProducts();





         // console.log(category)
        // console.log(description)
        // console.log(image)
        // console.log(price)
   // console.log(itemsArray)