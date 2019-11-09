import React from "react";
import PropTypes from "prop-types";

const File = ({ file, removeFile }) => {
    const [name, extension] = file.name.split(".");
    return (
        <div className="form__file-item">
            <div className="form__file-item-left">
                <div className="icon-attach_file" />
                <div className="form__file-item-name">{name}.</div>
                <div className="form__file-item-ext">{extension}</div>
            </div>
            <div className="form__file-item-right"  onClick={() => {
                        removeFile({ id: file.id, size: file.size });
                    }}>
                <div className="icon-bin" />
                <div
                    className="form__file-item-del"
                   
                >
                </div>
            </div>
        </div>
    );
};

File.propTypes = {
    file: PropTypes.shape({
        id: PropTypes.string,
        content: PropTypes.string,
        encoding: PropTypes.string,
        name: PropTypes.string
    }),
    removeFile: PropTypes.func
};

export const Files = ({ files, removeFile }) => {
    return (
        <>
            {files.map(file => (
                <File key={file.id} removeFile={removeFile} file={file} />
            ))}
        </>
    );
};

Files.propTypes = {
    files: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            content: PropTypes.string,
            encoding: PropTypes.string,
            name: PropTypes.string,
            size: PropTypes.number
        })
    ),
    removeFile: PropTypes.func
};
