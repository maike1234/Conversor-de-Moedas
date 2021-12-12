const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");

const dolar = 5.61;
const euro = 6.35
const bitcoin = 0.0000037

const convertValues = () => {
    const inputReais = document.getElementById("input-real").value;
    const realValueText = document.getElementById("real-value-text");
    const currencyValueText = document.getElementById("currency-value-text");

    realValueText.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais);


    if (select.value === 'US$ Dólar americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar);
    }


    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro);
    }

    if (select.value === 'Bitcoin') {
        currencyValueText.innerHTML = new Intl.NumberFormat({
            style: "currency",
            currency: "BTC",
        }).format(inputReais / bitcoin);
    }

};

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.getElementById("currency-img")

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro";
        currencyImg.src = "./img euro.svg"
    }

    if (select.value === "US$ Dólar americano") {
        currencyName.innerHTML = "Dólar americano";
        currencyImg.src = "./estados-unidos (1) 1.svg"
    }

    if (select.value === "Bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImg.src = "./bitcoin.svg"
    }
    convertValues()
}


button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);