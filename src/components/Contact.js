import React from "react";

export default function Contact() {
  const phoneNumber = "+201110037173"; // replace with your number
  const whatsappNumber = "+201110037173"; // replace with your WhatsApp number

  return (
    <section id="contact" className="py-20 px-8 text-center bg-gray-900">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5586F7] via-[#7BA8FF] to-[#5586F7] drop-shadow-[0_0_20px_rgba(85,134,247,0.7)]">
        Contact Me
      </h2>
      <p className="mt-6 text-gray-200 text-lg drop-shadow-[0_0_5px_rgba(85,134,247,0.6)]">
        Interested in working together? Let’s connect!
      </p>
      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
        <a
          href={`mailto:youremail@example.com`}
          className="inline-block px-8 py-3 bg-gradient-to-r from-[#5586F7] via-[#7BA8FF] to-[#5586F7] text-white font-semibold rounded-lg shadow-[0_0_20px_rgba(85,134,247,0.8)] hover:shadow-[0_0_35px_rgba(85,134,247,1)] hover:scale-105 transition-all duration-300"
        >
          Send Email
        </a>
        <a
          href={`tel:${phoneNumber}`}
          className="inline-block px-8 py-3 bg-gradient-to-r from-[#5586F7] via-[#7BA8FF] to-[#5586F7] text-white font-semibold rounded-lg shadow-[0_0_20px_rgba(85,134,247,0.8)] hover:shadow-[0_0_35px_rgba(85,134,247,1)] hover:scale-105 transition-all duration-300"
        >
          Call Me
        </a>
        <a
          href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-gradient-to-r from-[#5586F7] via-[#7BA8FF] to-[#5586F7] text-white font-semibold rounded-lg shadow-[0_0_20px_rgba(85,134,247,0.8)] hover:shadow-[0_0_35px_rgba(85,134,247,1)] hover:scale-105 transition-all duration-300"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
}
