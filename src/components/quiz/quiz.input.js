
export const quizInputTemplate = (data) => {

  const { helpText, number } = data;
  return `
    <div class="form-group">
      <input type="text" id="input${number}" class="form-control"
              oninput="app.registerAnswer(event)">
      <small class="form-text text-muted">${helpText}</small>
    </div>
  `;  

};

export const quizMultipleInputTemplate = (data) => {

  const { number } = data;
  return `
    <div class="form-group">
      <input type="text" id="input${number}-first" class="form-control"
              oninput="app.registerAnswer(event, { index: 0 })">
    </div>
    <div class="form-group">
      <input type="text" id="input${number}-second" class="form-control"
              oninput="app.registerAnswer(event, { index: 1 })">
    </div>    
  `;  

};
