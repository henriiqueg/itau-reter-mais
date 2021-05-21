import Button from 'components/common/Button/Button';
import Title from 'components/common/Title/Title';
import QuizBlock from 'components/organisms/QuizBlock/QuizBlock';

const InitialScreen = ({ setQuizInit }) => (
  <QuizBlock>
    <Title tag="h1" size="large" weight="bold" align="center">
      Olá! <br /> Que bom ter você nessa jornada!
    </Title>
    <Button size="large" onClick={() => setQuizInit(true)}>
      Começar!
    </Button>
  </QuizBlock>
);

export default InitialScreen;
