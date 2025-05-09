import "bootstrap";
import "./style.css";


window.onload = function() {
  const suits = [
    { symbol: "♥", class: "heart" },
    { symbol: "♠", class: "spade" },
    { symbol:"♣", class: "club" },
    { symbol: "♦", class: "diamond" },

  ];
  const numbers =[
    "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
  ];
  function getRandomCard() {
    const suit= suits[Math.floor(Math.random()*suits.length)];
    const numberRandom= numbers[Math.floor(Math.random()*numbers.length)];
    return {suit, numberRandom};

  }
  function displayCard(){
    const card = getRandomCard();
    const topSuits = document.querySelector(".top-suits");
    const bottomSuits = document.querySelector(".bottom-suits");
    const numberRandom = document.querySelector(".number");

    topSuits.innerHTML = card.suit.symbol;
    bottomSuits.innerHTML = card.suit.symbol;
    numberRandom.innerHTML = card.numberRandom;

    topSuits.classList.add(card.suit.class);
    bottomSuits.classList.add(card.suit.class);
  }
  displayCard()
  document.getElementById("newCardBtn").addEventListener("click", displayCard);

  setInterval(displayCard, 10000);

};
