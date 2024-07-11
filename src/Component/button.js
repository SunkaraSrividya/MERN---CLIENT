export default function button({onClick,label}){
    return(
        <button onClick={onClick} className="btn">
            {label}
        </button>
    )
}