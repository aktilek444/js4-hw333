import data from '../data/db.json'

function ModalCart({ setOpen }) {
	return (
		<div className='mask' onClick={() => setOpen(false)}>
			<div className='modal'>
				<div className='cardGrid'>
					{data.slice(0, 12).map((item, index) => (
						<div className='cardCart' key={index}>
							<img src={item.image} alt={item.title} />
							<h1>{item.title}</h1>
							<button>delete</button>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ModalCart
