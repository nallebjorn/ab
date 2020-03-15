import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "Components/button";
import Modal from "Components/modal-window";
import imgBase from "Utils/img-base";
import spareService from "Services/spare-service";
import Input from "Components/input";
import Select from "Components/select";
import getSelectItems from "Services/select-service";
import { setHeaderTitle } from "Actions/actions";

const SpareCard = ({ id, images, name, price, carMark: { name: mark } }) => {
    return (
        <NavLink to={"/" + id} className="spare">
            <div className="spare__wrapper">
                <div className="spare__image">
                    {images[0] && (
                        <img
                            src={imgBase + images[0].url}
                            alt="first spare image"
                        />
                    )}
                </div>
                <div className="spare__name">{name}</div>
                <div className="spare__footer">
                    <div className="spare__footer-car-mark">{mark}</div>
                    <div className="spare__footer-price">{price}</div>
                </div>
            </div>
        </NavLink>
    );
};

const Spares = ({ spares }) => {
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [deleteSpare, setDeleteSpare] = useState(null);
    const [spr, setSpr] = useState([]);
    useEffect(() => {
        setSpr(spares);
    }, [spares]);
    const isProvider = useSelector(
        state => state.app.user.role.name == "provider"
    );
    const delSpare = async ({ id, name }) => {
        const deleted = await new spareService().removeSpare(id);
        if (deleted) {
            dispatch(setHeaderTitle(`Spare ${name} deleted successfully.`));
            setSpr(spr.filter(spare => spare.id != id));
        } else {
            dispatch(setHeaderTitle(`Spare ${name} not deleted.`));
        }
    };
    const [filter, setfilter] = useState("");
    const [filterC, setfilterC] = useState("");
    const [filterCM, setfilterCM] = useState("");
    const onChange = e => {
        setfilter(e.target.value);
    };
    const [categories, setCategories] = useState([]);
    const [carMarks, setCarMarks] = useState([]);

    useEffect(() => {
        getSelectItems("categories").then(setCategories);
        getSelectItems("marks").then(setCarMarks);
    }, []);

    return (
        <>
            <Input
                onChange={onChange}
                style={{ margin: "20px" }}
                value={filter}
                placeholder={"Filter by name"}
            />
            <Select
                items={categories}
                style={{ margin: "20px" }}
                onChange={e => {
                    setfilterC(e.target.value);
                }}
            />
            <Select
                style={{ margin: "20px" }}
                items={carMarks}
                onChange={e => {
                    setfilterCM(e.target.value);
                }}
            />
            <div className="spares">
                {spr
                    .filter(e => {
                        let res = false;
                        res = e.name.includes(filter);
                        if (filterC) {
                            res = res && e.category.id === +filterC;
                        }
                        if (filterCM) {
                            res = res && e.carMark.id === +filterCM;
                        }
                        return res;
                    })
                    .map(spare => (
                        <div className="spare-wrapper" key={spare.id}>
                            {!isProvider ? (
                                <SpareCard {...spare} />
                            ) : (
                                <div className="card card-user">
                                    <div className="card__field card__field-user">
                                        {spare.name}
                                    </div>
                                    <div className="card__field card__field-user">
                                        {spare.carMark.name}
                                    </div>
                                    <div className="card__field card__field-user">
                                        {spare.price}
                                    </div>
                                    <div className="card__field card__field-user">
                                        <Button
                                            className="button-link"
                                            navLink={true}
                                            to={`spare/${spare.id}`}
                                        >
                                            edit
                                        </Button>
                                    </div>
                                    <div className="card__field card__field-user">
                                        <Button
                                            onClick={() => {
                                                console.log(spare)
                                                setModal(true);
                                                setDeleteSpare(spare);
                                            }}
                                        >
                                            delete
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                <Modal
                    isOpen={modal}
                    onSubmit={() => {
                        delSpare(deleteSpare);
                        setModal(false);
                    }}
                    onCancel={() => {
                        setModal(false);
                    }}
                    title="Confirm deleting spare"
                >
                    Remove spare {deleteSpare && deleteSpare.name}?
                </Modal>
            </div>
        </>
    );
};

export default Spares;
