export default function ToggleUpDownArrow({
  open,
  height="18",
  stroke = "rgb(158, 158, 159)",
  width="18",
}: {
  open?: boolean;
  width?: string;
  height?: string;
  stroke?: string;
}) {
  return (
    <div>
      <div className="cursor-pointer">
        {open && (
          <div>
            <svg
              width={width}
              height={height}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001"
                stroke={stroke}
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        )}

        {!open && (
          <div>
            <svg
              width={width}
              height={height}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9201 15.05L13.4001 8.53001C12.6301 7.76001 11.3701 7.76001 10.6001 8.53001L4.08008 15.05"
                stroke={stroke}
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
