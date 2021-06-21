import React from "react";
import Square from "./Square";

const style = {
  border: "4px solid green",
  borderRadius: "10px",
  width: "500px",
  height: "500px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const Board = ({ squares, onClick }) => (
  <div style={style}>
    {squares.map((squares, i) => (
      <Square key={i} value={squares} onClick={() => onClick(i)} />
))}
    
  </div>
);

export default Board;
