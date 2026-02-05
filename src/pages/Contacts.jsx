import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaPaperPlane, FaTimes } from "react-icons/fa";
import Error from "./Error";

function Contacts() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data); // For testing
    toast.success("Message sent successfully!");
    reset();
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <div className="text-gray-800 dark:text-white" id="contact">
      <div className="mb-6 sm:mb-8">
        <h1 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white sm:mb-4 sm:text-3xl lg:text-4xl">
          Contact Me
        </h1>
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 sm:w-20"></div>
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl bg-white p-4 shadow-xl dark:bg-gray-700 sm:p-6 lg:p-8">
          <form
            className="space-y-4 sm:space-y-6"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "This field is required" })}
                placeholder="Your Name"
                className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 p-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white sm:p-4"
              />
              {errors?.name?.message && <Error>{errors.name.message}</Error>}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "This field is required" })}
                placeholder="you@example.com"
                className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 p-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white sm:p-4"
              />
              {errors?.email?.message && <Error>{errors.email.message}</Error>}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                rows="4"
                id="message"
                {...register("message", { required: "This field is required" })}
                placeholder="Your message"
                className="w-full resize-none rounded-xl border-2 border-gray-200 bg-gray-50 p-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white sm:p-4"
              ></textarea>
              {errors?.message?.message && (
                <Error>{errors.message.message}</Error>
              )}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button
                type="submit"
                className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:gap-3 sm:px-6 sm:py-4 sm:text-base"
              >
                <FaPaperPlane />
                Send Message
              </button>

              <button
                type="reset"
                onClick={() => reset()}
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 hover:border-gray-400 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 sm:px-6 sm:py-4 sm:text-base"
              >
                <FaTimes />
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
