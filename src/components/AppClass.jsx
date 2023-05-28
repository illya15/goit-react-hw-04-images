import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/SearchBar';
import { searchImage } from './FetchAPI/FetchAPI';
import { Modal } from './Modal/Modal';
import { Component } from 'react';


export class App extends Component {
  state = {
    searhQuerry: '',
    pictures: [],
    page: 1,
    isLoading: false,
    showModal: false,
    modalImgUrl: '',
    total: 0,
  };
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
    this.setState({
      page: this.state.page + 1,
    });
  };

  handleFormSubmit = searhQuerry => {
    this.setState({
      page: 1,
    });

    this.setState({
      pictures: [],
    });
    this.setState({
      searhQuerry,
    });
  };

  showModal = modalImgUrl => {
    this.setState({
      modalImgUrl,
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
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
          this.state.total > this.state.page * 12 && (
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

// import { Component } from "react";

// export default class App extends Component {

// componentDidMount

// render()

//   return (
//     // <div
//     //   style={{
//     //     height: '100vh',
//     //     display: 'flex',
//     //     justifyContent: 'center',
//     //     alignItems: 'center',
//     //     //fontSize: 40,
//     //     color: '#010101'
//     //   }}
//     // >
//     //   React homework template
//     // </div>
//   );
// }
