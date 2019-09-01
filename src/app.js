import { registerComponents } from './components';
import { QuizController } from './components/quiz/quiz.controller';
import quizData from './components/quiz/quiz.data';
import { renderRestaurants } from './components/restaurant';

const QUIZ_ELEMENT_ID = "quiz";
const RESTAURANT_ELEMENT_ID = "zomato";

export class QuizApp {

  constructor() {    
    this.quizController = new QuizController();
  }

  initialize() {
    registerComponents();
    
    this.quizController.configure(QUIZ_ELEMENT_ID);
    this.quizController.data = quizData;
  }

  start() {
    this.quizController.start();    
    console.log('Quiz Challenge is started');
  }

  showResults() {
    this.quizController.renderResults();
    renderRestaurants(RESTAURANT_ELEMENT_ID);
  }

  nextQuestion() {
    const moreQuestions = this.quizController.moveToNextQuestion();
    if (!moreQuestions) {
      this.showResults();
    }
  }

  registerAnswer(event, options = {}) {
    this.quizController.saveAnswer(event, options);
  }

};