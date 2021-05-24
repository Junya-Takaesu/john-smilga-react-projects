import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="question" onClick={() => setShow(!show)}>
      <header>
        <h4>{title}</h4>
        <div className="btn">
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </header>
      <p>{show ? info : ""}</p>
    </div>
  );
};

export default Question;
