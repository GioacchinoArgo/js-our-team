console.log('JS OK')

const list = document.querySelector('ul');


const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    },
];

console.log(team)

let items = '';

for (let i = 0; i < team.length; i++){

    const currentName = team[i].name;
    const currentRole = team[i].role;

    items += '<li>';
    items += `<h5 class="card-title mt-3">${currentName}</h5>`
    items += `<p class="card-text">${currentRole}</p>`
    items += '</li>';
}


list.innerHTML = items;