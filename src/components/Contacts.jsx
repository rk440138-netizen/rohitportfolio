import React, { useState } from 'react';
import Reveal from "./Reveal"; 
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots, FaPaperPlane, FaHeadset } from 'react-icons/fa';

export default function Contact() {
  const [data, setData] = useState({ name: '', email: '', phone: '', message: '' });
  const [result, setResult] = useState(""); 
  const [loading, setLoading] = useState(false);

  const handle = e => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult(""); // Reset result

    const formData = new FormData(event.target);
    formData.append("access_key", "ce38f3a0-5099-45df-8272-0384e5f2d60d"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully! ✅");
        event.target.reset();
        setData({ name: '', email: '', phone: '', message: '' }); 
      } else {
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      setResult("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-5 bg-[#e7ecff]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <Reveal width="100%">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-4xl font-extrabold text-[#0b1b45] flex justify-center items-center gap-3">
              <FaHeadset className="text-[#5241b1]" /> 
              Get In <span className="text-[#5241b1]">Touch</span>
            </h3>
            <p className="text-gray-600 mt-2 text-lg font-medium">
              Have an exciting opportunity or project? I’d love to connect!
            </p>
          </div>
        </Reveal>
        
        <div className="bg-white rounded-4xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row">
          
            
            <div className="w-full md:w-1/2 bg-[#f0f4ff] flex items-center justify-center p-8 relative">
               <div className="absolute w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
               <Reveal>
                  <img 
                    src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg" 
                    alt="Contact" 
                    className="w-full max-w-md mix-blend-multiply relative z-10 hover:scale-105 transition-transform duration-500"
                  />
               </Reveal>
            </div>

           
            <div className="w-full md:w-1/2 p-8 md:p-10 bg-white relative">
              
              <form onSubmit={onSubmit} className="space-y-6">
                
               
                <Reveal>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#4726ff] transition-colors">
                      <FaUser />
                    </div>
                    <input 
                      name="name" 
                      required
                      value={data.name} 
                      onChange={handle} 
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-[#4726ff] focus:ring-4 focus:ring-[#4726ff]/10 transition-all duration-300 outline-none text-gray-700 font-medium placeholder-gray-400 shadow-sm" 
                      placeholder="Name" 
                    />
                  </div>
                </Reveal>
                
                <Reveal>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#4726ff] transition-colors">
                      <FaEnvelope />
                    </div>
                    <input 
                      name="email" 
                      type="email"
                      required
                      value={data.email} 
                      onChange={handle} 
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-[#4726ff] focus:ring-4 focus:ring-[#4726ff]/10 transition-all duration-300 outline-none text-gray-700 font-medium placeholder-gray-400 shadow-sm" 
                      placeholder="Email" 
                    />
                  </div>
                </Reveal>

                
                <Reveal>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#4726ff] transition-colors">
                      <FaPhoneAlt />
                    </div>
                    <input 
                      name="phone" 
                      value={data.phone} 
                      onChange={handle} 
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-[#4726ff] focus:ring-4 focus:ring-[#4726ff]/10 transition-all duration-300 outline-none text-gray-700 font-medium placeholder-gray-400 shadow-sm" 
                      placeholder="Phone" 
                    />
                  </div>
                </Reveal>

                <Reveal>
                  <div className="relative group">
                     <div className="absolute top-4 left-4 pointer-events-none text-gray-400 group-focus-within:text-[#4726ff] transition-colors">
                       <FaCommentDots />
                     </div>
                     <textarea 
                       name="message" 
                       required
                       value={data.message} 
                       onChange={handle} 
                       rows="4" 
                       className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-[#4726ff] focus:ring-4 focus:ring-[#4726ff]/10 transition-all duration-300 outline-none text-gray-700 font-medium resize-none placeholder-gray-400 shadow-sm" 
                       placeholder="Message" 
                     />
                  </div>
                </Reveal>

                
                {result && (
                    <Reveal>
                        <div className={`p-3 rounded-lg text-center font-semibold text-sm ${result.includes("Error") ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}>
                            {result}
                        </div>
                    </Reveal>
                )}

              
                <Reveal>
                  <div className="flex justify-end"> 
                    <button 
                      type="submit" 
                      disabled={loading} 
                      className={`
                        px-8 py-3 bg-[#240a7a] text-white font-bold rounded-lg shadow-lg 
                        flex items-center gap-2 transition-all duration-300
                        ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#4726ff] hover:shadow-[#4726ff]/40 transform hover:-translate-y-1"}
                      `}
                    >
                      {loading ? "Sending..." : "Submit"} 
                      {!loading && <FaPaperPlane />}
                    </button>
                  </div>
                </Reveal>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}