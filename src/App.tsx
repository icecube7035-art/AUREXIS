import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Layers, Activity, Globe, ShoppingBag, Star, ArrowLeft, Mail, X } from "lucide-react";
import { reviews } from "./data/reviews";
import InteractiveGlobe from "./components/InteractiveGlobe";

const products = [
  {
    name: "MakrOS",
    url: "https://makros-production.up.railway.app",
    description: "A productivity and content operating system designed to help digital creators think, execute, and monetize with clarity.",
    icon: Layers,
  },
  {
    name: "Elite Workout",
    url: "https://calworkout-production.up.railway.app",
    description: "A calisthenics training system for building strength, structure, and discipline.",
    icon: Activity,
  },
  {
    name: "ADAI",
    url: "https://adai-production.up.railway.app",
    description: "An AI-powered advertisement generator supporting modern brands and creators.",
    icon: Globe,
  },
  {
    name: "Universo Store",
    url: "https://payhip.com/UNIVERSOSTORE",
    description: "A digital storefront providing premium tools, presets, and assets for creators and video editors.",
    icon: ShoppingBag,
  },
];

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [allReviews, setAllReviews] = useState(reviews);
  const [newReview, setNewReview] = useState({ name: "", location: "", rating: 5, text: "" });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [showEcosystemModal, setShowEcosystemModal] = useState(false);

  useEffect(() => {
    // Disable scrolling during intro
    if (!introComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // After 3 seconds, the intro is complete and the rest of the site fades in
    const timer = setTimeout(() => {
      setIntroComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [introComplete]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#E5E5E5] selection:bg-[#C5A059]/30 selection:text-white font-sans overflow-x-hidden">
      {/* Animated Background Gradients - fades in after intro */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      >
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#C5A059]/[0.04] blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -150, 100, 0],
            y: [0, 100, -150, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#8A6D23]/[0.03] blur-[150px]"
        />
        <motion.div
          animate={{
            x: [0, 50, -100, 0],
            y: [0, 150, -50, 0],
            scale: [1, 1.5, 0.9, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-[#C5A059]/[0.02] blur-[100px]"
        />
      </motion.div>

      {/* Navigation - fades in after intro */}
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full px-6 py-8 md:px-12 lg:px-24 flex justify-between items-center relative z-10"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: introComplete ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: introComplete ? 0.2 : 0 }}
          className="text-xs tracking-[0.2em] font-medium uppercase text-white/50"
        >
          Aurexis
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: introComplete ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: introComplete ? 0.3 : 0 }}
          className="text-xs font-mono text-white/30 uppercase tracking-widest"
        >
          Index 01
        </motion.div>
      </motion.nav>

      <main className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {!showAllReviews && (
          <>
            {/* Hero Section (Acts as Intro initially) */}
            <section className="min-h-[70vh] flex flex-col items-center justify-center text-center py-20 relative">
          
          {/* Globe - fades in after intro */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ 
              opacity: introComplete ? 1 : 0, 
              scale: introComplete ? 1 : 0.95, 
              filter: introComplete ? "blur(0px)" : "blur(10px)" 
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full h-[80vh] max-h-[800px] flex items-center justify-center pointer-events-auto"
          >
            <div className="absolute inset-0 bg-[#C5A059]/5 blur-3xl rounded-full pointer-events-none" />
            <InteractiveGlobe />
          </motion.div>
          
          {/* Intro / Hero Text - animates in immediately and stays */}
          <div className="relative z-30 flex flex-col items-center justify-center mt-8 pointer-events-none">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9, letterSpacing: "0em" }}
              animate={{ opacity: 1, scale: 1, letterSpacing: "0.2em" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-9xl font-mono text-[#C5A059] uppercase mb-6 ml-[0.2em]"
            >
              <span className="text-glow-pulse inline-block">Aurexis</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 1.2 }}
              className="text-xl md:text-2xl font-light leading-relaxed tracking-wide text-white/80 max-w-3xl"
            >
              A digital ecosystem that creates powerful web tools designed to improve productivity, creativity, and everyday digital workflows.
              <br /><br />
              <span className="text-sm md:text-base text-white/50">Aurexis builds intelligent digital platforms that help people work smarter, create faster, and grow online.</span>
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 1.6 }}
              onClick={() => setShowEcosystemModal(true)}
              className="mt-10 px-8 py-4 bg-[#C5A059] text-black font-medium text-sm uppercase tracking-widest rounded-full hover:bg-[#d4b26f] transition-all hover:scale-105 pointer-events-auto shadow-[0_0_20px_rgba(197,160,89,0.2)]"
            >
              Explore Ecosystem
            </motion.button>
          </div>
        </section>

        {/* Products Section - fades in after intro */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: introComplete ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="py-32"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 flex items-center gap-6"
          >
            <h2 className="text-xs font-mono text-[#C5A059] uppercase tracking-[0.2em]">
              Operating Products
            </h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#C5A059]/20 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.a
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative block p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-[#C5A059]/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#C5A059]/0 to-[#C5A059]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#C5A059]/50 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.15)] transition-all duration-500">
                      <Icon className="w-5 h-5 text-white/70 group-hover:text-[#C5A059] transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-medium text-white tracking-wide">
                        {product.name}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#C5A059] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500" strokeWidth={1.5} />
                    </div>
                    
                    <p className="text-sm text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors duration-500">
                      {product.description}
                    </p>

                    <div className="mt-6 flex items-center text-xs font-mono text-[#C5A059] uppercase tracking-wider group-hover:text-white transition-colors duration-500">
                      Visit Platform <ArrowUpRight className="ml-2 w-4 h-4" />
                    </div>

                    {/* Animated Underline */}
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C5A059] to-transparent group-hover:w-full transition-all duration-700 ease-out" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.section>

        {/* About Aurexis Section - fades in after intro */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: introComplete ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="py-32"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 flex items-center gap-6"
          >
            <h2 className="text-xs font-mono text-[#C5A059] uppercase tracking-[0.2em]">
              About Aurexis
            </h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#C5A059]/20 to-transparent" />
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-12 max-w-4xl"
            >
              <h3 className="text-2xl md:text-3xl font-light text-white leading-tight mb-6">
                Building simple but powerful digital systems.
              </h3>
              <p className="text-base md:text-lg text-white/60 font-light leading-relaxed mb-10">
                Aurexis is a digital platform focused on building powerful and accessible tools that help people create, work, and grow online.
              </p>
              
              <div className="p-8 border border-white/10 bg-white/[0.02] rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#C5A059]" />
                <h4 className="text-[#C5A059] font-mono text-xs uppercase tracking-widest mb-4">Our Mission</h4>
                <p className="text-xl text-white/80 font-light italic leading-relaxed">
                  "Our mission is to build simple but powerful digital systems that enhance productivity, creativity, and human potential."
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>
        </>
        )}

        {/* Wall of Love (Testimonials) Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: introComplete ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className={showAllReviews ? "py-12" : "py-32"}
        >
          {showAllReviews && (
            <button 
              onClick={() => { setShowAllReviews(false); window.scrollTo(0, 0); }}
              className="mb-12 flex items-center gap-2 text-white/50 hover:text-[#C5A059] transition-colors font-mono text-sm uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </button>
          )}

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex items-center gap-6"
          >
            <h2 className="text-xs font-mono text-[#C5A059] uppercase tracking-[0.2em]">
              {showAllReviews ? "All Reviews" : "Wall of Love"}
            </h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#C5A059]/20 to-transparent" />
          </motion.div>

          {/* Add Review Form */}
          {!showAllReviews && (
            <div className="mb-16">
              {!reviewSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-2xl"
                >
                  <h3 className="text-lg font-medium text-white mb-6">Add your own review</h3>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    if (newReview.name && newReview.text) {
                      setAllReviews([newReview, ...allReviews]);
                      setReviewSubmitted(true);
                    }
                  }} className="space-y-4">
                    <div className="flex gap-4 flex-col md:flex-row">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        required
                        value={newReview.name}
                        onChange={e => setNewReview({...newReview, name: e.target.value})}
                        className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#C5A059]/50 transition-colors"
                      />
                      <input 
                        type="text" 
                        placeholder="Where are you from? (e.g. London, UK)" 
                        value={newReview.location}
                        onChange={e => setNewReview({...newReview, location: e.target.value})}
                        className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#C5A059]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <div className="flex gap-2 mb-2 items-center">
                        <span className="text-sm text-white/50 mr-2">Rating:</span>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setNewReview({...newReview, rating: star})}
                            className="focus:outline-none"
                          >
                            <Star className={`w-5 h-5 ${star <= newReview.rating ? "fill-[#C5A059] text-[#C5A059]" : "text-white/20 hover:text-white/40"} transition-colors`} />
                          </button>
                        ))}
                      </div>
                    </div>
                    <textarea 
                      placeholder="Write your review here..." 
                      required
                      rows={3}
                      value={newReview.text}
                      onChange={e => setNewReview({...newReview, text: e.target.value})}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#C5A059]/50 transition-colors resize-none"
                    />
                    <button 
                      type="submit"
                      className="px-6 py-3 bg-[#C5A059] text-black font-medium rounded-lg hover:bg-[#d4b26f] transition-colors"
                    >
                      Submit Review
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#C5A059]/10 border border-[#C5A059]/30 p-8 rounded-2xl text-center"
                >
                  <h3 className="text-xl font-medium text-[#C5A059] mb-2">Thank you for your review!</h3>
                  <p className="text-white/70">Your feedback has been added to our Wall of Love.</p>
                </motion.div>
              )}
            </div>
          )}

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {(showAllReviews ? allReviews : allReviews.slice(0, 6)).map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
                className="break-inside-avoid inline-block w-full bg-white/[0.02] border border-white/[0.05] p-8 rounded-2xl hover:bg-white/[0.04] hover:border-[#C5A059]/30 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(197,160,89,0.12)] transition-all duration-500"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < review.rating ? "fill-[#C5A059] text-[#C5A059]" : "text-white/10"}`} 
                    />
                  ))}
                </div>
                <p className="text-white/70 font-light leading-relaxed mb-6 text-sm">
                  "{review.text}"
                </p>
                <div>
                  <div className="text-white font-medium text-sm">{review.name}</div>
                  <div className="text-white/40 text-xs mt-1">{review.location}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {!showAllReviews && allReviews.length > 6 && (
            <div className="mt-16 flex justify-center">
              <button 
                onClick={() => { setShowAllReviews(true); window.scrollTo(0, 0); }}
                className="px-8 py-3 rounded-full border border-[#C5A059]/30 text-[#C5A059] hover:bg-[#C5A059]/10 transition-colors font-mono text-[19px] uppercase tracking-widest"
              >
                View All {allReviews.length} Reviews
              </button>
            </div>
          )}
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: introComplete ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="py-32"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 flex items-center gap-6"
          >
            <h2 className="text-xs font-mono text-[#C5A059] uppercase tracking-[0.2em]">
              Contact Aurexis
            </h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#C5A059]/20 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-light text-white leading-tight mb-6">
                Have questions, ideas, or collaboration requests?
              </h3>
              <p className="text-base text-white/60 font-light leading-relaxed mb-10">
                We'd love to hear from you. Whether you're interested in our platforms, looking for a partnership, or just want to connect, our inbox is always open.
              </p>
              
              <div className="flex flex-col gap-6">
                <a href="mailto:icecube7035@gmail.com" className="group flex items-center gap-4 text-white/60 hover:text-[#C5A059] transition-colors w-fit">
                  <div className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:border-[#C5A059]/50 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm tracking-wider">icecube7035@gmail.com</span>
                </a>
              </div>
            </motion.div>

            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              onSubmit={(e) => {
                e.preventDefault();
                const subject = encodeURIComponent(`New Contact Inquiry from ${contactForm.name}`);
                const body = encodeURIComponent(`Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`);
                window.location.href = `mailto:icecube7035@gmail.com?subject=${subject}&body=${body}`;
              }} 
              className="space-y-6 bg-white/[0.02] border border-white/[0.05] p-8 rounded-2xl"
            >
              <div className="flex gap-6 flex-col sm:flex-row">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  value={contactForm.name}
                  onChange={e => setContactForm({...contactForm, name: e.target.value})}
                  className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#C5A059]/50 transition-colors" 
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required
                  value={contactForm.email}
                  onChange={e => setContactForm({...contactForm, email: e.target.value})}
                  className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#C5A059]/50 transition-colors" 
                />
              </div>
              <textarea 
                placeholder="How can we help you?" 
                rows={5} 
                required
                value={contactForm.message}
                onChange={e => setContactForm({...contactForm, message: e.target.value})}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#C5A059]/50 transition-colors resize-none" 
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-[#C5A059] text-black font-medium rounded-lg hover:bg-[#d4b26f] transition-colors w-full sm:w-auto"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </motion.section>
      </main>

      {/* Footer - fades in after intro */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full px-6 py-12 md:px-12 lg:px-24 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6 relative z-10"
      >
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-[#C5A059] opacity-50" />
          <div className="text-xs font-mono text-white/40 uppercase tracking-[0.2em]">
            AUREXIS © {new Date().getFullYear()}
          </div>
        </div>
        <div className="text-xs font-mono text-white/30 uppercase tracking-[0.2em]">
          Systems Company
        </div>
      </motion.footer>

      {/* Ecosystem Full Page Modal */}
      <AnimatePresence>
        {showEcosystemModal && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-[9999] bg-[#0a0a0a]/95 backdrop-blur-xl overflow-y-auto"
          >
            <div className="min-h-screen px-6 py-20 md:px-12 lg:px-24 max-w-7xl mx-auto relative">
              <button
                onClick={() => setShowEcosystemModal(false)}
                className="fixed top-8 right-6 md:right-12 lg:right-24 p-3 text-white/50 hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10 z-50"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-w-3xl mb-16 pt-10">
                <h2 className="text-xs font-mono text-[#C5A059] uppercase tracking-[0.2em] mb-4">The Aurexis Ecosystem</h2>
                <h3 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                  A unified network of <span className="text-[#C5A059]">digital platforms.</span>
                </h3>
                <p className="text-lg text-white/60 font-light leading-relaxed">
                  Aurexis is a digital platform focused on building powerful and accessible tools that help people create, work, and grow online. Our mission is to build simple but powerful digital systems that enhance productivity, creativity, and human potential.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
                {products.map((product, index) => {
                  const Icon = product.icon;
                  return (
                    <a
                      key={product.name}
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-[#C5A059]/30 transition-all duration-500 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-[#C5A059]/0 to-[#C5A059]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#C5A059]/50 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.15)] transition-all duration-500">
                          <Icon className="w-5 h-5 text-white/70 group-hover:text-[#C5A059] transition-colors duration-500" strokeWidth={1.5} />
                        </div>
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xl font-medium text-white tracking-wide">{product.name}</h3>
                          <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#C5A059] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500" strokeWidth={1.5} />
                        </div>
                        <p className="text-sm text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors duration-500">
                          {product.description}
                        </p>
                        <div className="mt-6 flex items-center text-xs font-mono text-[#C5A059] uppercase tracking-wider group-hover:text-white transition-colors duration-500">
                          Visit Platform <ArrowUpRight className="ml-2 w-4 h-4" />
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
