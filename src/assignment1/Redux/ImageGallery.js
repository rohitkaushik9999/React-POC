import React from "react";
import { useSelector, useDispatch } from "react-redux";
import img1 from "../images/img1.jpg";
import { CountryActions } from "../SliceWithMultiReducers/CountrySlice";

const ImageGallery = (props) => {

  const dispatch = useDispatch();
  const countryName = useSelector((state) => state.country.countryName);
  const countryCode = useSelector((state) => state.country.countryCode);
  localStorage.setItem("userId", 1);
  sessionStorage.setItem("userName", "rohit");

  const updateCountryNameHandler = (event) => {
    dispatch(CountryActions.updateCountryName(event.target.value));
  };
  const updateCountryCodeHandler = (event) => {
    dispatch(CountryActions.updateCountryCode(event.target.value));
  };

    return (
      <div>
        <div className="image-gallery-add-post">
          <label>Select Country</label>
          <select
            defaultValue={countryName}
            onChange={updateCountryNameHandler}
          >
            <option value="INDIA">INDIA</option>
            <option value="CHINA">CHINA</option>
            <option value="UNITED STATES">UNITED STATES</option>
            <option value="UNITED KINGDOM">UNITED KINGDOM</option>
          </select>
          <label>Select Country Code</label>
          <select
            defaultValue={countryCode}
            onChange={updateCountryCodeHandler}
          >
            <option value="+91">+91</option>
            <option value="+86">+86</option>
            <option value="+44">+44</option>
            <option value="+1">+1</option>
          </select>
          <button>Add Post</button>
        </div>
        <div className="image-wrapper">
          <div className="item-column">
            <div className="overlay">
              <div className="item-gallary-action">
                <button>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
                <button>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
              <img id="displayImg" src={img1} />
              <div className="caption">Read More</div>
            </div>
          </div>
          <div className="item-column">
            <div className="overlay">
              <div className="item-gallary-action">
                <button>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
                <button>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
              <img id="displayImg" src={img1} />
              <div className="caption">Read More</div>
            </div>
          </div>
          <div className="item-column">
            <div className="overlay">
              <div className="item-gallary-action">
                <button>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
                <button>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
              <img id="displayImg" src={img1} />
              <div className="caption">Read More</div>
            </div>
          </div>
          <div className="item-column">
            <div className="overlay">
              <div className="item-gallary-action">
                <button>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
                <button>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
              <img id="displayImg" src={img1} />
              <div className="caption">Read More</div>
            </div>
          </div>
          <div className="item-column">
            <div className="overlay">
              <div className="item-gallary-action">
                <button>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
                <button>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
              <img id="displayImg" src={img1} />
              <div className="caption">Read More</div>
            </div>
          </div>
          <div className="item-column">
            <div className="overlay">
              <div className="item-gallary-action">
                <button>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
                <button>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
              <img id="displayImg" src={img1} />
              <div className="caption">Read More</div>
            </div>
          </div>
          <div className="item-column">
            <div className="overlay">
              <div className="item-gallary-action">
                <button>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
                <button>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
              <img id="displayImg" src={img1} />
              <div className="caption">Read More</div>
            </div>
          </div>
          <div className="item-column">
            <div className="overlay">
              <div className="item-gallary-action">
                <button>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
                <button>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
              <img id="displayImg" src={img1} />
              <div className="caption">Read More</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ImageGallery;
