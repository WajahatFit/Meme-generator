import React, { useState } from "react";

function handleChange(e) {
  console.log(e.target.value);
}

function handleSubmit(a) {
  console.log(a);
}

export default function GeneratorForm() {
  const [topText, setTopText] = useState("");
  const [bottomText, setbottomText] = useState("");
  return (
    <div className="form--container">
      <h2 className="form--heading">Generate meme</h2>
      <input
        type="text"
        placeholder="top text"
        onChange={handleChange}
        className="input"
      />
      <input
        type="text"
        placeholder="bottom text"
        className="input"
        onChange={handleChange}
      />
      <button className="form--btn" onClick={handleSubmit}>
        Generate Meme
      </button>
    </div>
  );
}
