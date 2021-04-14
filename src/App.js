import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Netflix from "./Netflix";

function App() {
  const [post, setPost] = useState([]);
  const [secondPost, setSecondPost] = useState();
  const [num, setNum] = useState("");
  const [moves, setMoves] = useState(0);
  // useEffect(() => {
  //   // const url = "https://jsonplaceholder.typicode.com/posts";
  //   // fetch(url)
  //   //   .then((res) => res.json())
  //   //   .then((res) => setPost(res));
  //   async function getData() {
  //     const tempRes = await axios.get(
  //       `http://www.omdbapi.com/?i=tt3896198&apikey=d1116c60`
  //     );
  //     setNum(tempRes.data.Title);
  //     console.log({ num });
  //     // setSecondPost(tempRes.name);
  //     // setMoves(tempRes.data.moves.length);
  //   }
  //   getData();
  // }, [num]);
  return (
    <div className="App">
      {/* <h1>
        My name is <span style={{ color: "red" }}>{secondPost}</span>{" "}
      </h1>
      <h2>
        I have <span style={{ color: "green" }}>{moves}</span> moves
      </h2>
      <h1>
        You choosed <span style={{ color: "brown" }}>{num}</span>
      </h1>
      <select value={num} onChange={(e) => setNum(e.target.value)}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select> */}
      <Netflix></Netflix>
    </div>
  );
}

export default App;
