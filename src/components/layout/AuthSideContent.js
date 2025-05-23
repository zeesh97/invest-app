import React from 'react';
import { Space, Layout, Divider } from 'antd';
import { Typography } from 'antd';

import logo from '../../assets/logo.png';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function AuthSideContent() {
  return (
    <Content
      style={{
        padding: '150px 30px 30px',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        <img src={logo} width={160} alt="Logo" style={{ margin: '0 auto 40px', display: 'block' }} />
        <div className="space40"></div>
        <Title level={3}>Manage your company with :</Title>
        <div className="space20"></div>
        <ul className="list-checked">
          <li className="list-checked-item">
            <Space direction="vertical">
              <Text strong>All-in-one tool</Text>

              <Text>Build, run, and scale your apps - end to end</Text>
            </Space>
          </li>

          <li className="list-checked-item">
            <Space direction="vertical">
              <Text strong>Easily add &amp; manage your services</Text>
              <Text>It brings together your tasks, projects, timelines, files and more!</Text>
            </Space>
          </li>
        </ul>
        <Divider />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* <img
            src={logo4}
            alt="Logo4"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
          /> */}
        </div>
      </div>
    </Content>
  );
}
