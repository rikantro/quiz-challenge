import { answerSingleSelectionTemplate, answerMultipleSelectionTemplate } from './answers/quiz.selection.answer';
import { answerInputTemplate, answerMultipleInputTemplate } from './answers/quiz.input.answer';

export class QuizResultRender {

  constructor() {
    this.answers = {};
    this.elementId = '';
    this.questions = [];
  }

  configure(elementId, questions) {
    this.elementId = elementId;
    this.questions = questions;
  }

  loadAnswers() {
    this.answers = JSON.parse(sessionStorage.getItem('answers'));
  }

  getAnswer (step) {
    return this.answers[step-1];   
  }

  questionSelector(item) {    
  
    switch (item.type) {
      case 'single':        return answerSingleSelectionTemplate(item);
      case 'multiple':      return answerMultipleSelectionTemplate(item);    
      case 'input':         return answerInputTemplate(item);
      case 'multipleInput': return answerMultipleInputTemplate(item);
      default:              return '';
    }
  
  }

  renderItem (step, currentQuestion) {

    const answer = this.getAnswer(step);
    let isValid = typeof(currentQuestion.validator) === 'undefined' ? true :
                    currentQuestion.validator(answer);    

    return `<quiz-answer title="${currentQuestion.title}" step="${step}" >
              <div class="alert alert-${isValid ? 'success': 'danger'}" role="alert">
                ${this.questionSelector({ step, answer, ...currentQuestion })}
              </div>
            </quiz-answer>`;
  }

  refresh() {
    this.loadAnswers();
    const rootElement = document.getElementById(this.elementId);    
    const elements = this.questions.reduce((html, item, index) => html + this.renderItem(index + 1, item), '');
  
    rootElement.innerHTML = `<result-view title="Results of Quiz" >${elements}</result-view>`;
  }

}