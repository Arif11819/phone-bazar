const loadPhones = () => {
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => res.json())
        .then(data => displayPhones(data))
}

const displayPhones = result => {
    const phones = result.data;
    const phonesDiv = document.getElementById('phones');
    for (const phone of phones) {
        console.log(phone)
    }
}