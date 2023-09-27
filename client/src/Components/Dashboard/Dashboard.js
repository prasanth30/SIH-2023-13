import React, { useState, Fragment, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { styled } from "@mui/joy/styles";
import Input from "@mui/joy/Input";
import TextField from '@mui/material/TextField';
import Carousel from 'react-bootstrap/Carousel'
import Navbar_ from "../layout/Navbar";
import one from "../../img/1.svg";
import two from "../../img/2.svg";
import three from "../../img/3.svg";
import ImageGrid from "../layout/belowform";

const InputDefault = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& input': {
    color: theme.palette.primary.main,
  },
  '& label.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiInputBase-input::placeholder': {
    color: theme.palette.primary.main,
  },
}));

const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    locationApproved: false,
    location: "",
    image: "",
    Age: "",
    Phone: "",
  });

  const [overlay, setOverlay] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function off() {
    setOverlay(false);
  }

  const {
    name,
    gender,
    locationApproved,
    location,
    image,
    Age,
    Phone
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onChangeLocation = (e) => {
    navigator.geolocation.getCurrentPosition(geoLocation, failedToGet);
  };

  async function geoLocation(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    setFormData({ ...formData, locationApproved: true });
  }

  function failedToGet() {
    console.log("Access Denied");
    setFormData({ ...formData, locationApproved: false });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    // You can add your submission logic here
    console.log(formData);
    setOverlay(true);
  };

  return (
    <Fragment>
      <Navbar_ />
      <div className="container body-margin">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={three}
              alt="First slide"
            />
            <Carousel.Caption>
              {windowWidth > 700 && (
                <a href="#form">
                  <button className="btn btn-secondary btn-lg">Get Checked</button>
                </a>
              )}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={two}
              alt="Second slide"
            />
            <Carousel.Caption>
              {windowWidth > 700 && (
                <a href="#form">
                  <button className="btn btn-success btn-lg">Test AI</button>
                </a>
              )}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={one}
              alt="Third slide"
            />
            <Carousel.Caption>
              {windowWidth > 700 && (
                <a href="#form">
                  <button className="btn btn-primary btn-lg">Use AI</button>
                </a>
              )}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container mt-3" id="form">
        <h2 className="text-center">Fill out the form to get a report.</h2>
        <form onSubmit={onSubmit} className="bold-form">

          <div className="mb-3">
            <InputDefault



              placeholder="XYZ" label="Name"
              className="form-control"

              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <InputDefault
              placeholder="XX"
              type="number" label="Age"

              className="form-control"

              name="Age"
              value={Age}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <InputDefault

              placeholder="9834XXXX23"
              label="Phone No."
              type="number"


              className="form-control"

              name="Phone"
              value={Phone}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3 bold-form">
            <label htmlFor="gender" className="form-label">
              Gender:
            </label>
            <select
              className="form-select"

              name="gender"
              value={gender}
              onChange={onChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          {!locationApproved && (
            <div className="mb-3 bold-form">
              <input

                type="checkbox"
                name="locationApproved"
                className="form-check-input"
                checked={locationApproved}
                onChange={onChangeLocation}
              />
              <label htmlFor="locat" className="form-label bold-form">
                {' '}Use My Current Location
              </label>
            </div>
          )}

          <div className="mb-3 bold-form">
            <label htmlFor="image" className="form-label text-muted">
              Upload Image:
            </label>
            <Input
              type="file"
              className="form-control  border-light border"

              name="image"
              value={image}
              onChange={onChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg">
            Submit
          </button>
        </form>

        <hr />
        <div>
          <ImageGrid />
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
