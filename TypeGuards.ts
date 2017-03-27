class Student {
    study() {
    }
}
class Professor {
    teach() {
    }
}
function getPerson(n: number): Student | Professor {
    if (n === 1) {
        return new Student();
    } else {
        return new Professor();
    }
}
let person: Student | Professor = getPerson(1);
if (person instanceof Student) {
    person.study(); // OK
} else {
    // person.study(); // Error, person is of type Professor here.
    // so compiler recognizes we can call function teach()
    person.teach();
}
