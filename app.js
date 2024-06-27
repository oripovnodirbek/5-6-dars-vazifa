const form = document.getElementById('register')
const name = document.getElementById('name')
const fam = document.getElementById('fam')
const tel = document.getElementById('tel')
const email = document.getElementById('email')
const pass = document.querySelector('.pass')
const button = document.querySelector('button')
const section = document.querySelector('#section')

form.addEventListener('submit', function(event) {
      event.preventDefault()
      const action = {
        name: name.value,
        fam: fam.value,
        tel: tel.value,
        email: email.value,
        pass: pass.value,
      }
      console.log(action);
})
// hammasi consoleda
// button.addEventListener("click", function() {
//     function displayAction(action) {
//         section.innerHTML = ''; // Ekranni tozalash
        
//         for (let key in action) {
//             if (action.hasOwnProperty(key)) {
//                 const li = document.createElement('li');
//                 li.textContent = `${key}: ${action[key] ? action[key] : 'Noma\'lum'}`;
//                 section.appendChild(li);
//             };
//         };
//     };
// })