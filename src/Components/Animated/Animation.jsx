import { useEffect, useState, useRef } from "react";

const Card = () => {
  return (
    <div className="hover:text-white text-gray-400 border-2 w-96 h-screen hover:bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-lg">
      Card
    </div>
  );
};

const Animation = () => {
  const [offset, setOffset] = useState(0);
  const totalCards = 6;
  const visibleCards = 3;
  const cardWidth = 384;
  const cardMargin = 8;
  const containerWidth = (cardWidth + cardMargin) * totalCards;
  const screenWidth = window.innerWidth;
  const maxOffset = -(containerWidth - screenWidth);

  const targetOffset = useRef(0);
  const isMoving = useRef(false);
  const animationFrameId = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX } = e;
    const screenWidth = window.innerWidth;

    const newOffset =
      (clientX / screenWidth) *
      (totalCards - visibleCards) *
      -(cardWidth + cardMargin);

    targetOffset.current = Math.max(maxOffset, Math.min(0, newOffset));

    isMoving.current = true;

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    animate();
  };

  const animate = () => {
    setOffset((prevOffset) => {
      const diff = targetOffset.current - prevOffset;
      if (Math.abs(diff) > 0.1) {
        return prevOffset + diff * 0.1;
      } else {
        return targetOffset.current;
      }
    });

    if (isMoving.current) {
      animationFrameId.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    let mouseStopTimeout;

    const stopMoving = () => {
      mouseStopTimeout = setTimeout(() => {
        isMoving.current = false;
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", stopMoving);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", stopMoving);
      if (mouseStopTimeout) {
        clearTimeout(mouseStopTimeout);
      }
    };
  }, [screenWidth]);

  return (
    <div className="overflow-hidden h-screen flex">
      <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(${offset}px)`,
          width: `${containerWidth}px`,
        }}
      >
        {[...Array(totalCards)].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default Animation;
