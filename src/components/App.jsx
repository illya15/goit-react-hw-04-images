import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/SearchBar';
import { searchImage } from './FetchAPI/FetchAPI';
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
   const [total, setTotal] = useState (0);

  
useEffect (() =>{
  i
})

  componentDidUpdate(_, prevState) {
    if (
      prevState.searhQuerry !== this.state.searhQuerry ||
      prevState.page !== this.state.page
    ) {
      this.setState({
        isLoading: true,
      });
      searchImage(this.state.searhQuerry, this.state.page)
        .then(({ hits, totalHits }) => {
          if (hits.length === 0) {
            alert('Enter the correct data for the request');
          }

          this.setState(prevState => ({
            pictures: [...prevState.pictures, ...hits],
          }));

          this.setState({
            total: totalHits,
          });
        })
        .finally(() => {
          this.setState({
            isLoading: false,
          });
        });
    }
  }
   nextPage = () => {
 setPage(state => state + 1);

 
  };

 const handleFormSubmit = searhQuerry => {
  setPage(1);
  setPictures([]);
  setSearhQuerry(); 

  };

  showModal = modalImgUrl => {
setModalImgUrl,
setShowModal(true);
    
  };

 const closeModal = () => {
  setShowModal(false);
    
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          onSubmit={this.handleFormSubmit}
          resetPage={this.state.page}
          clearPictures={this.state.pictures}
        />
        <ImageGallery images={this.state.pictures} showModal={this.showModal} />
        <Loader visible={this.state.isLoading} />
        {this.state.pictures.length > 0 &&
          !this.state.isLoading &&
           this.state.total > (this.state.page*12) && (
            <Button onClick={this.nextPage} />
          )}
        {this.state.showModal && (
          <Modal
            modalImgUrl={this.state.modalImgUrl}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}

