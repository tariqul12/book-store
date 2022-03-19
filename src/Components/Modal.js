import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors[0]}</h3>
              <h4>
                {item.volumeInfo.publisher}
                <span> {item.volumeInfo.publishedDate}</span>
              </h4>
              <a href={item.volumeInfo.canonicalVolumeLink} target="_blank">
                <button>more</button>
              </a>
            </div>
          </div>
          <h4 className="descripation">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};

export default Modal;
