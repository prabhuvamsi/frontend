import React from 'react';
import StudentLists from './pvslistr'; // Import the component containing the code

function ParentComponent() {
  const total = []; // Your total amount value
  return <StudentLists total={total} />;
}

export default ParentComponent;