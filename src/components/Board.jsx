import React from 'react';
import Box from "./Box";
import "./Board.css"

const Board = ({ board, onClick }) => {
  return (
    <div className='board'>
      {board.map((value, idx) => {
        // Add a key prop to each Box and ensure onClick is always a function
        return (
          <Box 
            key={idx}
            value={value} 
            onClick={() => onClick(idx)} // Always pass a function to onClick
          />
        );
      })}
    </div>
  );
}

export default Board;
