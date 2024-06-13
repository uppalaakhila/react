export default function Displaycar(props) {
    return (
        <div>
            {
                props.cars.map((car)=>(
                    <div>
                        <p>{car.name}</p>
                        <p>{car.price}</p>
                        <p>{car.description}</p>
                        <img src={car.image} alt={car.name}/>
                        </div>

                ))
            }
        </div>
    )
}