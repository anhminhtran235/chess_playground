const stockfish = STOCKFISH();
stockfish.postMessage('go depth 16');

stockfish.onmessage = function (event) {
    //NOTE: Web Workers wrap the response in an object.
    console.log(event);
};
