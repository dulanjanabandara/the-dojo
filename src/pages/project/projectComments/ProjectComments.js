import { useState } from "react";
import { timestamp } from "../../../firebase/config";
import { useAuthContext } from "./../../../hooks/useAuthContext";

import "./ProjectComments.css";

export default function ProjectComments() {
  const [newComment, setNewComment] = useState("");
  const { user, authIsReady } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAdd: timestamp.fromDate(new Date()),
      id: Math.random(),
    };

    console.log(commentToAdd);
  };

  return (
    <div className="project-comments">
      <h1>Project Comments</h1>
      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new comment:</span>
          <textarea
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
            required
          ></textarea>
        </label>
        <button className="btn">Add Comment</button>
      </form>
    </div>
  );
}
