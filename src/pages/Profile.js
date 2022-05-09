import React, { useState } from "react";
import { DefaultLayout } from "../components/DefaultLayout";
import { Button, Form, message, Spin, Tabs } from "antd";
import { PersonalInfo } from "../components/PersonalInfo";
import { SkillEducation } from "../components/SkillEducation";
import { ExperienceProjects } from "../components/ExperienceProjects";
import axios from "axios";
import { API } from "./API";

const { TabPane } = Tabs;
export const Profile = () => {
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("userInfo"));
  console.log("Profile Page", user.data._id);

  const onFinish = async (values) => {
    console.log(values, "values........");

    setLoading(true);

    try {
      const result = await axios.post(`${API}api/user/update`, {
        ...values,
        _id: user.data._id,
      });

      localStorage.setItem("userInfo", JSON.stringify(result));
      setLoading(false);
      message.success("Profile updated Successfull");
    } catch (error) {
      setLoading(false);
      message.error("Profile update is Failed");
    }
  };
  return (
    <div>
      <DefaultLayout>
        <div className="profile_layout">
          {loading && <Spin size="large" className="loading_spin" />}
          <div className="update-profile p-4">
            <h4>Update Profile</h4>
            <hr />
            <Form
              layout="vertical"
              onFinish={onFinish}
              initialValues={user.data}
            >
              <Tabs defaultActiveKey="1">
                <TabPane tab="Personal Info" key="1">
                  <PersonalInfo />
                </TabPane>
                <TabPane tab="Skills and Education" key="2">
                  <SkillEducation />
                </TabPane>
                <TabPane tab="Experience / Projects" key="3">
                  <ExperienceProjects />
                </TabPane>
              </Tabs>

              {/* Button */}
              <Button htmlType="submit" className="blackbutton">
                UPDATE
              </Button>
            </Form>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};
