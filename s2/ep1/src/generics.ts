function premierElement<T>(tableau: T[]): T {
    console.log(tableau[0]);
    return tableau[0];
}
type Obj = {nom: string, age: number};
const number: number[] = [1, 2, 3, 4, 5];
const string: string[] = ["str1", "str2", "str3", "str4", "str5"];
const obj: Obj[] = [{nom: "Max", age: 22}, {nom: "William", age: 25}, {nom: "Maud", age: 20}];

premierElement(number);
premierElement(string);
premierElement(obj);