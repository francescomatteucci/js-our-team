console.log('js funge')
let currentUser = ''
const containerDomElement= document.querySelector('.row')
console.log(containerDomElement)
const user = [ 
    {name:'Wayne Barnette', role: 'Founder & CEO', image: 'wayne-barnett-founder-ceo.jpg'},
    {name: 'Angela Caroll', role: 'Chief Editor', image: 'angela-caroll-chief-editor.jpg'},
    {name: 'Walter Gordon', role: 'Office Manager', image: 'walter-gordon-office-manager.jpg'},
    {name: 'Angela Lopez', role: 'Social Media Manager', image: 'angela-lopez-social-media-manager.jpg'},
    {name: 'Scott Estrade', role: 'Developer', image: 'scott-estrada-developer.jpg'},
    {name: 'Barbara Ramos', role: 'Graphic Designer', image: 'barbara-ramos-graphic-designer.jpg'}]



for(i = 0; i < user.length; i++){
    currentUser = user[i]
    containerDomElement.innerHTML += `
    <div class="card col-4">${currentUser.name}${currentUser.role} <img class="card-img-top" src="/imgs/${currentUser.image}" alt=""></img></div>`
   
}




