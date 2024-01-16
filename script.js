let minValue;
let maxValue;
adValue();

function adValue() {

  document.querySelector('.numberItem').classList.add('invisible');
  document.querySelector('.answerFieldCss').classList.add('invisible');
  document.querySelector('.groupMinMax').classList.add('invisible');
  document.querySelector('.makeWishNumber').classList.add('invisible');
  document.querySelector('.buttonFurther').classList.add('visible');
  document.querySelector('.buttonStart').classList.add('invisible');
  document.querySelector('.buttonReplay').classList.add('invisible');

  document.querySelector('.buttonFurther').addEventListener('click', function () {

    document.querySelector('.numberItem').classList.add('invisible');
    document.querySelector('.answerFieldCss').classList.add('invisible');
    document.querySelector('.groupMinMax').classList.add('invisible');
    document.querySelector('.valueRange').classList.add('invisible');
    document.querySelector('.formValue').classList.add('invisible');
    document.querySelector('.buttonFurther').classList.add('invisible');
    document.querySelector('.buttonStart').classList.remove('invisible');
    document.querySelector('.buttonReplay').classList.add('invisible');

   
    minValue = parseInt(document.querySelector('#valueInputMin').value);
    maxValue = parseInt(document.querySelector('#valueInputMax').value);

    minValue = (minValue < -999) ? minValue = -999 : (minValue > 999) ? minValue = -999 : minValue;
    maxValue = (maxValue > 999) ? maxValue = 999 : (maxValue < -999) ? maxValue = 999 : maxValue;

    if (Number.isNaN(minValue) || Number.isNaN(maxValue)) {
      minValue = 0;
      maxValue = 100;
    }
    document.querySelector('.makeWishNumber').classList.remove('invisible');
    makeWishNumber.innerText = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;

  })

  document.querySelector('.buttonStart').addEventListener('click', function () {


    document.querySelector('.numberItem').classList.remove('invisible');
    document.querySelector('.answerFieldCss').classList.remove('invisible');
    document.querySelector('.groupMinMax').classList.remove('invisible');
    document.querySelector('.valueRange').classList.add('invisible');
    document.querySelector('.formValue').classList.add('invisible');
    document.querySelector('.makeWishNumber').classList.add('invisible');
    document.querySelector('.buttonFurther').classList.add('invisible');
    document.querySelector('.buttonStart').classList.add('invisible');
    document.querySelector('.buttonReplay').classList.remove('invisible');

    let answerNumber = Math.ceil((minValue + maxValue) / 2);

    let orderNumber = 1;
    let gameRun = true;

    const orderNumberField = document.getElementById("orderNumberField");
    console.log(orderNumberField);

    const answerField = document.getElementById("answerField");


    let natur = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    let teens = ['', 'десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let dozens = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    function numberText() {
      let number = Math.abs(answerNumber);
      let textNumber = '';

      if (number == 0) {
        textNumber = 'ноль';
        return textNumber;
      }
      if (number <= 9) {
        return natur[number];
      }
      if (number > 9 && number < 20) {
        return teens[Math.floor(number / 10 + number % 10)];
      }

      if (number >= 20 && number <= 99) {
        return dozens[(Math.floor(number / 10)) - 1] + " " + natur[Math.floor(number % 10)];
      }

      if (number >= 100 && number <= 999) {
        return hundreds[Math.floor(number / 100)] + " " + numberTextHundreds();
      }
    }

    function numberTextHundreds() {
      let naturTeensDozens = Math.abs(answerNumber) % 100;

      if (naturTeensDozens <= 9) {
        return natur[Math.floor(naturTeensDozens / 1)];
      }

      if (naturTeensDozens > 9 && naturTeensDozens < 20) {
        return teens[(Math.floor(naturTeensDozens / 10)) + (naturTeensDozens % 10)];
      }

      if (naturTeensDozens >= 20 && naturTeensDozens <= 99) {
        return dozens[(Math.floor(naturTeensDozens / 10)) - 1] + " " + natur[Math.floor(naturTeensDozens % 10)];
      }
    }

    orderNumberField.innerText = orderNumber;

  
    let answerFieldText = "";
    let answerFieldCorrect = "";
   
    function randomAnswerFieldText() {
      const phraseRandom = Math.random();
      console.log('phraseRandom = ' + phraseRandom);
      if (phraseRandom <= 0.3) {
        answerFieldText = 'Вы загадали число';
      } else if ((phraseRandom) => 0.7) {
        answerFieldText = 'Это легко! Вы загадали:';
      } else {
        answerFieldText = 'Скорее всего, это число';
      }
      console.log('answerFieldText = ' + answerFieldText);
    }
 
    randomAnswerFieldText();

    answerField.innerText = answerNumber >= 0 ? numberText().length < 20 && answerNumber >= 0 ? `${answerFieldText} ${numberText()}?` : `${answerFieldText} ${answerNumber}?` : numberText().length < 20 ? `${answerFieldText} минус ${numberText()}?` : `${answerFieldText} ${answerNumber}?`;


    document.getElementById("btnOver").addEventListener("click", function () {
      if (gameRun) {
        if (minValue === maxValue) {
          const phraseRandom = Math.round(Math.random());
          console.log("phraseRandom - " + phraseRandom);
          const answerPhrase =
            phraseRandom === 1 ?
            `Вы загадали неправильное число!\n\u{1F914}` :
            `Я сдаюсь..\n\u{1F92F}`;

          answerField.innerText = answerPhrase;
          gameRun = false;
        } else {
          randomAnswerFieldText();
          minValue = answerNumber + 1;
          answerNumber = Math.floor((minValue + maxValue) / 2);
          orderNumber++;
          orderNumberField.innerText = orderNumber;
          answerField.innerText = answerNumber >= 0 ? numberText().length < 20 && answerNumber >= 0 ? `${answerFieldText} ${numberText()}?` : `${answerFieldText} ${answerNumber}?` : numberText().length < 20 ? `${answerFieldText} минус ${numberText()}?` : `${answerFieldText} ${answerNumber}?`;
        }
      }
    });

    document.getElementById("btnLess").addEventListener("click", function () {
      if (gameRun) {
        if (minValue === maxValue || minValue === answerNumber) {
          const phraseRandom = Math.round(Math.random());
          const answerPhrase =
            phraseRandom === 1 ?
            `Вы загадали неправильное число!\n\u{1F914}` :
            `Я сдаюсь..\n\u{1F92F}`;

          answerField.innerText = answerPhrase;
          gameRun = false;
        } else {
          randomAnswerFieldText();
          maxValue = answerNumber - 1;
          answerNumber = Math.ceil((minValue + maxValue) / 2);
          orderNumber++;
          orderNumberField.innerText = orderNumber;
          answerField.innerText = answerNumber >= 0 ? numberText().length < 20 && answerNumber >= 0 ? `${answerFieldText} ${numberText()}?` : `${answerFieldText} ${answerNumber}?` : numberText().length < 20 ? `${answerFieldText} минус ${numberText()}?` : `${answerFieldText} ${answerNumber}?`;
          
        }
      }
    });

    function randomAnswerFieldCorrect() {
      const phraseRandomCorrect = Math.random();
      console.log('phraseRandomCorrect = ' + phraseRandomCorrect);
      if (phraseRandomCorrect <= 0.3) {
        answerFieldCorrect = 'Я всегда угадываю\n\u{1F60E}';
      } else if ((phraseRandomCorrect) => 0.7) {
        answerFieldCorrect = 'Проще простого\n\u{1F61C}';
      } else {
        answerFieldCorrect = 'Угадать было легко\n\u{1F61C}';
      }
      console.log('answerFieldCorrect = ' + answerFieldCorrect);
    }

    randomAnswerFieldCorrect();

    document.getElementById("btnEqual").addEventListener("click", function () {
      if (gameRun) {
        randomAnswerFieldCorrect();
        answerField.innerText = `${answerFieldCorrect}!`;
        gameRun = false;
      }
    });


  }) 
} 

document.getElementById("btnReplay").addEventListener("click", function () {

  document.querySelector('.numberItem').classList.add('invisible');
  document.querySelector('.answerFieldCss').classList.add('invisible');
  document.querySelector('.groupMinMax').classList.add('invisible');
  document.querySelector('.makeWishNumber').classList.add('invisible');

  document.querySelector('.valueRange').classList.remove('invisible');
  document.querySelector('.formValue').classList.remove('invisible');
  document.querySelector('#valueInputMin').value = '';
  document.querySelector('#valueInputMax').value = '';

  document.querySelector('.buttonFurther').classList.remove('invisible');
  document.querySelector('.buttonStart').classList.add('invisible');
  document.querySelector('.buttonReplay').classList.add('invisible');


  adValue();
 
});


const randomCheck = Math.round(Math.random());
console.log("randomCheck - " + randomCheck);

const randomNumberThree = Math.round(Math.random() * 3);
console.log('randomNumberThree - ' + randomNumberThree);