import React from "react";
import "../resources/resumeCard.css";
export const ResumeCard = () => {
  return (
    <>
      <div className="resume_Container_div">
        <h3>3 EASY STEPS TO CREATE YOUR PERFECT RESUME</h3>
        <div className="resume_Container">
          {/* card */}
          <div className="resume_Container_box">
            <div className="resume_Container_box_icon">
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </div>
            <div className="resume_Container_box_text">
              <h5>
                Edit your profile <br />
                and click update button
              </h5>
            </div>
          </div>
          {/* card */}
          {/* card */}
          <div className="resume_Container_box">
            <div className="resume_Container_box_icon">
              <i class="fa fa-file-text" aria-hidden="true"></i>
            </div>
            <div className="resume_Container_box_text">
              <h5>
                Choose the resume <br />
                Template
              </h5>
            </div>
          </div>
          {/* card */}
          {/* card */}
          <div className="resume_Container_box">
            <div className="resume_Container_box_icon">
              <i class="fa fa-download" aria-hidden="true"></i>
            </div>
            <div className="resume_Container_box_text">
              <h5>
                Click the download <br />
                resume
              </h5>
            </div>
          </div>
          {/* card */}
        </div>
      </div>
      {/* Content */}
      <div className="resume_paracontent">
        <h4>Save time on formatting and editing</h4>
        <p>
          With Canva’s free resume builder, we’ve taken the heavy lifting out of
          designing and formatting your resume. Using our flexible templates
          will save you hours—all you need to do is add your professional
          experience and customize the existing design as needed.
        </p>
        <p>
          Rest assured that Canva’s templates come designer-approved, so you
          don’t have to worry about how they look—because they already look
          great!
        </p>

        <h4>Create a resume for every industry</h4>
        <p>
          Whether you’re a lawyer who works in the corporate sector or an
          interior stylist in the creative industry, Canva’s graphic designers
          have created a wide range of templates that are suitable for whatever
          industry you find yourself in.
        </p>
        <p>
          For creative types, we have colorful templates with artistic,
          illustrative flourishes. Or, if you’re after something more formal,
          you can explore our collection of minimalist templates, sure to
          impress the most traditional of hiring managers.
        </p>
        <h4>Present your skills in a unique way</h4>
        <p>
          On average, recruiters take six seconds to look at a resume. So, if
          you’re looking for a distinctive way to highlight your skills, Canva’s
          templates offer unique designs that will help you stand out.
        </p>
        <p>
          From infographic timelines to one-page pitch decks, and even pie
          charts, with a few simple clicks you are able to clearly display all
          your career highlights so far.
        </p>
      </div>
    </>
  );
};
