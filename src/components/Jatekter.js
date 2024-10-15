import Lampa from "./Lampa"

export default function Jatekter(props){
    function katt(adat){
        props.katt(adat)
    }
    return(
        <>
            {
                props.lista.map((element, index) => {
                    return(<Lampa lampa = {element} key = {index} index = {index} katt = {katt}/>)
                })
            }
        </>
    )
}