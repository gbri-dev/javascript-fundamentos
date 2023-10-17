document.addEventListener('DOMContentLoaded', function(){
    const selectDinamico = `<div>
      <h5>Todos</h5>
      <input class="" type="number" name="n1" placeholder="digite sua nota" min="1" required />
      <label id="recorrenciaEm" for="n1">dia(s)</label>
      <h5>Fim da repetição</h5>
      <input type="checkbox" name="nunca" id="nunca">
      <label for="nunca">Nunca</label> </br>
      <input type="checkbox" name="ate" id="ate">
      <label for="ate">A</label> 
      <input type="date" name="dataRecorrente" id="dataRecorrente"></br>
      <input type="checkbox" name="depois-de" id="depois-de">
      <label for="depois-de">Depois de</label>
      <input type="number" name="diasDepois" id="diasDepois">
      <label for="diasDepois">Ocorrência(s)</label>
    </div>`

    const scriptEm = `let days = document.querySelectorAll('.day');
      days.forEach(function(day) {
        day.addEventListener('click', function() {
          this.classList.toggle('selected');
        });
      });`

    let weakDays = `
      <div id="days" style="display: none;">
        <div class="day">D</div>
        <div class="day">S</div>
        <div class="day">T</div>
        <div class="day">Q</div>
        <div class="day">Q</div>
        <div class="day">S</div>
        <div class="day">S</div>
      </div>
      `;

      let months = `</br><label for="monthsId">Repetir</label><br>
      <input id="monthsId" type="number" min="1" max="31" />`

      //Exibindo conteudo
      let conteudo = document.getElementById('conteudoDinamico')
      conteudo.innerHTML = selectDinamico
      
      //semanalmente repeat on
      let labelRecorrencia = document.getElementById("recorrenciaEm")      
      labelRecorrencia.insertAdjacentHTML('afterend', weakDays);       
      var elemento = document.createElement('script');
      elemento.id = 'recorrenciaDays';
      elemento.textContent = scriptEm
      document.body.appendChild(elemento);
      
      //select Recorrências
      let recorrencia = document.getElementById('recorrenciaId')
      //evento recorrencia
      recorrencia.addEventListener('change', function(){   
      let valor = parseInt(recorrencia.value)      
       
      //variáveis
      let elementoWeakDays = document.getElementById('days')          

      //casos de uso
      switch(valor){
      case 0 : 
      labelRecorrencia.textContent = "hora(s)";             
      elementoWeakDays.style.display = "none";                
      break;

      case 1 : 
      labelRecorrencia.textContent = "dia(s)";
      if(elementoWeakDays){        
        elementoWeakDays.style.display = "none";                
      }
      break;

      case 2 : 
      labelRecorrencia.textContent = "semana(s)";            
      elementoWeakDays.style.display = "block";             
      let days = document.querySelectorAll('.day')
      var selecionados = Array.from(days).filter(function(elemento) {
        return elemento.classList.contains('selected');
      });
      selecionados.forEach(function(item) {
        item.classList.remove('selected');
      });
      break;

      case 3 : 
      labelRecorrencia.textContent = "mês(es)";            
      elementoWeakDays.style.display = "none";                
      labelRecorrencia.insertAdjacentHTML('afterend', months);
      break;

      case 4 : 
      labelRecorrencia.textContent = "ano(s)";    
      if(elementoWeakDays){        
        elementoWeakDays.style.display = "none";                
      }
    }
  })
})