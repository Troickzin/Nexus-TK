export function Small_Nexus_TK(props) {
  return (
    <>
      <svg
        className={props.className.className + " group/icon"}
        fill="currentColor"
        width="205"
        height="205"
        viewBox="0 0 205 205"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M115.871 58.0264H91.5305L90.1466 49H120.293L144.359 79.9126L168.081 49H203.641L161.711 101.832L205 156H169.003L143.326 123.59L116.837 156H90.1466V146.974H112.547L143.436 109.179L173.378 146.974H186.221L150.161 101.852L184.943 58.0264H172.543L158.477 76.3562L144.411 94.6861L115.871 58.0264Z"
          fill="#BDC3D4"
          className={
            props.className.color1 ? props.className.color1 : "fill-current"
          }
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 49H25.5317L81.0441 78.0239V49H95.8719L137.11 101.912L92.7907 156H81.0441V109.282L28.9398 82.2V156H0V49ZM9.03977 58.0264V146.974H19.9001V67.3255L90.0838 103.804V145.049L125.546 101.771L91.4522 58.0264H90.0838V92.9391L23.3082 58.0264H9.03977Z"
          fill="#16A98B"
          className={
            props.className.color2
              ? props.className.color2 + ""
              : "fill-current"
          }
        />
      </svg>
    </>
  );
}

const icons = {
  Nexus_TK: (props) => <Small_Nexus_TK className={props} />,
};

export default icons;
