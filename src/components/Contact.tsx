"use client";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Copy,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  const phoneNumber = "+919467268617"; // REAL number
  const maskedPhone = "+91 •••• •••• 17";

  const copyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
  };

  return (
    <section id="contact" className="pt-16 pb-20 bg-gray-50">
      <div className="max-w-4xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight">Let’s Connect</h2>

        <p className="mt-3 text-gray-600 max-w-xl">
          I’m always open to discussing software roles, meaningful projects, or
          exchanging ideas around engineering and system design.
        </p>

        <div className="mt-10 rounded-2xl border bg-white p-8 shadow-sm">
          <div className="mb-8">
            <p className="text-lg font-medium">Manik Singhal</p>
            <p className="text-sm text-gray-500">
              Software Engineer · Backend & Full Stack
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            {/* Email */}
            <div className="flex gap-3">
              <Mail className="w-4 h-4 text-gray-400 mt-1" />
              <div>
                <p className="text-gray-500">Email</p>
                <a
                  href="mailto:maniksingal29@gmail.com"
                  className="font-medium hover:underline"
                >
                  maniksingal29@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3">
              <Phone className="w-4 h-4 text-gray-400 mt-1" />
              <div>
                <p className="text-gray-500">Phone</p>
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="font-medium hover:underline"
                  >
                    {maskedPhone}
                  </a>
                  <button
                    type="button"
                    onClick={copyPhone}
                    title="Copy phone number"
                    className="text-gray-400 hover:text-black transition"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-3">
              <MessageCircle className="w-4 h-4 text-gray-400 mt-1" />
              <div>
                <p className="text-gray-500">WhatsApp</p>
                <a
                  href={`https://wa.me/${phoneNumber.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-3">
              <MapPin className="w-4 h-4 text-gray-400 mt-1" />
              <div>
                <p className="text-gray-500">Location</p>
                <p className="font-medium">India · Open to Remote</p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex gap-3">
              <Linkedin className="w-4 h-4 text-gray-400 mt-1" />
              <div>
                <p className="text-gray-500">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/maniksingal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                >
                  linkedin.com/in/maniksingal/
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex gap-3">
              <Github className="w-4 h-4 text-gray-400 mt-1" />
              <div>
                <p className="text-gray-500">GitHub</p>
                <a
                  href="https://github.com/mk-singhal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                >
                  github.com/mk-singhal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
