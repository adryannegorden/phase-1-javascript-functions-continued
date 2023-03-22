// code your solution here
function saturdayFun(message = "roller-skate") {
    return `This Saturday, I want to ${message}!`
};

function mondayWork(location = "go to the office") {
    return `This Monday, I will ${location}.`
};

function wrapAdjective(highlight = "*") {
    return function(adjective) {
      return `You are ${highlight}${adjective}${highlight}!`;
    }
};