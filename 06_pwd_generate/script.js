const pwdForm = document.getElementById('pwd_form');
const input = document.querySelector('input');
let password = document.getElementById('password');
let inputValue = '';
let copyPassword = '';

input.addEventListener('input', function(event) {
    inputValue = event.target.value;
    console.log('Input value:', inputValue);
});


function onPwdCreate(event) {
    event.preventDefault();
    const query = 'input[name="chk_text"]:checked';
    const checkEl = document.querySelectorAll(query);

    let characters = '';
    checkEl.forEach(el => {
        if(el.value === 'number') {
            characters += '0123456789';
        } else if(el.value === 'smallText') {
            characters += 'abcdefghijklmnopqrstuvwxyz';
        } else if(el.value === 'capitalText') {
            characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        } else if(el.value === 'symbols') {
            characters += '!@#$%^&*';
        }
    })
    console.log(characters);

    password.innerText = '';
    for(let i = 0; i < inputValue; i++) {
        password.innerText += characters[Math.floor(Math.random() * characters.length)];
    }

    copyPassword = password.innerText;
    console.log('Password:', password.innerText);
}

pwdForm.addEventListener('submit', onPwdCreate);

// https://developer.mozilla.org/ko/docs/Web/API/Clipboard_API
const copyClipboard = document.getElementById('copy-clipboard');
copyClipboard.addEventListener('click', function() {
    console.log(password);
    navigator.clipboard.writeText(password.innerText);
});

