import ReactDOM from "react-dom";
import { Fragment } from "react";
import style from "./Modal.module.css";

const Overlay = () => <div className={style.modal__overlay} />;

const ModalOverlay = ({ children }) => (
  <div className={style.modal__card}>{children}</div>
);

const Modal = ({ children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Overlay />, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default Modal;
