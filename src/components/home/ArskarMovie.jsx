export default function ArskarMovie() {
  return (
    <>
      <hr className="border-t border-gray-200 my-12" />
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">THIS IS A ARSKAR MOVIE</h2>
        <div className="w-full max-w-5xl h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] mx-auto">
          <iframe
            className="w-full h-full rounded shadow-lg"
            src="https://www.youtube.com/embed/ixbVCTZswYo?si=TG5yxT9K13c1Pc80"
            title="Arskar Movie"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
}
