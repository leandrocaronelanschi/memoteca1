import api from './api.js'
import renderizarPensamentos from './renderizar.js';

async function deletarPensamento(id) {

try {     

const responseApi = await fetch(`http://localhost:3000/pensamentos/${id}`, {
method: 'DELETE',
headers: {
    'Content-type': 'application/json'
}

});

console.log(responseApi);
renderizarPensamentos();

} catch (error) {
alert('Erro ao deletar pensamento!');
console.error(error);
throw error;

}

}

// const xxxxx = 'b6f9'
// deletarPensamento(xxxxx);

// const idValue = document.getElementById('pensamento-id').innerText;
// const excluirPensamento = document.querySelector('.botao-excluir');
// excluirPensamento.addEventListener('click', () => deletarPensamento(idValue))




export default deletarPensamento;

