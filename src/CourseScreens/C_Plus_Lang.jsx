import React from 'react';
import { Col } from 'react-bootstrap';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const C_Plus_Lang = () => {
  const code = "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\";\n    return 0;\n}";

  return (
    <Col md={6} style={{ backgroundColor: '#F5F5DC', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 className="text-center">C++ Programming</h2>
      <SyntaxHighlighter language="cpp" style={darcula}>
        {code}
      </SyntaxHighlighter>
    </Col>
  )
}
