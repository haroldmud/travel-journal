import Card from "../interface/card"
import data from "../data"

export default function Main() {
  const collection = data;
  return(
    <div className="bg-white pb-12">
      {
        collection.map((item, id)=> 
          <div key={id}>
            <Card
              place={item.place}
              monument={item.monument}
              image={item.image}
              date={item.date}
              description={item.description}
              map={item.map}
            />
          </div>
        )
      }
    </div>
  )
}