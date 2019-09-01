export class QuizCardComponent extends HTMLElement {

  constructor() {

    super();
    this.attachShadow({ mode: 'open' });    

    const title = this.getAttribute('title');
    const step = this.getAttribute('step');
    const total = this.getAttribute('total');    
    
    this.shadowRoot.innerHTML = `
      <style>
        .button-container {
          display: flex;
          justify-content: flex-end;
          padding-left: 1rem;
          padding-right: 1rem;
          padding-bottom: 1rem;
        }
      </style>
      <div part="card">
        <div part="body">
          <span part="title">Question #${step}</span>
          <p part="content">${title}</p>        
          <slot></slot>
        </div>
        <div class="button-container">
          <button type="button" part="button" onclick="app.nextQuestion()">${step < total ? 'Next': 'Finish' }</button>
        </div>
      </div>`;
    
  }
}