export default function TupleTypeInit () {
    let tupleType: [string, number];

    tupleType = ['hey', 13];
    // tupleType = [5, 'hey']; // Error - '[number, string]' is not assignable to '[string, number]'
    // tupleType = ['hey', 'tuple']; // Error - '[string, string]' is not assignable to '[string, number]'

    tupleType[3] = 54; // this works well because union type string | number is used for indices outside of known ones
    tupleType[4] = 'test'; // works well because it can be string or number, union type
    // tupleType[5] = true; // Error - Type 'true' is not assignable to type 'string | number'

    console.log(tupleType);
}