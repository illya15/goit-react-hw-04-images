import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/SearchBar';
import { getSearchImage } from './FetchAPI/FetchAPI';
import { Modal } from './Modal/Modal';
// import { Component } from 'react';

import { useState, useEffect } from 'react';


export function App () {

  const [searhQuerry, setSearhQuerry] = useState('');
   const [pictures, setPictures] = useState([]);
   const [page, setPage] = useState(1);
   const [isLoading, setIsLoading] = useState (false);
   const [showModal,setShowModal] = useState (false);
   const [modalImgUrl, setModalImgUrl] = useState('');
   const [total,setTotal] = useState (0);

  
useEffect (() =>{
  // setIsLoading(true);
  if (!!searhQuerry) {
        getSearchImage(searhQuerry, page)
      .then(({ hits,totalHits }) => {
        if (hits.length === 0) {
          alert('Enter the correct data for the request');
        }
        setPictures(prev => [...prev, ...hits]);
        setTotal(state => state = totalHits);

      })
      .finally(() => {
        setIsLoading(false);
      });
  }
}, [searhQuerry, page]);

    
   
  const nextPage = () => {
 setPage(state => state + 1);

 
  };

 const handleFormSubmit = searhQuerry => {
  setPage(1);
  setPictures([]);
  setSearhQuerry(searhQuerry.trim()); 

  };

 const onModal = modalImgUrl => {
setModalImgUrl(modalImgUrl); 
setShowModal(true);
    
  };

 const closeModal = () => {
  setShowModal(false);
    
  };

 
    return (
      <div className="App">
        <SearchBar
          onSubmit={handleFormSubmit}
          resetPage={page}
          clearPictures={pictures}
        />
        <ImageGallery images={pictures} showModal={onModal} />
        <Loader visible={isLoading} />
        {pictures.length > 0 &&
          !isLoading &&
           total > (page*12) && (
            <Button onClick={nextPage} />
          )}
        {showModal && (
          <Modal
            modalImgUrl={modalImgUrl}
            closeModal={closeModal}
          />
        )}
      </div>
    );
  
}

