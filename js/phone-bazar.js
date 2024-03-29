//load phone data
const loadPhones = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    // load data
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))

}

document.getElementById('error-message').style.display = 'none';

const displaySearchResult = data => {
    if (data.length == 0) {
        const displayError = document.getElementById('error-message').style.display = 'block';
    }
    else {
        const searchResult = document.getElementById('search-result');
        searchResult.textContent = '';
        // slice phone 0-20 here
        data.slice(0, 20).forEach(info => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card h-100 w-75 mx-auto mt-3">
                    <img src="${info.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">${info.phone_name}</h4>
                        <p class="card-text fw-bold">${info.brand}</p>
                        <button onclick="loadPhoneDetail('${info.slug}')" class="bg-success ps-2 pe-2 rounded text-white">Explore</button>
                    </div>
            </div>
            `;
            searchResult.appendChild(div);
            document.getElementById('error-message').style.display = 'none';
        });
    }

}
// load phone details
const loadPhoneDetail = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;

    fetch(url)
        .then(res => res.json())
        .then(data => phoneDetail(data.data))
}
const phoneDetail = info => {
    console.log(info);
    const phoneDetail = document.getElementById('phone-details');
    phoneDetail.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${info.image}" class="card-img-top" alt="...">
        <div class="card-body">
             <h5 class="card-title fw-bold">${info.name}</h5>
             <p class="card-text">ReleaseDate : ${info.releaseDate ? info.releaseDate : 'No relese date found!!'}</p>
             <p class="card-text">Sensors : ${info.mainFeatures.sensors}</p>
             <p class="card-text">Storage : ${info.mainFeatures.storage}</p>
             <p class="card-text">Others : ${info.others.WLAN}</p>
        </div>
    `;
    phoneDetail.appendChild(div);
}