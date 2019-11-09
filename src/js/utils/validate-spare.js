export default values => {
    const errors = {};
    if (!values.category) {
        errors.category = "The field mustn't be empty.";
    }
    if (!values.carMark) {
        errors.carMark = "The field mustn't be empty.";
    }
    if (!values.name) {
        errors.name = "The field mustn't be empty.";
    }
    if (!values.description) {
        errors.description = "The field mustn't be empty.";
    }
    if (!values.price) {
        errors.price = "The field mustn't be empty.";
    }
    if (!values.vin) {
        errors.vin = "The field mustn't be empty.";
    }

    return errors;
};
