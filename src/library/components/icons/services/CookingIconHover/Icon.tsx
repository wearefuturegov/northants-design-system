import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M45.8521 12.0225C44.9366 12.1325 44.3354 12.303 43.6962 12.6275C42.055 13.4635 40.885 15.053 40.5654 16.8845C40.4679 17.451 40.4896 18.485 40.6141 19.0845C41.0746 21.3175 42.6779 23.0115 44.8933 23.6C45.435 23.743 46.54 23.798 47.1087 23.71C48.9612 23.4185 50.5212 22.302 51.3825 20.6575C51.8483 19.772 52.0542 18.9085 52.0542 17.8635C52.0542 14.844 49.8658 12.3855 46.8812 12.0445C46.4046 11.9895 46.1771 11.9895 45.8521 12.0225Z"
        fill={colourFill}
      />
      <path
        d="M6.29943 22.324C6.20735 22.3845 6.11527 22.4835 6.0936 22.544C6.07735 22.61 6.03943 22.6595 6.01235 22.6595C5.98527 22.6595 5.93652 22.7475 5.8986 22.852C5.86068 22.9565 5.81193 23.0445 5.79027 23.0445C5.77402 23.0445 5.71443 23.16 5.66027 23.303C5.6061 23.4515 5.53568 23.6 5.50318 23.644C5.40568 23.7705 5.42735 24.909 5.53568 25.1345C5.58443 25.239 5.64943 25.47 5.68735 25.6405C5.71985 25.8165 5.77402 25.9595 5.8011 25.9595C5.82818 25.9595 5.84985 25.998 5.84985 26.0475C5.84985 26.0915 5.92027 26.284 6.00693 26.471C6.0936 26.658 6.18568 26.8725 6.20193 26.9495C6.2236 27.0265 6.26693 27.1035 6.29402 27.12C6.32652 27.142 6.37527 27.3455 6.40777 27.5765C6.4511 27.8955 6.4511 28.0935 6.39693 28.418C6.35902 28.6545 6.29943 28.8635 6.27235 28.88C6.23985 28.902 6.20735 29.078 6.1911 29.276C6.16402 29.617 6.16943 29.6445 6.31027 29.7765C6.57568 30.024 7.04152 30.0185 7.1336 29.771C7.15527 29.716 7.23652 29.584 7.31777 29.4795C7.39902 29.375 7.48027 29.232 7.50193 29.1605C7.51818 29.0945 7.5561 29.0395 7.57777 29.0395C7.59943 29.0395 7.66443 28.8855 7.7186 28.693C7.77818 28.506 7.8486 28.3355 7.8811 28.3135C7.95152 28.2585 7.95152 26.735 7.87568 26.6855C7.84318 26.6635 7.77818 26.482 7.72402 26.273C7.66985 26.0695 7.61027 25.9045 7.58318 25.9045C7.56152 25.9045 7.50193 25.745 7.44777 25.547C7.38818 25.349 7.3286 25.1895 7.31235 25.1895C7.29068 25.1895 7.24193 25.0905 7.20402 24.9695C7.1661 24.8485 7.11193 24.7495 7.08485 24.7495C7.05777 24.7495 7.05235 24.722 7.07402 24.689C7.09027 24.656 7.07402 24.6065 7.0361 24.579C6.92777 24.513 6.92777 23.501 7.03068 23.435C7.07402 23.4075 7.1011 23.3415 7.09027 23.2865C7.08485 23.226 7.10652 23.105 7.14443 23.017C7.24735 22.7695 7.16068 22.5 6.9386 22.346C6.71652 22.192 6.52693 22.1865 6.29943 22.324Z"
        fill={colourFill}
      />
      <path
        d="M9.90147 22.2855C9.8148 22.313 9.7498 22.3625 9.7498 22.39C9.7498 22.4175 9.70647 22.4835 9.65772 22.5385C9.53314 22.6705 9.40855 22.885 9.19189 23.3195C9.02397 23.666 9.01855 23.699 9.01855 24.3645C9.01855 24.887 9.04022 25.096 9.10522 25.2445C9.15939 25.349 9.21355 25.5415 9.23522 25.6735C9.25689 25.8 9.30022 25.9375 9.33814 25.976C9.37605 26.0145 9.44105 26.141 9.47897 26.262C9.51689 26.383 9.59272 26.5535 9.64689 26.647C9.70647 26.735 9.7498 26.8505 9.7498 26.8945C9.7498 26.9385 9.78772 27.0485 9.83647 27.142C10.0044 27.4665 10.0206 28.583 9.86355 28.7865C9.84189 28.8195 9.79314 28.968 9.75522 29.111C9.63605 29.6115 9.87439 29.9745 10.324 29.9745C10.4648 29.9745 10.8331 29.639 10.8331 29.507C10.8331 29.474 10.8819 29.408 10.9415 29.353C11.0011 29.3035 11.0498 29.2265 11.0498 29.1825C11.0498 29.144 11.0823 29.078 11.1202 29.045C11.1636 29.012 11.2394 28.8305 11.2881 28.6435C11.3423 28.451 11.4073 28.253 11.4344 28.2035C11.5048 28.066 11.4994 26.7845 11.429 26.7845C11.4019 26.7845 11.3748 26.7405 11.3748 26.68C11.3748 26.5535 11.2069 25.998 11.1527 25.9595C11.1311 25.943 11.0715 25.7835 11.0173 25.602C10.9631 25.4205 10.8873 25.239 10.8494 25.2005C10.8115 25.162 10.779 25.0905 10.779 25.041C10.779 24.997 10.7248 24.8815 10.6598 24.788C10.5461 24.6285 10.5352 24.5515 10.5352 23.9355C10.5352 23.402 10.5569 23.248 10.6165 23.2095C10.6598 23.182 10.6761 23.1545 10.649 23.1545C10.6165 23.1545 10.6219 23.127 10.6598 23.0885C10.6977 23.05 10.7248 22.9235 10.7248 22.808C10.7248 22.632 10.6869 22.555 10.5352 22.4065C10.3402 22.2085 10.1777 22.181 9.90147 22.2855Z"
        fill={colourFill}
      />
      <path
        d="M13.5037 22.3405C13.4062 22.3735 13.325 22.4285 13.325 22.467C13.325 22.5 13.2762 22.577 13.2221 22.6265C13.1625 22.6815 13.0866 22.8025 13.0487 22.896C13.0108 22.995 12.9512 23.0995 12.9133 23.138C12.8808 23.1765 12.8158 23.314 12.7779 23.4515C12.74 23.5945 12.6858 23.7045 12.6641 23.7045C12.6046 23.7045 12.61 24.9365 12.6696 24.997C12.6966 25.03 12.7562 25.239 12.8104 25.4645C12.8646 25.69 12.9241 25.899 12.9458 25.932C12.9675 25.9595 13.065 26.174 13.1625 26.3995C13.26 26.625 13.39 26.922 13.455 27.0595C13.5525 27.274 13.5687 27.406 13.5633 27.9945C13.5633 28.4675 13.5416 28.7315 13.4875 28.847C13.4441 28.935 13.4062 29.034 13.4062 29.067C13.4008 29.0945 13.3791 29.166 13.3521 29.221C13.2004 29.584 13.6554 30.057 14.0616 29.9525C14.235 29.9085 14.5491 29.5675 14.6358 29.3255C14.6737 29.232 14.7171 29.1495 14.7387 29.1495C14.7604 29.1495 14.82 29.0175 14.8741 28.858C14.9229 28.704 14.9933 28.539 15.0258 28.495C15.1071 28.3905 15.1071 26.7405 15.0258 26.6855C14.9933 26.6635 14.9229 26.482 14.8687 26.273C14.8146 26.0695 14.755 25.9045 14.7279 25.9045C14.7062 25.9045 14.6683 25.822 14.6521 25.723C14.6304 25.6295 14.5437 25.3985 14.4571 25.217C14.3704 25.0355 14.3 24.8595 14.3 24.821C14.3 24.788 14.2675 24.7495 14.235 24.733C14.1321 24.7 14.1375 23.3855 14.235 23.325C14.2729 23.303 14.3216 23.149 14.3379 22.984C14.3596 22.7255 14.3487 22.665 14.2404 22.5385C14.1158 22.3955 13.8721 22.269 13.7421 22.28C13.7041 22.2855 13.5958 22.313 13.5037 22.3405Z"
        fill={colourFill}
      />
      <path
        d="M41.7626 25.052C41.2318 25.14 40.5547 25.3215 40.1268 25.481L39.7855 25.613L39.7584 36.47L39.7314 47.327L39.4226 48.3445C39.2547 48.9055 38.908 50.066 38.6534 50.9295C37.8951 53.5145 36.7305 57.502 36.4813 58.3545C36.3513 58.7945 35.9884 60.032 35.6743 61.11C35.3601 62.1935 35.1001 63.09 35.1001 63.1065C35.1001 63.123 36.4488 63.1395 38.0955 63.1395H41.0909L41.3509 62.243C41.4972 61.7535 41.8384 60.582 42.1147 59.647C42.7539 57.491 43.7993 53.927 44.5793 51.2595C45.5543 47.921 45.5922 47.822 45.7764 47.6295C46.3559 47.041 47.2334 47.1895 47.5639 47.932C47.6614 48.141 47.6668 48.515 47.6668 55.643V63.1395H50.673H53.6793L53.6684 44.3735L53.6522 25.602L53.1322 25.426C52.8451 25.327 52.3793 25.1895 52.103 25.1235C51.5993 25.0025 51.5234 25.0025 46.8814 24.9915C43.2468 24.9805 42.0768 24.997 41.7626 25.052Z"
        fill={colourFill}
      />
      <path
        d="M35.1596 29.7215L31.7796 33.1535L28.015 31.8665C24.3209 30.607 24.2396 30.5795 23.8117 30.5795C23.0805 30.585 22.5225 30.882 22.1542 31.4815L21.9646 31.784L13.0705 31.7895C8.07628 31.7895 4.17087 31.8115 4.17087 31.839C4.17087 31.861 4.06795 31.8995 3.94878 31.916C3.63462 31.96 3.03878 32.4 3.03337 32.598C3.03337 32.631 3.00087 32.6695 2.96837 32.686C2.91962 32.7025 2.89795 32.8785 2.89795 33.313C2.89795 33.808 2.9142 33.929 2.99003 34.0115C3.0442 34.061 3.09837 34.1875 3.12003 34.292C3.13628 34.3965 3.1742 34.4845 3.2067 34.4845C3.23378 34.4845 3.2392 34.5065 3.22295 34.5395C3.2067 34.567 3.21212 34.5945 3.2392 34.5945C3.26628 34.5945 3.32045 34.699 3.35837 34.8255C3.4017 34.9575 3.45045 35.073 3.4667 35.0895C3.48295 35.106 3.5317 35.205 3.57503 35.3095C3.61295 35.414 3.71587 35.656 3.80253 35.843C3.88378 36.03 3.9542 36.2115 3.9542 36.2445C3.9542 36.272 3.97587 36.2995 4.00295 36.2995C4.02462 36.2995 4.07878 36.4095 4.1167 36.547C4.15462 36.6845 4.20337 36.7945 4.22503 36.7945C4.25212 36.7945 4.3117 36.9265 4.36587 37.0805C4.41462 37.24 4.4742 37.383 4.49587 37.3995C4.51212 37.416 4.56087 37.4985 4.59337 37.592C4.7017 37.856 4.95087 38.0925 5.3192 38.2905L5.66045 38.472L10.698 38.4885C13.883 38.4995 15.8275 38.483 15.9846 38.45C16.1255 38.417 16.3259 38.3345 16.4342 38.2685C16.705 38.098 17.225 37.5755 17.225 37.4765C17.225 37.4325 17.2467 37.3995 17.2738 37.3995C17.3009 37.3995 17.3659 37.2675 17.42 37.108C17.4688 36.954 17.5284 36.7945 17.55 36.767C17.5717 36.734 17.6367 36.569 17.6909 36.393C17.745 36.2225 17.8046 36.0795 17.8209 36.0795C17.8425 36.0795 17.8913 35.953 17.9292 35.8045C17.9671 35.6505 18.0267 35.5295 18.0538 35.5295C18.0809 35.5295 18.0917 35.491 18.07 35.447C18.0538 35.403 18.0592 35.3645 18.0863 35.3645C18.108 35.3645 18.1621 35.238 18.2 35.0895C18.238 34.9355 18.2921 34.8145 18.3138 34.8145C18.33 34.8145 18.395 34.655 18.4492 34.457L18.5521 34.0995H20.4588H22.3709L22.6092 34.2865C22.788 34.424 23.1671 34.578 24.0609 34.886C32.1588 37.658 31.563 37.4655 32.0938 37.471C32.7384 37.482 33.2096 37.3335 33.7188 36.965C33.9409 36.811 35.0405 35.733 36.3405 34.413L38.583 32.1305L38.5721 29.2265C38.5667 27.626 38.5559 26.3115 38.545 26.306C38.5396 26.3005 37.0175 27.835 35.1596 29.7215Z"
        fill={colourFill}
      />
      <path
        d="M54.8169 29.177V32.092L56.5827 33.885L58.3431 35.6725L57.0323 39C56.3119 40.826 55.6944 42.443 55.6511 42.597C55.4994 43.158 55.5915 43.7575 55.9056 44.28C56.1006 44.599 56.3769 44.83 56.8048 45.028C57.0648 45.1545 57.1948 45.1765 57.5794 45.182C58.2836 45.182 58.8415 44.9235 59.2261 44.4065C59.3615 44.2305 59.8381 43.0755 60.9323 40.2925C61.7665 38.1695 62.4761 36.305 62.514 36.1565C62.5465 36.008 62.5736 35.6615 62.5736 35.392C62.5736 34.809 62.4056 34.215 62.1077 33.753C62.0048 33.5935 60.3256 31.8445 58.3702 29.8645L54.8169 26.262V29.177Z"
        fill={colourFill}
      />
      <path
        d="M0.704166 40.5125C0.60125 40.5565 0.455 40.683 0.379167 40.7875C0.303333 40.892 0.216667 41.013 0.189583 41.046C0.0270833 41.233 0 41.596 0 43.609V45.6495H16.445H32.8846L32.8683 43.543C32.8521 41.6895 32.8358 41.4145 32.7546 41.1945C32.6408 40.903 32.3754 40.606 32.1371 40.5015C31.9908 40.4355 29.5262 40.4245 16.4287 40.43C2.81667 40.43 0.872083 40.441 0.704166 40.5125Z"
        fill={colourFill}
      />
      <path d="M1.0293 54.7795V63.1395H16.6022H32.1751V54.7795V46.4195H16.6022H1.0293V54.7795Z" fill={colourFill} />
    </svg>
  );
};

export default ServiceIcon;
