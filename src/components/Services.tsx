
export default function Services() {
  const services = [
    { title: 'Precision Tools', text: 'Micro-level tasking for planting, fertilization, and crop protection.', stats: ['25K+', '15%'], image: 'https://images.unsplash.com/photo-1592982537447-66a9d70e7e89?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Smart Irrigation', text: 'Sensor-based watering schedules that adapt to moisture levels and weather forecasts.', stats: ['40%', '50k'], image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop' },
    { title: 'AI Crop Analytics', text: 'Predictive modeling to forecast harvest times and potential yield volumes.', stats: ['98%', '10x'], image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1000&auto=format&fit=crop' },
  ];

  return (
    <section 
      data-aos="fade-up"
      className="bg-surface py-16 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-secondary font-medium tracking-widest uppercase text-xs md:text-sm">● Featured Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-primary mt-4 max-w-2xl">Brand and digital work built for tech and corporate companies.</h2>
        </div>
        
        {/* Main Container Box */}
        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-outline-variant/10 space-y-16 md:space-y-24">
          {services.map((s, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
               <div className={`space-y-4 md:space-y-6 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                 <h3 className="text-3xl md:text-4xl font-medium text-primary">{s.title}</h3>
                 <p className="text-base md:text-lg text-on-surface-variant">{s.text}</p>
                 <div className="flex gap-4 md:gap-8">
                   {s.stats.map(stat => <div key={stat} className="text-2xl md:text-3xl font-black text-primary">{stat}</div>)}
                 </div>
               </div>
               
               <div className={`rounded-3xl shadow-xl overflow-hidden ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                 <img src={s.image} alt={s.title} className="w-full h-auto object-cover" />
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
