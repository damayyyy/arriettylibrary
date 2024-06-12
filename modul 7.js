function calculate() {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    var operation = document.getElementById('operation').value;
    var result;

    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Tidak bisa dibagi dengan nol";
            }
            break;
        default:
            result = "Operasi tidak valid";
    }

    document.getElementById('result').innerHTML = '<h3>Hasil: <span>' + result + '</span></h3>';
}
