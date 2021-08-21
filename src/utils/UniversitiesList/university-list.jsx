import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./index.css";
import { ireland_university_list, uk_university_list } from "./universities";

const UniversityList = (props) => {
  const universities =
    props.country === "UK" ? uk_university_list : ireland_university_list;
  return (
    <>
      <ListGroup variant="flush">
        {universities.map((item, index) => {
          return <ListGroup.Item>{item}</ListGroup.Item>;
        })}

        {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item> */}
      </ListGroup>
    </>
  );
};

export default UniversityList;
