import React from 'react';

type Props = {
  id: number;
  title: string
}

const QuizItem: React.FC<Props> = ({ id, title }) => (
  <li key={id}>
    {title}
  </li>
);

export default QuizItem;
