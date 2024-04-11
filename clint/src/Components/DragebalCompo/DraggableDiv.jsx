import React from 'react';
import Draggable from 'react-draggable';

const DraggableDiv = () => {
  return (
    <Draggable>
      <div className="draggable-div">
        Drag me around!
      </div>
    </Draggable>
  );
};

export default DraggableDiv;
