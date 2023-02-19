import React, { ReactElement, ReactNode } from 'react';

type Props = {
  title?: string;
  children: ReactNode;
};

const Section = ({ title = 'My Subheading', children }: Props): ReactElement => {
  return (
    <div>
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    </div>
  );
};

export default Section;
