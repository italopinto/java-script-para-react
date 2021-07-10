/*
Objects são elementos estruturais, não são tão
reutilizáveis quanto os componentes, pois a ideia
é que os objects organizem esses componentes
*/

import CardGame from "../../components/CardGame";

function BoardGame(amountCards){
  const $htmlCardGame = CardGame();
  const $htmlBoardGame = $htmlCardGame.repeat(amountCards)
  
  return $htmlBoardGame;
};

export default BoardGame;