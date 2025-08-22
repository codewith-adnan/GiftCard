import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import {
  Container,
  Heading,
  Form,
  Row,
  Label,
  InputGroup,
  Input,
  Button,
  QuillWrapper,
} from "./styles";

const CreatePolicy: React.FC = () => {
  const [description, setDescription] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      [{ list: "ordered" }, { list: "bullet" },{ 'list': 'check' }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "bold", "italic", "underline", "strike",
    "color", "background",
    "script",
    "list", "bullet", "indent", "check", "ordered",
    "align",
    "link", "image"
  ];

  return (
    <Container>
      <Heading>Create Policies</Heading>
      <Form>
        <Row>
          <Label>Policy Name</Label>
          <InputGroup>
            <Input type="text" placeholder="Terms & Conditions" />
            <Button>Create</Button>
          </InputGroup>
        </Row>

        <Row>
          <Label style={{marginBottom:'15px'}}>Policy Description</Label>
          <QuillWrapper>
            <ReactQuill style={{borderRadius:'12px'}}
              theme="snow"
              value={description}
              onChange={setDescription}
              modules={modules}
              formats={formats}
              placeholder="Write the terms & conditions here..."
            />
          </QuillWrapper>
        </Row>
      </Form>
    </Container>
  );
};

export default CreatePolicy;
