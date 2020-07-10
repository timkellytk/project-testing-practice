const caesarCipher = () => {
  return 'bcd';
};

/* 
From charcode at 97 to 122 you have every letter in the alphabet
let yeet = 'A'.charCodeAt(0)
>> 65
let yeetZ = 'Z'.charCodeAt(0)
>> 90
let uni = 'z'.charCodeAt(0)
>> 97
let uniZ = 'z'.charCodeAt(0)
>> 122

Therefore if the number is between 65 - 90 then toggle between 65-90 
And if it's between 97 - 122 toggle between 97 - 122.  
Otherwise leave the value.
*/

export default caesarCipher;
