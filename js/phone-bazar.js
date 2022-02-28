const loadPhones = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))

}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    data.forEach(info => {
        // console.log(info);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-75 w-75 mx-auto mt-5">
                <img src="${info.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">${info.phone_name}</h4>
                    <p class="card-text fw-bold">${info.brand}</p>
                    <button onclick="loadPhoneDetail('${info.slug}')" class="bg-success ps-2 pe-2 rounded text-white">Explore</button>
                </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadPhoneDetail = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;

    fetch(url)
        .then(res => res.json())
        .then(data => phoneDetail(data.data))
}
const phoneDetail = info => {
    console.log(info);
    const phoneDetail = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${info.image}" class="card-img-top w-25 mx-auto" alt="...">
        <div class="card-body mx-auto">
             <h5 class="card-title">${info.name}</h5>
             <p class="card-text">${info.releaseDate}</p>
        </div>
    `;
    phoneDetail.appendChild(div);
}