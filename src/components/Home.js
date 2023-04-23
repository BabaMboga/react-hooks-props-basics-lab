import React from "react";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        <p>{props.name} is a Web Developer from {props.city}</p>
      </h1>
    </div>
  );
}

export default Home;
