import { resume } from "@/data/resume";

export function Gallery() {
  return (
    <>
      <div className="gallery-grid">
        {resume.images.gallery.map((image, index) => (
          <div key={image} className="gallery-item">
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
      <p className="gallery-footnote">* look all this cool shit</p>
    </>
  );
}
