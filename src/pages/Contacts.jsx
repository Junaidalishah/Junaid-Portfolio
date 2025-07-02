import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { createMessage } from "./apimessage";
import Error from "./Error";
import { FaPaperPlane, FaTimes } from "react-icons/fa";

function Contacts() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createMessage,
    onSuccess: () => {
      toast.success("Message Send Successfully");
      reset();
    },
  });

  function onSubmit(data) {
    mutate(data);
  }
  function onError(errors) {
    console.log(errors);
  }

  return (
    <div className="text-gray-800 dark:text-white">
      <div className="mb-6 sm:mb-8">
        <h1 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl lg:text-4xl dark:text-white">
          Contact Me
        </h1>
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 sm:w-20"></div>
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl bg-white p-4 shadow-xl sm:p-6 lg:p-8 dark:bg-gray-700">
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit(onSubmit, onError)}>
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "This field is required" })}
                placeholder="Your Name"
                className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 p-3 text-gray-800 transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:p-4 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400 dark:focus:bg-gray-700"
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
                className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 p-3 text-gray-800 transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:p-4 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400 dark:focus:bg-gray-700"
              />
              {errors?.email?.message && <Error>{errors.email.message}</Error>}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message"
                id="message"
                {...register("message", { required: "This field is required" })}
                className="w-full resize-none rounded-xl border-2 border-gray-200 bg-gray-50 p-3 text-gray-800 transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:rows-5 sm:p-4 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400 dark:focus:bg-gray-700"
              ></textarea>
              {errors?.message?.message && <Error>{errors.message.message}</Error>}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button
                type="submit"
                disabled={isCreating}
                className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 sm:gap-3 sm:px-6 sm:py-4 sm:text-base"
              >
                <FaPaperPlane className="text-sm transition-transform duration-300 group-hover:translate-x-1 sm:text-base" />
                {isCreating ? "Sending..." : "Send Message"}
              </button>

              <button
                type="reset"
                onClick={() => reset()}
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 sm:gap-3 sm:px-6 sm:py-4 sm:text-base dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <FaTimes className="text-sm sm:text-base" />
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