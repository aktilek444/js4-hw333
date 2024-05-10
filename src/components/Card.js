import { useState } from "react"
import Modal from "./Moda;"

function Card({ image, title, price, country }) {
    const [open, setOpen] = useState(false)


    return (
        <>
            <div onClick={() => setOpen(true)} className='card'>
                <img src={image} />
                <h1>{title}</h1>
                <p>{price}</p>
                <b>{country}</b>
                <button>add to cart</button>
            </div>
            {open === true ? <Modal setOpen={setOpen} title={title} image={image} /> : ''}
        </>
    )
}
export default Card