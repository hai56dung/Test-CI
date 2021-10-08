let linkInput = document.getElementById('link-input');
async function fetchApi(url){
    const res = await fetch(url);
    return res;
}
fetch("https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html");
