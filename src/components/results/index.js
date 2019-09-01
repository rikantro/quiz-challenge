export class ResultViewComponent extends HTMLElement {

  constructor() {

    super();
    this.attachShadow({ mode: 'open' });      
    const title = this.getAttribute('title');
    
    this.shadowRoot.innerHTML = `
      <div part="card">
        <div part="body">
          <span part="title">Results of ${title}</span>
          <slot></slot>
        </div>
      </div>`;
    
  }
}