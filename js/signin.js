$(document).ready(function() {

    function logInValidation() {
        return true;
    }

    function signUpValidation() {
        return true;
    }

    let login_anchor = document.getElementById('login_anchor');
    login_anchor.addEventListener('click', function() {
        document.getElementById("demo").innerHTML = "Sign In To Your Account";
        let signup_elem = document.getElementsByClassName('signup_elem');
        for (let elem of signup_elem) {
            elem.removeAttribute('required')
        }
        let login_elem = document.getElementsByClassName('login_elem');
        for (let elem of login_elem) {
            elem.setAttribute('required', true);
        }
    })

    let signup_anchor = document.getElementById('signup_anchor');
    signup_anchor.addEventListener('click', function() {
        document.getElementById("demo").innerHTML = "Create An Account";
        let login_elem = document.getElementsByClassName('login_elem');
        for (let elem of login_elem) {
            elem.removeAttribute('required')
        }
        let signup_elem = document.getElementsByClassName('signup_elem');
        for (let elem of signup_elem) {
            elem.setAttribute('required', true);
        }
    })

});