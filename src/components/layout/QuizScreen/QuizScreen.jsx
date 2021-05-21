import Q1 from 'lib/components/organisms/Quizes/Q1';
import Q20 from 'lib/components/organisms/Quizes/Q20';
import useQuiz from 'lib/hooks/use-quiz';

const QuizScreen = () => {
  const { index, setIndex, nextPage } = useQuiz();

  switch (index) {
    case 0:
      return <Q1 nextPage={nextPage} />;
    case 1:
      return <Q20 setIndex={setIndex} />;
    default:
      return (
        <div>
          <h1 style={{ marginBottom: 50 }}>
            Algo deu errado, por favor atualize a página
          </h1>
        </div>
      );
  }
};

export default QuizScreen;
