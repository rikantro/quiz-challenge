
import { quizSingleSelectionTemplate, quizMultipleSelectionTemplate } from './quiz.selection';
import { quizInputTemplate, quizMultipleInputTemplate } from './quiz.input';

const questionSelector = (data) => {

  switch (data.type) {
    case 'single':        return quizSingleSelectionTemplate(data);
    case 'multiple':      return quizMultipleSelectionTemplate(data);
    case 'input':         return quizInputTemplate(data);
    case 'multipleInput': return quizMultipleInputTemplate(data);
    default:              return '';
  }

};

export const quizCardTemplate = (data) => {

  const { number, total, title } = data;
  return `
    <quiz-card title="${title}" step="${number}" total="${total}">
      ${questionSelector(data)}
    </quiz-card>
  `;  

};