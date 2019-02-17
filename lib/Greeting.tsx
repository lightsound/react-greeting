import React from "react";

export interface Props {
  text: string;
}

const Greeting: React.FC<Props> = ({ text }: Props) => {
  if (!text) return null;
  return <h1>{`Hello, ${text}!`}</h1>;
};

export default Greeting;
