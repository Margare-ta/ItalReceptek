type Props={
    name: string
    date: string
    timeWasted: number
}

export function MyFooter(props: Props) {
    return(
        <>
            <p>Az oldalt készítette: {props.name}</p>
            <p>A készítés dátuma: {props.date}</p>
            <p>A feladatra fordított idő: {props.timeWasted} perc.</p>
            <p>Nyilatkozat MI használatáról. Nem használtam MI-t a feladatmegoldáshoz.</p>
        </>
        )
    
}