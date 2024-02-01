export default function Button({children, textOnly, className, ...props}) {
  const baseClass = textOnly ? 'text-button' : 'button'
  const cssClassses = `${baseClass} ${className}`;

  return (
    <button
      className={cssClassses}
      {...props}
    >
      {children}
    </button>
  );
}