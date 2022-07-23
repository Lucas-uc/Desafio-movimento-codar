const allSquaresGame = document.querySelectorAll(".QuadradoJogo");

const X = "X";
const O = "O";

let player = "X";
marcarJogadorAtivo(player);

function nextPlayer(){
    player === "X" ? player = "O" : player = "X";

    marcarJogadorAtivo(player);
};

function selecionarArea(posicaoLinha, posicaoColuna) {

    const getText = document.querySelector(`[data-linha='${posicaoLinha}'][data-coluna='${posicaoColuna}']`).textContent;

    if(player === "X"){
        if(getText === ""){
            desenharSimbolo(X, posicaoLinha, posicaoColuna);
            verifyPlayerWin();
            nextPlayer();
        };
    }
    else {
        if(getText === ""){
            desenharSimbolo(O, posicaoLinha, posicaoColuna);
            verifyPlayerWin();
            nextPlayer();
        };
    };
};

function verifyPlayerWin(){
    
    const square = document.querySelectorAll(".QuadradoJogo");

    if( checkEqualSquares(square[0], square[1], square[2]) || 
        checkEqualSquares(square[3], square[4], square[5]) ||
        checkEqualSquares(square[6], square[7], square[8]) ||

        checkEqualSquares(square[0], square[3], square[6]) ||
        checkEqualSquares(square[1], square[4], square[7]) ||
        checkEqualSquares(square[2], square[5], square[8]) ||

        checkEqualSquares(square[0], square[4], square[8]) ||
        checkEqualSquares(square[2], square[4], square[6])
    ){
        allSquaresGame.forEach((square) => {
            square.removeAttribute("onclick");
        });

        exibirResultado(`JOGADOR ${player} GANHOU!`);
    } 
    else{
        checkAllSqueres() ? exibirResultado(`EMPATE!`) : '';
    };

};

function checkEqualSquares(squareOne, squareTwo, squareThree){

    if(squareOne.textContent === squareTwo.textContent && squareOne.textContent === squareThree.textContent && squareOne.textContent !== ""){
        return true;
    };

    return false;
};

function checkAllSqueres(){

    for(let i in allSquaresGame){
        if(allSquaresGame[i].textContent ===''){
            return false;
        }       
    }
    return true;
};

function reiniciarJogo() {
    window.location.reload();
};