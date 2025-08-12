
import api from './api.js'
import deletarPensamento from './deletarpensamento.js';


async function renderizarPensamentos() {
    try {
const pensamento = await api.buscarPensamentos();
console.log(pensamento);

const ul = document.getElementById('lista-pensamentos');
ul.innerHTML = '';

pensamento.forEach ((pensamento) => {


const listaPensamentos = document.createElement('li');
listaPensamentos.classList.add('li-pensamento');

ul.appendChild(listaPensamentos);

const iconeAspas = document.createElement('img');
iconeAspas.src = "/3781-javascript/assets/imagens/aspas-azuis.png"
iconeAspas.classList.add('icone-aspas');

listaPensamentos.appendChild(iconeAspas);

const pensamentoConteudo = document.createElement('div');
pensamentoConteudo.classList.add('pensamento-conteudo');
pensamentoConteudo.innerText = pensamento.conteudo;
listaPensamentos.appendChild(pensamentoConteudo);

const pensamentoAutoria = document.createElement('div');
pensamentoAutoria.classList.add('pensamento-autoria');
pensamentoAutoria.innerText = pensamento.autoria;
listaPensamentos.appendChild(pensamentoAutoria);


const idPensamnto = document.createElement("div");
idPensamnto.id = 'id-pensamento';
idPensamnto.style.display = 'none';
idPensamnto.innerText = pensamento.id;
listaPensamentos.appendChild(idPensamnto)

const iconeEditar = document.createElement('img');
iconeEditar.src = "/3781-javascript/assets/imagens/icone-editar.png";
iconeEditar.alt = 'Icone aspas';
iconeEditar.classList.add('botao-editar');
iconeEditar.addEventListener('click', () => api.editarPensamento());

listaPensamentos.appendChild(iconeEditar);


const idEditar = document.getElementById('id-pensamento').innerText;
const conteudoEditar = document.getElementById('pensamento-conteudo').innerText;
const autoriaEditar = document.getElementById('pensamento-autoria').innerText;
const dadosEditar = {
    conteudo: conteudoEditar,
    autoria: autoriaEditar 
}
//iconeEditar.addEventListener('click', () => api.editarPensamento(idEditar, dadosEditar));

const iconeExcluir = document.createElement('img');
iconeExcluir.classList.add('botao-excluir');
iconeExcluir.src = "/3781-javascript/assets/imagens/icone-excluir.png";
iconeExcluir.alt = 'Icone excluir';
iconeExcluir.addEventListener('click', async () => { 
    await deletarPensamento(pensamento.id);
    await renderizarPensamentos();

})
listaPensamentos.appendChild(iconeExcluir);    




})

    } catch (error) {
        alert(' Erro ao renderizar pensamentos!')
        throw error
    }

}

renderizarPensamentos();


export default renderizarPensamentos;