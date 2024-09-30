type Props={
    num: number;
}

export function Recipe(props:Props){
    
    if(props.num<=2){
        return(<>
            <p>Kettő személyre:</p>
            <p>&emsp;Forraljon fel 2 csésze vizet.
    Adjunk hozzá 2 kanál tetszőleges teát és 1 kanál fűszert.
    Adjunk hozzá 1 csésze tejet, hogy felforraljuk, és ízlés szerint cukrot.</p>
        </>)
    }
    else{
        return(<>
        <p>Egy összejövetelre</p>
        <p>&emsp;Forraljon fel 4 csésze vizet.
    Adjunk hozzá 4 kanál (tetszőleges) teát és 2 kanál fűszert.
    Adjunk hozzá 2 csésze tejet forralni és ízlés szerint cukrot.</p>
        </>)
    }
    
}