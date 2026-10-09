import Image from "next/image";
import type { ImageData } from "@/content/home";

export function StudyImage({ image, className = "", priority = false, sizes = "(max-width: 760px) 100vw, 90vw" }: {
  image: ImageData;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure className={`study ${className}`}>
      <div className="study-frame">
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height}
          sizes={sizes}
          priority={priority} />
        {image.type === "concept" && <span className="study-label">Concept study</span>}
      </div>
      <figcaption><span>{image.caption}</span></figcaption>
    </figure>
  );
}
