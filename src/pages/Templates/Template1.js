import React from "react";
import "../../resources/templates.css";
export const Template1 = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  console.log(user);

  return (
    <div className="template1-parent">
      {/* header */}
      <div className="template1-header-top d-flex justify-content-between">
        <h1 className="template1-header__title">
          {user.data.firstName} {user.data.lastName}
        </h1>
        <div>
          <p className="template1-header__para">{user.data.email}</p>
          <p className="template1-header__para">{user.data.mobileNumber}</p>
          <p className="template1-header__para">{user.data.address}</p>
        </div>
      </div>
      {/* header Ends here */}

      {/* divider */}
      <div className="divider mt-4"></div>
      {/* divider Ends here */}

      {/*  objectives */}
      <div className="objective mt-4">
        <h3>Objective</h3>

        <p className="template1-header__para">{user.data.carrierobjective}</p>
      </div>
      {/*  objectives Ends Here*/}

      {/* divider */}
      <div className="divider mt-4"></div>
      {/* divider Ends here */}

      {/* education */}
      <div className="education mt-4">
        <h3>Education</h3>

        {user.data.education.map((education) => {
          console.log(education);
          return (
            <div className="d-flex template1-header__education_box">
              <h6>
                <b>{education.range} : </b>
              </h6>
              <h6 className="template1-header__education_para">
                {education.qualification} with{" "}
                <b className="template1-header__education__bold">
                  {education.percentage}%
                </b>{" "}
                in {education.institution}.
              </h6>
            </div>
          );
        })}
      </div>
      {/* education  ends Here*/}

      {/* divider */}
      <div className="divider mt-4"></div>
      {/* divider Ends here */}
      {/* experience */}
      <div className="experience mt-4">
        <h3>Experience</h3>
        {user.data.experience.map((exp) => {
          console.log(exp);
          return (
            <div className="d-flex template1-header__education_box">
              <h6>
                <b>{exp.range} : </b>
              </h6>
              <h6 className="template1-header__education_para">
                <b className="template1-header__education__bold_black">
                  {exp.company}
                </b>{" "}
                in {exp.place} ({exp.years} years)
              </h6>
            </div>
          );
        })}
      </div>
      {/* experience  ends Here*/}

      {/* divider */}
      <div className="divider mt-4"></div>
      {/* divider Ends here */}

      {/* Projects */}
      <div className="projects mt-4">
        <h3>Projects</h3>
        {user.data.projects.map((project) => {
          return (
            <div className="d-flex flex-column ">
              <h6 className="mt-2 mb-0">
                <b>
                  {project.title} [{project.range}]:{" "}
                </b>
              </h6>
              <h6 className="template1-projects_desc">
                {project.description}.
              </h6>
            </div>
          );
        })}
      </div>
      {/* Projects  ends Here*/}

      {/* divider */}
      <div className="divider mt-4"></div>
      {/* divider Ends here */}

      {/* Skills */}
      <div className="skill mt-4">
        <h3>Skills</h3>
        {user.data.skills.map((skill) => {
          return (
            <div className="d-flex flex-column ">
              <h6>{skill.technology}</h6>
            </div>
          );
        })}
      </div>
      {/* Skills  ends Here*/}
    </div>
  );
};
