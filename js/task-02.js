"use strict";

const calculateEngravingPrice = function (message, pricePerWord) {
  message = Array.from(arguments);
  pricePerWord = 10;
  //   for (const argument of arguments) {
  //     message += argument;
  //   }
  //   return message + pricePerWord;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);
