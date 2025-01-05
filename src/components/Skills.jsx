import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img className="img" src={props.source} alt="skill" />
      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, non
        corporis. Non accusamus quam ipsum reiciendis in ipsa ducimus, facilis
        quaerat magnam possimus eligendi eaque enim ex libero, assumenda a?
      </p>
    </div>
  );
}

const Skills = () => {
  return (
    <>
   
    <div className="skill">
     
    <Card source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITHn_TgjDyhdWvePNw0mveDrTUr00GLfv_Q&s" />
    <Card source="https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png" />

      <Card source="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png"/>
      <Card source="https://cdn-icons-png.flaticon.com/512/919/919825.png" />

    </div></>
  );
};

export default Skills;
