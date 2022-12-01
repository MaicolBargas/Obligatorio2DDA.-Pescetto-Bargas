import React from 'react';
import "./Css/Filtrar.css"

export const Filtrar = ({ filter, setFilter }) => {
	const handleInput = ({ target }) => {
		setFilter(target.value)
	}

	return (
		<section className='filtrar'>
			<input
				className="inputFiltrar"
				type='text'
				placeholder='Buscar Cliente'
				name='buscar'
				onChange={handleInput}
				value={filter}
			/>
		</section>
	)
}
