// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
const mondayWork = function(activity= "go to the office"){
    return `This Monday, I will ${activity}.`;

}

function wrapAdjective(vvfx= "*"){
    return function adjv(rex="special"){
        return  `You are ${vvfx}${rex}${vvfx}!`
    }
}