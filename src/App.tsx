import { FaWindows } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useForm } from "@formspree/react";
import logo from "./assets/logo.png";
import banner from "./assets/cv.jpg";
import screen1 from "./assets/screenshot1.png";
import screen2 from "./assets/screenshot2.png";
import screen3 from "./assets/screenshot3.png";
import review1 from "./assets/review1.jpg";
import review2 from "./assets/review2.jpg";
import review3 from "./assets/review3.jpg";

function App() {
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: screen1, caption: "CV & Github Analysis" },
    { image: screen2, caption: "Comprehensive Report" },
    { image: screen3, caption: "Crypto Payment Integration" },
  ];
  
  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const reviews = [
    {
      name: "Tastiana Larkina",
      role: "JTI",
      comment:
        "TrueEye has revolutionized our hiring process. The CV analysis is spot on!",
      rating: 5,
      image: review1,
    },
    {
      name: "Willem van Riet",
      role: "Toco AG",
      comment:
        "The GitHub profile analysis saves me hours of manual review. Highly recommended.",
      rating: 5,
      image: review2,
    },
    {
      name: "Oktawia Kata",
      role: "Technis",
      comment:
        "Great tool for technical hiring. The skill-role consistency analysis is particularly useful.",
      rating: 4,
      image: review3,
    },
  ];

  const blogPosts = [
    {
      title: "How AI is Transforming CV Analysis",
      excerpt:
        "Discover how artificial intelligence is revolutionizing the way recruiters analyze and evaluate candidate CVs.",
      fullText:
        "Artificial intelligence is fundamentally changing how recruiters work with candidate CVs. Modern AI algorithms can now parse, analyze, and evaluate resumes with remarkable accuracy, identifying key skills, experiences, and potential red flags that human reviewers might miss. This technology not only saves countless hours of manual review but also helps eliminate unconscious bias in the initial screening process. As these systems continue to learn from hiring outcomes, they're becoming increasingly sophisticated at predicting candidate success.",
      date: "May 15, 2025",
      image: screen1,
    },
    {
      title: "5 Key Metrics to Evaluate Developer Profiles",
      excerpt:
        "Learn about the most important metrics to consider when reviewing a developer's GitHub profile and code samples.",
      fullText:
        "When evaluating developer profiles, looking beyond the resume is essential.<br /> The most revealing metrics include:<br /> 1) Code quality and documentation practices<br /> 2) Contribution frequency and consistency<br /> 3) Project diversity and complexity<br /> 4) Collaboration patterns with other developers and <br /> 5) Problem-solving approaches visible in issue discussions.<br /> These indicators provide much deeper insight into a developer's actual capabilities than traditional resume points alone. By systematically analyzing these metrics, technical recruiters can make more informed decisions about candidate suitability.",
      date: "June 3, 2025",
      image: screen2,
    },
    {
      title: "The Future of Technical Hiring",
      excerpt:
        "Explore emerging trends in technical recruitment and how data-driven approaches are changing the industry.",
      fullText:
        "Technical hiring is undergoing a profound transformation driven by data analytics and AI. Traditional interviews are increasingly supplemented or replaced by skills assessments, behavioral analysis, and predictive performance modeling. Companies at the forefront are building comprehensive candidate profiles that incorporate everything from code quality metrics to communication patterns and problem-solving approaches. As these methods mature, we're seeing higher retention rates and better performance outcomes. The most successful organizations are those that balance technological assessment with human judgment, creating hiring processes that are both efficient and deeply insightful.",
      date: "July 22, 2025",
      image: screen3,
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);
  const [selectedBlogPost, setSelectedBlogPost] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formState, handleFormSubmit] = useForm("xyzprrkg");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(reviewInterval);
  }, [reviews.length]);

  useEffect(() => {
    if (formState.succeeded) {
      setContactFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [formState.succeeded]);
  
  // Handle modal animation states
  useEffect(() => {
    if (isModalOpen) {
      // First mount the modal
      document.body.style.overflow = 'hidden';
      
      // Then trigger the animation after a small delay
      const timer = setTimeout(() => {
        setIsModalVisible(true);
      }, 10);
      
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  const openBlogModal = (index: number) => {
    setSelectedBlogPost(index);
    setIsModalOpen(true);
  };
  
  const closeBlogModal = () => {
    setIsModalVisible(false);
    
    // Wait for the animation to complete before unmounting
    setTimeout(() => {
      setIsModalOpen(false);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  const handleContactInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="relative w-full h-full bg-black">
      <div className="w-full h-16 bg-gradient-to-r from-black via-gray-900 to-black fixed top-0 z-10 flex items-center justify-center border-b border-amber-500/30 backdrop-blur-sm">
        <div className="w-4/5 max-w-[1280px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-12 h-12 filter drop-shadow-lg" />
            <span className="text-amber-400 text-2xl font-bold tracking-wider">TrueEye</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                window.open(
                  "https://apps.microsoft.com/detail/9n0r6r27lm2g?hl=en-US&gl=US",
                  "_blank"
                );
              }}
              className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 transition-all duration-300 text-black font-bold px-6 py-2.5 rounded-md flex items-center gap-2 shadow-lg shadow-amber-700/20">
              <FaWindows />
              <span>Download for Free</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[100vh] flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black pt-16">
        <div className="w-4/5 max-w-[1280px] flex items-center justify-between gap-8">
          <div className="flex flex-col gap-6">
            <div className="mb-2">
              <span className="text-amber-500 text-sm uppercase tracking-widest font-semibold">Premium Recruitment Tool</span>
            </div>
            <h1 className="text-white text-5xl font-bold leading-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Intelligent</span> Way to<br />Track CV Quality
            </h1>
            <p className="text-gray-300 text-lg font-light leading-relaxed mt-2">
              TrueEye is a sophisticated tool that helps you assess CV quality and make data-driven recruitment decisions.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                <p className="text-gray-300 text-lg">Skill-Role consistency analysis</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                <p className="text-gray-300 text-lg">Github profile analysis</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                <p className="text-gray-300 text-lg">Usage based transparent pricing</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                <p className="text-gray-300 text-lg">Encrypt and store data on local</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={() => {
                  window.open(
                    "https://apps.microsoft.com/detail/9n0r6r27lm2g?hl=en-US&gl=US",
                    "_blank"
                  );
                }}
                className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 transition-all duration-300 text-black font-bold px-8 py-3 rounded-md flex items-center gap-2 shadow-lg shadow-amber-700/20"
              >
                <FaWindows />
                <span>Download for Free</span>
              </button>
              <button 
                onClick={scrollToContact}
                className="border border-amber-500/30 hover:border-amber-500/60 bg-black/40 hover:bg-black/60 transition-all duration-300 text-amber-400 font-bold px-8 py-3 rounded-md">
                Contact Us
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src={banner}
              alt="hero"
              className="w-full h-full object-cover rounded-lg shadow-2xl border border-amber-500/30 hover:border-amber-500/60 transition-all duration-500 transform hover:scale-[1.02] filter brightness-105 contrast-105"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[100vh] flex items-start justify-center bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="w-4/5 max-w-[1280px] flex flex-col items-center justify-center pt-24">
          <div className="mb-2">
            <span className="text-amber-500 text-sm uppercase tracking-widest font-semibold">Discover</span>
          </div>
          <h2 className="text-white text-4xl font-bold mb-12 text-center">Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Features</span></h2>
          <div className="relative w-full h-[640px] backdrop-blur-sm bg-black/20 p-8 rounded-xl border border-amber-500/20">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8 pointer-events-none"
                }`}
              >
                <div className="flex flex-col h-full justify-center items-center p-8">
                  <img
                    src={slide.image}
                    alt={`screenshot ${index + 1}`}
                    className="w-full h-full object-contain rounded-lg shadow-2xl border border-amber-500/30"
                  />
                  <p className="text-white font-bold text-xl text-center mt-8 bg-black py-3 px-6 rounded-full border border-amber-500/20 backdrop-blur-sm shadow-lg">
                    {slide.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[100vh] flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="w-4/5 max-w-[1280px] flex flex-col items-center justify-center pt-12">
          <div className="mb-2">
            <span className="text-amber-500 text-sm uppercase tracking-widest font-semibold">Testimonials</span>
          </div>
          <h2 className="text-white text-4xl font-bold mb-16 text-center">What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Elite</span> Users Say</h2>
          <div className="relative w-full">
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-2xl h-[320px]">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full backdrop-blur-sm bg-black/40 p-10 rounded-xl shadow-2xl border border-amber-500/30 transition-all duration-700 ease-in-out ${
                      index === currentReview
                        ? "opacity-100 transform translate-y-0"
                        : "opacity-0 transform translate-y-8 pointer-events-none"
                    }`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-7 h-7 ${
                              i < review.rating
                                ? "text-amber-500"
                                : "text-gray-700"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-200 text-xl italic mb-8 leading-relaxed font-light">
                        "{review.comment}"
                      </p>
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 mb-3 flex items-center justify-center text-black font-bold text-xl">
                          <img src={review.image} className="w-full h-full object-cover rounded-full" />
                        </div>
                        <h3 className="text-white text-xl font-bold">
                          {review.name}
                        </h3>
                        <p className="text-amber-400 mt-1">{review.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-24">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-12 h-1.5 rounded-full transition-all duration-500 ${
                    index === currentReview ? "bg-amber-500 w-16" : "bg-gray-600/50"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-white text-xl font-bold mb-6">
              Share Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Premium</span> Experience
            </h3>
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 transition-all duration-300 text-black font-bold px-8 py-3 rounded-md shadow-lg shadow-amber-700/20">
              Submit Your Feedback
            </button>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[100vh] flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black py-20">
        <div className="w-4/5 max-w-[1280px] flex flex-col items-center justify-center">
          <div className="mb-2">
            <span className="text-amber-500 text-sm uppercase tracking-widest font-semibold">Insights</span>
          </div>
          <h2 className="text-white text-4xl font-bold mb-16 text-center">Latest from Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Journal</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="backdrop-blur-sm bg-black/30 rounded-xl overflow-hidden shadow-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500 transform hover:scale-[1.03] hover:shadow-amber-700/10 cursor-pointer group"
                onClick={() => openBlogModal(index)}
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-24"></div>
                  <div className="absolute bottom-4 left-4 bg-amber-500/90 text-black text-xs font-bold py-1 px-3 rounded-full">
                    {post.date}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-white text-xl font-bold mb-4 leading-tight group-hover:text-amber-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <div className="text-gray-300 mb-4">
                    <p className="leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <button
                      className="text-amber-400 hover:text-amber-300 font-semibold mt-4 transition-colors duration-300 flex items-center"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Blog Post Modal */}
        {isModalOpen && selectedBlogPost !== null && (
          <div 
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
              isModalVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: isModalVisible ? 'blur(8px)' : 'blur(0px)'
            }}
          >
            <div 
              className="absolute inset-0 bg-transparent" 
              onClick={closeBlogModal}
            ></div>
            <div 
              className={`relative bg-gradient-to-b from-gray-900 to-black w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-amber-500/30 shadow-2xl z-50 transition-all duration-300 ease-out ${
                isModalVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
              }`}
            >
              <div className="sticky top-0 z-10 flex justify-end p-4 bg-gradient-to-b from-black to-transparent">
                <button 
                  onClick={closeBlogModal}
                  className="text-amber-500 hover:text-amber-400 transition-colors duration-300"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-8 pt-0">
                <div className="relative h-64 mb-8 overflow-hidden rounded-lg">
                  <img 
                    src={blogPosts[selectedBlogPost].image} 
                    alt={blogPosts[selectedBlogPost].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <span className="inline-block bg-amber-500/90 text-black text-sm font-bold py-1 px-3 rounded-full mb-3 max-w-min text-nowrap">
                      {blogPosts[selectedBlogPost].date}
                    </span>
                    <h2 className="text-white text-3xl font-bold leading-tight">
                      {blogPosts[selectedBlogPost].title}
                    </h2>
                  </div>
                </div>
                <div className="text-gray-200 leading-relaxed text-lg space-y-6">
                  <div dangerouslySetInnerHTML={{ __html: blogPosts[selectedBlogPost].fullText }} />
                </div>
                <div className="mt-10 pt-6 border-t border-amber-500/20 flex justify-end">
                  <button 
                    onClick={closeBlogModal}
                    className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 transition-all duration-300 text-black font-bold px-6 py-2 rounded-md shadow-lg shadow-amber-700/20"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div ref={contactSectionRef} className="w-full min-h-[100vh] flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black pt-12">
        <div className="w-4/5 max-w-[1280px] flex flex-col items-center justify-center">
          <div className="mb-2">
            <span className="text-amber-500 text-sm uppercase tracking-widest font-semibold">Get in Touch</span>
          </div>
          <h2 className="text-white text-4xl font-bold mb-16 text-center">Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Our Team</span></h2>
          <div className="flex flex-col md:flex-row w-full gap-12">
            <div className="w-full md:w-1/2">
              <form
                onSubmit={handleFormSubmit}
                className="backdrop-blur-sm bg-black/40 p-10 rounded-xl shadow-2xl border border-amber-500/20"
              >
                <h3 className="text-white text-2xl font-bold mb-8">
                  Send Us a Message
                </h3>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-amber-400 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactFormData.name}
                    onChange={handleContactInputChange}
                    className="w-full bg-black/60 text-white border border-amber-500/30 rounded-lg py-3 px-4 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50 transition-all duration-300"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-amber-400 mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactFormData.email}
                    onChange={handleContactInputChange}
                    className="w-full bg-black/60 text-white border border-amber-500/30 rounded-lg py-3 px-4 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50 transition-all duration-300"
                    required
                  />
                </div>
                <div className="mb-8">
                  <label htmlFor="message" className="block text-amber-400 mb-2 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactFormData.message}
                    onChange={handleContactInputChange}
                    rows={5}
                    className="w-full bg-black/60 text-white border border-amber-500/30 rounded-lg py-3 px-4 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50 transition-all duration-300"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formState.submitting}
                  className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 transition-all duration-300 text-black font-bold px-8 py-3 rounded-lg w-full shadow-lg shadow-amber-700/20"
                >
                  {formState.submitting ? "Sending..." : "Send Message"}
                </button>
                {formState.succeeded && (
                  <p className="text-green-400 mt-6 text-center font-medium">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                )}
                {formState?.errors && Object.keys(formState.errors).length > 0 && (
                  <p className="text-red-400 mt-6 text-center font-medium">
                    There was an error sending your message. Please try again.
                  </p>
                )}
              </form>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-8">
              <div className="backdrop-blur-sm bg-black/40 p-10 rounded-xl shadow-2xl border border-amber-500/20">
                <h3 className="text-white text-2xl font-bold mb-8">
                  Contact Information
                </h3>
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/30">
                      <svg
                        className="w-6 h-6 text-amber-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-amber-400 font-semibold text-lg mb-1">Address</h4>
                      <p className="text-gray-300 leading-relaxed">
                        R. Ouro Fino, 654 - Jardim Catarina, São Gonçalo - RJ, 24716-582, Brazil
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/30">
                      <svg
                        className="w-6 h-6 text-amber-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-amber-400 font-semibold text-lg mb-1">Email</h4>
                      <p className="text-gray-300">contact@true-eye.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/30">
                      <svg
                        className="w-6 h-6 text-amber-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-amber-400 font-semibold text-lg mb-1">Phone</h4>
                      <p className="text-gray-300">+55 (21) 97644-2043</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="backdrop-blur-sm bg-black/40 p-10 rounded-xl shadow-2xl border border-amber-500/20">
                <h3 className="text-white text-2xl font-bold mb-8">
                  Business Hours
                </h3>
                <div className="flex justify-between text-gray-300 mb-4 border-b border-amber-500/10 pb-3">
                  <span className="font-medium">Monday - Friday:</span>
                  <span className="text-amber-400">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-300 mb-4 border-b border-amber-500/10 pb-3">
                  <span className="font-medium">Saturday:</span>
                  <span className="text-amber-400">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span className="font-medium">Sunday:</span>
                  <span className="text-amber-400">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
