const maping = {
  0: { bg: "#ffffff", text: "#000000" },
  0.5: { bg: "#fbf0cb", text: "#000000" },
  1: { bg: "#f7e1a1", text: "#000000" },
  1.5: { bg: "#f4d380", text: "#000000" },
  2: { bg: "#f0c566", text: "#000000" },
  2.5: { bg: "#edb950", text: "#000000" },
  3: { bg: "#e9ad3f", text: "#000000" },
  3.5: { bg: "#e5a231", text: "#000000" },
  4: { bg: "#e19726", text: "#000000" },
  4.5: { bg: "#dd8d1d", text: "#000000" },
  5: { bg: "#d98416", text: "#000000" },
  5.5: { bg: "#d57b11", text: "#000000" },
  6: { bg: "#d1730c", text: "#000000" },
  6.5: { bg: "#cd6c08", text: "#000000" },
  7: { bg: "#c86505", text: "#000000" },
  7.5: { bg: "#c45e03", text: "#000000" },
  8: { bg: "#c05801", text: "#000000" },
  8.5: { bg: "#bc5200", text: "#000000" },
  9: { bg: "#b74d00", text: "#000000" },
  9.5: { bg: "#b34800", text: "#000000" },
  10: { bg: "#af4300", text: "#FFFFFF" },
  10.5: { bg: "#ab3f00", text: "#FFFFFF" },
  11: { bg: "#a73b00", text: "#FFFFFF" },
  11.5: { bg: "#a33700", text: "#FFFFFF" },
  12: { bg: "#9f3400", text: "#FFFFFF" },
  12.5: { bg: "#9b3000", text: "#FFFFFF" },
  13: { bg: "#972d00", text: "#FFFFFF" },
  14: { bg: "#8f2800", text: "#FFFFFF" },
  15: { bg: "#882300", text: "#FFFFFF" },
  16: { bg: "#811f00", text: "#FFFFFF" },
  17: { bg: "#7b1b00", text: "#FFFFFF" },
  18: { bg: "#741800", text: "#FFFFFF" },
  19: { bg: "#6e1500", text: "#FFFFFF" },
  20: { bg: "#681200", text: "#FFFFFF" },
  21: { bg: "#631000", text: "#FFFFFF" },
  22: { bg: "#5e0e00", text: "#FFFFFF" },
  23: { bg: "#590c00", text: "#FFFFFF" },
  24: { bg: "#540b00", text: "#FFFFFF" },
  25: { bg: "#500900", text: "#FFFFFF" },
  26: { bg: "#4c0800", text: "#FFFFFF" },
  27: { bg: "#480700", text: "#FFFFFF" },
  28: { bg: "#440600", text: "#FFFFFF" },
  29: { bg: "#410500", text: "#FFFFFF" },
  30: { bg: "#3d0500", text: "#FFFFFF" },
  31: { bg: "#3a0400", text: "#FFFFFF" },
  32: { bg: "#370400", text: "#FFFFFF" },
  33: { bg: "#340300", text: "#FFFFFF" },
  34: { bg: "#320300", text: "#FFFFFF" },
  35: { bg: "#2f0200", text: "#FFFFFF" },
  36: { bg: "#2d0200", text: "#FFFFFF" },
  37: { bg: "#2a0200", text: "#FFFFFF" },
  38: { bg: "#280100", text: "#FFFFFF" },
  39: { bg: "#260100", text: "#FFFFFF" },
  40: { bg: "#240100", text: "#FFFFFF" },
  50: { bg: "#160000", text: "#FFFFFF" },
  65: { bg: "#0d0000", text: "#FFFFFF" },
  80: { bg: "#000000", text: "#FFFFFF" },
  999999: { bg: "#000000FF", text: "#FFFFFF" },
};

const getClosestSrm = (target, arr) => arr.reduce(
  (prev, curr) => (Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev)
);

export function BeerColor({ srm = 999999 }) {
  const mapingKeys = Object.keys(maping);
  const styleRecord = mapingKeys.includes(srm)
    ? maping[srm]
    : maping[getClosestSrm(srm, mapingKeys)];

  const style = { backgroundColor: styleRecord.bg, color: styleRecord.text };
  return (
    <div
      className="h-10 min-w-fit m-4 rounded flex justify-center items-center cursor-default"
      style={style}
    >
      <span className="text-xs">{`SRM: ${srm}`}</span>
    </div>

  );
}
