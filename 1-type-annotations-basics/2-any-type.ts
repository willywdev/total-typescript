// 'any' is an escape hatch. It turns off type checking
const complicatedData: any = "very complicated";

// If a variable is declared without a type, it is implicitly 'any'
let implicitAny;

// Even after a variable is initialized, it is still implicitly 'any'
implicitAny = "still any";
implicitAny = 1;
implicitAny = true;
implicitAny = ["anything", "you", "want", 1, true];

// Because of this we try to avoid 'any' as much as possible
