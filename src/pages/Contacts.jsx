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
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
          Contact Me
        </h1>
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit, onError)}>
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "This field is required" })}
                placeholder="Your Name"
                className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 p-4 text-gray-800 transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400 dark:focus:bg-gray-700"
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
                className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 p-4 text-gray-800 transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400 dark:focus:bg-gray-700"
              />
              {errors?.email?.message && <Error>{errors.email.message}</Error>}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Your message"
                id="message"
                {...register("message", { required: "This field is required" })}
                className="w-full resize-none rounded-xl border-2 border-gray-200 bg-gray-50 p-4 text-gray-800 transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400 dark:focus:bg-gray-700"
              ></textarea>
              {errors?.message?.message && <Error>{errors.message.message}</Error>}
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isCreating}
                className="group flex flex-1 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
              >
                <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
                {isCreating ? "Sending..." : "Send Message"}
              </button>

              <button
                type="reset"
                onClick={() => reset()}
                className="flex items-center justify-center gap-3 rounded-xl border-2 border-gray-300 bg-white px-6 py-4 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
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