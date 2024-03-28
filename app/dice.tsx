

export default function Dice(props:any){

    //console.log("props", props)
    // #59E391

    return (
        <>
         <div className={`${props.isSelected === true ? "bg-[#59E391]" : "bg-[#FFFFFF]"} w-[35px] h-[35px] shadow-xl rounded-md flex justify-center`} 
              onClick={(event) => props.toggle(event.target, props.id)}>
            <h2 className="font-bold text-2xl">{props.number}</h2>
         </div>
        </>
    )
}