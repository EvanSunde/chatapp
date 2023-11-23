import React, { useRef, useState, useEffect } from 'react';
import '../App.css';

function App() {
  const headerRef = useRef(null);
  const [background, setBackground] = useState('');

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setBackground(`radial-gradient(circle at ${x * 100}% ${y * 100}%, #ff0000, #000000)`);
    };

    const header = headerRef.current;
    header.addEventListener('mousemove', handleMouseMove);

    return () => {
      header.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // ...
}
