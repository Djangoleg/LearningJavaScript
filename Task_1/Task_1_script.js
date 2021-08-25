var board = document.getElementById('boardInner');
var numContainer = document.getElementById('numberContainer');
var letterContainer = document.getElementById('letterContainer');
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8'].reverse();

renderLabels = () => {
    letters.forEach((x, i) => {
        var el = document.createElement('div');
        el.innerText = x;
        el.className = 'label';
        letterContainer.appendChild(el);

        var el2 = document.createElement('div');
        el2.innerText = numbers[i];
        el2.className = 'label';
        numContainer.appendChild(el2);
    })
};

const renderBoard = () => {
  
    renderLabels();

    var change = false;
    var color = 'white';
    for (var i = 0; i < 64; ++i) {
        var el = document.createElement('div');
        el.className = 'square';
        change = i % 8 === 0 || i % 8 === NaN;
        color = change ? color : color === 'white' ? 'black' : 'white';
        el.style.backgroundColor = color;
        board.appendChild(el);
        change = false;
    }
};

renderBoard();