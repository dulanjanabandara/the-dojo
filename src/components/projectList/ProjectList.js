import { Link } from "react-router-dom";
import Avatar from "./../avatar/Avatar";

import "./ProjectList.css";

export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.length === 0 && <p className="error">No projects yet!</p>}
      {projects.map((project) => (
        <Link key={project.id} to={`/projects/${project.id}`}>
          <h4>{project.name}</h4>
          <p>Due by {project.dueDate.toDate().toDateString()}</p>
          <div className="assigned-to">
            <ul>
              {project.assignedUsersList.map((user) => (
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}

// project.dueDate is a firestore timestamp. We want to turn it into a JS Date and then Date string. So we can output it in the browser.
