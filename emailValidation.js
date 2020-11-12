const regexEmail = RegExp(`^[\\w]+(?:[_+-\\.][\\w]+)*@(?:[\\w]+){1}(?:\\.[a-z]{2,}){1,2}$`);

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
// validating second optional part
validateEmail(`abc.xyz@gmail.co.in`);

// testing valid emails
console.log(`\nSample valid emails test: `);
validateEmail(`abc@yahoo.com`);
validateEmail(`abc-100@yahoo.com`);
validateEmail(`abc.100@yahoo.com`);
validateEmail(`abc111@abc.com`);
validateEmail(`abc-100@abc.net`);
validateEmail(`abc.100@abc.com.au`);
validateEmail(`abc@1.com`);
validateEmail(`abc+100@gmail.com`);

// testing invalid emails
console.log(`\nSample invalid emails test: `);
validateEmail(`abc`);
validateEmail(`abc@.com.my`);
validateEmail(`abc123@gmail.a`);
validateEmail(`abc123@.com`);
validateEmail(`abc123@.com.com`);
validateEmail(`.abc@abc.com`);
validateEmail(`abc()*@gmail.com`);
validateEmail(`abc@%*.com`);
validateEmail(`abc..2002@gmail.com`);
validateEmail(`abc.@gmail.com`);
validateEmail(`abc@abc@gmail.com`);
validateEmail(`abc@gmail.com.1a`);
validateEmail(`abc@gmail.com.aa.au`);
validateEmail(`abc@yahoo.com.`);