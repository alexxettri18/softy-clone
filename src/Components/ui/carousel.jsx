export const Carousel = ({ children, className }) => {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        {children}
      </div>
    );
  };
  
  export const CarouselContent = ({ children, activeIndex }) => {
    return (
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {children}
      </div>
    );
  };
  
  export const CarouselItem = ({ children }) => {
    return <div className="min-w-full h-full">{children}</div>;
  };
  
  export const CarouselPrevious = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-4 -translate-y-1/2 z-10 p-2 bg-white/70 rounded-full shadow hover:bg-white"
    >
      ‹
    </button>
  );
  
  export const CarouselNext = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 -translate-y-1/2 z-10 p-2 bg-white/70 rounded-full shadow hover:bg-white"
    >
      ›
    </button>
  );
  