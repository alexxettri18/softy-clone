import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../Components/ui/carousel";
import { useState, useEffect } from "react";

const images = [
  { id: 1, url: "/1.webp", alt: "Happy family" },
  { id: 2, url: "/2.webp", alt: "Caring mother" },
  { id: 3, url: "/3.webp", alt: "Baby products" },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  // Autoplay every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Carousel className="w-full h-full">
        <CarouselContent activeIndex={index}>
          {images.map((image) => (
            <CarouselItem key={image.id}>
              <div className="w-full h-screen">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={prevSlide} />
        <CarouselNext onClick={nextSlide} />
      </Carousel>
    </div>
  );
};

export default Hero;
