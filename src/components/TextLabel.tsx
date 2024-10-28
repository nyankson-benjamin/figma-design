export default function TextLabel({
  
  label,
}: {
  label: string;
}) {
  return (
    <p className="capitalize font-medium py-3">
      {label}
    </p>
  );
}
