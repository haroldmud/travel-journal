export default function Card(props) {
  return(
    <section className="flex justify-center pt-[4rem]">
      <div className="flex md:flex-row flex-col justify-between md:w-[95.5%] w-[87%] md:pl-12">
        <div className="md:w-[26.8%] w-full">
          <img className="w-full" src={`/assets/images/${props.image}.png`} alt="mont fuji" />
        </div>
        <div className="md:w-[67.7%] md:mt-0 mt-4 flex flex-col justify-center">
          <div className="">
            <div className="flex gap-3 text-[12px] ">
              <div className="flex gap-2">
                <div className=" flex flex-col justify-center">
                  <img className="w-[10px]  h-[fit-content]" src="assets/icons/location.png" alt="location" />
                </div>
                <p>{props.place}</p>
              </div>
              <div className="flex flex-col justify-center">
              <a target="_blank" href={props.map} className="text-[#918e9b] text-[12px] font-[400] underline leading-[12px]">View on Google Maps</a>

              </div>
            </div>
            <div>
              <h2 className="font-bold text-[35px]">{props.monument}</h2>
              <div className="gap-3 mt-4">
                <h1 className="font-bold text-[12px]">{props.date}</h1>
                <p className="mt-2">{props.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}