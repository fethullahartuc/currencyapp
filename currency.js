class Currency {
    constructor() {
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_v82xeQNYPND3zSR8xqenlJQcyk8l7X7BZGSy1oLZ&base_currency=";
    }

    async exchange(amount, firstCurrency, secondCurrency) {
        const response = await fetch(`${this.url}${firstCurrency}`);
        const result = await response.json();
        const exchangedResult = amount * result.data[secondCurrency];

        return exchangedResult;
    }

    async change(currency) {
        const response = await fetch(`${this.url}${currency}`);
        const result = await response.json();
        const selectedResult = result.data["TRY"];
        return selectedResult;
    }
}