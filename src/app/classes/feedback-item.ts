export class FeedbackItem {
  question: string;
  answer: string;
  answerList: Array<string>;

  constructor(question: string, answer?: string) {
    this.question = question;
    this.answer = answer;
    this.answerList = ['Huono', 'Neutraali', 'Hyvä', 'Erinomainen'];
  }
  setAnswer(value: number) {
    this.answer = this.answerList [value];
  }
}
