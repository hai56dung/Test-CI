let linkInput = document.getElementById('link-input');
let form = document.getElementById('form');
async function fetchApi(url){
    const res = await fetch(url);
    console.log(res.result);
}
form.onsubmit = function(e) {
    e.preventDefault();
    let results = fetchApi(`https://api.shrtco.de/v2/shorten?url=${linkInput.value}`);
}

