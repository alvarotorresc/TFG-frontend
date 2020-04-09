import React from "react";
import { Card } from "semantic-ui-react";

type CardProps = {
  header: string;
  meta: string;
  description: string;
  date: string;
};

export default function Researcher({
  header,
  meta,
  description,
  date,
}: CardProps) {
  return (
    <Card
      image="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
      header={header}
      meta={meta}
      description={description}
      key="efe"
      extra={date}
    />
  );
}
