'use strict';
/* global someFunction document:true, localStorage:true, location:true, data:true,
 size:true, start:true, window:true, boardbuilder: true, body:true, drawer:true, checkWinner:true*/

const randCalc = () => {
  const randNum = Math.floor(Math.random() * (data.map.length));
  return randNum;
};

const compMove = () => {
  if (checkEndOfTheGame()) {
    if (data.map[1][1] === 0) {
      drawer.drawCircle(1, 1);
    }else if (((data.map[0][0] === 2 && data.map[0][1] === 2) || (data.map[1][1] === 2 && data.map[2][0] === 2) || (data.map[2][2] === 2 && data.map[1][2] === 2)) && data.map[0][2] === 0) {
      drawer.drawCircle(0, 2);
    } else if (((data.map[0][1] === 2 && data.map[0][2] === 2) || (data.map[1][1] === 2 &&  data.map[2][2] === 2) || (data.map[1][0] === 2 &&  data.map[2][0] === 2)) && data.map[0][0] === 0) {
      drawer.drawCircle(0, 0);
    } else if (((data.map[1][0] === data.map[1][1] && data.map[1][0] === 2) || (data.map[0][2] === data.map[2][2] && data.map[0][2] === 2)) && data.map[1][2] === 0) {
      drawer.drawCircle(1, 2)
    } else if (((data.map[1][1] === data.map[1][2] && data.map[1][1] === 2) || (data.map[0][0] === data.map[2][0]) && data.map[0][0] === 2) && data.map[1][0] === 0) {
      drawer.drawCircle(1, 0);
    } else if (((data.map[0][1] === data.map[1][1] && data.map[0][1] === 2) || (data.map[2][0] === data.map[2][2]) && data.map[2][2] === 2) && data.map[2][1] === 0) {
      drawer.drawCircle(2, 1);
    } else if (((data.map[1][1] === data.map[2][1]) || (data.map[0][0] === data.map[0][2])) && data.map[0][1] === 0) {
      drawer.drawCircle(0, 1);
    } else if (((data.map[2][0] === 2 &&  data.map[2][1] === 2) || (data.map[0][0] === 2 &&  data.map[1][1] === 2) || (data.map[0][2] === 2 &&  data.map[1][2] === 2)) && data.map[2][2] === 0) {
      drawer.drawCircle(2, 2);
    } else if (((data.map[0][0] === 2 &&  data.map[1][0] === 2) || (data.map[1][1] === 2 &&  data.map[0][2] === 2) || (data.map[2][1] === 2 && data.map[2][2] === 2)) && data.map[2][0] === 0) {
      drawer.drawCircle(2, 0);
    } else {
      const rowNb = randCalc();
      const nthTileInRow = randCalc();
      if (data.map[rowNb][nthTileInRow] === 0) {
        drawer.drawCircle(rowNb, nthTileInRow);
      } else {
        compMove();
      }
    }
  } else {
    console.log('Draw');
  }
  checkWinner();
};
