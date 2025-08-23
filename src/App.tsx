import { FaWindows } from "react-icons/fa";
import { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import banner from "./assets/cv.jpg";
import screen1 from "./assets/screenshot1.png";
import screen2 from "./assets/screenshot2.png";
import screen3 from "./assets/screenshot3.png";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: screen1, caption: "CV & Github Analysis" },
    { image: screen2, caption: "Comprehensive Report" },
    { image: screen3, caption: "Crypto Payment Integration" },
  ];

  const reviews = [
    {
      name: "John Doe",
      role: "HR Manager",
      comment: "TrueEye has revolutionized our hiring process. The CV analysis is spot on!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Tech Recruiter",
      comment: "The GitHub profile analysis saves me hours of manual review. Highly recommended.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO",
      comment: "Great tool for technical hiring. The skill-role consistency analysis is particularly useful.",
      rating: 4,
    },
  ];

  const blogPosts = [
    {
      title: "How AI is Transforming CV Analysis",
      excerpt: "Discover how artificial intelligence is revolutionizing the way recruiters analyze and evaluate candidate CVs.",
      fullText: "Artificial intelligence is fundamentally changing how recruiters work with candidate CVs. Modern AI algorithms can now parse, analyze, and evaluate resumes with remarkable accuracy, identifying key skills, experiences, and potential red flags that human reviewers might miss. This technology not only saves countless hours of manual review but also helps eliminate unconscious bias in the initial screening process. As these systems continue to learn from hiring outcomes, they're becoming increasingly sophisticated at predicting candidate success.",
      date: "May 15, 2023",
      image: screen1,
    },
    {
      title: "5 Key Metrics to Evaluate Developer Profiles",
      excerpt: "Learn about the most important metrics to consider when reviewing a developer's GitHub profile and code samples.",
      fullText: "When evaluating developer profiles, looking beyond the resume is essential. The most revealing metrics include: 1) Code quality and documentation practices, 2) Contribution frequency and consistency, 3) Project diversity and complexity, 4) Collaboration patterns with other developers, and 5) Problem-solving approaches visible in issue discussions. These indicators provide much deeper insight into a developer's actual capabilities than traditional resume points alone. By systematically analyzing these metrics, technical recruiters can make more informed decisions about candidate suitability.",
      date: "June 3, 2023",
      image: screen2,
    },
    {
      title: "The Future of Technical Hiring",
      excerpt: "Explore emerging trends in technical recruitment and how data-driven approaches are changing the industry.",
      fullText: "Technical hiring is undergoing a profound transformation driven by data analytics and AI. Traditional interviews are increasingly supplemented or replaced by skills assessments, behavioral analysis, and predictive performance modeling. Companies at the forefront are building comprehensive candidate profiles that incorporate everything from code quality metrics to communication patterns and problem-solving approaches. As these methods mature, we're seeing higher retention rates and better performance outcomes. The most successful organizations are those that balance technological assessment with human judgment, creating hiring processes that are both efficient and deeply insightful.",
      date: "July 22, 2023",
      image: screen3,
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);
  const [expandedPostIndex, setExpandedPostIndex] = useState<number | null>(null);
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const toggleReadMore = (index: number) => {
    setExpandedPostIndex(expandedPostIndex === index ? null : index);
  };

  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", contactFormData);
    alert("Thank you for your message! We'll get back to you soon.");
    setContactFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="relative w-full h-full bg-gray-950">
      <div className="w-full h-12 bg-blue-700 fixed top-0 z-10 flex items-center justify-center">
        <div className="w-4/5 max-w-[1280px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <span className="text-white text-2xl font-bold">TrueEye</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-blue-200 font-bold px-4 py-2 rounded-md flex items-center gap-2">
              <FaWindows />
              <span>Download for Free</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <div className="w-4/5 max-w-[1280px] flex items-center justify-between gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-3xl font-bold">
              The Best Way to Track CV Quality
            </h1>
            <p className="text-gray-400 text-lg">
              TrueEye is a tool that helps you track CV quality and support your
              decision.
            </p>
            <p className="text-gray-400 text-lg">
              - Skill-Role consistency analysis
            </p>
            <p className="text-gray-400 text-lg">- Github profile analysis</p>
            <p className="text-gray-400 text-lg">
              - Usage based transparent pricing
            </p>
            <p className="text-gray-400 text-lg">
              - Encrypt and store data on local
            </p>
            <div className="flex items-center gap-2">
              <button className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-blue-200 font-bold px-4 py-2 rounded-md flex items-center gap-2">
                <FaWindows />
                <span>Download for Free</span>
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src={banner}
              alt="hero"
              className="w-full h-full object-cover rounded-lg shadow-lg border-2 border-blue-500 hover:border-blue-400 transition-all duration-300 transform hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[100vh] flex items-start justify-center bg-gray-950">
        <div className="w-4/5 max-w-[1280px] flex flex-col items-center justify-center pt-8">
          <h2 className="text-white text-3xl font-bold mb-8">Features</h2>
          <div className="relative w-full h-[640px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                  index === currentSlide
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <img
                  src={slide.image}
                  alt={`screenshot ${index + 1}`}
                  className="w-full h-full object-contain rounded-lg shadow-lg"
                />
                <p className="text-white font-bold text-lg text-center mt-4">
                  {slide.caption}
                </p>
              </div>
            ))}
            <div className="absolute bottom-[-60px] left-0 right-0 flex justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? "bg-blue-500" : "bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[100vh] flex items-center justify-center bg-gray-950">
        <div className="w-4/5 max-w-[1280px] flex flex-col items-center justify-center pt-8">
          <h2 className="text-white text-3xl font-bold mb-12">What Our Users Say</h2>
          <div className="relative w-full">
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-2xl h-[280px]">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full bg-gray-900 p-8 rounded-lg shadow-lg border border-blue-700 transition-all duration-700 ease-in-out ${
                      index === currentReview
                        ? "opacity-100 transform translate-y-0"
                        : "opacity-0 transform translate-y-8 pointer-events-none"
                    }`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-6 h-6 ${
                              i < review.rating ? "text-yellow-500" : "text-gray-600"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-300 text-lg italic mb-6">"{review.comment}"</p>
                      <h3 className="text-white text-xl font-bold">{review.name}</h3>
                      <p className="text-blue-400">{review.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentReview ? "bg-blue-500" : "bg-gray-600"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-white text-xl font-bold mb-4">Share Your Experience</h3>
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-bold px-6 py-3 rounded-md">
              Submit Your Feedback
            </button>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[100vh] flex items-center justify-center bg-gray-950 py-16">
        <div className="w-4/5 max-w-[1280px] flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl font-bold mb-12">Latest from Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {blogPosts.map((post, index) => (
              <div 
                key={index} 
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-blue-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-blue-400 text-sm mb-2">{post.date}</p>
                  <h3 className="text-white text-xl font-bold mb-3">{post.title}</h3>
                  <div className="text-gray-300 mb-4">
                    {expandedPostIndex === index ? (
                      <>
                        <p>{post.fullText}</p>
                        <button 
                          onClick={() => toggleReadMore(index)}
                          className="text-blue-400 hover:text-blue-300 font-semibold mt-4 transition-colors duration-300 flex items-center"
                        >
                          Show Less
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </button>
                      </>
                    ) : (
                      <>
                        <p>{post.excerpt}</p>
                        <button 
                          onClick={() => toggleReadMore(index)}
                          className="text-blue-400 hover:text-blue-300 font-semibold mt-2 transition-colors duration-300 flex items-center"
                        >
                          Read More
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-bold px-6 py-3 rounded-md">
              View All Articles
            </button>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[80vh] flex items-center justify-center bg-gray-900 py-16">
        <div className="w-4/5 max-w-[1280px] flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl font-bold mb-12">Contact Us</h2>
          <div className="flex flex-col md:flex-row w-full gap-12">
            <div className="w-full md:w-1/2">
              <form onSubmit={handleContactSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-white text-xl font-bold mb-6">Send Us a Message</h3>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={contactFormData.name}
                    onChange={handleContactInputChange}
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={contactFormData.email}
                    onChange={handleContactInputChange}
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={contactFormData.message}
                    onChange={handleContactInputChange}
                    rows={5}
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-bold px-6 py-3 rounded-md w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-white text-xl font-bold mb-6">Contact Information</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="text-blue-400 font-semibold">Address</h4>
                      <p className="text-gray-300">123 Innovation Street, Tech Valley, CA 94043</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="text-blue-400 font-semibold">Email</h4>
                      <p className="text-gray-300">contact@true-eye.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h4 className="text-blue-400 font-semibold">Phone</h4>
                      <p className="text-gray-300">+44 7411 123456</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-white text-xl font-bold mb-6">Business Hours</h3>
                <div className="flex justify-between text-gray-300 mb-2">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-300 mb-2">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Sunday:</span>
                  <span>Closed</span>
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
