import {
  CarouselItem,
  CarouselPrevious,
  Carousel,
  CarouselContent,
  CarouselNext,
} from '@/components/ui/carousel';
import React from 'react';

// have used shadcn library's predefined Carousel component For Carousel functionality
// https://ui.shadcn.com/docs/components/radix/carousel

const PropertyViewCarousel = ({ images }) => {
  return (
    <section>
      <Carousel
        className="overflow-hidden rounded-lg"
        opts={{
          breakpoints: {
            '(min-width: 1024px)': { slideToScroll: 2 }, //on bigger devices we are scrolling 2 imgs at a time, by default it is 1 img
          },
        }}
      >
        <CarouselContent className="-ml-0.5">
          {images.map((image, index) => (
            <CarouselItem key={index} className="lg:basis-1/2 pl-0.5">
              <img
                className="h-96 w-full object-cover"
                src={image}
                alt={`Image index: ${index}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1 shadow-lg" />
        <CarouselNext className="right-1 shadow-lg" />
      </Carousel>
    </section>
  );
};

export default PropertyViewCarousel;
