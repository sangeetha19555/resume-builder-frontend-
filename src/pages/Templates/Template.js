import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useNavigate, useParams } from "react-router-dom";
import { DefaultLayout } from "../../components/DefaultLayout";
import { Template1 } from "./Template1";
import { Template2 } from "./Template2";
import { Button } from "antd";

export const Template = () => {
  const navigate = useNavigate();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const params = useParams();

  const gettemplate = () => {
    switch (params.id) {
      case "1": {
        return <Template1 />;
      }
      case "2": {
        return <Template2 />;
      }
      default:
        return <h1>No project match</h1>;
    }
  };

  return (
    <div>
      <DefaultLayout>
        <div className="d-flex justify-content-end my-5 mx-5">
          <Button
            className="mx-5"
            style={{ backgroundColor: "black", color: "#fff" }}
            onClick={() => navigate("/home")}
          >
            Back
          </Button>
          <Button onClick={handlePrint}>Print</Button>
        </div>

        <div ref={componentRef}>{gettemplate()}</div>
      </DefaultLayout>
    </div>
  );
};
