function Modal({ title, image, setOpen }) {
    return (
        <div onClick={() => setOpen(false)} className="mask">
            <div className="modal">
                <img src={image} />
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default Modal;