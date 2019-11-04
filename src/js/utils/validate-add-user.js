export default values => {
    const errors = {};
    if (!values.role) {
        errors.role = "The field mustn't be empty.";
    }

    if (!values.phone) {
        errors.phone = "The field mustn't be empty.";
    } else if (
        !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
            values.phone
        )
    ) {
        errors.phone = "Phone format is incorrect.";
    }

    if (!values.email) {
        errors.email = "The field mustn't be empty.";
    } else if (
        !/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
            values.email
        )
    ) {
        errors.email = "Email format is incorrect.";
    }

    if (!values.username) {
        errors.username = "The field mustn't be empty.";
    } else if (values.username.length > 15) {
        errors.username = "Must be 15 characters or less.";
    } else if (values.username.length < 4) {
        errors.username = "Must be 4 characters or more.";
    } else if (!/^[a-z0-9]+/i.test(values.username)) {
        errors.username = "Username format is incorrect.";
    }

    if (!values.password) {
        errors.password = "The field mustn't be empty.";
    } else if (values.password.length > 15) {
        errors.password = "Must be 15 characters or less.";
    } else if (values.password.length < 4) {
        errors.password = "Must be 4 characters or more.";
    } else if (!/^[a-z0-9]+/i.test(values.password)) {
        errors.password = "Password format is incorrect.";
    }

    if (values.role) {
        const role = JSON.parse(values.role);
        if (role.name === "provider") {
            if (!values.name) {
                errors.name = "The field mustn't be empty.";
            } else if (!/^[a-zа-я]+/i.test(values.name)) {
                errors.name = "Name format is incorrect.";
            }
            if (!values.surname) {
                errors.surname = "The field mustn't be empty.";
            } else if (!/^[a-zа-я]+/i.test(values.surname)) {
                errors.surname = "Surname format is incorrect.";
            }

            if (!values.address) {
                errors.address = "The field mustn't be empty.";
            } else if (!/^[a-zа-я0-9]+/i.test(values.address)) {
                errors.address = "Surname format is incorrect.";
            }
        }
    }
    return errors;
};
