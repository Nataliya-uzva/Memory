import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  constructor() { }


  getArrayOfDoubleClasses (number) {
    let len = (number % 2 === 0) ? number : number+1;
    let arr = [];
    let temp;
    for (let i = 0; i < (len/2); i++) {
      temp = this.getRandomClass();

      arr.push(temp, temp);
    }
    return arr;

  }

  getRandomClass() {
    let num1 = Math.floor(Math.random() * (28)),
      num2 = Math.floor(Math.random() * (17));

    let temp1 = ( num1 <= 9) ? ( '0' + num1): num1;
    let temp2 = (num2 <= 9) ? ('0' + num2): num2;

    return ('card' + temp1 + temp2);

  }
  getRandomNumberFromRange (number) {

    return Math.floor(Math.random() * (number));
  }

  getMixedArray (number) {
    var arr = this.getArrayOfDoubleClasses (number);
    var temp1, temp2, temp;
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      temp1 = this.getRandomNumberFromRange (len);
      temp2 = this.getRandomNumberFromRange (len);
      temp = arr[temp1];
      arr[temp1] = arr[temp2];
      arr[temp2] =  temp;
    }
    return arr;
  }


}
