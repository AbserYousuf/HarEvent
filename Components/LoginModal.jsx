import { useEffect, useState } from "react";

export default function LoginModal({ type, onClose }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState(false);

  const label = type === "vendor" ? "Vendor" : "Customer";

  // Close on Escape + lock background scroll while open
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // After a fake login, close automatically
  useEffect(() => {
    if (!success) return;
    const t = setTimeout(onClose, 1500);
    return () => clearTimeout(t);
  }, [success, onClose]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault(); // no real authentication
    setSuccess(true);
  };

  const inputClass =
    "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-[#8b1e3f] focus:outline-none focus:ring-1 focus:ring-[#8b1e3f]";

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-title"
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl md:p-8"
        onClick={(e) => e.stopPropagation()} // clicks inside don't close it
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-xl text-gray-500 hover:text-[#8b1e3f]"
        >
          ✕
        </button>

        {success ? (
          <div className="py-8 text-center">
            <p className="text-4xl">✅</p>
            <h2 className="mt-3 text-2xl font-bold text-gray-900">
              Logged in as {label}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              This is a demo login. No real authentication.
            </p>
          </div>
        ) : (
          <>
            <h2 id="login-title" className="text-2xl font-bold text-gray-900">
              Login as {label}
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-[#c9972b]" />
            <p className="mt-3 text-sm text-gray-600">
              {type === "vendor"
                ? "Manage your listings and connect with customers."
                : "Find and contact the best vendors for your event."}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  minLength={4}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-[#8b1e3f] px-4 py-2.5 font-semibold text-white transition hover:bg-[#6d1731]"
              >
                Login
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}