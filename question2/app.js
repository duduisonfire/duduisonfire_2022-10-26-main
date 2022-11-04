const fs = require('fs/promises');

class DocumentInstructions {
    constructor() {
        this.file = new Array();
        this.address = 0;
    }

    async readFile(filename) {
        const contents = await fs.readFile(filename, 'utf-8');
        let file = contents.split(/\r?\n/);
        this.file = file;
    }

    async executeFile() {
        await document.readFile(`${__dirname}/commands.txt`);
        let command;
        for (let index = 0; index < this.file.length; index++) {
            if (this.file[index].charAt(0) === '5') {
                command = this.file[index].slice(1);
                index += Number(command)-1;
            } else if (this.file[index].charAt(0) === '2' && this.file[index].charAt(1) === '0') {
                command = this.file[index].slice(2);
                this.address += Number(command);
                console.log(`Adicionado ${command} ao endereço.`)
            }
        }

        return this.address;
    }

    async getAddress() {
        const address = await this.executeFile();
        console.log('O endereço é:');
        console.log('-------------');
        console.log(address);
    }
}

const document = new DocumentInstructions();

document.getAddress();