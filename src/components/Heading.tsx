import React, { ReactElement } from 'react';

type Props = { title: string };

const Heading = ({ title }: Props): ReactElement => {
  return <div>{title}</div>;
};

export default Heading;
