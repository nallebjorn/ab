import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "Components/button";
import Modal from "Components/modal-window";
import imgBase from "Utils/img-base";
import spareService from "Services/spare-service";
import { setHeaderTitle } from "Actions/actions";

const SpareCard = ({ id, images, name, price, carMark: { name: mark } }) => {
  return (
    <NavLink to={"/" + id} className="spare">
      <div className="spare__wrapper">
        <div className="spare__image">
          {images[0] && (
            <img src={imgBase + images[0].url} alt="first spare image" />
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
  return (
    <div className="spares">
      {spr.map(spare => (
        <div className="spare-wrapper" key={spare.id}>
          {isProvider && (
            <div className="spare__buttons">
              <Button
                className="button-link"
                navLink={true}
                to={`spare/${spare.id}`}
              >
                edit
              </Button>
              <Button
                onClick={() => {
                  setModal(true);
                  setDeleteSpare(spare);
                }}
              >
                delete
              </Button>
            </div>
          )}
          <SpareCard {...spare} />
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
  );
};

export default Spares;
