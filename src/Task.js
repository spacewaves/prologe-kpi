import React from "react";
import firebase from "firebase/app";
import { Col, Container, Row } from "react-bootstrap";
import EasyEdit from "react-easy-edit";

export const Task = ({ task }) => {
  const [taskName] = React.useState(task.taskName);
  const [taskOwner] = React.useState(task.taskOwner);
  const [taskDeadline] = React.useState(task.taskDeadline);
  const [taskQuantity] = React.useState(task.quantity);
  const [taskProgress] = React.useState(task.progress);
  console.log(task);
  // ----> will be useful for modifying
  // // const [taskName, setTaskName] = React.useState(task.taskName);
  // // const [taskOwner, setTaskOwner] = React.useState(task.taskOwner);
  // // const [taskDeadline, setTaskDeadline] = React.useState(task.taskDeadline);
  // // const [taskQuantity, setTaskQuantity] = React.useState(task.quantity);
  // // const onUpdate = () => {
  // //   const db = firebase.firestore();
  // //   db.collection("things")
  // //     .doc(task.id)
  // //     .set({ ...task, taskName });
  // //   console.log({ ...task });
  // // };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("things").doc(task.id).delete();
  };
  //Edit progress
  const save = (value) => {
    const db = firebase.firestore();
    db.collection("things").doc(task.id).update({ progress: value });
  };
  const cancel = () => {
    alert("Cancelled");
  };

  return (
    <>
      <div>
        <Container
          fluid
          style={{
            marginLeft: "0px",
          }}
        >
          <Row className="mt-1">
            <Col
              style={{
                backgroundColor: "#E8E8E8",
                fontSize: "20px",
              }}
              md={2}
            >
              {" "}
              {taskName}
            </Col>
            <Col
              style={{
                backgroundColor: "#E8E8E8",
                marginLeft: "5px",
                fontSize: "20px",
              }}
              md={2}
            >
              {taskQuantity === "0" ? "n/a" : taskQuantity}
            </Col>
            <Col
              style={{
                backgroundColor: "#E8E8E8",
                marginLeft: "5px",
                fontSize: "20px",
              }}
              md={2}
            >
              <EasyEdit
                onSave={save}
                onCancel={cancel}
                saveButtonLabel="Save Me"
                cancelButtonLabel="Cancel Me"
                attributes={{ name: "awesome-input", id: 1 }}
                instructions="Enter estimated progress"
                value={taskProgress + "%"}
                type="number"
              ></EasyEdit>
            </Col>
            <Col
              style={{
                backgroundColor: "#E8E8E8",
                marginLeft: "5px",
                fontSize: "20px",
              }}
              md={2}
            >
              {" "}
              {taskOwner}
            </Col>
            <Col
              style={{
                backgroundColor: "#E8E8E8",
                marginLeft: "5px",
                fontSize: "20px",
              }}
              md={2}
            >
              {taskDeadline}
            </Col>
            <Col
              style={{
                marginLeft: "0px",
                fontSize: "20px",
              }}
              md={2}
            >
              <button onClick={onDelete}>x</button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
//<button onClick={onUpdate}>Update</button>
