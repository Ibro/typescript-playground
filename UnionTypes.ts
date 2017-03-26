function print(text: string | string[]): string {
    if (typeof text === 'string') {
        return text;
    }
    return text.join(' ');
}

let x = print('hello text');
let y = print(['hello', 'text', 'array']);

console.log(x);
console.log(y);