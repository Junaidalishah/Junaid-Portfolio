import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaPaperPlane, FaTimes } from "react-icons/fa";
import Error from "./Error";

function Contacts() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors, isSubmitting } = formState;

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    toast.success("Message sent successfully!");
    reset();
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
      <header className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Get in Touch
        </h2>
        <h1 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          Contact Me
        </h1>
        <div className="mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
      </header>

      <div className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Form Info */}
            <div className="bg-gray-900 p-8 text-white dark:bg-black md:col-span-2">
              <h3 className="mb-6 text-xl font-bold">Let's connect</h3>
              <p className="mb-8 text-sm leading-relaxed text-gray-400">
                I'm currently available for freelance work and internship
                opportunities. Have a project in mind? Let's talk!
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-gray-300">
                    Available for new projects
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">Peshawar, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              className="p-8 md:col-span-3 space-y-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Junaid Ali Shah"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition-all focus:border-blue-500 focus:bg-white focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
                {errors?.name && <Error>{errors.name.message}</Error>}
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="sjunaidali47@gmail.com"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition-all focus:border-blue-500 focus:bg-white focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
                {errors?.email && <Error>{errors.email.message}</Error>}
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Message
                </label>
                <textarea
                  rows="4"
                  {...register("message", { required: "Message is required" })}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition-all focus:border-blue-500 focus:bg-white focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                ></textarea>
                {errors?.message && <Error>{errors.message.message}</Error>}
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex flex-1 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-blue-700 disabled:opacity-50"
                >
                  <FaPaperPlane
                    className={`transition-transform duration-300 ${isSubmitting ? "translate-x-10 opacity-0" : "group-hover:-translate-y-1 group-hover:translate-x-1"}`}
                  />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                <button
                  type="reset"
                  onClick={() => reset()}
                  className="flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-gray-600 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                >
                  <FaTimes />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
