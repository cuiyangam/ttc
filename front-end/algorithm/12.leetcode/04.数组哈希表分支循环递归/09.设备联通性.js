const compute = (num, opers, questions) => {
    const status = getStatus(2, num);
    turnOnOff(status, opers);

    const results = [];
    for(let i = 0; i < questions.length; i++) {
        results.push(getResult(status, questions[i]));
    }

    return results;
}

const getStatus = (row, col) => {
    const result = [];
    for(let i = 0; i < row; i++) {
        result[i] = new Array(col).fill(true);
    }
    return result;
}

const turnOnOff = (status, opers) => {
    for(let i = 0; i < opers.length; i++) {
        status[opers[i][0]][opers[i][1]] = !status[opers[i][0]][opers[i][1]];
    }
}

const getResult = (status, endIndex) => {
    if(endIndex === 0) {
        return status[0][0] || status[1][0];
    }
    return status[0][endIndex] && getResultRec(status, endIndex - 1, 0)
        || status[1][endIndex] && getResultRec(status, endIndex - 1, 1);
}

const getResultRec = (status, endIndex, device) => {
    if(endIndex === 0) {
        return status[0][0] && device === 0 || status[1][0] && device === 1;
    }
    if(!status[device][endIndex]) {
        return false;
    }
    let otherDevice = device === 0 ? 1 : 0;
    return status[device][endIndex - 1] && getResultRec(status, endIndex - 1, device)
        || status[otherDevice][endIndex] && getResultRec(status, endIndex, otherDevice);
}

console.log(compute(5, [[0, 1], [1, 1]], [4]))