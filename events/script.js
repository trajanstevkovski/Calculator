// MAIN SCRIPT


$(function () {
    let buttons = $("button");
    let screen = $("#screen");
    let disable = $(".buttons")
    let clear = $("#clearScreen");
    let coma = $("#coma");
    let str = "";
    let result = 0;
    let operator = [];
    let num = "";
    let numArray = [];
    let len = "";
    let temp1, temp2 = "";
    let pop;
    buttons.on("click", function () {
        let val = $(this).val();
        console.log(val);
        if (val == "c") {
            disable.removeAttr("disabled");
            numArray = [];
            operator = [];
            num = "";
            val = "";
        }
        if (val != "+" && val != "-" && val != "*" && val != "/" && val != "=") {
            if (val != "negative") {
                if (num.length <= 11) {
                    num += val;
                }
            } else {
                num = num * -1;
                val = "";
            }

            // console.log(num.length);
            if (val == ".") {
                coma.attr("disabled", "disabled");
            }
            if (numArray[0] != undefined) {
                screen.text(numArray[0] + " " + operator[0] + " " + num);
            } else {
                screen.text(num);
            }
        } else {
            coma.removeAttr("disabled");
            if (val == "=") {
                numArray.push(num);
                if (operator[0] == "+") {
                    result = Number(numArray[0]) + Number(numArray[1]);
                    // console.log(result);
                    // console.log(operator);
                    pop = operator.pop();
                    numArray.splice(0, 2, result);
                    operator.splice(0, 2, pop);
                    // console.log(numArray, operator);
                    screen.text(numArray[0]);
                } else if (operator[0] == "-") {
                    console.log(numArray[0], numArray[1]);
                    result = Number(numArray[0]) - Number(numArray[1]);
                    // console.log(result);
                    // console.log(operator);
                    pop = operator.pop();
                    numArray.splice(0, 2, result);
                    operator.splice(0, 2, pop);
                    // console.log(numArray, operator);
                    screen.text(numArray[0]);
                } else if (operator[0] == "*") {
                    // console.log(numArray[0], numArray[1]);
                    if (numArray[1] == "") {
                        numArray[1] = 1;
                    }
                    result = Number(numArray[0]) * Number(numArray[1]);
                    // console.log(result);
                    // console.log(operator);
                    pop = operator.pop();
                    numArray.splice(0, 2, result);
                    operator.splice(0, 2, pop);
                    // console.log(numArray, operator);
                    screen.text(numArray[0]);
                } else if (operator[0] == "/") {
                    // console.log(numArray[0], numArray[1]);
                    if (numArray[1] == "") {
                        numArray[1] = 1;
                    }
                    if (numArray[0] == 0 || numArray[1] == 0) {
                        str = "Ne Se deli so 0";
                        pop = operator.pop();
                        numArray.splice(0, 2, result);
                        operator.splice(0, 2, pop);
                        screen.text(str);
                        disable.attr("disabled", "disabled");
                    } else {
                        result = Number(numArray[0]) / Number(numArray[1]);
                        // console.log(result);
                        // console.log(operator);
                        pop = operator.pop();
                        numArray.splice(0, 2, result);
                        operator.splice(0, 2, pop);
                        // console.log(numArray, operator);
                        screen.text(numArray[0]);
                    }
                }
            } else {
                numArray.push(num);
                operator.push(val);
                screen.text(numArray[0] + " " + operator[0]);
                // console.log(numArray.length);
                if (numArray.length >= 2 && operator.length >= 2) {
                    // console.log(operator);
                    if (operator[0] == "+") {
                        console.log(numArray[0], numArray[1]);
                        result = Number(numArray[0]) + Number(numArray[1]);
                        // console.log(result);
                        // console.log(operator);
                        pop = operator.pop();
                        numArray.splice(0, 2, result);
                        operator.splice(0, 2, pop);
                        // console.log(numArray, operator);
                        screen.text(numArray[0] + " " + operator[0]);
                    } else if (operator[0] == "-") {
                        // console.log(numArray[0], numArray[1]);
                        result = Number(numArray[0]) - Number(numArray[1]);
                        // console.log(result);
                        // console.log(operator);
                        pop = operator.pop();
                        numArray.splice(0, 2, result);
                        operator.splice(0, 2, pop);
                        // console.log(numArray, operator);
                        screen.text(numArray[0] + " " + operator[0]);
                    } else if (operator[0] == "*") {
                        // console.log(numArray[0], numArray[1]);
                        if (numArray[1] == "") {
                            numArray[1] = 1;
                        }
                        result = Number(numArray[0]) * Number(numArray[1]);
                        // console.log(result);
                        // console.log(operator);
                        pop = operator.pop();
                        numArray.splice(0, 2, result);
                        operator.splice(0, 2, pop);
                        // console.log(numArray, operator);
                        screen.text(numArray[0] + " " + operator[0]);
                    } else if (operator[0] == "/") {
                        // console.log(numArray[0], numArray[1]);
                        if (numArray[1] == "") {
                            numArray[1] = 1;
                        }
                        if (numArray[0] == 0 || numArray[1] == 0) {
                            str = "Ne Se deli so 0";
                            pop = operator.pop();
                            numArray.splice(0, 2, result);
                            operator.splice(0, 2, pop);
                            screen.text(str);
                            disable.attr("disabled", "disabled");
                        } else {
                            result = Number(numArray[0]) / Number(numArray[1]);
                            // console.log(result);
                            // console.log(operator);
                            pop = operator.pop();
                            numArray.splice(0, 2, result);
                            operator.splice(0, 2, pop);
                            // console.log(numArray, operator);
                            screen.text(numArray[0] + " " + operator[0]);
                        }
                    }
                }
            }
            num = "";
            val = "";
        }
        
    })
})



// MAIN SCRIPT END