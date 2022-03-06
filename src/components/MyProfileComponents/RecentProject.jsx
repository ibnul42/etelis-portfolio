import React from "react";
import "./recent_project.css";

// recent projects

const recentProject = [
  {
    name: "Github Finder",
    url: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quam fuga odio aperiam cum soluta vitae alias ducimus, incidunt ea dolorem aspernatur pariatur veniam praesentium deleniti. Ea nisi ad eveniet",
    viewLink: "https://simplilearn.com/ice9/",
    sourceLink: "https://simplilearn.com",
  },
  {
    name: "Guess the name",
    url: "https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png",
    description:
      "Tempore quam fuga odio aperiam cum soluta vitae alias ducimus, incidunt ea dolorem aspernatur pariatur veniam praesentium deleniti. Ea nisi ad eveniet",
    viewLink: "https://simplilearn.com/ice9/",
    sourceLink: "https://simplilearn.com",
  },
  {
    name: "Foodpanda",
    url: "https://elearningfeeds.com/wp-content/uploads/2020/11/image_542003_1606246298.jpg",
    description:
      "Wolor sit amet consectetur adipisicing elit. Tempore cum soluta vitae alias ducimus, incidunt ea dolorem aspernatur pariatur veniam praesentium deleniti.",
    viewLink: "https://simplilearn.com/ice9/",
    sourceLink: "https://simplilearn.com",
  },

  {
    name: "Daraz Shopping Mall",
    url: "https://d57439wlqx3vo.cloudfront.net/iblock/577/57718e3f9374256923aa4382c5bcc673/b73ee98a70e1ecefb77b4996f067a2fa.png",
    description:
      "Wolor sit amet consectetur adipisicing elit. Tempore cum soluta vitae alias ducimus, incidunt ea dolorem aspernatur pariatur veniam praesentium deleniti.",
    viewLink: "https://simplilearn.com/ice9/",
    sourceLink: "https://simplilearn.com",
  },
];

function RecentProject() {
  return (
    <div>
      <h2>Recent Projects</h2>
      <div className="d-flex flex-wrap align-items-center justify-content-center">
        {recentProject.map((project, index) => (
          <div
            key={index}
            className="card card_custom_style border rounded shadow mx-2 my-3 rounded"
          >
            <img
              className="card-img-top project_image"
              src={project.url}
              alt="Card cap"
            />
            <div className="card-body">
              <h3 className="text-center project_name">{project.name}</h3>
              <p className="card-text project_desc">{project.description}</p>
            </div>
            <div className="d-flex justify-content-center mb-3">
              {/* <a
                href={project.viewLink}
                target="_blank"
                type="button"
                rel="noreferrer"
                className="btn btn-outline-warning link_btn"
              >
                View
              </a> */}
              <a
                href={project.sourceLink}
                target="_blank"
                type="button"
                rel="noreferrer"
                className="btn btn-outline-info link_btn"
              >
                Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProject;
