
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Image {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: Image[];
  title?: string;
  subtitle?: string;
}

const ImageGallery = ({ images, title, subtitle }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">{title}</h2>
        )}
        {subtitle && (
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">{subtitle}</p>
        )}

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-[60vh] object-cover transition-opacity duration-500"
            />
          </div>

          {images[currentIndex].caption && (
            <p className="mt-4 text-center text-gray-600">
              {images[currentIndex].caption}
            </p>
          )}

          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevImage}
              className="rounded-full"
              aria-label="Previous image"
            >
              <ArrowLeft size={20} />
            </Button>
            <div className="flex items-center gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? "w-8 bg-primary" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextImage}
              className="rounded-full"
              aria-label="Next image"
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
