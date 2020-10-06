export class Person {
  id: number;
  lastName = "UNKNOWN";
  firstName = "UNKNOWN";
  age = 999;

  constructor(id: number, lastName: string, firstName: string, age: number) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
  }
}

const personList = new Map([
  ["1", new Person(1, "Meier", "Hans", 40)],
  ["2", new Person(2, "Mahler", "Sandra", 32)],
  ["3", new Person(3, "Huber", "Franz", 56)],
]);

export class PersonService {
  static getAllPersons() {
    return Array.from(personList.values());
  }

  static getPersonForId(id: string) {
    return personList.get(id);
  }
}
