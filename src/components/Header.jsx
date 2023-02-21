import React from "react";
import memeImg from "../images/meme.png";

export default function Header() {
  return (
    <div className="header--container">
      <img src={memeImg} alt="meme img" className="meme--img" />
      <h2 className="heading">Meme Generator</h2>
      <h3 className="heading--line">Syed Wajahat</h3>
    </div>
  );
}
