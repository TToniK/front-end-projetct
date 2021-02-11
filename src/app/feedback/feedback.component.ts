import { Component, OnInit } from '@angular/core';
import {FeedbackItem} from '../classes/feedback-item';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.styl']
})
export class FeedbackComponent implements OnInit {
  feedbackItemArray: Array<FeedbackItem> = [];

  constructor() {
    this.feedbackItemArray =
      [new FeedbackItem('Ruoka'),
        new FeedbackItem('Juoma'),
        new FeedbackItem('Jälkiruoka')];
  }

  ngOnInit() {
  }

  onInputChange(feedbackEvent: any, fbItem: FeedbackItem) {
    // console.log(fbItem.answerList[feedbackEvent.value]);
    fbItem.setAnswer(feedbackEvent.value);
    // console.log(fbItem.answer);
  }
}
