
const btn = document.querySelector(".my-form_btn");
const eMail = document.querySelector('#email');
const password = document.querySelector('#password');


// btn.submit= () => { 
//     const neweMail = eMail.value;
//     const password = password.value;

//     console.log(password);
//     console.log(neweMail);

//     if (password === "samuel") {
//         alert('welcome')
//     } else {
//         alert('user not found')
//     }
// }


let loginForm = document.querySelector('my_form');

btn.addEventListener('click', () => { 
    let eMail1 = eMail.value;
    let password1 = password.value;

    console.log('Email:', eMail1)
    console.log('password:', password1)
})
