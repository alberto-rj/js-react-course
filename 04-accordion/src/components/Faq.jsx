import DATA from "../data";
import { Question } from '.';

const Faq = () => {
  const { questions } = DATA;
  return (
    <div className="card">
      <h1 className="title">Questions</h1>
      {
        questions.map((question) => {
          return (
            <Question 
              key={question.id} 
              {...question}
            />
          );
        })
      }
    </div>
  );
};

export default Faq;