import React from 'react';
import './Board.css';

const cellSize = 20;
const width = 800;
const height = 800;

class Board extends React.Component {
    constructor() {
        super();
        this.rows = height / cellSize
        this.cols = width / cellSize
        this.board = this.createBoard()
    }
    state = {
        cells: []
    }

    createBoard = () => {
        let board = []
        for(let i = 0; i < this.rows; i++) {
            board[i] = []
            for(let j = 0; j < this.cols; j++){
                board[i][j] = false
            }
        }
        return board;
    }

    createCells = () => {
        let cells = []
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++) {
                if(this.board[i][j]) {
                    cells.push({ i, j })
                }
            }
        }
        return cells
    }

    render() {
        return (
            <div>
                <div 
                className="board" 
                style={{ width: width, height:height,
                backgroundSize: `${cellSize}px ${cellSize}px`
                }} 
   
                >
                </div>
            </div>
        )
    }
}

export default Board;