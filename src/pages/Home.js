import React from "react";
import { useNavigate } from "react-router-dom";
import { DefaultLayout } from "../components/DefaultLayout";
import template1img from "./Templates/template1.png";
import template2img from "./Templates/template2.png";
export const Home = () => {
  const navigate = useNavigate();
  const templates = [
    {
      title: "Simple Resume",
      image: template1img,
    },
    {
      title: "Highlighted Section Resume",
      image: template2img,
    },
  ];
  return (
    <div>
      <DefaultLayout>
        <h2 className="template-homepage__title">
          Go to Profile and Enter your details
        </h2>
        <div className="template-homepage-container">
          {templates.map((template, index) => {
            return (
              <div className="template-homepage-container_boxs">
                <div className="template-homepage_box ">
                  <img
                    className="template-homepage_img"
                    src={template.image}
                    alt={template.title}
                  />
                  <div className="template-homepage_text">
                    <p>{template.title}</p>
                    <button onClick={() => navigate(`/templates/${index + 1}`)}>
                      Try
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </DefaultLayout>
    </div>
  );
};
