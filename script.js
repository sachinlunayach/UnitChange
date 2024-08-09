function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let outputValue;

    if (isNaN(inputValue)) {
        alert("Please enter a valid number");
        return;
    }

    // Conversion logic
    const valueInMeters = toMeters(inputValue, inputUnit);
    outputValue = fromMeters(valueInMeters, outputUnit);

    document.getElementById('outputValue').value = outputValue;
}

function toMeters(value, unit) {
    switch (unit) {
        case 'm':
            return value;
        case 'cm':
            return value / 100;
        case 'km':
            return value * 1000;
        case 'ft':
            return value / 3.28084;
        case 'in':
            return value / 39.3701;
        case 'px':
            return value / 3779.528;
        default:
            return value;
    }
}

function fromMeters(value, unit) {
    switch (unit) {
        case 'm':
            return value;
        case 'cm':
            return value * 100;
        case 'km':
            return value / 1000;
        case 'ft':
            return value * 3.28084;
        case 'in':
            return value * 39.3701;
        case 'px':
            return value * 3779.528;
        default:
            return value;
    }
}
