import * as React from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import photos from './others/photos';
import Captions from "yet-another-react-lightbox/plugins/captions";

export default function Gallery() {
  const [index, setIndex] = React.useState(-1);
  const [visibleCount, setVisibleCount] = React.useState(8); 

  const reversedPhotos = [...photos].reverse();
  const visiblePhotos = reversedPhotos.slice(0, visibleCount);

  const handleReadMore = () => {
    setVisibleCount(prevCount => prevCount + 8); 
  };

  React.useEffect(() => {
    const photoElements = document.querySelectorAll('.react-photo-album--photo');
    photoElements.forEach((element, i) => {
      element.classList.add('wow', 'zoomIn');
      element.style.animationDelay = `${i * 0.1}s`;
    });
  }, [visiblePhotos]);

  return (
    <div className="vg-page page-certificate" id="certificate">
      <h1 className="text-center wow fadeInUp">All Certificates</h1>
      <div className="text-center wow fadeInUp">
          <div className="badge badge-subhead">*From new to old</div>
        </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 wow fadeInUp">
            <div className="card card-body">
              <PhotoAlbum
                layout="masonry"
                photos={visiblePhotos}
                onClick={({ index: current }) => setIndex(current)}
              />
              {visibleCount < reversedPhotos.length && (
                <div className="text-center">
                  <button 
                    className="btn btn-theme btn-rounded"
                    onClick={handleReadMore}
                  >
                    Read More
                  </button>
                </div>
              )}
              <Lightbox
                index={index}
                slides={visiblePhotos}
                plugins={[Captions]}
                captions={{
                  descriptionTextAlign: "center",
                  titleTextAlign: "center",
                  descriptionTextStyle: { color: "#fff" },
                  titleTextStyle: { color: "#fff" }
                }}
                open={index >= 0}
                close={() => setIndex(-1)}
                styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.9)" } }}
                closeOnBackdropClick={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
