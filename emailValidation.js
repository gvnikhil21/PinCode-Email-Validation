const regexEmail = RegExp(`^[\\w]+(?:[_+-\\.][\\w]+)*@(?=[a-z]+\\.)(?=[a-z]{2,})`);

let validateEmailUtil = (email) => {
    console.log(`validating ${email}...`);
    if (regexEmail.test(email))
        console.log(`Email accepted.`);
    else
        throw `Invalid Email!`;
}

let validateEmail = (email) => {
    try {
        validateEmailUtil(email);
    } catch (error) {
        console.error(error);
    }
}
// validating first mandatory part
validateEmail(`abcgmail`);
// validating second mandatory part
validateEmail(`abc@gmail`);
// validating third mandatory part
validateEmail(`abc@gmail.co`);
// validating first optional part
validateEmail(`abc.xyz@gmail.co`);
