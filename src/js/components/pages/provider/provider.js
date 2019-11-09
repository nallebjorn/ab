import React from "react";
import Title from "Components/title";
import Button from "Components/button";

const Provider = () => {
    return (
        <section className="section user-section">
            <div className="user-section__header">
                <Title className="title-user">Spares List</Title>
                <Button to="/spare" navLink={true} className="button-link">
                    Add spare
                </Button>
            </div>
        </section>
    );
};

export default Provider;
