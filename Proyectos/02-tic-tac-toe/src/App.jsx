import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TURNS } from './constants.js'
import { checkWinner, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { WINNER_COMBOS } from './constants.js'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js'

function App(){
  const [board, setBoard] = useState(() =>{
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)
 
  const updateBoard = (index) => {
    if(board[index] || winner) return 

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    saveGameToStorage({
      board: newBoard,
      turn: newTurn })
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti( )
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  }

  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

useEffect(() => {
  console.log('useEffect')
}, [turn, board])

  return (
    <main className='board'>
      <h1>Ta Te Ti</h1>
      <button onClick={resetGame}>Reset</button>
      <section className='game'>
      {
        board.map((square, index) => {
          return (
           <Square key={index} index={index} updateBoard={updateBoard}>
            {square}
           </Square>
          )
        })
      }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

     <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  )
}

export default App