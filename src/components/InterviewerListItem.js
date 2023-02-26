import classNames from "classnames";
import React from "react";

import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  // props - id, name, avatar, selected
  //onclick setInterviewer(id)
  const interviewClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });

  return (
    <li className={interviewClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}
