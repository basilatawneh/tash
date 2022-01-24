import React, { useMemo, useState } from 'react';
import logo from './logo.svg';
import classes from './quiz.module.sass';

import questions from './../../data/data'
import Question from './question/question.page';
interface IProp { }

function Quiz(props: IProp) {
  // const [] useState
  const [questionNumber, setQuestionNumber] = useState(0)
  const InitAnswers = useMemo(() => {
    return questions.map(item => -1);
  }, []);

  const [answers, setAnswers] = useState(InitAnswers);

  const nextHandler = () => {
    setQuestionNumber(questionNumber + 1);
  }

  const previousHandler = () => {
    setQuestionNumber(questionNumber - 1);
  }

  const submitHandler = () => {
    let result = 0;
    for (let index in questions) {
      if (questions[index].answerOptions[answers[index]].isCorrect === true) {
        result += 1;
      }

    }
    console.log(result)
  }

  return (
    <div className={classes.container}>
      <Question
        questionText={questions[questionNumber].questionText}
        answerOptions={questions[questionNumber].answerOptions}
        questionNumber={questionNumber}
        setAnswers={setAnswers}
        answers={answers}
      />
      <div>
        <button disabled={questionNumber === 0} onClick={previousHandler}>previous</button>
        {
          questionNumber !== questions.length - 1
            ? <button  onClick={nextHandler}>next</button>
            : <button  onClick={submitHandler}>submit</button>
        }
      </div>
    </div>
  );
}

export default Quiz;
