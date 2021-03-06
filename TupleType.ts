export default function TupleTypeInit() {
    let tupleType: [string, number];

    tupleType = ['hey', 13];
    // tupleType = [5, 'hey']; // Error - '[number, string]' is not assignable to '[string, number]'
    // tupleType = ['hey', 'tuple']; // Error - '[string, string]' is not assignable to '[string, number]'

    tupleType[3] = 54; // this works well because union type string | number is used for indices outside of known ones
    tupleType[4] = 'test'; // works well because it can be string or number, union type
    // tupleType[5] = true; // Error - Type 'true' is not assignable to type 'string | number'

    console.log(tupleType);

    type Tuple = [boolean, number];

    let x: Tuple;

    x = [false, 0, 3, 3, true];

    interface ITuple {
        0: boolean,
        1: number
    }

    let y: ITuple;
    y = [false, 0, 3, 3, true];


    type IDictionaryTupleItem = [string, number];
    type IDictionaryTuple = IDictionaryTupleItem[];

    let myDictionary: IDictionaryTuple;
    myDictionary['10'] = 5;

    myDictionary['key1'] = 5;
    myDictionary['key2'] = 'some text';

    myDictionary['yes'] = true;
    myDictionary['yes'] = 5;

    interface IDictionary {
        [index: string]: number
    }

    let dict: IDictionary;
    dict['key1'] = 5;
    dict['key2'] = 1;
    dict[5] = 1;
}