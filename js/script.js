// script pour le formulaire de contact
const response = function () {

  let textarea = document.getElementsByTagName('textarea')[0];
  let itsok = true;

  if (textarea.validity.valid){
    let inputs = document.getElementsByTagName('input');
    for (let input of inputs) {
      if (!input.validity.valid){
        itsok = false;
        break;
      }
    }
  }else{
    itsok = false;
  }

  const errormsg = document.getElementById('errormsg');

  if (itsok){
    document.getElementById('formContact').innerHTML = 
    '<h3>Votre message a bien été envoyé</h3> \
    <p>Merci pour votre message.</p> \
    <p>Nous vous recontacterons dans les plus bref délai.</p> \
    ';
    errormsg.classList.remove('show');
  }else{
    errormsg.classList.add('show');
  }

  return false;
};

// script pour les pages de jeux
const gameCards = document.querySelectorAll('article.gameCard');
for (let gameCard of gameCards){
  gameCard.addEventListener('click', function (){
    let cardActive = false;
    if (gameCard.classList.value.indexOf('active') !== -1){
      cardActive = true;
    }
    gameCards.forEach(g => g.classList.remove('active'));
    if (!cardActive){
      gameCard.classList.add('active');
    }
  });
}