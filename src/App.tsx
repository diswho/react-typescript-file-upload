import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import FileUpload from "./components/FileUpload";

const App: React.FC = () => {
  return (
    <div className="container" style={{ width: "600px" }}>
      <div className="my-3">
        <h3>bezkoder.com</h3>
        <h4>React Typescript File Upload</h4>
      </div>

      <FileUpload />
    </div>
  );
};

export default App;
