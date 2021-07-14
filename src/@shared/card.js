import React from "react";
import { Card } from "antd";
import "./card.scss";
const CardList = (props) => {
  return (
    <>
      <Card className="custom-card" title={props && props.title}>
        {props && props.content}
      </Card>
    </>
  );
};

export default CardList;
