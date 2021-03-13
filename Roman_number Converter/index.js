function convertToRoman(num) {
 const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 const roman = ["m", "cm", "d", "cd", "c", "xc", "l", "xl", "x", "ix", "v", "iv", "i"];
 var romanNum = "";
 for(let i = 0; i < decimal.length; i++){
   while(decimal[i] <= num){
     romanNum += roman[i];
     num -= decimal[i];

   }

 }
 return romanNum.toUpperCase();
}

console.log(convertToRoman(10));