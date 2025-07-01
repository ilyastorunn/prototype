export default function Catalogues() {
  return (
    <>
      <hr className="border-t border-gray-200 my-12" />
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-10">CATALOGUES</h2>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <img
            src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Catalogue 1"
            className="w-36 h-auto object-contain"
          />
          <img
            src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Catalogue 2"
            className="w-36 h-auto object-contain"
          />
          <div className="w-36 h-[140px] bg-blue-900 text-white flex items-center justify-center text-sm font-semibold rounded">
            VIEW ALL
            <br />
            CATALOGUES
          </div>
        </div>

        <div className="w-full h-2 bg-gray-300 rounded-full mx-auto max-w-sm" />
      </section>
    </>
  );
}
