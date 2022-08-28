
function loadUser() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(json => showUser(json))
}

function showUser(dataAll) {

    const mainContainer = document.getElementById("main-container");

    for (data of dataAll) {

        const div = document.createElement("div");
        div.classList.add("post")
        div.innerHTML = `
        <h4>userName: ${data.username}</h4>
        <h5>email: ${data.email}</h5>
        <p>address: ${data.address.city}</p>
        `
        mainContainer.appendChild(div)

        // console.log(data)
    }
}