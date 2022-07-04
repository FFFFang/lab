import "./App.css";
import { Layout } from "antd";
import React from "react";
const { Header, Footer, Content } = Layout;

const App = () => (
  <>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </>
);

export default App;
