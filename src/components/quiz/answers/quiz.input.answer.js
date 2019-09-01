
export const answerInputTemplate = (data, suffix='') => {

  const { step, answer } = data;  
  return `
    <div class="form-group">          
      <input type="text" readonly class="form-control" id="input${step}${suffix}" 
          value="${answer}">      
    </div>`;    

};

export const answerMultipleInputTemplate = (data) => {
  const { step, answer } = data;  
  return answer.reduce((html, item, index) => html + answerInputTemplate({ step, answer: item }, index), '');
};