function traiterValeur(arg: string| number): void{
    if(typeof arg === "string")
        console.log(arg.length);
    else if(typeof arg === "number")
        console.log((arg + arg));
}

traiterValeur("test");
traiterValeur(15);