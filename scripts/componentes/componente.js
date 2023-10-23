class MeuCirculo extends HTMLElement {
  constructor(){
    super()

    const shadow = this.attachShadow({mode: 'open'})
    const raiz = document.createElement('span')
    raiz.setAttribute('class', 'raiz')
    
    const texto = document.createElement('span')
    texto.setAttribute('class', 'texto')
    texto.textContent = this.getAttribute("texto")    
    
    const style = document.createElement('style')
    style.textContent = `
      .raiz {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1px 20px;
        width: 200px;
        height: 200px;
        border-radius: 100px;
        background-color: ${this.getAttribute("cor") || "red"};
      }
      .texto {        
        font-size: 2rem;        
        color: white;
      }
    `
    raiz.appendChild(texto)
    shadow.appendChild(style)
    shadow.appendChild(raiz)
  }
}

customElements.define('meu-circulo', MeuCirculo)