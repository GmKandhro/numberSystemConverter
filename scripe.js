// Function to convert between number systems
function convertNumber(value, fromBase, toBase) {
    if (!value) return "";
    try {
        const decimalValue = parseInt(value, fromBase);
        if (isNaN(decimalValue)) throw new Error("Invalid Input");
        return decimalValue.toString(toBase).toUpperCase();
    } catch {
        return "Error: Invalid Input";
    }
}

// Handling the conversion process
document.getElementById("convertButton").addEventListener("click", () => {
    const inputValue = document.getElementById("inputValue").value.trim();
    const fromSystem = document.getElementById("fromSystem").value;
    const toSystem = document.getElementById("toSystem").value;

    const baseMap = {
        decimal: 10,
        binary: 2,
        octal: 8,
        hexadecimal: 16,
    };

    const result = convertNumber(inputValue, baseMap[fromSystem], baseMap[toSystem]);
    document.getElementById("result").value = result;
});
