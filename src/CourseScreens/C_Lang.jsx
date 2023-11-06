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
        <h4 className="text-center"><strong>1.</strong> Print Hello World In C Language</h4>
        <SyntaxHighlighter language="c" style={darcula} customStyle={{ fontSize: "16px" }}>
          {'int main() {\n    printf("Hello, World!");\n    return 0;\n}'}
        </SyntaxHighlighter>
      </Container>
    </Col>
    <Col md={6} style={{ backgroundColor: "#F5F5DC", padding: "15px" }}>
      <Container fluid>
      <h4 className="text-center"><strong>2.</strong> Basic Variable in C Language</h4>
        <SyntaxHighlighter language="c" style={darcula} customStyle={{ fontSize: "16px" }}>
          {"int main() {\n   int a= 45; // Here int means integer \n print(a) // 45 \n float a= 22.3; // Here float means floating value (point value) \n print(a) // 22.300 \n char ch = 'A'; // Here In 'A' Sign means character Value \n print(ch); // Here the String Value Ptint , A  \n  return 0;\n}"}
        </SyntaxHighlighter>
      </Container>
    </Col>
    </Row>
    <Row>
    <Col md={6} style={{ backgroundColor: "#F5F5DC", padding: "15px" }}>
      <Container fluid>
        <h4 className="text-center"><strong>3.</strong>Take User Input And Print It In C Language</h4>
        <SyntaxHighlighter language="c" style={darcula} customStyle={{ fontSize: "16px" }}>
          {`int main() {\n int a; // Take a As Interger Variable \n printf('Enter A Value: '); // Just Print A Line To Show How We Take Input \n scanf("%d", &a); // Here The Entered Value Of a Is Stored Using scanf() \n printf("Your number is: %d", a); // Here The Entered Value of a Will Print \n    return 0;\n}`}
        </SyntaxHighlighter>
      </Container>
    </Col>
    <Col md={6} style={{ backgroundColor: "#F5F5DC", padding: "15px" }}>
      <Container fluid>
      <h4 className="text-center"><strong>2.</strong> Basic Variable in C Language</h4>
        <SyntaxHighlighter language="c" style={darcula} customStyle={{ fontSize: "16px" }}>
          {"int main() {\n   int a= 45; // Here int means integer \n print(a) // 45 \n float a= 22.3; // Here float means floating value (point value) \n print(a) // 22.300 \n char ch = 'A'; // Here In 'A' Sign means character Value \n print(ch); // Here the String Value Ptint , A  \n  return 0;\n}"}
        </SyntaxHighlighter>
      </Container>
    </Col>
    </Row>
    
    </Col>
  );
};
