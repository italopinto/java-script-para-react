/* queryselector */
// queryseletor legado do jquery
// boa prática, com o sifrão na frente, sabe-se que essa variável/constante carrega algum elemento da tela, do DOM ou BOM
// a cerquilha em `#root` é o seletor de `id`
// queryselector é mais poderoso que o getelementbyid, só tem que especificar o seletor como a cerquilha, por exemplo

/* innerHTML */
// instead of use innerHTML to insert html use others like insertchild, insertadjacenthtml (much faster than innerHTML), etc
// because innerHTML has security issues, see MDN
// DON'T USE INNERHTML!!!!
import "./src/styles/settings/colors.css"
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css"

import BoardGame from "./src/objects/BoardGame";
import ScoreBoard from "./src/objects/ScoreBoard";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML('beforeend', 
  `
    ${ScoreBoard()}
    ${BoardGame(6)}
  `
);

