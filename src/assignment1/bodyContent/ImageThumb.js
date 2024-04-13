import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";

function ImageThumb() {
  return (
    <div className="img-gallery">
      <div className="img-thumb">
        <img src={img1} />
      </div>
      <div className="img-thumb">
        <img src={img2} />
      </div>
      <div className="img-thumb">
        <img src={img3} />
      </div>
      <div className="img-thumb">
        <img src={img4} />
      </div>
    </div>
  );
}

export default ImageThumb;
