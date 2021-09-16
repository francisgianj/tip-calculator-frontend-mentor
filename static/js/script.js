

document.addEventListener("keyup", (event)=> {

    let billInput = parseFloat(document.querySelector("#bill").value);
    let numOfPeople = parseFloat(document.querySelector("#num-of-people").value);

    const tipValueContainer = parseFloat(document.querySelector("#tip-value-container").innerHTML);

    const tipAmount = document.querySelector("#tip-amount");
    const totalAmount = document.querySelector("#total-amount");

    if (tipValueContainer != 0 && billInput) {
        if (!numOfPeople) numOfPeople = 1;

        const calculateTip = billInput * tipValueContainer;
        tipAmount.innerHTML = `$${(calculateTip / numOfPeople).toFixed(2)}`;

        const calculateTotal = (billInput + calculateTip) / numOfPeople;
        totalAmount.innerHTML = `$${calculateTotal.toFixed(2)}`;
    }

    if (!billInput){
        tipAmount.innerHTML = "$0.00";
        totalAmount.innerHTML = "$0.00";
    }

});


const getPercent = (element) => {
    let buttonValue = parseFloat(element.value);
    document.querySelector("#tip-value-container").innerHTML = buttonValue;

    let billInput = parseFloat(document.querySelector("#bill").value);
    let numOfPeople = parseFloat(document.querySelector("#num-of-people").value);
    if (!numOfPeople) numOfPeople = 1;

    if (billInput) {
        const tipAmount = document.querySelector("#tip-amount");
        const totalAmount = document.querySelector("#total-amount");

        const calculateTip = billInput *  buttonValue;
        tipAmount.innerHTML = `$${(calculateTip / numOfPeople).toFixed(2)}`;

        const calculateTotal = (billInput + calculateTip) / numOfPeople;
        totalAmount.innerHTML = `$${calculateTotal.toFixed(2)}`;
        return;
    }

};



