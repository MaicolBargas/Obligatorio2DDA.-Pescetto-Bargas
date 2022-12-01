import fetch from 'cross-fetch'

function getAllClients(){
	return fetch('http://localhost:8080/cliente/list')
	.then(response => response.json())
}
function getClientById(){
	return fetch('http://localhost:8080/cliente?id=' + 1)
	.then(response => response.json())
}

export {getAllClients, getClientById}
