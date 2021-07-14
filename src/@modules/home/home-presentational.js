import React from "react";
import { Col, Row } from "antd";
import "./home.scss";
import CardList from "../../@shared/card";
const HomePresentational = ({ listData = [] }) => {
  return (
    <>
      <Row>
        {listData &&
          listData.map((list, groupIndex) => {
            return (
              <React.Fragment key={groupIndex}>
                <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>
                <Col className="mt-5" xl={6} lg={6} md={10} sm={24} xs={24}>
                  <div className="group-wrapper">
                    <div className="group-title">{list.groupName || ""}</div>
                    <div className="item-wrapper">
                      {list.groupDetails &&
                        list.groupDetails.map((groupItem, itemIndex) => {
                          return (
                            <div key={itemIndex} className="items">
                              <CardList {...groupItem} />
                            </div>
                          );
                        })}
                    </div>
                    <div className="text-center">
                      <div className="add-button">Add</div>
                    </div>
                  </div>
                </Col>
                <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>
              </React.Fragment>
            );
          })}
      </Row>
    </>
  );
};

export default HomePresentational;
