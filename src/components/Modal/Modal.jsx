// import { useEffect } from "react";



export function Modal({ closeModal, modalImgUrl }) {


  // useEffect(() => {
  //   window.addEventListener('keydown', handleKeyDown);
  // }, []);


  // useEffect(() => {
    

  //   window.removeEventListener('keydown', handleKeyDown);
  // }, [handleKeyDown]);



  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="Overlay"
      onClick={handleOverlayClick || handleKeyDown}
    >
      <div className="Modal">
        <img src={modalImgUrl} alt="pictures" />
      </div>
    </div>
  );
}

