function print(text: string | string[]): string {
    if (typeof text === 'string') {
        return text;
    }

    // compiler now knows that you can use join
    // and that variable type is definitely string[]

    return text.join(' ');
}

let x = print('hello text');
let y = print(['hello', 'text', 'array']);

// let z = print(5); // Error: Argument of type '5' is not assignable to type 'string | string[]'

console.log(x);
console.log(y);

interface IStudent {
    id: string;
    age: number;
}

interface IWorker {
    companyId: string;
}

type IUnionType = IStudent | IWorker;

let p: IUnionType = {
    id: 'ID3241',
    age: 21
};

// p = 3; // Type '3' is not assignable to type 'IUnionType'

p = {
    companyId: 'cid993'
};

type CustomString = string;

type CustomType = string | number;

interface IStudent {
    id: string;
    age: number;
}

interface IWorker {
    companyId: string;
}

type IStudentAlias = IStudent;
type ICustomType = IStudent | IWorker;


let s: IStudentAlias = {
    id: 'ID3241',
    age: 2
};