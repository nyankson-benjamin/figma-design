
type BtnProps ={
    onClick:()=>void,
    text:string
}
export default function Button({onClick, text}:BtnProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded"
    >
     {text}
    </button>
  );
}
