let board = document.getElementById('boardInner');
let numContainer = document.getElementById('numberContainer');
let letterContainer = document.getElementById('letterContainer');
let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8'].reverse();

const renderLabels = () => {
    letters.forEach((x, i) => {
        let el = document.createElement('div');
        el.innerText = x;
        el.className = 'label';
        letterContainer.appendChild(el);

        let el2 = document.createElement('div');
        el2.innerText = numbers[i];
        el2.className = 'label';
        numContainer.appendChild(el2);
    })
};

const renderBoard = () => {
  
    renderLabels();

    let change = false;
    let color = 'white';
    for (let i = 0; i < 64; ++i) {
        let el = document.createElement('div');
        el.className = 'square';
        change = i % 8 === 0 || i % 8 === NaN;
        color = change ? color : color === 'white' ? 'black' : 'white';
        el.style.backgroundColor = color;
        board.appendChild(el);
        change = false;
    }
};

renderBoard();