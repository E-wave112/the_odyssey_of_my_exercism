//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name='Alice') => {

    if (name.length === 0){
        return 'One for you, one for me'
    }else if (name.length>0 || undefined || name === 'Alice' || name === 'Bob'){
        return `One for ${name}, one for me`

    }
  
};
