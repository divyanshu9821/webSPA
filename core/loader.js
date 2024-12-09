import _fetch from '/core/fetch.js';

let $a = selector => document.querySelectorAll(selector);
let $ = selector => document.querySelector(selector);

function render() {
    let uri = location.pathname;
    let content_obj = _fetch(uri);
    $('.main-content-style').innerHTML = content_obj.style || '';
    $('.main-content').innerHTML = content_obj.html || '';
    $('.main-content-script').innerHTML = content_obj.script || '';
}

function load(event) {
    event.preventDefault();
    history.pushState({}, "", event.target.href);
    render();
}

window.onpopstate = render;

$a('.route').forEach(ele => {
    ele.addEventListener('click', load);
});

// function load_header(){
//     let uri_obj = 
// }
// fetch_content('header', '/pages/components/header/header.html', '/pages/components/header/header.css', )