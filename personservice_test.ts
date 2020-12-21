import { Person } from "./personservice.ts";
import { PersonService } from "./personservice.ts";
import { assertArrayIncludes, assertEquals } from "./deps.ts";

Deno.test("Create a test Person object", () => {
  const person = new Person(1, "McGulley", "Mike", 43);
  assertEquals(person.id, 1);
  assertEquals(person.lastName, "McGulley");
  assertEquals(person.firstName, "Mike");
  assertEquals(person.age, 43);
});

Deno.test("All persons are returned", () => {
  const personList = PersonService.getAllPersons();
  assertEquals(personList.length, 3);
  assertArrayIncludes<Person>(personList, [new Person(1, "Meier", "Hans", 40)]);
  assertArrayIncludes<Person>(
    personList,
    [new Person(2, "Mahler", "Sandra", 32)],
  );
  assertArrayIncludes<Person>(
    personList,
    [new Person(3, "Huber", "Franz", 56)],
  );
});

Deno.test("Person with id 1 is returned", () => {
  const person = PersonService.getPersonForId("1");
  assertEquals(person?.id, 1);
  assertEquals(person?.lastName, "Meier");
  assertEquals(person?.firstName, "Hans");
  assertEquals(person?.age, 40);
});
