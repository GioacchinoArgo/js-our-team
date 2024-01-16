console.log('JS OK')

const list = document.querySelector('.row');


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

    const member = team[i];

    items += `
    <div class="col">
        <div class="card">
            <ul class="list-unstyled">
                <li>
                <img src="img/${member.img}" class="img-fluid" alt="${member.name}" >
                    <h5 class="card-title mt-3">${member.name}</h5>
                    <p class="card-text">${member.role}</p>
                </li>
            </ul>
        </div>
    </div>`
}


list.innerHTML = items;