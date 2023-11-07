import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Col, Container, Row } from "react-bootstrap";

export const C_Lang = () => {
  return (
    <Col style={{ backgroundColor: "#F5F5DC" }}>
      <h2 className="text-center">C Programming</h2>
        <p>
          C is a widely used and influential programming language that was
          developed in the early 1970s by Dennis Ritchie at Bell Labs. It has
          had a profound impact on the field of computer science and
          programming, serving as the foundation for many other languages and
          operating systems. Here's an introductory overview of the C
          programming language: <strong> 1. **Procedural Language**: </strong>C is a procedural
          programming language, which means it follows a linear flow of control,
          executing instructions one after the other. It's known for its
          simplicity and efficiency. <strong> 2. **Portable**: </strong> C programs are highly
          portable, which means they can be easily transferred from one platform
          to another with minimal modification. This portability is due to the
          minimalistic nature of C and its close-to-hardware characteristics. <strong> 3.
          **Structured Language**: </strong> C supports structured programming, allowing
          developers to write clean and organized code using functions and
          control structures like loops and conditionals. <strong> 4. **Low-Level and
          High-Level Features**: </strong> C offers low-level programming capabilities,
          giving developers direct access to memory and system resources, but it
          also provides high-level abstractions for tasks like file I/O and
          string manipulation. <strong> 5. **Standard Library**: </strong> C comes with a standard
          library that provides a set of functions and macros to perform common
          operations, such as input/output, string manipulation, and memory
          management. <strong> 6. **Syntax**: </strong> C has a concise and readable syntax.
          Statements in C are typically terminated by semicolons, and functions
          are defined with a return type, a name, and a list of parameters
          enclosed in parentheses.
        </p>
      <Row>
        <Col md={6} style={{ backgroundColor: "#F5F5DC", padding: "15px" }}>
          <Container fluid>
            <h4 className="text-center">
              <strong>1.</strong> Print Hello World 
            </h4>
            <SyntaxHighlighter
              language="c"
              style={darcula}
              customStyle={{ fontSize: "16px" }}
            >
              {'int main() {\n    printf("Hello, World!");\n    return 0;\n}'}
            </SyntaxHighlighter>
          </Container>
        </Col>
        <Col md={6} style={{ backgroundColor: "#F5F5DC", padding: "15px" }}>
          <Container fluid>
            <h4 className="text-center">
              <strong>2.</strong> Basic Variable 
            </h4>
            <SyntaxHighlighter
              language="c"
              style={darcula}
              customStyle={{ fontSize: "16px" }}
            >
              {
                "int main() {\n   int a= 45; // Here int means integer \n print(a) // 45 \n float a= 22.3; // Here float means floating value (point value) \n print(a) // 22.300 \n char ch = 'A'; // Here In 'A' Sign means character Value \n print(ch); // Here the String Value Ptint , A  \n  return 0;\n}"
              }
            </SyntaxHighlighter>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md={6} style={{ backgroundColor: "#F5F5DC", padding: "15px" }}>
          <Container fluid>
            <h4 className="text-center">
              <strong>3.</strong>Take User Input And Print It 
            </h4>
            <SyntaxHighlighter
              language="c"
              style={darcula}
              customStyle={{ fontSize: "16px" }}
            >
              {`int main() {\n int a; // Take a As Interger Variable \n printf('Enter A Value: '); // Just Print A Line To Show How We Take Input \n scanf("%d", &a); // Here The Entered Value Of a Is Stored Using scanf() \n printf("Your number is: %d", a); // Here The Entered Value of a Will Print \n    return 0;\n}`}
            </SyntaxHighlighter>
          </Container>
        </Col>
        <Col md={6} style={{ backgroundColor: "#F5F5DC", padding: "15px" }}>
          <Container fluid>
            <h4 className="text-center">
              <strong>4.</strong> Basic Arithmetic Function 
            </h4>
            <SyntaxHighlighter
              language="c"
              style={darcula}
              customStyle={{ fontSize: "16px" }}
            >
              {
                "int main() {\n   int a = 5; \n int b = 4 ; // Here a and b are declared as 5 , 4  \n print( a + b ); // 5+4 = 9 \n print( a - b ); // 5-4 = 1 \n print( a * b ); // 5*4 = 20 \n print( a / b ); // 5/4 = 1 \n return 0;\n}"
              }
            </SyntaxHighlighter>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md={6} style={{ backgroundColor: "#F5F5DC", padding: "15px" }}>
          <Container fluid>
            <h4 className="text-center">
              <strong>5.</strong> If-Else Statement 
            </h4>
            <SyntaxHighlighter
              language="c"
              style={darcula}
              customStyle={{ fontSize: "16px" }}
            >
              {`int main() {\n  int a = 4 ; // initialysed value to a \n if(a>2){ // condition true when value of a is greater than 2 \n print('a is greater'); // if condition true then print it\n } \n else{ // if condition not satisfied then this will call/fired \n print('a is smaller'); // if condition false then print it \n} \n    return 0;\n}`}
            </SyntaxHighlighter>
          </Container>
        </Col>
        <Col md={6} style={{ backgroundColor: "#F5F5DC", padding: "15px" }}>
          <Container fluid>
            <h4 className="text-center">
              <strong>4.</strong> Nested If-Else Statement 
            </h4>
            <SyntaxHighlighter
              language="c"
              style={darcula}
              customStyle={{ fontSize: "16px" }}
            >
              {`int main() {\n  int a = 4 ; // initialysed value to a \n if(a>2){ // condition true when value of a is greater than 2 \n print('a is greater'); // if condition true then print it\n } \n else if(a=2) { // if condition satisfied then this will call/fired \n print('a is similar to it'); // if condition true for this cond. then print it \n} \n else{ // if condition not satisfied then this will call/fired \n print('a is smaller'); // if condition false then print it \n}  \n  return 0;\n}`}
            </SyntaxHighlighter>
          </Container>
        </Col>
      </Row>
    </Col>
  );
};
