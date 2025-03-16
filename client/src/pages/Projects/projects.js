import React from "react";
import "./projects.css";

const experiences = [
  {
    company: "Xine Technology Solutions",
    role: "Jr. Developer",
    projects: [
      {
        title: "SuperId",
        description: "Description of Project 1",
        technologies: ["React", "Node.js", "MongoDB"],
        status: "Completed",
      },
      {
        title: "Trip Recharge",
        description: "Description of Project 2",
        technologies: ["Next.js", "GraphQL"],
        status: "In Progress",
      },
    ],
  },
  {
    company: "Mphasis Pvt. Ltd",
    role: "Data Analyst",
    projects: [
      {
        title: "Inventory Management System",
        description: [
          "Performed inventory analysis to streamline supply chain functions for a multi-warehouse organization.",
          "Utilized Talend for data integration, MySQL for database management, and Power BI for visualization.",
          "Developed a dashboard featuring:",
          {
            bulletPoints: [
              "Stock levels",
              "Category-wise allocation",
              "Low-stock products",
              "Top 3 high-volume stocks",
            ],
          },
          "Insights from the dashboard facilitate data-driven decision-making for inventory optimization and cost savings.",
          "Showcased business intelligence and supply chain analysis skills.",
        ],
        technologies: ["Talend", "MySQL", "PowerBI"],
        status: "Completed",
      },
    ],
  },
];

const getStatusClass = (status) => {
  switch (status) {
    case "Completed":
      return "status completed";
    case "In Progress":
      return "status in-progress";
    case "On Hold":
      return "status on-hold";
    default:
      return "status";
  }
};

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="section-title">My Projects</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="company-section">
          <h3 className="company-name">{exp.company}</h3>
          <p className="role">{exp.role}</p>
          <div className="projects-list">
            {exp.projects.map((project, idx) => (
              <div key={idx} className="project-card">
                <h4>{project.title}</h4>

                {/* Check if description is an array */}
                {Array.isArray(project.description) ? (
                  project.description.map((item, i) =>
                    typeof item === "object" && item.bulletPoints ? (
                      // Render bullet points
                      <ul key={i}>
                        {item.bulletPoints.map((point, j) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      // Render normal text
                      <p key={i}>{item}</p>
                    )
                  )
                ) : (
                  // Render description as normal text if it's a string
                  <p>{project.description}</p>
                )}

                <p>
                  <strong>Technologies:</strong> {project.technologies.join(", ")}
                </p>
                <p className={getStatusClass(project.status)}>
                  <strong>Status:</strong> {project.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
