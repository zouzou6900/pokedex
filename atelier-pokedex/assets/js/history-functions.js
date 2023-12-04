export function getHistory(){
    const history = JSON.parse(localStorage.getItem('history')) || [];
    return history
}

export function setHistory(data){
    const history = getHistory();
    if(history.length >=30) history.shift();
    history.push(data);
    localStorage.setItem('history',JSON.stringify(history));
}