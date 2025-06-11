import React, { useContext, useRef, useState } from 'react';
import { UserContext } from '../DataBase/Context';
import Cards from '../Components/Cards';

const AllUser = () => {
  const { users } = useContext(UserContext);
  const scrollRef = useRef(null);

  // Drag üçün state
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTopStart, setScrollTopStart] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.pageY);
    setScrollTopStart(scrollRef.current.scrollTop);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    const dy = e.pageY - startY;
    scrollRef.current.scrollTop = scrollTopStart - dy;
  };

  return (
    <div className="pt-[64px] h-[calc(100vh-64px)] bg-gray-50">
      <div className="container mx-auto px-4 py-6 h-full flex flex-col">
        <h1 className="text-3xl font-bold mb-4 text-orange-500">All Users</h1>

        <div
          ref={scrollRef}
          className="flex-1 overflow-auto no-scrollbar"
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onMouseMove={onMouseMove}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <Cards customers={users} />
        </div>
      </div>
    </div>
  );
};

export default AllUser;
