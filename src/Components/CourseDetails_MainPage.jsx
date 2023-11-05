import React from 'react'
import { Col } from 'react-bootstrap'
import '../common.css'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CourseDetails_MainPage = (props) => {

  return (
    <Col style={{ backgroundColor: '#F5F5DC' , padding:"5px"}}>
        <h2>{props.name}</h2>
        <SyntaxHighlighter language='javascript' style={darcula}>
            {props.code}
        </SyntaxHighlighter>
      </Col>
  )
}
