import React, { useRef } from 'react';

const ScrollDemo = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const scrollToTarget = () => {
     targetRef.current?.scrollIntoView({ 
      behavior: 'smooth', // Optional: smooth animation
      block: 'start'      // Optional: align the top of the element to the top of the viewport
    });
  };

  return (
    <div>
      <button onClick={scrollToTarget} className='text-white'>
        Scroll to Target Section
      </button>

      {/* Placeholder content to enable scrolling */}
      <div style={{ height: '100vh' }} className='text-white'>Scroll down to see the button</div> 
      <div style={{ height: '100vh', background: '#eee' }}>More content...</div>

      {/* The target element */}
      <div ref={targetRef} style={{ padding: '20px', background: 'lightblue' }}>
        <h2>Target Section</h2>
        <p>You have scrolled to this section.</p>
      </div>
    </div>
  );
};

export default ScrollDemo;
