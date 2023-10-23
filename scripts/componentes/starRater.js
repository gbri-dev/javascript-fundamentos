class StarRater extends HTMLElement {
  constructor(){
    super()

    this.build()
  }

  build() {
    const shadow = this.attachShadow({mode: 'open'})
    shadow.appendChild(this.styles())
    const rater = this.createRater()
    //compartilha variável de uma classe passando o this
    this.stars = this.createStars()
    this.stars.forEach(star => rater.appendChild(star))
    this.resetRating()
    shadow.appendChild(rater)
  }

  createRater() {
    const rater = document.createElement('div')
    rater.classList.add('star-rater')
    rater.addEventListener('dblclick', this.resetElement.bind(this))
    rater.addEventListener('mouseout', this.resetRating.bind(this))
    return rater
  }

  createStars() {
    const createStar = (_, id) => {
      const star = document.createElement('span')
      star.classList.add('star')
      star.setAttribute('data-value', Number(id) + 1)
      star.innerHTML = '&#9733;'

      //ao clicar na estrela vai chamar o setRating
      //bind(this): bind adiciona o star no escopo do StarRater
      star.addEventListener('click', this.setRating.bind(this))
      star.addEventListener('mouseover', this.ratingHover.bind(this))      
      return star
    }
    return Array.from({length: 5}, createStar)
  }

  resetRating() {
    this.currentRatingValue = this.getAttribute('data-rating') || 0
    this.hightlightRating()
  } 

  resetElement() {
    this.setAttribute('data-rating', 0)
    this.hightlightRating()
  }

  setRating(event) {
    this.setAttribute(
      'data-rating',
      event.currentTarget.getAttribute('data-value')
    )
  }
  //Seta o valor do atributo quando passa o mouse sobre as estrelas
  ratingHover(event){
    this.currentRatingValue = event.currentTarget.getAttribute('data-value')
    this.hightlightRating()
  }

  hightlightRating() {
    //ele faz o foreach no estrelas que são 5 e as que não forem 
    this.stars.forEach(star => {
      star.style.color = this.currentRatingValue >= star.getAttribute('data-value')
      ? '#ffdd59'
      : '#ffa801'
    })
  }

  styles() {
    const style = document.createElement('style')
    style.textContent = `
      .star {
        font-size: 5rem;
        color: #ffc048;
        cursor: pointer;
      }
    `
    return style
  }
}
customElements.define('star-rater', StarRater)