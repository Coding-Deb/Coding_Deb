import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const C_Plus_Lang = () => {
  const code =
    '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!";\n    return 0;\n}';

  return (
    <Col style={{ backgroundColor: "#F5F5DC" }}>
      <Row>
        <Container fluid style={{ backgroundColor: "#F5F5DC" }}>
          <h2 className="text-center">C++ Programming</h2>
        </Container>
      </Row>
    </Col>
  );
};
