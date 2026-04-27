
export default function Testimonials() {
  return (
    <section 
      className="bg-[#2D6A2F] py-16 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-medium text-white">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div data-aos="fade-up" data-aos-delay="0" className="bg-white/5 backdrop-blur-sm p-6 md:p-10 rounded-lg border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-secondary-container mb-4 md:mb-6">
                {[...Array(5)].map((_, j) => <span key={j} className="material-symbols-outlined">star</span>)}
              </div>
              <p className="text-white/80 text-base md:text-lg italic mb-6 md:mb-8">"The yield increase we saw in just one season was remarkable. The drone mapping caught a localized pest issue before it spread."</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8-14heRkot543ykmxA3XijU0gZnNALk8SUyGz6GbTFr9eJW1pzKVLuHj2RQSDxQ9MPJPnYcSzch9NwHwq25_KoWodISZAMMoLlWuxpjO1l1JfcHvb-N8C4h1rCjTxZmfvwopJ3w5rKJ6m3TJhCMKVhOBr4T7KnTC1tcT__qbwZjb6Wo-XTFgi-bKpTO-KVB4NxAk19tv9MBTXjWl2iaPRKHEZTeBGdSaNvIGOp_MrOZpfuYmEln1DcpKETLFgJ_0TEYr8UmKq2y4" alt="Portrait" />
              </div>
              <div>
                <h5 className="font-medium text-white text-sm md:text-base">Breanna Thompson</h5>
                <p className="text-secondary-container text-[10px] md:text-xs font-semibold uppercase tracking-wide">Orchard Owner</p>
              </div>
            </div>
          </div>
          {/* Review 2 */}
          <div data-aos="fade-up" data-aos-delay="100" className="bg-white/5 backdrop-blur-sm p-6 md:p-10 rounded-lg border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-secondary-container mb-4 md:mb-6">
                 {[...Array(5)].map((_, j) => <span key={j} className="material-symbols-outlined">star</span>)}
              </div>
              <p className="text-white/80 text-base md:text-lg italic mb-6 md:mb-8">"Agridev has transformed how we manage our 5,000-acre operation. The data insights are indispensable for our stakeholders."</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIWv9qaAmZFtxJdeEELiofvtveoqkLisfpca_PGt3K3I_Xpxe7x9jNNfHekWVdT-R7AGVaV91e9rmQcmNPfE2CepkPQP5YVYYDdgrGw3PyuusWd-e_3TOAvM5Ryz85CTfbr_V4st2YjYNgEZyqS_-nsasQiGA8cHMxX9C8wW1pPFN9yHhhYW2zS_o0ctxa_9v9fXPnVPtsEt1tSZh8BrjBNGzo1iM91WBSUiFgMii0nn_8XyKUNny2w_9Db6EKekOXgeRwD656GX4" alt="Portrait" />
              </div>
              <div>
                <h5 className="font-medium text-white text-sm md:text-base">George Miller</h5>
                <p className="text-secondary-container text-[10px] md:text-xs font-semibold uppercase tracking-wide">Agronomist Specialist</p>
              </div>
            </div>
          </div>
          {/* Review 3 */}
          <div data-aos="fade-up" data-aos-delay="200" className="bg-white/5 backdrop-blur-sm p-6 md:p-10 rounded-lg border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-secondary-container mb-4 md:mb-6">
                {[...Array(4)].map((_, j) => <span key={j} className="material-symbols-outlined">star</span>)}
                <span className="material-symbols-outlined">star_half</span>
              </div>
              <p className="text-white/80 text-base md:text-lg italic mb-6 md:mb-8">"A true game-changer. The interface is clean, data-rich, and the drone autonomy is lightyears ahead of anything else."</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJBsqloGLJFTn-7eMNCYiX81pimXmlwvXQLztHspH35YYqmzVl3rgrnw7ePlxgBqQdJdIHQhnGvFlKEcOEki6ckasq2hVgNRXZeZ20Z1vl3yaQSvA3ttykZUF0PV8qqIsQKzne-iYb25VlP216CtS4L1EWp-qeDOZe1TuT6qR-Z0Mf3zUOkccECwAQLvL1XXVJQF8ptjeJCST5Ag74wKgj_mqGnILdFdV-7GzIEEHAb-KzX1r__2PjNeMpa8OznpB39U1yqPthlHs" alt="Portrait" />
              </div>
              <div>
                <h5 className="font-medium text-white text-sm md:text-base">Robert Chen</h5>
                <p className="text-secondary-container text-[10px] md:text-xs font-semibold uppercase tracking-wide">Tech Ag Lead</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
