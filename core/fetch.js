console.log('router loading....');

import routes from "./routes.js";

async function fetch_from_server(uri_obj) {
    let html_uri = uri_obj.html || '';
    let style_uri = uri_obj.style || '';
    let script_uri = uri_obj.script || '';
    
    let html = '';
    let style = '';
    let script = '';
    
    if (style_uri) {
        let style_response = await fetch(style_uri);
        style = await style_response.text();
    }
    
    if (html_uri) {
        let html_response = await fetch(html_uri);
        html = await html_response.text();
    }
    
    if (script_uri) {
        let script_response = await fetch(script_uri);
        script = await script_response.text();
    }
    
    let content_obj = {
        html: html,
        style: style,
        script: script
    };
    return content_obj;
}


export default function _fetch(uri) {
    
    let uri_object = routes[uri] || '';
    if (!uri_object) return {};

    if (!localStorage.getItem(uri)) {
        let content_obj = fetch_from_server(uri_object);
        localStorage.setItem(uri, JSON.stringify(content_obj));
    } else {
        return JSON.parse(localStorage.getItem(uri));
    }

}

console.log('router loaded !');