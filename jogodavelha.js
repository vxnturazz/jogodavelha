document.addEventListener('DOMContentLoaded', () => {
    const casinhas = document.querySelectorAll('.casinha');
    let jogador = 'X';
  
    casinhas.forEach(casinha => {
      casinha.addEventListener('click', () => {
        if (!casinha.textContent) {
          casinha.textContent = jogador;
          jogador = jogador === 'X' ? 'O' : 'X';
          verificarVencedor();
        }
      });
    });
  
    function verificarVencedor() {
      const combinacoes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  
      combinacoes.forEach(combinacao => {
        const [a, b, c] = combinacao;
        const casinhaA = casinhas[a].textContent;
        const casinhaB = casinhas[b].textContent;
        const casinhaC = casinhas[c].textContent;
  
        if (casinhaA && casinhaA === casinhaB && casinhaA === casinhaC) {
          document.getElementById('vencedor').textContent = `O vencedor é ${casinhaA}!`;
          casinhas.forEach(casinha => casinha.removeEventListener('click', () => {}));
        }
      });
    }
  });