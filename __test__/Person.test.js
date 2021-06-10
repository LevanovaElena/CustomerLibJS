const {Person}=require("../src/Person")

test("ShouldBeCreatePerson",()=>{
    let person;
    person = new Person("Ivan", "Ivanov");
    expect(person).not.toBeNull();
    expect(person._firstName).toBe("Ivan");
    expect(person._lastName).toBe("Ivanov");
});

