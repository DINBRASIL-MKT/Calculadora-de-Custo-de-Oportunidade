function calcular() {
      let L = parseFloat(document.getElementById('L').value);
      let TA = parseFloat(document.getElementById('TA').value) / 100;
      let TM = parseFloat(document.getElementById('TM').value);
      let TC = parseFloat(document.getElementById('TC').value) / 100;

      if (isNaN(L) || isNaN(TA) || isNaN(TM) || isNaN(TC)) {
        document.getElementById('resultado').innerText = "Preencha todos os campos.";
        return;
      }

      let perdaMensal = (L * TA) * TM * TC;
      let perdaAnual = perdaMensal * 12;

      document.getElementById('resultado').innerHTML = `
        Perda estimada:<br>
        <strong>R$ ${perdaMensal.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</strong> / mês<br>
        <small>R$ ${perdaAnual.toLocaleString('pt-BR', {minimumFractionDigits: 2})} / ano</small>
      `;

      
      document.getElementById('mensagem-especialidade').style.display = 'block';
    }
