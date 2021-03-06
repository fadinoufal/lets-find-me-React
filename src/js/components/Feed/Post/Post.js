import React from "react";
import Image from "../../../components/Image/Image";
import Button from "../../Button/Button.jsx";
import { Link } from "react-router-dom";

const post = props => {
  const handleClick = () => {
    props.history.push("/feed/" + props.id);
  };

  return (
    <article className="post-card" onClick={handleClick}>
      {/* <Link to={"/feed/" + props.id}> */}
        <header className="post__header">
          <h3 className="post__meta">
            Posted by {props.author} on {props.date}
          </h3>
          <h1 className="post__title">{props.title}</h1>
        </header>
        <div className="post__image">
          <Image imageUrl={props.image} contain />
        </div>
        <div className="post__content">{props.content}</div>
        {/* <div className="post__actions">
      <Button mode="flat" link={"/feed/"+props.id}>
        View
      </Button>
      <Button mode="flat" onClick={props.onStartEdit}>
        Edit
      </Button>
      <Button mode="flat" design="danger" onClick={props.onDelete}>
        Delete
      </Button> 
    </div>*/}
      {/* </Link> */}
    </article>
  );
};

export default post;
