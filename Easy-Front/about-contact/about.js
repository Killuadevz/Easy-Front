function getTotalContatosCom11() {
    fetch('http://localhost:8080/api/procedure')
      .then(response => response.json())
      .then(data => {
        const totalContatosCom11 = document.getElementById('totalContatosCom11');
        totalContatosCom11.textContent = data.total || "0";
  
        const progressContatosCom11 = document.getElementById('progressContatosCom11');
        const total = data.total || 0;
        const max = 1000;
        const percentage = (total / max) * 100;
        progressContatosCom11.style.width = percentage + '%';
      })
      .catch(error => {
        console.error("Erro ao buscar total de contatos com 11:", error);
        document.getElementById('totalContatosCom11').textContent = "Erro ao carregar";
      });
  }
  
  function contarTotalContatos() {
    fetch('http://localhost:8080/api/view')
      .then(response => response.json())
      .then(data => {
        const totalContatos = document.getElementById('totalContatos');
        totalContatos.textContent = data.total || "0";
  
        const progressContatos = document.getElementById('progressContatos');
        const total = data.total || 0;
        const max = 2000;
        const percentage = (total / max) * 100;
        progressContatos.style.width = percentage + '%';
      })
      .catch(error => {
        console.error("Erro ao buscar total de contatos:", error);
        document.getElementById('totalContatos').textContent = "Erro ao carregar";
      });
  }
  
  window.onload = function() {
    getTotalContatosCom11();
    contarTotalContatos();
  };
  