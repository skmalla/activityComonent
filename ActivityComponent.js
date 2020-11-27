import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faPaperclip,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./ActivityComponent.css";

const ActivityComponent = (props) => {
  let attachmentClass = props.task.attachment
    ? "search_svgN1 margin_right_17 show"
    : "search_svgN1 margin_right_17 hidden";
  let starredClass = props.task.starred
    ? "search_svgN1 starColor show"
    : "search_svgN1 starColor hidden";
  return (
    <div>
      <div className="search-list-table">
        <div className="search-list-row">
          <div className="search-list-cell">
            <input type="checkbox" />
            <label className="search-list-name-label">{props.task.name}</label>
          </div>
          <div className="search-list-cell">
            <div className="icons">
              <FontAwesomeIcon
                icon={faPaperclip}
                title="Attachment"
                className={attachmentClass}
              />
              <FontAwesomeIcon
                icon={faStar}
                title="star"
                className={starredClass}
              />
            </div>
          </div>
        </div>
        <div className="search-list-row">
          <div className="search-list-cell">
            <FontAwesomeIcon icon={(faCircle, faCircle)} title="search" />
            <label style={{ color: "#000080", fontWeight: "bold" }}>
              {props.task.header}
            </label>
          </div>
          <div className="search-list-cell">
            <span>{props.task.lastUpdated}</span>
          </div>
        </div>
      </div>
      <div
        className="search-list-table"
        style={{ borderBottom: "2px solid #dee2e6" }}
      >
        <div className="search-list-row">
          <div className="search-list-cell" style={{ paddingLeft: "30px" }}>
            {props.task.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityComponent;
