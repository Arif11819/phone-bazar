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
        console.log(info);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 mt-5">
                <img src="${info.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">${info.phone_name}</h4>
                    <p class="card-text fw-bold">${info.brand}</p>
                    <button class="bg-success ps-2 pe-2 rounded text-white">Explore</button>
                </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}