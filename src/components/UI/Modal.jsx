import ReactDOM from "react-dom";
import { Fragment } from "react";
import style from "./Modal.module.css";

const Overlay = ({onHideCart}) => <div className={style.modal__overlay} onClick={onHideCart}/>;

const ModalOverlay = ({ children }) => (
  <div className={style.modal__card}>{children}</div>
);

const Modal = ({ children, onHideCart }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Overlay onHideCart={onHideCart}/>, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default Modal;
