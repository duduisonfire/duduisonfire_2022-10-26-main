let minPassword = 184759 + 1;
let maxPassword = 856920 - 1;

class PasswordCombinationVerify {
    constructor() {
        this.actualPassword = minPassword;
        this.allValidPassword = new Set();
        this.allInvalidPassword = new Set();
    }

    verifyDouble(number = this.actualPassword) {
        let actualPassword = `${number}`;

        for (let index = 0; index < actualPassword.length; index++) {
            if (actualPassword.charAt(index) === actualPassword.charAt(index+1)) {
                return true;
            }
        }

        return false;
    }

    checkGreaterThan(number = this.actualPassword) {
        let actualPassword = `${number}`;
        
        for (let index = 0; index < actualPassword.length; index++) {
            let next = index+1 === actualPassword.length ? index : index+1;
            let left = Number(actualPassword.charAt(index));
            let right = Number(actualPassword.charAt(next));
            if (left > right) {
                return false;
            }
        }

        return true;
    }

    validatePassword() {
        return (this.verifyDouble() && this.checkGreaterThan());
    }

    passwordIterate() {
        this.actualPassword += 1;
    }

    countValidPassword() {
        for (let index = 0; index < maxPassword-minPassword; index++) {
            if (this.validatePassword()) {
                console.log(`${this.actualPassword} is valid`);
                this.allValidPassword.add(this.actualPassword);
                this.passwordIterate();
            } else {
                console.log(`${this.actualPassword} is invalid`);
                this.allInvalidPassword.add(this.actualPassword);
                this.passwordIterate();
            }
        }
    }
}


let password = new PasswordCombinationVerify();
password.countValidPassword();

console.log(' ');
console.log('Essas são todas as senhas válidas:');
console.log('----------------------------------');
password.allValidPassword.forEach(element => console.log(element));
console.log('----------------------------------');
console.log(`Existem ${password.allValidPassword.size} senhas válidas.`);
console.log(`Existem ${password.allInvalidPassword.size} senhas inválidas.`);
console.log('----------------------------------');