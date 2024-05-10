
import data from '../data/db.json'
import { useState } from 'react';
import Colors from '../components/Colors';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Foooter';
function HomePage() {
    const [query, setQuery] = useState('')
    const [state, setState] = useState('hello')
    console.log(state);
    const [serchRes, setSerchRes] = useState(data)

    const handleInputChange = event => {
			const inputValue = event.target.value.toLowerCase()
			const filteredData = data.filter(item =>
				item.title.toLowerCase().includes(inputValue)
			)
			setSerchRes(filteredData)
			setQuery(inputValue)
		}

    function HandleDortByAck() {
        return setSerchRes([...serchRes].sort((a, b) => a.price - b.price))
    }

    function HandleDortByDesc() {
        const sortedData = [...serchRes].sort((a, b) => b.price - a.price)
        return setSerchRes(sortedData)
    }

    const handleSortByCountry = event => {
			const selectedCountry = event.target.value.toLowerCase()
			const filteredData =
				selectedCountry === 'all'
					? data
					: data.filter(item => item.country.toLowerCase() === selectedCountry)
			setSerchRes(filteredData)
		}


    const sortCountries = Array.from(
        new Set(data.map(item => item.country.toLowerCase()))
    )

    return (
			<div className='App'>
				<Header />
				<Colors />
				<div className='search-container'>
					<input
						type='text'
						value={query}
						onChange={handleInputChange}
						className='search-input'
						placeholder='Search...'
					/>
					<div className='select-container'>
						<select onChange={handleSortByCountry}>
							<option value='all'>All Countries</option>
							{sortCountries.map((country, index) => (
								<option key={index} value={country}>
									{country}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className='button-container'>
					<button onClick={HandleDortByAck}>sort asc</button>
					<button onClick={HandleDortByDesc}>sort desc</button>
					<button
						className='button-container-clear'
						onClick={() => setSerchRes(data)}
					>
						clear
					</button>
				</div>

				<div className='container'>
					{serchRes.map(item => (
						<Card
							key={item.id}
							title={item.title}
							image={item.image}
							country={item.country}
							price={item.price}
						/>
					))}
				</div>
				<Footer />
			</div>
		)
}

export default HomePage;
