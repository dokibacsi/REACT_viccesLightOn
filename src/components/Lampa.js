export default function Lampa(props){
        function katt(){
            props.katt(props.index)
        }
    
    return(
        <div className= {`lampa_${props.lampa ? "fel" : "le"}`} onClick = {katt}/>
    )
}