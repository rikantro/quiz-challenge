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
          padding-right: 1rem;
          padding-bottom: 1rem;          
        }
      </style>
      <div part="dummy-card">
        <div part="dummy-body">
          <span part="title">Question number ${step}</span>
          <p part="dummy-content">${title}</p>        
          <slot></slot>
        </div>
        <div class="button-container">
          <button type="button" part="button" onclick="app.nextQuestion()">${step < total ? 'Next': 'Finish' }</button>
        </div>
      </div>`;
    
  }
}