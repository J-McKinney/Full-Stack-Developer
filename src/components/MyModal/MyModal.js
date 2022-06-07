import React from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const MyModal = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h3>{props.heading}</h3>
          <hr />
          <h5>{props.titleOne}</h5>
          <img
            style={props.headerImgStyle}
            src={props.headerImg}
            alt={props.headerAlt}
          />
          <img
            style={props.imgOneStyle}
            src={props.imgOne}
            alt={props.altOne}
          />
          <h5>{props.titleTwo}</h5>
          <img
            style={props.imgTwoStyle}
            src={props.imgTwo}
            alt={props.altTwo}
          />
          <img
            style={props.imgThreeStyle}
            src={props.imgThree}
            alt={props.altThree}
          />
          <img
            style={props.imgFourStyle}
            src={props.imgFour}
            alt={props.altFour}
          />
          <img
            style={props.imgFiveStyle}
            src={props.imgFive}
            alt={props.altFive}
          />
          <img
            style={props.imgSixStyle}
            src={props.imgSix}
            alt={props.altSix}
          />
          <img
            style={props.imgSevenStyle}
            src={props.imgSeven}
            alt={props.altSeven}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyModal;

// async function readFile() {
	// var myFile = await fs.readFile("c:\\myfile.txt");
	// console.log(myFileData.toString("utf-8"));
// }
