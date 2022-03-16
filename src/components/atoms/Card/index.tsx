import React from 'react';

interface Props {
  children: any;
  margin: string;
}

function Card(props: Props) {
  const { children, margin } = props;
  return <div style={{ margin: `${margin}` }}>{children}</div>;
}

export default Card;
