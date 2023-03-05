import Link from "next/link";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

type Props = {
  item: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
};

const CardItem = (props: Props) => {
  const { id, title, body } = props.item || {};
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {id} - {title}
        </Card.Title>
        <Card.Text>{body}</Card.Text>
        <Link href={`/posts/${id}`} passHref>
          <Button variant="primary">Go Detail</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
