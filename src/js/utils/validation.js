export const validateInput = text => {
    const input = text;
    let isValid = true;
    let message;
    if (!/^[A-Za-z0-9]*$/.test(input)) {
        isValid = false;
        message = "Field is incorrect.";
    }

    if (input.length < 3 || input.length > 18) {
        isValid = false;
        message = "Field must contain 3-18 symbols.";
    }

    return { isValid, message };
};
