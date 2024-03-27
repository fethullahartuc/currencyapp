const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");

const wrapperBody = document.querySelector(".wrapper-body");

const currency = new Currency();

runEvents();

function runEvents() {
    addEventListener("load", addCurrencyToUI);
    amountInput.addEventListener("input", exchange);
    firstOption.addEventListener("change", exchange);
    secondOption.addEventListener("change", exchange);
}


function exchange() {
    if (amountInput.value === null) {
        resultInput = "";
    }
    const amount = Number(amountInput.value.trim())
    const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;

    currency.exchange(amount, firstOptionValue, secondOptionValue)
        .then(result => resultInput.value = result.toFixed(2))
}




function addCurrencyToUI() {
    const usd = document.querySelector("#usd");
    const eur = document.querySelector("#eur");
    const gbp = document.querySelector("#gbp");

    const dolar = currency.change("USD").then(res => usd.textContent += res.toFixed(2));
    const euro = currency.change("EUR").then(res => eur.textContent += res.toFixed(2));
    const sterlin = currency.change("GBP").then(res => gbp.textContent += res.toFixed(2));



}
