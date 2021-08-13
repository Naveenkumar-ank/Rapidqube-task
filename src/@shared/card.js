import React from "react";
import { Card } from "antd";
import "./card.scss";
const CardList = (props) => {
  return (
    <>
      <Card className="custom-card mt-1" title={props && props.login}>
        <div>
          <img src={props && props.avatar_url} className="card-avatar" />
        </div>
      </Card>
    </>
  );
};

export default CardList;
