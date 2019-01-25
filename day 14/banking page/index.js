// accounts
const accOne = "1";
let accOneBalance = 790;

const accTwo =  "000986056";
let accTwoBalance = 5600;

const accThree = "001546238";
let accThreeBalance = 78065;

const accFour = "030987456";
let accFourBalance = 120910;
// functions
// let askForAcc = prompt("Please, enter your account number");
// let askAction = prompt("Please, choose an action:")
let currentBalance;

const showBalance = (accNum) => {
    
    let currentBalance = null;
    switch (accNum) {
        case accOne:
        currentBalance = accOneBalance;
        break;

        case accTwo:
        currentBalance = accTwoBalance;        
        break;

        case accThree:
        currentBalance = accThreeBalance;       
        break;

        case accFour:
        currentBalance = accFourBalance;        
        break;

        default:
        alert("You have entered invalid account number")
        
    }
    return alert("Your current balance is: " + currentBalance + " euro");
}

const withdrawAction = (withdrawnAmount) => {
    let askForAccWithdrawAcc = prompt("Please, enter your account number from witch you want to withdraw:");
    let newBalance = null;
    let noFundsAlert = alert("Your account doesnt have sufficient funds");
    switch(askForAccWithdrawAcc) {
        case accOne:
        if ((accOneBalance - withdrawnAmount) < 0) {
            return noFundsAlert;
        } else {
            newBalance = accOneBalance - withdrawnAmount;
        }

        case accTwo:
        if ((accTwoBalance - withdrawnAmount) < 0) {
            return noFundsAlert;
        } else {
            newBalance = accTwoBalance - withdrawnAmount;
        }

        case accThree:
        if ((accThreeBalance - withdrawnAmount) < 0) {
            return noFundsAlert;
        } else {
            newBalance = accThreeBalance - withdrawnAmount;
        }

        case accFour:
        if ((accFourBalance - withdrawnAmount) < 0) {
            return noFundsAlert;
        } else {
            newBalance = accFourBalance - withdrawnAmount;
        }
    }
    return  alert("Your new balance is:" + newBalance + " euro");
}
// showBalance(askForAcc);

const actionSwitch = (actionChoice) => {

    switch(actionChoice) {
        case "balance":
        let askForAcc = document.getElementById("accNumber");
        let givenInput = askForAcc.value;

        showBalance(givenInput);
        break;

        case "withdraw":
        let withdrawnAmount = parseInt(prompt("How much do you want to withdraw:"));
        withdrawAction();
        break;

        default:
        alert("Not a recognized action")
    }
}

const askForAction = () => {
    let askAction = prompt("Please, choose an action:");
    actionSwitch(askAction);
}

// askForAction();

