import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react'
import Section from './Section'

type Props = {
  setCount: Dispatch<SetStateAction<number>>;
  children: ReactNode;
}

const Counter = ({setCount, children}: Props) => {
  
  return (
    <>
      <Section title='Counter'>
        <div>
          {children}
        </div>

        <button style={{marginRight: '10px'}} onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
        <button style={{marginLeft: '10px'}} onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
      </Section>
    </>
  )
}

export default Counter