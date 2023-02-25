import React, { useState, useEffect } from "react";

export default function GeneratorForm() {
  const [allMemes, setAllMemes] = useState([]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }
  function getMemeImage() {
    const memesArray = allMemes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    return setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }
  return (
    <div className="form--main">
      <h2 className="form--heading">Generate meme</h2>
      <div className="form--top">
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
      <div className="meme">
        <img
          src={meme.randomImage}
          alt={meme.randomImage}
          className="meme-pic"
        />
        <h2 className=" meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
