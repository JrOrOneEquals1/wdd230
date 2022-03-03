const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');
fetch(requestURL).then(function (response) {
    return response.json();
}).then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
});

function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    let orderExtenstion = 'th';
    if(prophet.order % 10 == 1) {
        orderExtenstion = 'st';
    }
    else if(prophet.order % 10 == 2) {
        orderExtenstion = 'nd';
    }
    else if(prophet.order % 10 == 3) {
        orderExtenstion = 'rd';
    }
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${orderExtenstion} Latter-day Prophet`);
    portrait.setAttribute('loading', 'lazy');
    birthdate.textContent = `Birthdate: ${prophet.birthdate}`;
    birthplace.textContent = `Birthplace: ${prophet.birthplace}`;

    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    document.querySelector('.cards').appendChild(card);
}