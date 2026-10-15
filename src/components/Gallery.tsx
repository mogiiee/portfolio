import { resume } from "@/data/resume";

export function Gallery() {
  return (
    <>
      <div className="gallery-grid">
        {resume.images.gallery.map((image, index) => (
          <div key={image} className="gallery-item" data-tilt data-reveal>
            <img src={image} alt={`Gallery ${index + 1}`} />
            <span>0{index + 1} / PERSONAL ARCHIVE</span>
          </div>
        ))}
      </div>
      <p className="gallery-footnote">Proof that I occasionally close the terminal.</p>
    </>
  );
}
