import React, { useState, useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Slider from "react-slick";
import Button from "Components/button";
import Loader from "Components/loader";
import Modal from "Components/modal-window";
import imgBase from "Utils/img-base";
import useLoader from "Utils/loader-hook";
import spareService from "Services/spare-service";
import { isArray } from "util";

const Spare = ({
    match: {
        params: { id }
    }
}) => {
    const [modal, setModal] = useState(false);
    const [spare, loading] = useLoader(new spareService().getSpare, id);

    if (loading) {
        return <Loader />;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const {
        carMark,
        category,
        description,
        images,
        name,
        price,
        provider
    } = spare;

    return (
        !isArray(spare) && (
            <>
                <section className="section user-section">
                    <div className="slider">
                        <div className="slider-wrapper">
                            <Slider>
                                {images.map(img => (
                                    <div className="slider-img">
                                        <img src={imgBase + img.url} alt="g" />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="fields">
                        <div className="field">
                            Car mark :
                            <div className="field__value">{carMark.name}</div>
                        </div>
                        <div className="field">
                            Category :
                            <div className="field__value">{category.name}</div>
                        </div>
                        <div className="field">
                            Description :
                            <div className="field__value">{description}</div>
                        </div>
                        <div className="field">
                            Name :<div className="field__value">{name}</div>
                        </div>
                        <div className="field">
                            Price : <div className="field__value">{price}</div>
                        </div>
                        <Button
                            className="button-contact"
                            onClick={() => {
                                setModal(true);
                            }}
                        >
                            Contact with provider
                        </Button>
                    </div>
                </section>
                <Modal
                    isOpen={modal}
                    onCancel={() => {
                        setModal(false);
                    }}
                    title={`${provider.surname} ${provider.name} `}
                    confirm={false}
                >
                    Provider address: {provider.address}
                    <br />
                    Provider phone: {provider.phone}
                    <br />
                </Modal>
            </>
        )
    );
};

export default Spare;
