import React from 'react'
import  ReactDOM  from 'react-dom';
import styles from './Modal.module.css'
function Modal({children,title,showModal,closeModal=()=>{}}) {
  const modalRoot = document.getElementById("modal-root");
  const closeBackground = (event) => {
    console.log(event)
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  
  
  return showModal
    ? ReactDOM.createPortal(
        <div className={styles.Modal} onClick={closeBackground}>
          <div className={styles.modal_content}>
            <div className={styles.modal_label}>
              <h3>{title}</h3>
            </div>
            <div style={{ marginTop: 30 }}>{children}</div>
            <div className={styles.button_modal}>
              <button onClick={closeModal}>Ok</button>
              <button style={{ marginLeft: 20 }} onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>,
        modalRoot
      )
    : null;
}

export default Modal