const regexPinCode = RegExp(`^[\\d]{3}[ ]?[\\d]{3}$`);

let validatePinCode = (pinCode) => {
    console.log(`validating ${pinCode}... `);
    if (!regexPinCode.test(pinCode)) throw 'Invalid PIN Code!'
    {
        console.log(`PIN Code accepted.`);
    }
}

// validate pin code for 400088
try {
    let pinCode = `400088`;
    validatePinCode(pinCode);
} catch (e) {
    console.error(e);
}

// validate pin code for A400088
try {
    pinCode = `A400088`;
    validatePinCode(pinCode);
} catch (e) {
    console.error(e);
}

// validate pin code for 400088B
try {
    pinCode = `400088B`;
    validatePinCode(pinCode);
} catch (e) {
    console.error(e);
}

// validate pin code for 400 088
try {
    pinCode = `400 088`;
    validatePinCode(pinCode);
} catch (e) {
    console.error(e);
}
