export default values => {
    const errors = {};
    if (!values.username) {
        errors.username = "The field mustn't be empty.";
    } else if (values.username.length > 15) {
        errors.username = "Must be 15 characters or less.";
    } else if (values.username.length < 4) {
        errors.username = "Must be 4 characters or more.";
    } else if (!/[A-Za-z0-9]/i.test(values.username)) {
        errors.username = "The field is incorrect.";
    }
    if (!values.password) {
        errors.password = "The field mustn't be empty.";
    } else if (values.password.length > 15) {
        errors.password = "Must be 15 characters or less.";
    } else if (values.password.length < 4) {
        errors.password = "Must be 4 characters or more.";
    } else if (!/[A-Za-z0-9]/i.test(values.password)) {
        errors.password = "The field is incorrect.";
    }
    return errors;
};
