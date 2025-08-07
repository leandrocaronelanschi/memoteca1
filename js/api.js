const api = {

async buscarPensamentos () {

    try {

        const pensamentos = await fetch('http://localhost:3000/pensamentos');
        const responsePensamentos = await pensamentos.json();
        return responsePensamentos;

        console.log(responsePensamentos);


    } catch (error) {

        alert('Erro ao buscar pensamentos!')
        throw error;
    }
},

async adicionarPensamento (novoPensamento) {    
   
    try {

        const addPensamento = await fetch('http://localhost:3000/pensamentos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoPensamento)
        });

        const responseAddPensamento = await addPensamento.json();
        console.log(responseAddPensamento);


    } catch (error) {
        alert('Erro ao adicionar pensamento!');
        console.error(error);
        throw error;
    }

}

}

document.getElementById('botao-salvar').addEventListener('click', async () => {
const pensamentoId = document.getElementById("pensamento-id").value;

const formPensamentoConteudo = document.getElementById(
  "pensamento-conteudo"
).value;

const formPensamentoAutoria =
  document.getElementById("pensamento-autoria").value;

const novoPensamento = {
  
  conteudo: formPensamentoConteudo,
  autoria: formPensamentoAutoria,
};


api.adicionarPensamento(novoPensamento);

});



export default api;