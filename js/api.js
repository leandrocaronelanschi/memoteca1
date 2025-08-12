const api = {
  async buscarPensamentos() {
    try {
      const pensamentos = await fetch("http://localhost:3000/pensamentos");
      const responsePensamentos = await pensamentos.json();
      return responsePensamentos;
      
    } catch (error) {
      alert("Erro ao buscar pensamentos!");
      throw error;
    }
  },

  async adicionarPensamento(novoPensamento) {
    try {
      const addPensamento = await fetch("http://localhost:3000/pensamentos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoPensamento),
      });

      const responseAddPensamento = await addPensamento.json();
      console.log(responseAddPensamento);
    } catch (error) {
      alert("Erro ao adicionar pensamento!");
      console.error(error);
      throw error;
    }
  },

//   async editarPensamento(id, pensamentoEditado) {
//     try {
//       const response = await fetch(`http://localhost:3000/pensamentos/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(pensamentoEditado),
//       });
//     } catch (error) {
//       alert("Erro ao editar pensamento!");
//       throw error;
//     }
//   },

  async buscarPensamentoPorId(id) {
    try {
      const pensamento = await fetch(`http://localhost:3000/pensamentos/${id}`);
      const responsePensamento = await pensamento.json(); 
      return responsePensamento;
    } catch (error) {
      alert("Erro ao buscar pensamentos!");
      throw error;
    }
  }
};



document.getElementById("botao-salvar").addEventListener("click", async () => {
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
