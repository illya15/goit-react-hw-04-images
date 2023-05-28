import { useEffect } from 'react';

export function Modal({ closeModal, modalImgUrl }) {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="Overlay" onClick={handleOverlayClick || handleKeyDown}>
      <div className="Modal">
        <img src={modalImgUrl} alt="pictures" />
      </div>
    </div>
  );
}
