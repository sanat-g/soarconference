export default function Card(props) {
  return(
    <div className=" h-96 relative overflow-clip">
      <img src={props.imgpath} className= "mx-auto place-self-start object-top object-contain w-full h-96"/>
      <div className="p-4 mx-auto absolute bottom-0 bg-black opacity-80 w-full h-42 lg:h-28 self-center">
        <h4 className="text-center text-4xl">{props.title}</h4>
        <p className="text-center text-2xl">{props.members}</p>
      </div>
    </div>
  )
}