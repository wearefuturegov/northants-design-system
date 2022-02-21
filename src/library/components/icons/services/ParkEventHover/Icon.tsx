import React from 'react';

import { IconProps } from '../Icon.types';

const ServiceIcon: React.FC<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.31587 17.0873C2.84519 17.2124 2.18413 17.5356 1.71346 17.8639C1.02596 18.3487 0.34375 19.3234 0.111058 20.1678C0.00528846 20.5483 0 20.6682 0 25.156V29.7585H26.2043H52.4087V25.1821C52.4087 20.7724 52.4034 20.5848 52.3029 20.1939C52.1865 19.7404 51.8269 19.0315 51.499 18.6145C51.0178 18.0047 50.251 17.473 49.4101 17.1811L48.9447 17.0143L26.3101 17.0039C4.52692 16.9935 3.65962 16.9987 3.31587 17.0873ZM11.8303 21.5491C12.3115 21.6585 12.7399 21.9139 13.2212 22.3726C13.8135 22.9408 14.1361 23.7174 14.1361 24.5723C14.1361 26.063 13.1471 27.3244 11.6875 27.6997C11.2221 27.8195 10.3654 27.7831 9.90529 27.6215C8.62019 27.1784 7.71587 25.9379 7.71058 24.6244C7.70529 23.5141 8.25529 22.5134 9.20192 21.9139C9.59856 21.6638 9.75192 21.6012 10.1538 21.5282C10.3125 21.497 10.4923 21.4605 10.5505 21.45C10.7409 21.4031 11.4389 21.4605 11.8303 21.5491ZM42.1596 21.5022C42.8048 21.6273 43.1856 21.8253 43.6986 22.3049C44.1798 22.7531 44.4389 23.1858 44.6135 23.8217C44.899 24.8902 44.5288 26.1307 43.6933 26.8917C43.0216 27.5068 42.3394 27.7778 41.488 27.7778C40.6313 27.7778 39.9543 27.5068 39.2721 26.8813C38.9284 26.5686 38.8332 26.4435 38.6375 26.0369C38.3519 25.4531 38.2673 25.1091 38.2673 24.5723C38.2726 24.0614 38.3784 23.6392 38.6375 23.118C38.7909 22.8053 38.9284 22.628 39.2668 22.3101C39.7639 21.841 40.1183 21.6481 40.7423 21.5178C41.2923 21.4031 41.6149 21.3979 42.1596 21.5022Z"
        fill={colourFill}
      />
      <path
        d="M0 43.5087C0 55.002 0 55.1844 0.105769 55.5858C0.327885 56.451 1.03125 57.4518 1.77163 57.9522C1.98846 58.1033 2.36394 58.317 2.60721 58.4265C3.47452 58.8226 2.51202 58.7913 14.3688 58.7913C20.2178 58.7913 25.0409 58.7757 25.0885 58.7601C25.1625 58.734 25.1731 58.4734 25.1731 56.3624C25.1731 54.512 25.1572 53.9908 25.1096 53.9751C25.0726 53.9647 24.8505 53.9178 24.6178 53.8657C23.9726 53.7249 22.3861 53.1985 21.8361 52.9327C21.0322 52.5522 20.4663 52.229 20.0486 51.9163C19.8317 51.7547 19.5567 51.5514 19.4404 51.4628C19.1284 51.2334 18.5096 50.5402 18.224 50.0971C17.8962 49.602 17.7692 49.3205 17.7692 49.0807C17.7692 48.7054 18.0918 48.2311 18.4462 48.1008C18.5149 48.0747 18.8745 48.0174 19.25 47.9757C20.0063 47.8871 20.6197 47.7203 21.1803 47.4388C21.8572 47.1053 22.4231 46.7091 22.4231 46.5736C22.4231 46.5423 22.1798 46.3755 21.8837 46.2035C21.1644 45.7865 20.3817 45.1454 19.8212 44.5095C18.7688 43.3211 18.7053 42.7894 19.5303 42.0232C20.0221 41.5645 21.2966 40.8035 21.8572 40.6315C21.9418 40.6054 21.9048 40.5429 21.6192 40.2406C20.8894 39.4587 20.5404 38.6248 20.7361 38.1139C20.8577 37.7908 21.3072 37.478 21.6562 37.4728C21.9683 37.4676 22.5077 37.3217 22.9255 37.134C23.2692 36.9724 23.4332 36.8526 23.8034 36.4825C24.4697 35.8153 24.7976 35.2576 25.1678 34.1369C25.3635 33.5531 25.6808 33.3029 26.2202 33.3029C26.5375 33.3029 26.9024 33.4802 27.0558 33.6991C27.1139 33.7929 27.225 34.0483 27.3043 34.2724C27.5053 34.8562 27.6639 35.2159 27.8543 35.5443C28.0606 35.8987 28.6264 36.5607 28.9173 36.7848C29.2505 37.0454 29.8745 37.3112 30.3611 37.3998C31.0697 37.5302 31.1913 37.5719 31.3923 37.7439C31.826 38.1192 31.8683 38.5361 31.5351 39.1825C31.3024 39.6307 30.9692 40.0894 30.6519 40.3865C30.4615 40.569 30.451 40.6524 30.6149 40.6524C30.763 40.6524 31.6726 41.1267 32.1962 41.4811C32.4606 41.6583 32.8308 41.9659 33.0212 42.1639C33.3067 42.4663 33.3702 42.5653 33.4284 42.8103C33.4813 43.0605 33.4813 43.1282 33.3966 43.3471C33.1639 43.9778 32.3495 44.9004 31.3077 45.7188C31.0433 45.9273 30.1125 46.4902 30.0332 46.4902C30.0067 46.4902 29.9856 46.5215 29.9856 46.5632C29.9856 46.7091 30.763 47.2356 31.424 47.5275C31.974 47.7724 32.4447 47.8923 33.2062 47.9809C33.5976 48.0278 33.9837 48.0956 34.0577 48.1321C34.3856 48.2989 34.6394 48.7159 34.6394 49.0807C34.6447 49.4247 34.2111 50.1753 33.6611 50.78C32.4236 52.1456 30.7313 53.0682 28.1928 53.7614C27.8279 53.8605 27.4788 53.9439 27.4101 53.9439H27.2885L27.299 56.352L27.3149 58.7653H38.1298H48.9447L49.4101 58.5985C50.251 58.3066 51.0178 57.7749 51.499 57.1651C51.8111 56.7637 52.176 56.0601 52.2976 55.6118C52.4087 55.2261 52.4087 55.1792 52.4087 43.5348V31.8435H26.2043H0V43.5087Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;
