import React, { useState } from "react";
import ModalCustom from "../Modal/Modal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./CustomNav.scss";
import Guitar from "../Guitar/Guitar";
import CustomForm from "../CustomForm/CustomForm";

const CustomNav = ({ li }) => {
  const [window, setWindow] = useState(false);
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };
  return (
    <>
      <nav
        className="navbar-menu"
        style={{ width: window === false ? 250 : 60 }}
      >
        <div className="burger" onClick={() => openClose()}>
          <img src="img/menu.svg" alt="burger" />
        </div>
        <ul className="navbar__list">
          {li.map((item, i) => (
            <div className="navbar__li-box" key={i}>
              <img
                src={item[1]}
                alt={item[1]}
                style={{ paddingLeft: window === false ? 27 : 17 }}
              />
              <li
                className="navbar__li"
                style={{ display: window === false ? "inline-block" : "none" }}
                onClick={() => handleShow()}
              >
                {item[0]}
              </li>
            </div>
          ))}
        </ul>
      </nav>
      <Modal
        fullscreen={fullscreen}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div className="guitar-box">{<Guitar />}</div>
          {<CustomForm />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomNav;
