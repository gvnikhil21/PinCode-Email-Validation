const regexPinCode = RegExp(`[\\d]{6}`);

let validatePinCode = (pinCode) => {
    if (!regexPinCode.test(pinCode)) throw 'Invalid PIN Code!'
    {
        console.log(`PIN Code accepted.`);
    }
}

// validate pin code for 400088
try {
    pinCode = 400088;
    validatePinCode(pinCode);
} catch (e) {
    console.error(e);
}
