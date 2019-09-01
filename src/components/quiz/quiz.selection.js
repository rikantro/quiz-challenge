
const renderItem = (data) => {

  const { index, item, step, groupType } = data;

  return `
    <div class="form-check">
      <input type="${groupType}" id="quizSelection${index}" name="selectionGroup${step}" 
              value="${item}"
              onchange="app.registerAnswer(event)">
      <label class="form-check-label" for="quizSelection${index}">
        ${item}
      </label>
    </div>
  `;    

};

export const quizSingleSelectionTemplate = (data) => {

  const { items } = data.options;
  return items.reduce((html, item, index) => html + renderItem({ groupType: 'radio', step: data.number, index: index + 1, item }), '');

};

export const quizMultipleSelectionTemplate = (data) => {

  const { items } = data.options;
  return items.reduce((html, item, index) => html + renderItem( { groupType: 'checkbox', step: data.number, index: index + 1, item }), '');  

};
