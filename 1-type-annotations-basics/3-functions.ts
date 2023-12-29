// In functions we can set the type for the parameters and the return value:
function square(num: number): number {
  return num * num;
}

function greet(name: string): string {
  name.toUpperCase();
  return `Hello ${name}`;
}

const doSomething = (person: string, age: number, isFunny: boolean): void => {
  console.log(
    `Hello ${person}, you are ${age} years old and you are funny: ${isFunny}`
  );
};
