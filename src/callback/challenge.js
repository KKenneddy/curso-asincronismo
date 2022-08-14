//readyState === 0 'No inicializado';
//readyState === 1 'Loanding';
//readyState === 2 'Ejecutando';
//readyState === 3 'Iteractuando';
//readyState === 4 'Completado';

const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.com/api/v1';

function fechtData (urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.resposeText));
            }
        } else {
            const error = new Error('Error' + urlApi);
            return callback (error, null);
        }
    }
    xhttp.send();
}