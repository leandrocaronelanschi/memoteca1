import api from "./api.js";


async function editarPensamentoPorId () {

try { 

    const idEditar = document.getElementById('id-pensamento');
const response = await api.buscarPensamentoPorId(idEditar); 

const editarPensamentoConteudo = document.getElementById('pensamento-conteudo');
const editarPensamentoAutoria = document.getElementById('pensamento-autoria');

editarPensamentoConteudo.innerText = response.conteudo;
editarPensamentoAutoria.innerText = response.autoria;

} catch (error) {
    alert('Erro ao tentar editar pensamento!')
    throw error;
}
}

export default editarPensamentoPorId;