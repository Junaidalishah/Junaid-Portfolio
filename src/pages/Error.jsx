function Error({ children }) {
  return (
    <span className="mt-1 block text-sm text-red-500 dark:text-red-400">
      {children}
    </span>
  );
}

export default Error;