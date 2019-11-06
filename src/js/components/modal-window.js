import React from "react";
import PropTypes from "prop-types";
import Portal from "./portal";
import Button from "./button";
import Title from "./title";

const ModalWindow = ({
    title,
    isOpen,
    onCancel,
    onSubmit,
    children,
    confirm
}) => {
    const onOutClick = e => {
        if (e.target.classList == "modal") {
            onCancel();
        }
    };
    return (
        <>
            {isOpen && (
                <Portal>
                    <div className="modal" onClick={onOutClick}>
                        <div className="modal__window">
                            <div className="modal__window-wrapper">
                                <div className="modal__header">
                                    <Title className="title-modal">
                                        {title}
                                    </Title>
                                    <div
                                        className="icon-cancel-circle modal__header-close"
                                        onClick={onCancel}
                                    ></div>
                                </div>
                                <div className="modal__body">{children}</div>
                                {confirm && (
                                    <div className="modal__footer">
                                        <Button onClick={onSubmit}>
                                            Confirm
                                        </Button>
                                        <Button onClick={onCancel}>
                                            Cancel
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Portal>
            )}
        </>
    );
};

ModalWindow.defaultProps = {
    title: "title",
    isOpen: false,
    confirm: true,
    onCancel: () => {},
    onSubmit: () => {},
    children: null
};

ModalWindow.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    confirm: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node
};

export default ModalWindow;
