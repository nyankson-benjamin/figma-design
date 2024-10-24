import ChevronDoubleLeft from "../../assets/icons/arrows/ChevronDoubleLeft";
import ChevronDoubleRight from "../../assets/icons/arrows/ChevronDoubleRight";
export default function ToggleColorPalette({
  togglePalette,
  showPalette,
}: {
  togglePalette: () => void;
  showPalette: boolean;
}) {
  return (
    <div>
      <div className=" w-10  h-[80vh] mt-10 flex items-center">
        <button onClick={togglePalette} title={showPalette ? "Close colors" :"Open colors"}>
          {showPalette ? <ChevronDoubleRight /> : <ChevronDoubleLeft />}
        </button>
      </div>
    </div>
  );
}
