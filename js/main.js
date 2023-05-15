'use strict';

const getData = () => {

    fetch('https://api.nbp.pl/api/exchangerates/tables/a/?format=json')
    .then(response => response.json())
    .then(result => {
        console.log(result);
        console.log(result[0].rates);
        result[0].rates.forEach(element => {
            const tr = document.createElement('tr')
            tr.innerHTML = 
            `<td>${++i}</td>
            <td>${element.currenty}</td>
            <td>${element.mid}</td>`
            
        });
        document.querySelector('table tbody').appendChild(tr);
    });
}

const btn = document.querySelector('button')

btn.addEventListener('click', getData);

// for(let i = 0; ;i++) {

// }
