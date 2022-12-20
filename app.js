const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

submitBtn.addEventListener('click', submithandler);

function submithandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr); 
}

function calculateProfitAndLoss(initial, quantity, current) {
    if(initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;

        showOutput(`Hey the loss is ${loss} and the loss percent is ${lossPercentage}%`);
    } else if(current > initial) {
        var profit = (current - initial) * quantity; 
        var profitPercentage = (profit / initial) * 100;

        showOutput(`Hey the profit is ${profit} and the percent is ${profitPercentage}%`);
    } else { 
        showOutput('No Pain No Gain and No Gain No Pain!');
    }
}

function showOutput(message) {
    outputBox.innerHTML = message;
    outputBox.style.color = 'green';
}