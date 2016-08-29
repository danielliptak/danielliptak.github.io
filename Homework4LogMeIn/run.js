'use strict';
/* global someFunction document:true, localStorage:true, location:true, data:true,
 size:true, start:true, window:true, boardbuilder: true, body:true, drawer:true, checkWinner:true, compMove:true */

const TicTacToe = (() => {
  const gameMaker = () => {
    if (JSON.parse(localStorage.getItem('mygame'))) {
      data = JSON.parse(localStorage.getItem('mygame'));
    }
    boardbuilder.drawBoard();
  };

  const delLocalStorage = () => {
    data.map = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    localStorage.setItem('mygame', JSON.stringify(data));
    let divList = document.querySelectorAll('.rows')
    for (var i = 0; i < (divList.length); i++) {
      body.removeChild(divList[i]);
    }
    boardbuilder.drawBoard();
  };

  const eventController = (e) => {
    if (e.target.type === 'button') {
      delLocalStorage();
    } else if (e.target.nodeName === 'CANVAS') {
      const rowId = e.target.parentElement.attributes.rowId.value;
      const tileId = e.target.attributes.idData.value;
      if (data.map[rowId][tileId] === 0) {
        drawer.drawX(rowId, tileId);
        compMove();
      }
    }
  };

  var table = document.querySelector('body');
  table.addEventListener('click', eventController);

  return {
    gameMaker,
  };
})();

TicTacToe.gameMaker();
