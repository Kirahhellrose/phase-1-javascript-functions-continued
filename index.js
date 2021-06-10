//Saturday Fun
const saturdayFun = function(weekendFun="roller-skate"){
    return `This Saturday, I want to ${weekendFun}!`
}
saturdayFun(weekendFun ="bathe my dog");

//Monday Work 
 function mondayWork (grindStone = "go to the office"){
    return `This Monday, I will ${grindStone}.`
};


//Wrap Adjective 
function wrapAdjective (punctuation="*"){
    const innerfunction = function(job="special"){
        return `You are ${punctuation}${job}${punctuation}!`
    }
   return innerfunction 
};
