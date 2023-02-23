import React, { useState } from "react";
import memesData from "../memesData";
export default function GeneratorForm() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  function handleChange(e) {
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [e.target.name]: e.target.value,
      };
    });
  }
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    return setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }
  return (
    <div className="form--main">
      <h2 className="form--heading">Generate meme</h2>
      <div>
        <input
          type="text"
          placeholder="top text"
          onChange={handleChange}
          className="input"
          name="topText"
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="bottom text"
          className="input"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        />
      </div>
      <button className="form--btn" onClick={getMemeImage}>
        New MEME Image
      </button>
      <div>
        <p className="text--top">{meme.topText}</p>
        <img src={meme.randomImage} alt={meme.randomImage} className="meme" />
        <p className="text--bottom">{meme.bottomText}</p>
      </div>
    </div>
  );
}
