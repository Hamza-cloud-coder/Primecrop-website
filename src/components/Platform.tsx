
import { Eye, Users, RefreshCw } from 'lucide-react';

export default function Platform() {
  return (
    <section 
      data-aos="fade-up"
      className="bg-white py-16 md:py-32 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <div className="inline-flex items-center border border-outline-variant/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary-container mr-2"></span>
            <span className="text-sm font-medium tracking-widest uppercase">Why AgroLink</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-primary">A Partner You can Rely on</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative order-2 lg:order-1" data-aos="fade-right">
            <div className="rounded-lg overflow-hidden aspect-video shadow-2xl">
              <img className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLhr-8U_Ahp8LL3rTkjCkFGMy83N6reg7xW8t8q46VhONhjHWpx7kDzPowQL6_1Yg0LDvNeAW0VcDvvx99bE3DLM0isckzMoJgrxxPzAyFe2Q9O05IqZhWpomTNc-Un3St23QsnJsoUm3eI5k9mr0W1yxm_bnhk_qpa0cycMu2_3aDODKHy9EzDmqZ2JBeG39dE--gX9EeRwtNJI2fwRbMYjy_crVtbeCbm226IelxJ1DuWG440uc-w9ujXM5zrkMU6KVL4L4j6v8"
                alt="Agricultural Platform"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 md:w-48 md:h-48 bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 md:space-y-12" data-aos="fade-left">
            <div className="space-y-4 md:space-y-8" data-aos="fade-up">
              <Eye className="w-10 h-10 text-primary mx-auto lg:mx-0 mb-4" />
              <h4 className="text-lg md:text-2xl font-medium text-primary">Maximum Brand Visibility</h4>
              <p className="text-base md:text-lg text-on-surface-variant">Your profile is your digital passport. Showcase your certifications, awards, and production capacity to buyers.</p>
            </div>
            <div className="space-y-4 md:space-y-8 pt-8 md:pt-12 border-t border-gray-200" data-aos="fade-up">
              <Users className="w-10 h-10 text-primary mx-auto lg:mx-0 mb-4" />
              <h4 className="text-lg md:text-2xl font-medium text-primary">Verified Community</h4>
              <p className="text-base md:text-lg text-on-surface-variant">Eliminate non-serious inquiries. We use advanced verification to ensure you negotiate only with legitimate companies and registered farms.</p>
            </div>
            <div className="space-y-4 md:space-y-8 pt-8 md:pt-12 border-t border-gray-200" data-aos="fade-up">
              <RefreshCw className="w-10 h-10 text-primary mx-auto lg:mx-0 mb-4" />
              <h4 className="text-lg md:text-2xl font-medium text-primary">Hybrid Sales Model</h4>
              <p className="text-base md:text-lg text-on-surface-variant">Flexibility is key – sell a pallet to a wholesaler or a gift pack to a final consumer. All managed through a single, unified inventory system.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
