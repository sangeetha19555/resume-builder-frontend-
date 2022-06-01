import React from "react";
import { Form, Input, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import "../resources/common.css";
export const SkillEducation = () => {
  return (
    <div>
      <h5>Education</h5>
      <hr />
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  {/* Qualification */}
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "qualification"]}
                      label="Qualification"
                      rules={[
                        { required: true, message: "Missing qualification" },
                      ]}
                    >
                      <Input placeholder="Qualification" />
                    </Form.Item>
                  </div>
                  {/*     Percentage*/}
                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "percentage"]}
                      label="Percentage"
                      rules={[
                        { required: true, message: "Missing Percentage" },
                      ]}
                    >
                      <Input placeholder="eg: 80" />
                    </Form.Item>
                  </div>

                  {/*     institution*/}
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "institution"]}
                      label="Institution"
                      rules={[
                        { required: true, message: "Missing institution" },
                      ]}
                    >
                      <Input placeholder="Institution" />
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
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      {/* ============================ education Ends here ================================ */}
      <h5>Skills</h5>
      <hr />
      <Form.List name="skills">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  {/* Qualification */}
                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "technology"]}
                      label="Technology"
                      rules={[
                        { required: true, message: "Missing technology" },
                      ]}
                    >
                      <Input placeholder="React" />
                    </Form.Item>
                  </div>
                  {/*     Percentage*/}
                  {/* <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "rating"]}
                      label="Rating out of 100"
                      rules={[{ required: true, message: "Missing rating" }]}
                    >
                      <Input placeholder="e.g 89" />
                    </Form.Item>
                  </div> */}

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
                Add Skills
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
};
