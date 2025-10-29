function validateForm() {

    const fullName = document.getElementById('fullName');
    const ucid = document.getElementById('ucid');
    const mobileNo = document.getElementById('mobileNo');
    const email = document.getElementById('email');
    const userName = document.getElementById('userName');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    const fullNameError = document.getElementById('fullNameError');
    const ucidError = document.getElementById('ucidError');
    const mobileNoError = document.getElementById('mobileNoError');
    const emailError = document.getElementById('emailError');
    const userNameError = document.getElementById('userNameError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    let isValid = true;

    fullNameError.textContent = '';
    ucidError.textContent = '';
    mobileNoError.textContent = '';
    emailError.textContent = '';
    userNameError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    const nameRegex = /^[A-Za-z\s]+$/;
    if (fullName.value.trim() === '') {
        fullNameError.textContent = 'Full Name is required.';
        isValid = false;
    } else if (!nameRegex.test(fullName.value)) {
        fullNameError.textContent = 'Full Name can only contain letters and spaces.';
        isValid = false;
    }

    const ucidRegex = /^[0-9]+$/;
    if (ucid.value.trim() === '') {
        ucidError.textContent = 'UCID is required.';
        isValid = false;
    } else if (!ucidRegex.test(ucid.value)) {
        ucidError.textContent = 'UCID can only contain numbers.';
        isValid = false;
    }

    const mobileRegex = /^\d{10}$/;
    if (mobileNo.value.trim() === '') {
        mobileNoError.textContent = 'Mobile No. is required.';
        isValid = false;
    } else if (!mobileRegex.test(mobileNo.value)) {
        mobileNoError.textContent = 'Mobile No. must be exactly 10 digits.';
        isValid = false;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }
    
    if (userName.value.trim() === '') {
        userNameError.textContent = 'User Name is required.';
        isValid = false;
    }

    if (password.value.trim() === '') {
        passwordError.textContent = 'Password is required.';
        isValid = false;
    }
    
    if (confirmPassword.value.trim() === '') {
        confirmPasswordError.textContent = 'confirm password is required.';
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        isValid = false;
    }

    return isValid;
}
