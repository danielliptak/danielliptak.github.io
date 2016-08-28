'use strict';
/* global someFunction document:true, localStorage:true, location:true, data:true,
 size:true, start:true, window:true, boardbuilder: true, body:true*/

const boardbuilder = (() => {
  const createOneTile = (nthTileInRow) => {
    const c = document.createElement('canvas');
    c.setAttribute('width', size);
    c.setAttribute('height', size);
    c.setAttribute('idData', nthTileInRow);
    var ctx = c.getContext('2d');
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(start, start, start + size, start + size);
    return c;
  };

  const createRow = (index) => {
    const newRow = document.createElement('div');
    newRow.setAttribute('width', size);
    body.appendChild(newRow);
    newRow.setAttribute('rowId', index);
    return newRow;
  };

  const refreshBoard =() => {
    document.querySelector('.x-score').textContent = data.xWinTimes;
    document.querySelector('.o-score').textContent = data.oWinTimes;
  };

  const drawBoard = () => {
    refreshBoard()
    data.map.forEach((e, index) => {
      const row = createRow(index);
      e.forEach((eInRow, nthTileInRow) => {
        row.appendChild(createOneTile(nthTileInRow));
        if (data.map[index][nthTileInRow] === 1) {
          drawer.drawCircle(index, nthTileInRow);
        } else if (data.map[index][nthTileInRow] === 2) {
          drawer.drawX(index, nthTileInRow);
        }
      });
    });
  };

  return {
    drawBoard: drawBoard,
    refreshBoard: refreshBoard,
  };
})();
