import React, { useState } from 'react';
import data from '../../../../../../DummyData';
import QuizItem from './QuizItem/QuizItem';

const BrowseQuizList: React.FC = () => {
  const [quizes] = useState(data.quizes);
  return (
    <div className="browse-quiz-list">
      <ul>
        {quizes.map((quiz) => (
          <QuizItem id={quiz.id} title={quiz.title} key={quiz.id} />
        ))}
      </ul>
    </div>
  );
};

export default BrowseQuizList;
