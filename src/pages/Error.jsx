function Error({ children }) {
  return (
    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
      {children}
    </p>
  );
}

export default Error;
