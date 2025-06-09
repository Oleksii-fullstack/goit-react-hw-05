import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ galleryList, openModal }) => {
  return (
    <Grid>
      {galleryList.map(
        ({ color, id, alt_description, urls: { small, regular } }) => {
          return (
            <GridItem key={id}>
              <ImageCard
                src={small}
                alt={alt_description}
                srcLarge={regular}
                color={color}
                openModal={openModal}
              />
            </GridItem>
          );
        }
      )}
    </Grid>
  );
};

export default ImageGallery;
