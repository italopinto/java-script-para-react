/* we can import the css graças ao vite */
// this behavior due to a software that does it for us like webpack, vite, etc
// it is not a JS standard behavior indeed
import "./style.css";

function CardGame() {
  return `
    <arcticle class="card-game">
      <img src="images/alura-pixel 1.svg" alt="Logo da Alura">
    </arcticle>
  `
}

export default CardGame;