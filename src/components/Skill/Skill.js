import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { skills } from "../../utils/ResumeData";
import "./Skill.scss";

const Skill = () => {
  return (
    <div className="skill">
      <ListGroup>
        {skills.map((item, index) => {
          return <ListGroup.Item key={index}>{item.knows}</ListGroup.Item>;
        })}
      </ListGroup>
    </div>
  );
};

export default Skill;
