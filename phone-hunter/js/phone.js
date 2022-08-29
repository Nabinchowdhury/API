const loadPhones = async (search, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}

const displayPhones = (phones, dataLimit) => {
    const phoneContainer = document.getElementById('phone-container')
    const msg = document.getElementById("no-msg");
    const showAll = document.getElementById('show-all')
    phoneContainer.innerHTML = ``
    if (phones.length === 0) {
        msg.classList.remove("d-none")

    }
    else {
        msg.classList.add("d-none")
    }

    if (dataLimit && phones.length > 9) {
        phones = phones.slice(0, 9)

        showAll.classList.remove("d-none")
    }
    else {
        showAll.classList.add("d-none")
    }

    phones.forEach(phone => {
        const phoneCard = document.createElement('div')
        phoneCard.classList.add('col')
        phoneCard.classList.add('p-5')
        phoneCard.innerHTML =
            `<div class="card h-100">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">${phone.brand}</p>
        </div>
    </div>
        `
        phoneContainer.appendChild(phoneCard)
        console.log(phone)

    });
    toggleSpinner(false)
}

const processSearch = (dataLimit) => {
    const searchField = document.getElementById('search-field')
    const searched = searchField.value
    toggleSpinner(true)
    loadPhones(searched, dataLimit);

}

const showSearchedPhone = () => {
    processSearch(9)

}

const toggleSpinner = (isLoading) => {
    const spinner = document.getElementById('loader')
    if (isLoading === true) {
        spinner.classList.remove('d-none')
    }
    else {
        spinner.classList.add('d-none')
    }
}



document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();

})

// loadPhones("iphone");