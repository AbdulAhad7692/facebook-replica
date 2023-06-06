
//____Open Modal Box___//


document.getElementById('openModal').addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'flex';
});

//___Close Modal Box___//

document.getElementById('closeModal').addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'none'
})

alert('Create account First')

//__Storing user data__//



function signup() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let getUsername = document.getElementById('getUsername').value;
    let getPassword = document.getElementById('getPassword').value;

    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
    localStorage.setItem('getUsername', getUsername)
    localStorage.setItem('getPassword', getPassword)
}

function login() {
    let username = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let storedUsername = localStorage.getItem('getUsername')
    let storedPassword = localStorage.getItem('getPassword')

    if (username == storedUsername && password == storedPassword) {
        window.location.href = 'home.html'
    }
    else {
        alert('Enter correct Username and Password')
    }

}