import './styles/index.scss';
import { QuizApp } from './app';

const app = new QuizApp();
window.app = app;

app.initialize();
app.start();
