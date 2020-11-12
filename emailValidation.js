const regexEmail = RegExp(`^[a-z]+@[a-z]+\\.[a-z]{2,}`);

let validateEmail = (email) => {
    console.log(`validating ${email}...`);
    if (regexEmail.test(email))
        console.log(`Email accepted.`);
    else
        throw `Invalid Email!`;
}

// validating first, second, third mandatory part
try {
    let email = `abcgmail`;
    validateEmail(email);
} catch (error) {
    console.error(error);
}

try {
    email = `abc@gmail`;
    validateEmail(email);
} catch (error) {
    console.error(error);
}

try {
    email = `abc@gmail.co`;
    validateEmail(email);
} catch (error) {
    console.error(error);
}