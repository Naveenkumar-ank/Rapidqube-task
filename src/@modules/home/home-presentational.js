import React from "react";
import { Col, Row } from "antd";
import "./home.scss";
import CardList from "../../@shared/card";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const HomePresentational = ({ dataOdd = [], dataEven = [], setDataOdd, setDataEven }) => {
  const handleDragEnd = ({ source, destination }) => {
    console.log({ source, destination });
    debugger;
    if (source && source.droppableId == destination && destination.droppableId) {
      debugger;
      if (source.droppableId == "EVEN") {
        rearrageCard(source, destination, "EVEN");
      } else {
        rearrageCard(source, destination, "ODD");
      }
    } else if (source && destination) {
      let updateData = [];
      let newItem = null;
      if (source.droppableId == "EVEN") {
        updateData = dataEven || [];
        newItem = updateData.splice(source.index, 1);
        let updateDataOdd = (dataOdd = []);
        updateDataOdd.splice(destination.index, 0, newItem);
        setDataEven([...updateDataOdd]);
        setDataOdd([...updateData]);
      } else {
        updateData = dataOdd || [];
        newItem = updateData.splice(source.index, 1);
        let updateDataEven = (dataOdd = []);
        updateDataEven.splice(destination.index, 0, newItem);
        setDataOdd([...updateDataEven]);
        setDataEven([...updateData]);
      }
    }
  };

  const rearrageCard = (source, destination, type) => {
    console.log({ source });
    if (type == "EVEN") {
      let updateEvenData = dataEven || [];
      let newItem = updateEvenData.splice(source.index, 1);
      updateEvenData.splice(destination.index, 0, newItem);
      setDataEven([...updateEvenData]);
    } else {
      let updateOddData = dataOdd || [];
      let newItem = updateOddData.splice(source.index, 1);
      console.log({ newItem });
      updateOddData.splice(destination.index, 0, newItem);
      console.log({ updateOddData });
      setDataOdd([...updateOddData]);
    }
  };

  return (
    <>
      <Row>
        <React.Fragment>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>
            <Col className="mt-5" xl={6} lg={6} md={10} sm={24} xs={24}>
              <Droppable droppableId="ODD">
                {(provided, snapshot) => (
                  <div
                    className="group-wrapper"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    isDraggingOver={snapshot.isDraggingOver}
                  >
                    <div className="group-title">{"Odd List"}</div>
                    <div className="item-wrapper">
                      {dataOdd &&
                        dataOdd.map((list, keyIndex) => {
                          return (
                            <Draggable key={keyIndex} draggableId={`${keyIndex}`} index={keyIndex}>
                              {(provided, snapshot) => (
                                <div
                                  key={keyIndex}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <CardList {...list} />
                                </div>
                              )}
                            </Draggable>
                          );
                        })}
                    </div>
                    <div className="text-center">
                      <div className="add-button">Add</div>
                    </div>
                  </div>
                )}
              </Droppable>
            </Col>
            <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>

            <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>
            <Col className="mt-5" xl={6} lg={6} md={10} sm={24} xs={24}>
              <Droppable droppableId="EVEN">
                {(provided, snapshot) => (
                  <div
                    className="group-wrapper"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    isDraggingOver={snapshot.isDraggingOver}
                  >
                    <div className="group-title">{"Even List"}</div>
                    <div className="item-wrapper">
                      {dataEven &&
                        dataEven.map((list, keyIndex) => {
                          return (
                            <Draggable key={keyIndex} draggableId={`${keyIndex}`} index={keyIndex}>
                              {(provided, snapshot) => (
                                <div
                                  key={keyIndex}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <CardList {...list} />
                                </div>
                              )}
                            </Draggable>
                          );
                        })}
                    </div>
                    <div className="text-center">
                      <div className="add-button">Add</div>
                    </div>
                  </div>
                )}
              </Droppable>
            </Col>
            <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>
          </DragDropContext>
        </React.Fragment>
      </Row>
    </>
  );
};

export default HomePresentational;
