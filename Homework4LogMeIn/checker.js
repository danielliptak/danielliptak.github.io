'use strict';
/* global someFunction document:true, localStorage:true, location:true, data:true,
 size:true, start:true, window:true, boardbuilder: true*/


const checkWinner = () => {
  if ((data.map[0][0] === 2 && data.map[0][1] === 2 && data.map[0][2] === 2) ||
    (data.map[0][0] === 2 && data.map[1][0] === 2 && data.map[2][0] === 2) ||
    (data.map[0][0] === 2 && data.map[1][1] === 2 && data.map[2][2] === 2) ||
    (data.map[0][1] === 2 && data.map[1][1] === 2 && data.map[2][1] === 2) ||
    (data.map[0][2] === 2 && data.map[1][1] === 2 && data.map[2][0] === 2) ||
    (data.map[0][2] === 2 && data.map[1][2] === 2 && data.map[2][2] === 2) ||
    (data.map[1][0] === 2 && data.map[1][1] === 2 && data.map[1][2] === 2) ||
    (data.map[2][0] === 2 && data.map[2][1] === 2 && data.map[2][2] === 2)) {
    data.xWinTimes += 1;
    window.alert('X is the winner')
    return;
  } else if ((data.map[0][0] === 1 && data.map[0][1] === 1 && data.map[0][2] === 1) ||
    (data.map[0][0] === 1 && data.map[1][0] === 1 && data.map[2][0] === 1) ||
    (data.map[0][0] === 1 && data.map[1][1] === 1 && data.map[2][2] === 1) ||
    (data.map[0][1] === 1 && data.map[1][1] === 1 && data.map[2][1] === 1) ||
    (data.map[0][2] === 1 && data.map[1][1] === 1 && data.map[2][0] === 1) ||
    (data.map[0][2] === 1 && data.map[1][2] === 1 && data.map[2][2] === 1) ||
    (data.map[1][0] === 1 && data.map[1][1] === 1 && data.map[1][2] === 1) ||
    (data.map[2][0] === 1 && data.map[2][1] === 1 && data.map[2][2] === 1)) {
    data.oWinTimes += 1;
    window.alert('O is the winner');
    return;
  }
  boardbuilder.refreshBoard();
};

const checkEndOfTheGame = () => {
  const tileInList = data.map.reduce((el, acc) => {
    return el.concat(acc);
  }, []);
  return tileInList.some(item => item === 0);
};
