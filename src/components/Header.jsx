import React from "react";
import memeImg from "../images/meme.png";
import memeFace from "../images/meme-face.png";

export default function Header() {
  return (
    <div className="header--container">
      <img src={memeImg} alt="meme img" className="meme--img" />
      <h2 className="heading">Meme Generator</h2>
      <img src={memeFace} alt="meme face" className="meme--img" />
    </div>
  );
}
