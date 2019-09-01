
import { QuizCardComponent} from './quiz/quiz.card.component';
import { ResultViewComponent} from './results';
import { QuizAnswerComponent } from './quiz/answers/quiz.answer.component';

export const registerComponents = () => {
  customElements.define('quiz-card', QuizCardComponent);
  customElements.define('result-view', ResultViewComponent);
  customElements.define('quiz-answer', QuizAnswerComponent);
  
};