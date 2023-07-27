export default function CardComment(props:any){
    return(
        <div className="p-6 bg-[#21293C] drop-shadow-lg rounded-mg">
            <div>
              Fylo hsa improved our team productivity by an order of
              magnitude. Since making the switch our team has become
              a well-oiled collaboration machine.
            </div>
            <div className="flex flex-row mt-5">
              <img className="rounded-full w-10 mr-2" src={props.img}/>
              <div className="flex flex-col ">
                <h1 className="font-bold text-sm">{props.name}</h1>
                <p className="text-xs">Founder & CEO, Huddle</p>
              </div>
            </div>
        </div>
    )
}