import React from "react";
import { Form, Input, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import "../resources/common.css";

const { TextArea } = Input;

export const ExperienceProjects = () => {
  return (
    <div>
      <h5>Experience</h5>
      <hr />
      <Form.List name="experience">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  {/* Qualification */}
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "company"]}
                      label="Company Name"
                      rules={[{ required: true, message: "Missing company" }]}
                    >
                      <Input placeholder="Company" />
                    </Form.Item>
                  </div>
                  {/*     Percentage*/}
                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "years"]}
                      label=" No of Years"
                      rules={[{ required: true, message: "Missing Years" }]}
                    >
                      <Input placeholder="Years" />
                    </Form.Item>
                  </div>

                  {/*     institution*/}
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "place"]}
                      label="Place"
                      rules={[{ required: true, message: "Missing Place" }]}
                    >
                      <Input placeholder="Place" />
                    </Form.Item>
                  </div>

                  {/* year Range*/}
                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "range"]}
                      label="Year Range"
                      rules={[
                        { required: true, message: "Missing year range" },
                      ]}
                    >
                      <Input placeholder="2010 - 2015" />
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <MinusCircleOutlined
                      onClick={() => remove(name)}
                      className="remove-btn"
                    />
                  </div>
                </>
              ))}
            </div>
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Experience
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      {/* ============================ education Ends here ================================ */}

      <h5>Project</h5>
      <hr />
      <Form.List name="projects">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  {/* title */}
                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "title"]}
                      label="Project Title"
                      rules={[{ required: true, message: "Missing title" }]}
                    >
                      <Input placeholder="Title" />
                    </Form.Item>
                  </div>
                  {/*     description*/}
                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "description"]}
                      label="Description"
                      rules={[
                        { required: true, message: "Missing description" },
                      ]}
                    >
                      <TextArea placeholder="description" rows={1} />
                    </Form.Item>
                  </div>
                  {/*     year Range*/}
                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "range"]}
                      label="Year Range"
                      rules={[
                        { required: true, message: "Missing year range" },
                      ]}
                    >
                      <Input placeholder="2010 - 2015" />
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <MinusCircleOutlined
                      onClick={() => remove(name)}
                      className="remove-btn"
                    />
                  </div>
                </>
              ))}
            </div>
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Project
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
};
