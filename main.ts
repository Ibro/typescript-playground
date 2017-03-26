import TupleTypeInit from './TupleType';

class Playground {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public appendTextToName(text: string) {
        this.name += text;
        return this.name;
    }

    public greet() {
        console.log(this.name);
    }
}

let play = new Playground('Typescript');
play.appendTextToName(' Playground');
play.greet();


// TupleTypeInit();
