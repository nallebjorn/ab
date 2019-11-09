import React, { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { reduxForm, SubmissionError, Field } from "redux-form";
import uuid from "uuid";
import { renderField } from "Components/render-field";
import Button from "Components/button";
import getSelectItems from "Services/select-service";
import validate from "Utils/validate-spare";
import toBase64 from "Utils/encodeBase64";
import { Files } from "./elements";

const ACCEPT_FILE_EXTENSIONS = [".png", ".jpeg", ".jpg", ".svg"];

const AddSpareForm = ({ handleSubmit, onSubmit }) => {
    const [categories, setCategories] = useState([]);
    const [carMarks, setCarMarks] = useState([]);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        getSelectItems("categories").then(setCategories);
        getSelectItems("marks").then(setCarMarks);
    }, []);

    const onSubmitHandler = handleSubmit(async values => {
        const errors = await validate(values);
        if (Object.keys(errors).length !== 0) {
            throw new SubmissionError(errors);
        }
        onSubmit({...values, files});
    });

    const onFileAttach = input => {
        const newFiles = [];
        input.forEach(file => {
            toBase64(file).then(b64 => {
                const newFile = {
                    id: uuid(),
                    name: file.name,
                    content: b64,
                    encoding: "base64",
                    size: file.size
                };
                newFiles.push(newFile);
                setFiles([...files, ...newFiles])
            });
        });
    };

    const onFileRemove = ({ id }) => {
        setFiles(files.filter(e => e.id != id));
    };

    const onDrop = useCallback(onFileAttach);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: ACCEPT_FILE_EXTENSIONS
    });

    return (
        <form
            onSubmit={onSubmitHandler}
            autoComplete="off"
            {...getRootProps({
                onClick: event => event.stopPropagation()
            })}
        >
            <div className="form-wrapper">
                Category
                <Field
                    items={categories}
                    select={true}
                    className="form__field"
                    name="category"
                    component={renderField}
                />
                Car Mark
                <Field
                    items={carMarks}
                    select={true}
                    className="form__field"
                    name="carMark"
                    component={renderField}
                />
                Name
                <Field
                    name="name"
                    component={renderField}
                    placeholder="spare name"
                    className="form__field"
                />
                Description
                <Field
                    name="description"
                    component={renderField}
                    placeholder="spare description"
                    className="form__field"
                />
                Price
                <Field
                    name="price"
                    component={renderField}
                    placeholder="spare price"
                    className="form__field"
                />
                VIN number
                <Field
                    name="vin"
                    component={renderField}
                    placeholder="spare vin number"
                    className="form__field"
                />
                {isDragActive
                    ? "Drop files here..."
                    : "Use Drag and Drop to upload images"}
                <label style={{ color: "blue", cursor: "pointer" }}>
                    <span className="icon-attach_file" /> Attach image
                    <input
                        {...getInputProps()}
                        type="file"
                        className="input-file"
                        onChange={event => {
                            onFileAttach(event.target.files);
                        }}
                    />
                </label>
                <Files files={files} removeFile={onFileRemove} />
                <Button
                    type="submit"
                    style={{
                        display: "block",
                        margin: "10px auto"
                    }}
                >
                    Add spare
                </Button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: "addSpareForm"
})(AddSpareForm);
