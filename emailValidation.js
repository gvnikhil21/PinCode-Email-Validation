const regexEmail = RegExp(`^[a-z]{3,}`);

let validateEmail = (email) => {
    console.log(`validating ${email}...`);
    if (regexEmail.test(email))
        console.log(`Email accepted.`);
    else
        throw `Invalid Email!`;
}

// validating first part
try {
    let email = `abcgmail.com`;
    validateEmail(email);
} catch (error) {
    console.error(error);
}