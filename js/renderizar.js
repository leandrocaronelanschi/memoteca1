
import api from './api.js'

async function renderizarPensamentos() {
    try {
const pensamento = await api.buscarPensamentos();
console.log(pensamento);

pensamento.forEach ((pensamento) => {

const ul = document.getElementById('lista-pensamentos');

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

const iconeEditar = document.createElement('img');
iconeEditar.src = "/3781-javascript/assets/imagens/icone-editar.png";
iconeEditar.alt = 'Icone aspas';
iconeEditar.classList.add('botao-editar');
listaPensamentos.appendChild(iconeEditar);

const iconeExcluir = document.createElement('img');
iconeExcluir.classList.add('botao-excluir');
iconeExcluir.src = "/3781-javascript/assets/imagens/icone-excluir.png";
iconeExcluir.alt = 'Icone excluir';
listaPensamentos.appendChild(iconeExcluir);

})

    } catch (error) {
        alert(' Erro ao renderizar pensamentos!')
        throw error
    }

}

renderizarPensamentos();