
const renderItem = (data) => {

  const { index, step, answer, item, groupType } = data;
  const isValidAnswer = groupType === 'radio' ? (item == answer) : answer.indexOf(item) >= 0;

  return `
    <div class="form-check form-check-inline">
      <input type="${groupType}" id="quizSelection${index}" name="selectionGroup${step}" class="form-check-input" 
              value="${item}" ${isValidAnswer ? 'checked': ''} disabled>
      <label class="form-check-label" for="quizSelection${index}">
        ${item}
      </label>
    </div>
  `;    

};

export const answerSingleSelectionTemplate = ({ step, answer, options }) => {
  return options.items.reduce((html, item, index) => 
          html + renderItem({ groupType: 'radio', index: index + 1, step, answer, item }), '');
};

export const answerMultipleSelectionTemplate = ({ step, answer, options }) => {
  return options.items.reduce((html, item, index) => 
          html + renderItem({ groupType: 'checkbox', index: index + 1, step, answer, item }), '');
};