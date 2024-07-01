import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { ChromePicker } from "react-color";

const NewBlog = ({showAlert}) => {
  const [text, setText] = useState("enter text here");
  const [title, setTitle] = useState("enter title here");
  const [imageSrc, setImageSrc] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const clearText = () => {
    setText("");
    setTitle("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handOnChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImageSrc(null);
    }
  };

  const handleColorChange = (color) => {
    setBackgroundColor(color.hex);
  };



  return (
    <div className="new-blog-section">
      <div className="row">
        {/* Left Column: Input Fields */}
        <div className="col-lg-8">
          <h2>Create a New Blog</h2>
          <br />
          <h4>Enter Blog TITLE :</h4>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="mybox"
              rows={2}
              value={title}
              onChange={handOnChange}
            ></textarea>
          </div>
          <h4>Enter blog content :</h4>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="mybox"
              rows={5}
              value={text}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>
                Upper-Case
              </button>
              <button className="btn btn-primary mx-2" onClick={clearText}>
                All-clear
              </button><br/><br/>
          <div className="mb-3">
            <h4>Choose Background Color:</h4>
            <ChromePicker
              color={backgroundColor}
              onChange={handleColorChange}
            />
            <button
              className="btn btn-primary mt-3"
              onClick={() => setBackgroundColor("#ffffff")}
            >
              Reset Color
            </button>
          </div>
        </div>

 
        <div className="col-lg-4">
          <h2>Preview</h2>
          {imageSrc && (
            <div className="col-lg-4 col-md-6 mb-4 my-6">
              <Card style={{ width: "18rem", backgroundColor }}>
                <Card.Img variant="top" src={imageSrc} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button variant="primary">Go inside blog</Button>
                </Card.Body>
              </Card>
              <Button variant="secondary">Post-Blog</Button>
            </div>
          )}
        </div>
      </div>

      <h2>Upload Profile Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

export default NewBlog;
