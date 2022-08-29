const loadPhones = async (search) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = (phones) => {
    const phoneContainer = document.getElementById('phone-container')
    const msg = document.getElementById("no-msg");
    phoneContainer.innerHTML = ``
    if (phones.length === 0) {
        msg.classList.remove("d-none")

    }
    else {
        msg.classList.add("d-none")
    }
    phones = phones.slice(0, 20)
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

const showSearchedPhone = () => {
    const searchField = document.getElementById('search-field')
    const searched = searchField.value
    toggleSpinner(true)
    loadPhones(searched);
    searchField.value = ``

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
loadPhones("iphone");