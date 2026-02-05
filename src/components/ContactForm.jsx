import React, { useState } from "react";
import toast from "react-hot-toast";
import { useTheme } from "./ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function ContactForm() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.", {
        position: "top-center",
      });
      return;
    }

    setLoading(true);

    toast.promise(
      fetch("/api/contact_submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            resetForm();
            return data;
          } else {
            throw new Error("Failed to send message");
          }
        }),
      {
        loading: "Sending message...",
        success: "Message sent!",
        error: "Something went wrong. Please try again.",
      },
      { id: "contact-form-toast" },
    );

    setLoading(false);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <div
      aria-labelledby="contact-heading"
      className="w-full flex justify-center"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        variants={{ visible: { opacity: 1 } }}
        className={`w-full max-w-5xl rounded-xl shadow-2xl p-4 md:p-8 lg:p-12 ${
          theme === "dark" ? "bg-popup" : "bg-primary"
        }`}
      >
        <header className="mb-6">
          <h2 id="contact-heading" className="font-semibold text-white!">
            Let&apos;s Chat!
          </h2>
          <p className="text-white!">
            This message goes right to my inbox. I&apos;ll get back to you as
            soon as I can.
          </p>
        </header>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="basicInput w-full"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone Number (optional)
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone Number (optional)"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="basicInput w-full"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="basicInput w-full"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="sr-only">
                Company (optional)
              </label>
              <input
                id="company"
                type="text"
                placeholder="Company (optional)"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="basicInput w-full"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              required
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="basicInput w-full min-h-[140px] resize-y"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div
              className={`flex items-center gap-2 text-secondary px-[6px] py-[6px] rounded-[10px] ${theme === "dark" ? "bg-background" : "bg-[#244459]"} `}
            >
              <span className="sr-only">Contact email</span>
              <div
                className={`rounded-[10px]  py-2 px-2 flex items-center justify-center ${theme === "dark" ? "bg-primary" : "bg-accent"}`}
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-white text-[18px] md:text-[22px]"
                />
              </div>

              <p className="font-semibold text-white! text-[14px]! md:text-[16px]! text-ellipsis overflow-hidden whitespace-nowrap px-2">
                bfernandezling@gmail.com
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`h-[48px] md:h-[50px] px-6 text-white md:w-auto w-full font-semibold ${theme === "dark" ? "btn" : "btn-accent"} `}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
