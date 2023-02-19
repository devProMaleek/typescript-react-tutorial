import { useState } from 'react';
import Counter from './components/Counter';
import Heading from './components/Heading';
import Section from './components/Section';

function App() {
  const [count, setCount] = useState<number>(1)
  return (
    <>
      <Heading title="Hello World" />
      <Section title='Lorem ipsum dolor '>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sed, natus dolores aliquid distinctio,
        cupiditate dolorem tenetur soluta maiores quas, cumque doloribus! Cum, cumque vero fuga nemo ad possimus sunt!
      </Section>
      <Counter setCount = {setCount}>
        <h1>The count is {count}</h1>
      </Counter>
    </>
  );
}

export default App;
