import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import {FaArrowCircleUp} from 'react-icons/fa'; 

export const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
    <Container fluid className={`bg-dark text-white py-2 scroll-to-top-button ${isVisible ? 'visible' : ''}`}  onClick={scrollToTop}>
      <h4>
        Scroll
      </h4>
    </Container>
  )
}
