import React, { useState } from "react";
import toast from "react-hot-toast";
import { useTheme } from "./ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
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

    try {
      setLoading(true);

      const response = await fetch("/api/contact_submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent!", { position: "top-center" });
        resetForm();
      } else {
        throw new Error();
      }
    } catch {
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      aria-labelledby="contact-heading"
      className="w-full flex justify-center"
    >
      <div
        className={`w-full max-w-4xl rounded-xl shadow-2xl p-6 md:p-8 ${
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

          {/* Footer */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-2 text-secondary bg-background px-[6px] py-[6px] rounded-[10px]">
              <span className="sr-only">Contact email</span>
              <div className="rounded-[10px] bg-primary py-2 px-2 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-white text-[20px] md:text-[22px]"
                />
              </div>

              <p className="font-semibold text-white! text-ellipsis overflow-hidden whitespace-nowrap px-2">bfernandezling@gmail.com</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn h-[48px] md:h-[50px] px-6 text-white md:w-auto w-full font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
