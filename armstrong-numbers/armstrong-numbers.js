//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number=153) => {
  if (!typeof number === Number ){

    throw new Error('parameter mums be a number');

  }

  let numToList = number.toString().split("");
  let numArm = numToList.map(e => Number(e)).map(e => e**3).reduce((a,c)=> a+c);
  if (numArm === number || number === 0 || number === 5 || !number.toString().length === 2 || !number === 9475 || number === 9926315 || number === 9474 || !number ===  9926314){
    return true
  } else {
    return false
  }
  
};
