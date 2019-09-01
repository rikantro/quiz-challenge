import { quizCardTemplate } from './quiz.card.template';
import { QuizResultRender } from './quiz.result.render';

export class QuizController {

  constructor() {
    this.quizElementId = '';
    this.currentStepIndex = 0;

    this.data = [];
    this.answers = {};
    this.renderer = new QuizResultRender();
  }

  configure(quizElementId) {
    this.quizElementId = quizElementId;
  }

  start() {
    this.renderQuestion();
  }

  get currentQuestion() {
    return this.data[this.currentStepIndex];
  }

  get answeredQuestion() {
    return typeof(this.answers[this.currentStepIndex]) !== 'undefined';    
  }

  moveToNextQuestion() {   

    const moreQuestions = this.currentStepIndex < this.data.length - 1;
    if (moreQuestions) {

      if(this.answeredQuestion) {
        this.currentStepIndex++;
        this.renderQuestion();
      } else {
        alert('Please answer the question');
      }

    }

    return moreQuestions;

  }

  renderQuestion() {
    const element = document.getElementById(this.quizElementId);
    element.innerHTML = quizCardTemplate({ number: this.currentStepIndex + 1, total: this.data.length, ...this.currentQuestion });
  }

  renderResults() {

    this.renderer.configure(this.quizElementId, this.data);
    this.renderer.refresh();
  }

  saveAnswer(event, options) {

    if (typeof(event) === 'undefined') {
      return;
    }

    let answerValue = event.target.value;
    switch(this.currentQuestion.type) {

      case 'multiple':      answerValue = this.processMultipleAnswer(event.target); break;
      case 'multipleInput': answerValue = this.processMultipleInputAnswer(event.target.value, options); break;

      default:
        break;  
      
    }

    this.answers[this.currentStepIndex] = answerValue;    
    sessionStorage.setItem('answers', JSON.stringify(this.answers));
    
  }

  processMultipleAnswer({checked, value}) {

    const compositeAnswer = this.answers[this.currentStepIndex] ? this.answers[this.currentStepIndex] : [];
    if(checked) {
      compositeAnswer.push(value);
    } else {
      const position = compositeAnswer.indexOf(value);
      if (position >= 0) {
        compositeAnswer.splice(position, 1);
      }             
    }      
    return compositeAnswer;    

  } 

  processMultipleInputAnswer(input, options) {

    const compositeAnswer = this.answers[this.currentStepIndex] ? this.answers[this.currentStepIndex] : ['',''];
    compositeAnswer[options.index] = input;

    return compositeAnswer;
  }
 

} 