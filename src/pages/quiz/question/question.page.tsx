import React from 'react';
import logo from './logo.svg';
import classes from './question.module.sass';

interface IProp {
  questionText: string;
  answerOptions: {
    answerText: string;
    isCorrect: boolean;
  }[]
  questionNumber: number;
  setAnswers: (answers: number[]) => void;
  answers: number[];
}

function Question(props: IProp) {
  const onClickHandler = (ind: number) => {
    props.answers[props.questionNumber] = ind;
    // const ans = [...props.answers];
    // ans[props.questionNumber] = ind;
    props.setAnswers(props.answers);
    // this.fo
    console.log(props.answers)
  }
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        {props.questionText}
      </div>
      {
        props.answerOptions.map((item, index) => (
          <div 
          className={index === props.answers[props.questionNumber] ? classes.selected : classes.notSelected}
          id={`${index}`}
          onClick={() => onClickHandler(index)}
          >
            {item.answerText}
          </div>
        ))
      }
    </div>
  );
}

export default Question;
