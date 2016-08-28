'use strict';
/* global someFunction document:true, localStorage:true, location:true, data:true, size:true, start:true, drawer:true */

const drawer = (() => {
  const drawMaker = (params) => {
    data.map[params.rowId][params.nthTileInRow] = params.num;
    const c = document.querySelectorAll(`canvas[idData='${params.nthTileInRow}']`);
    const ctx = c[params.rowId].getContext('2d');
    ctx.lineWidth = 15;
    return ctx;
  };

  const drawCircle = (rowId, nthTileInRow) => {
    const params = { 'rowId': rowId, 'nthTileInRow': nthTileInRow, 'num': 1};
    const localCtx = drawMaker(params);
    localCtx.beginPath();
    localCtx.arc(size / 2, size / 2 , (size / 2) - (size / 10), 2 * Math.PI, false);
    localCtx.stroke();
    localStorage.setItem('mygame', JSON.stringify(data));
  };

  const drawX = (rowId, nthTileInRow) => {
    const params = { 'rowId': rowId, 'nthTileInRow': nthTileInRow, 'num': 2};
    const localCtx = drawMaker(params);
    localCtx.moveTo(start, start);
    localCtx.lineTo(size, size);
    localCtx.moveTo(size, start);
    localCtx.lineTo(start, size);
    localCtx.stroke();
    localStorage.setItem('mygame', JSON.stringify(data));
  };

  return {
    drawX: drawX,
    drawCircle: drawCircle,
  };
})();
