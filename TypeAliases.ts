type Primitive = string | number | boolean;

let val: Primitive = 5;
val = false;
val = 'hello';
// val = []; // Type undefined[] is not assignable to type 'Primitive'. Type undefined[] is not assignable to type 'false'

console.log(val); // outputs 'hello'

enum LogLevel {
    Trace = 0,
    Info = 1,
    Warning = 2,
    Error = 4,
    InfoWarning = Info | Warning,
    Various = InfoWarning | Error
}
let b = LogLevel.InfoWarning;
console.log(b); // outputs 3

let c = LogLevel.Various;
console.log(c); // outputs 7