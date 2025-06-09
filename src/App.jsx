import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { getPhotos } from "./service/unsplashAPI";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Heading from "./components/Heading/Heading";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMorePhotos, setHasMorePhotos] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState({});

  useEffect(() => {
    if (!searchPhrase) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { results, total_pages } = await getPhotos(searchPhrase, page);
        if (total_pages === 0) {
          setIsEmpty(true);
          return;
        }
        setImages((prev) => [...prev, ...results]);
        setHasMorePhotos(page < total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchPhrase, page]);

  const handleFormSubmit = (value) => {
    setSearchPhrase(value);
    setError("");
    setImages([]);
    setIsEmpty(false);
    setPage(1);
    setHasMorePhotos(false);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleOpenModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  return (
    <>
      {/* <Section> */}
      {/* <Container> */}
      <SearchBar onSubmit={handleFormSubmit} />
      {images.length > 0 && (
        <ImageGallery galleryList={images} openModal={handleOpenModal} />
      )}
      {hasMorePhotos && <LoadMoreBtn onClick={handleLoadMore} />}
      {error && <ErrorMessage error={error} />}
      {isEmpty && <Heading />}
      {isLoading && <Loader />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={handleCloseModal}
        src={modalImage.src}
        alt={modalImage.alt}
      />
      {/* </Container> */}
      {/* </Section> */}
    </>
  );
};

export default App;
