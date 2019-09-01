export class QuizAnswerComponent extends HTMLElement {

  constructor() {

    super();
    this.attachShadow({ mode: 'open' });    

    const title = this.getAttribute('title');
    const step = this.getAttribute('step');    

    this.shadowRoot.innerHTML = `

      <div part="card">
        <div part="body">
          <span part="title">Answer ${step} - ${title}</span>
          <slot></slot>
        </div>
        <div class="button-container">          
        </div>
      </div>`;
    
  }
}