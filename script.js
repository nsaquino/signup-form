const
    pass = document.getElementById('password'),
    passConfirm = document.getElementById('confirm-pass');


function comparePasswords(){
    if (pass.value === passConfirm.value){
        pass.classList.remove('error');
        passConfirm.classList.remove('error');
        pass.setCustomValidity("");
    } else {
        pass.classList.add('error');
        passConfirm.classList.add('error');
        pass.setCustomValidity("Passwords do not match.");
    }
}

pass.addEventListener('focusout', comparePasswords);
passConfirm.addEventListener('focusout', comparePasswords);