'use client';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mblykjvb', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        form.reset();
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-white text-[#004d43] font-body px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg mb-10">
          Have questions, ideas, or want to support our work? Reach out to us.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="border border-gray-300 text-[#004d43] rounded-lg px-4 py-3 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="border border-gray-300 text-[#004d43] rounded-lg px-4 py-3 w-full"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="border border-gray-300 text-[#004d43] rounded-lg px-4 py-3 md:col-span-2 w-full"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="bg-[#FFD700] text-[#004d43] font-bold py-3 px-6 rounded-full shadow-md hover:bg-white hover:text-[#004d43] transition md:col-span-2 mx-auto"
          >
            Send Message
          </button>
        </form>

        {/* Success / Error Message */}
        {status === 'success' && (
          <p className="mt-6 text-green-600 font-semibold">Thank you! Your message has been sent successfully.</p>
        )}
        {status === 'error' && (
          <p className="mt-6 text-red-600 font-semibold">Oops! Something went wrong. Please try again later.</p>
        )}
      </div>
    </section>
  );
}