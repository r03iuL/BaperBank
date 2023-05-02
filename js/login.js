document.getElementById('submit-btn').addEventListener('click', function () {

    const eMail = document.getElementById('mail').value
    const passWord = document.getElementById('pass').value
    if (eMail == 'robi' && passWord === '123') {
        console.log('Login Successfull !!!');
        window.location.href ='Bank.html'
    }
    else {
        alert('Login Failed !!!');
    }

})