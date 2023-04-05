// Code your solution in this file!

function distanceFromHqInBlocks(value) {
    return Math.abs(value - 42);
}

function distanceFromHqInFeet(value) {
    return 264 * distanceFromHqInBlocks(value);
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start) * 264);
}

function calculatesFarePrice(start, destination) {
    let distanceTravelledInBlocks = Math.abs(destination - start);
    let distanceTravelledInFeet = distanceTravelledInBlocks * 264;

    if(distanceTravelledInFeet <= 400) {
        return 0;
    }
    else if(400 < distanceTravelledInFeet && distanceTravelledInFeet < 2000) {
        return  0.02 * (distanceTravelledInFeet - 400);
    }
    else if(2000 < distanceTravelledInFeet && distanceTravelledInFeet < 2500) {
        return 25; //(0.02 * 1600) + (25 * (2500 - distanceTravelledInFeet));
    }
    else if(distanceTravelledInFeet > 2500) {
        return "cannot travel that far";
    }   
}
//console.log(distanceFromHqInFeet(50));
//console.log(distanceTravelledInFeet(34, 28));
//console.log(calculatesFarePrice(43, 44));
//console.log(calculatesFarePrice(34, 32));
//console.log(calculatesFarePrice(50, 58));
