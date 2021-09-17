document.addEventListener("keyup", (event)=> {
    // Custom tip input id: custom-tip-input
    const tipValueContainer = document.querySelector("#tip-value-container");
    const customTipInput = parseFloat(document.querySelector("#custom-tip-input")
    .value);

    // TODO 
    // Figure out when the the user just clear out the custom input
    // and doesn't click any button, set the tipValueContainer to 0
    // without breaking it.
    if (customTipInput) {
        tipValueContainer.innerHTML = customTipInput / 100;
    }

    // if (!customTipInput) {
    //     tipValueContainer.innerHTML = 0;
    // }


    let billInput = parseFloat(document.querySelector("#bill").value);
    let numOfPeople = parseFloat(document.querySelector("#num-of-people")
    .value);

    const tipAmount = document.querySelector("#tip-amount");
    const totalAmount = document.querySelector("#total-amount");

    if (tipValueContainer != 0 && billInput) {
        if (!numOfPeople) numOfPeople = 1;

        const calculateTip = billInput * parseFloat(tipValueContainer.innerHTML);
        tipAmount.innerHTML = `$${(calculateTip / numOfPeople).toFixed(2)}`;

        const calculateTotal = (billInput + calculateTip) / numOfPeople;
        totalAmount.innerHTML = `$${calculateTotal.toFixed(2)}`;
        return;
    }

    if (!billInput){
        tipAmount.innerHTML = "$0.00";
        totalAmount.innerHTML = "$0.00";
        return;
    }

});


const getPercent = (element) => {
    document.querySelector("#custom-tip-input").value = "";  // remove what's inside the text field
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

const reset = () => {
    document.querySelector("#bill").value = "";
    document.querySelector("#num-of-people").value = "";
    document.querySelector("#custom-tip-input").value = "";
    document.querySelector("#tip-value-container").innerHTML = 0;
    document.querySelector("#tip-amount").innerHTML = "$0.00";
    document.querySelector("#total-amount").innerHTML = "$0.00";
};
