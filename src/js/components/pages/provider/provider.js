import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Title from "Components/title";
import Button from "Components/button";
import Spares from "Components/spares";
import Loader from "Components/loader";
import spareService from "Services/spare-service";
import useLoader from "Utils/loader-hook";
import { setSpares } from "Actions/actions";

const getSpares = providerId => {
    return () => {
        return new spareService().getProviderSpares(providerId);
    };
};
const Provider = () => {
    const dispatch = useDispatch();
    const providerId = useSelector(state => state.app.user.id);
    const [spares, loading, error] = useLoader(getSpares(providerId));
    useEffect(() => {
        dispatch(setSpares(spares));
    }, [spares]);
    return (
        <section className="section user-section">
            <div className="user-section__header">
                <Title className="title-user">Spares List</Title>
                <Button to="/spare" navLink={true} className="button-link">
                    Add spare
                </Button>
            </div>
            {loading ? <Loader /> : <Spares spares={spares} />}
        </section>
    );
};

export default Provider;
