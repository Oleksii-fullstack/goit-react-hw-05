import s from "./ImageCard.module.css";

const ImageCard = ({ color, src, srcLarge, alt, openModal }) => {
  return (
    <div
      className={s.card}
      style={{ backgroundColor: color, borderColor: color }}
    >
      <img
        className={s.image}
        src={src}
        alt={alt}
        onClick={() => openModal({ src: srcLarge, alt })}
      />
    </div>
  );
};

export default ImageCard;
