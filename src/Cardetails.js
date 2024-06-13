import React, { useState } from 'react'
import  Displaycar from './Displaycar'
export default function CarDetails() {
    const [carDetails, setCarDetails] = useState([
        {
            name: 'Benz',
            price: '30,0000,00',
            description: "costly car",
            image: "https://th.bing.com/th?id=OIP.qNJ-3o_aLdtFRswCO9VLOgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        },
        {
            name: 'Mahindra',
            price: '20,0000,00',
            description: "costly car",
            image: "https://th.bing.com/th/id/OIP.xJEflPVDqan2JcqKOXhgLAHaEK?w=309&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        }])
    return (
        <div>
            <Displaycar cars={carDetails} />
        </div>
    )


}