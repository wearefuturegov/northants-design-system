import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.476 9.067c-.286.115-.778.745-1.072 1.376-.688 1.473-.5 2.636.663 4.06.81.991.843 1.507.172 2.424-.36.491-.442.925-.254 1.294.188.36.442.507.868.507.556 0 .933-.31 1.383-1.146.827-1.547.639-2.98-.573-4.38-.77-.893-.802-1.4-.139-2.342.401-.581.475-.982.23-1.367-.254-.41-.836-.606-1.278-.426ZM36.46 12.948c-.304.139-.762.745-1.114 1.49-.254.524-.27.622-.27 1.424 0 .795.016.901.253 1.392.14.295.483.803.754 1.13.81.966.835 1.384.163 2.39-.278.41-.352.598-.352.869 0 .45.238.77.672.925.507.18.867.008 1.35-.622.5-.672.737-1.294.786-2.13.066-1.137-.212-1.792-1.31-3.078-.245-.286-.27-.368-.27-.86 0-.515.025-.589.393-1.162.352-.548.393-.655.36-.966-.049-.426-.294-.72-.704-.835-.368-.098-.4-.098-.712.033ZM53.972 17.721c-.475.09-1.335 1.49-1.515 2.465-.18.982.18 2.063 1.015 3.013.557.638.664.876.623 1.383-.025.336-.115.54-.418.99-.483.721-.516 1.106-.14 1.54.451.508 1.008.491 1.556-.057.459-.467.893-1.36 1-2.088.171-1.105-.123-2.006-1-3.005-.802-.933-.835-1.424-.147-2.44.549-.802.434-1.424-.32-1.743-.27-.115-.327-.123-.654-.058ZM3.284 21.725c-.475.327-1.687 3.348-2.219 5.518-.352 1.425-.442 2.268-.393 3.693.099 2.963.582 3.234 3.726 2.046.597-.229 1.604-.654 2.243-.95.638-.294 1.187-.507 1.22-.466.033.033.36.573.72 1.195l.655 1.138-.426.262c-.237.14-.843.492-1.35.778-.508.295-.975.614-1.048.72-.279.426-.066 1.245.384 1.466.443.23.713.14 2.12-.663l1.344-.778.139.23c.336.556 1.22 2.12 1.22 2.161 0 .024-.598.385-1.318.81-.73.418-1.376.844-1.45.95-.163.254-.147.843.033 1.114.074.123.246.278.369.344.45.229.696.155 2.096-.655l1.326-.77.671 1.154c.369.639.68 1.188.704 1.22.017.025-.556.385-1.269.794-.704.402-1.367.82-1.465.926-.549.59-.041 1.67.786 1.653.286-.008 1.13-.45 2.75-1.424l.246-.156.598 1.04c.327.573.622 1.089.663 1.146.05.09.238.009.835-.343.426-.254.819-.484.876-.516.082-.05-.049-.336-.507-1.13-.344-.59-.622-1.105-.622-1.155 0-.049.466-.36 1.047-.695 1.802-1.032 1.982-1.204 1.867-1.826-.065-.328-.491-.745-.851-.827-.311-.066-.54.032-1.982.86-.908.523-1.187.646-1.236.556-.262-.401-1.31-2.292-1.285-2.317.008-.016.581-.344 1.252-.737.68-.385 1.31-.794 1.417-.892.417-.41.286-1.195-.254-1.523-.45-.278-.671-.221-2.047.573-.704.401-1.326.745-1.375.753-.066.017-1.499-2.317-1.441-2.358.008-.008.548-.319 1.203-.687 1.498-.86 1.72-1.056 1.72-1.531 0-.45-.18-.803-.492-.966-.466-.238-.704-.164-2.12.655-.745.425-1.36.761-1.368.753-.13-.18-1.342-2.35-1.342-2.407 0-.041.106-.131.237-.213 1.048-.614 3.578-2.628 4.11-3.267.549-.655.672-.925.606-1.26-.155-.869-2.366-2.31-4.675-3.063-2.448-.794-6.116-1.31-6.648-.933ZM22.95 23.559c-.254.098-.745.712-1.023 1.252-.704 1.376-.598 2.637.32 3.824.916 1.195.932 1.228.9 1.72-.025.376-.099.556-.418 1.03-.303.451-.385.648-.385.91 0 .638.663 1.121 1.261.925.385-.123.909-.72 1.212-1.36.663-1.424.458-2.816-.614-4.044-.606-.696-.778-1.113-.647-1.613.057-.204.254-.59.442-.868.262-.384.336-.573.336-.835 0-.434-.197-.728-.606-.892-.36-.148-.524-.156-.778-.05ZM48.38 27.088c-1.728.45-3.3 1.653-4.225 3.234l-.22.376.318.32.328.327.77-.197.777-.196.655-.647c.786-.778 1.425-1.122 2.522-1.35.647-.132.786-.189.99-.41.213-.238.23-.303.197-.712-.033-.385-.082-.492-.303-.688-.22-.197-.32-.23-.728-.221-.254 0-.745.073-1.081.164Z"
        fill={colourFill}
      />
      <path
        d="M37.614 30.248c-1.744.368-3.636 1.67-4.921 3.373-.786 1.04-1.67 2.947-1.67 3.594 0 .328.237.72.524.876.253.14.344.14 1.146.041 1.007-.123 1.949-.074 2.85.156.859.22 1.317.475 2.03 1.113l.614.549.777-.066c1.155-.106 2.498-.074 3.153.082.753.18 1.874.737 2.742 1.367.385.279.794.532.91.565.13.041.441.017.736-.049 1.58-.336 3.406.131 4.896 1.253.729.548.819.598 1.228.598.491 0 .852-.36.983-.983.614-2.857.008-5.887-1.613-8.015-1.564-2.047-4.07-2.702-7.107-1.843l-.737.205-.696-.688c-1.785-1.784-3.889-2.554-5.846-2.128ZM21.214 37.968c-.417.041-.86.09-.982.123-.213.05-.213.057.114.197.443.196.958.81 1.122 1.326.18.54.18 1.564.008 2.071-.172.5-.777 1.163-1.482 1.613-.31.189-.573.36-.589.369-.008.016.098.245.246.524l.278.507.491-.073c.63-.082 2.743-.09 3.25 0 .762.13 1.13.712.844 1.31-.246.524-.426.58-1.45.466a7.48 7.48 0 0 0-2.832.164c-1.957.467-4.11 2.055-5.175 3.79-.245.402-.515.779-.605.844-.336.23-.958.074-1.228-.311-.36-.508.024-1.318 1.326-2.833l.442-.516-.188-.36c-.352-.663-.287-.655-1.122-.23-.655.337-.819.386-1.392.418-.753.041-1.089-.04-1.752-.442-.467-.286-.475-.286-.982-.196-2.301.401-4.143 1.801-5.101 3.872-.385.827-.532 1.441-.59 2.432-.04.802.05 1.597.27 2.358.042.156.017.197-.13.237-.442.115-1.482.696-1.949 1.09-.917.753-1.662 1.964-1.94 3.127-.156.663-.156 2.006.008 2.685.475 2.055 2.145 3.726 4.29 4.315.508.14 1.76.147 24.603.147h24.07l.64-.188c1.964-.565 3.422-1.948 4.036-3.832.212-.663.237-.827.237-1.834-.008-.99-.033-1.17-.237-1.76-.623-1.801-1.916-3.111-3.693-3.725-.221-.082-.401-.18-.393-.213.008-.04.057-.458.106-.933.328-2.767-.58-5.682-2.53-8.147-.433-.54-1.58-1.678-1.653-1.629-.156.09-.058.622.22 1.212.37.77.443 1.44.246 2.112-.163.581-.573 1.18-1.007 1.498-.188.131-.343.27-.343.295-.009.025.204.074.466.098.573.05 1.048.279 1.548.737.475.442.712.819.892 1.417.172.606.115 1.17-.221 2.128-.68 1.933-1.965 3.742-3.455 4.855-.475.36-.475.36-.32.533.443.483.426.95-.032 1.35-.303.27-.639.328-.958.164-.098-.057-.385-.303-.63-.548-1.081-1.081-2.874-2.129-4.209-2.473-2.227-.565-4.167-.098-6.312 1.515-.688.524-.86.614-1.13.614-.458 0-.876-.418-.876-.892 0-.426.32-.795 1.212-1.409.344-.237.638-.434.655-.45.057-.041-.475-1.007-.762-1.392-1.473-1.965-3.406-2.84-5.895-2.694-1.244.074-1.334.066-1.58-.09-.254-.163-.45-.638-.385-.933.05-.23.27-.508.492-.63.114-.066.114-.197.032-1.065-.13-1.457.066-3.586.393-4.24a2.8 2.8 0 0 1 1.147-1.163c.827-.443 1.392-.475 2.358-.148.335.115.63.205.655.205.016 0-.05-.172-.14-.385-.27-.622-.286-1.343-.04-2.047l.204-.59-.876-.85c-2.17-2.088-4.781-3.26-7.819-3.497-.548-.04-1.023-.073-1.072-.065-.041 0-.426.033-.844.065ZM17.121 55.58c1.866.287 3.48 1.36 4.306 2.858.426.761.45 1.105.107 1.49-.213.237-.295.27-.647.27-.475 0-.68-.147-.934-.655-.67-1.335-1.866-2.055-3.545-2.145-.958-.057-1.948.114-2.636.434-.598.286-1.26.909-1.564 1.482-.335.638-.581.851-1.015.9-.303.033-.401.008-.622-.18-.385-.32-.418-.655-.123-1.285.614-1.302 1.695-2.284 3.087-2.808 1.08-.41 2.423-.54 3.586-.36Z"
        fill={colourFill}
      />
      <path
        d="M35.395 40.498c-.164 1.007-.565 1.662-1.392 2.268-.483.36-.622.508-.696.77-.082.27-.074.376.033.63.065.172.22.549.344.835.18.434.213.614.188 1.105-.025.549-.016.582.156.606.098.017.425-.049.736-.147.688-.213 1.499-.23 1.998-.033.197.082.753.41 1.228.745.483.328 1.155.729 1.507.9.614.287.663.296 1.588.304.524 0 1.376-.017 1.891-.033.9-.04.966-.033 1.433.188.303.14.712.442 1.073.794.327.32.638.574.696.574.065 0 .18-.156.262-.352.204-.508.564-.91 1.162-1.294.401-.254.549-.41.655-.663.147-.369.131-.459-.213-1.22-.393-.884-.401-1.367-.024-2.686l.057-.196-.77.065c-1.465.123-1.776.099-2.366-.171-.294-.14-.843-.467-1.228-.72-1.482-1-2.284-1.213-4.004-1.057-1.555.14-2.08-.017-3.315-.95-.835-.63-.934-.655-1-.262ZM29.615 46.893c-.467.36-.68 1.498-.614 3.25.049 1.384.065 1.416.745 1.416 1.015 0 2.685.516 3.766 1.147 1.433.843 2.276 1.776 3.471 3.84.058.098.148.09.59-.058.294-.09.753-.213 1.023-.27.63-.14 2.48-.14 3.111 0a11.1 11.1 0 0 1 3.783 1.596l.54.369.377-.254c1.449-.982 2.595-2.473 3.201-4.15.401-1.098.328-1.638-.262-1.941-.237-.123-.327-.123-1.293.008-1.777.246-2.743-.008-3.726-.99-.294-.287-.622-.541-.737-.574-.106-.024-.655-.008-1.203.05-1.523.155-2.62.007-3.725-.492-.45-.205-.835-.442-2.26-1.416-.401-.262-.581-.27-1.27-.058-.908.287-1.874.172-2.717-.303a11.105 11.105 0 0 1-1.007-.696c-.344-.262-.729-.515-.844-.556-.335-.131-.728-.099-.95.082Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;
