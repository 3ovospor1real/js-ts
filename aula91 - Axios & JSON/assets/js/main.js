// fetch('assets/json/pessoas.json')
// .then(response => response.json())
// .then(json => loadPeopleOnPage(json))

axios('assets/json/pessoas.json')
.then(response => loadPeopleOnPage(response.data))

function loadPeopleOnPage(json) {
    json.forEach(person => {
        const divRes = document.querySelector('.result');
        let ul = document.createElement('ul');
        for(let key in person) {
            let li = document.createElement('li');
            li.innerHTML = `<strong>${key.replace(/^./, key[0].toUpperCase())}</strong>: ${person[key]}`
            ul.appendChild(li)
        }

        divRes.appendChild(ul)
    });
}

