import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Col, Container, Row } from "react-bootstrap";


export const C_Lang = () => {
  const code = 'int main() {\n    printf("Hello, World!");\n    return 0;\n}';
  return (
    <Col  style={{ backgroundColor: "#F5F5DC" }}>
      <h2 className="text-center">C Programming</h2>
    <Row>
    <Col md={6} style={{ backgroundColor: "#F5F5DC", padding: "15px" }}>
      <Container fluid>
        <h4 className="text-center"><strong>1.</strong> Print Hello World</h4>
        <SyntaxHighlighter language="c" style={darcula} customStyle={{ fontSize: "16px" }}>
          {'int main() {\n    printf("Hello, World!");\n    return 0;\n}'}
        </SyntaxHighlighter>
      </Container>
    </Col>
    <Col md={6} style={{ backgroundColor: "#F5F5DC", padding: "15px" }}>
      <Container fluid>
        <h4 className="text-center">Hello World</h4>
        <SyntaxHighlighter language="c" style={darcula} customStyle={{ fontSize: "16px" }}>
          {code}
        </SyntaxHighlighter>
      </Container>
    </Col>
    </Row>
    </Col>
  );
};
