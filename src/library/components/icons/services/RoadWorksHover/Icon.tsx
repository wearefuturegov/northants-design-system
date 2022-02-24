import React from 'react';

import { IconProps } from '../Icon.types';

const ServiceIcon: React.FC<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M29.665 11.1173C28.7732 11.3682 27.9363 11.8637 27.3011 12.5122C26.8063 13.0078 26.4826 13.4666 25.9572 14.3965C25.7862 14.6963 25.4869 15.2102 25.2975 15.5283C25.1082 15.8465 24.7905 16.3971 24.589 16.7458C23.575 18.5322 23.0008 19.5233 22.5182 20.3309C22.2739 20.7347 21.9746 21.2486 21.8524 21.4749C21.7302 21.6952 21.5348 22.0256 21.4187 22.203C21.3026 22.3865 21.2049 22.5517 21.2049 22.5823C21.2049 22.6068 20.9911 22.9983 20.7224 23.4388C20.4597 23.8854 20.1787 24.3626 20.0993 24.5033C19.8489 24.9438 19.2441 25.99 18.8288 26.7058C18.6089 27.0789 18.224 27.7397 17.9736 28.1741C17.7231 28.6023 17.3383 29.2753 17.1123 29.6607C16.8863 30.0461 16.6359 30.4744 16.5626 30.609C16.4893 30.7436 16.2449 31.1718 16.0189 31.5573C15.4875 32.4566 14.8217 33.6006 14.2475 34.5979C13.4717 35.9438 12.9464 36.8431 12.3783 37.822C11.7003 38.9844 11.3338 39.6145 11.0894 40.0612C10.8634 40.4649 10.0877 41.8048 9.82502 42.233C9.72117 42.3982 9.44019 42.8815 9.20196 43.3036C8.96374 43.7258 8.65221 44.2519 8.51172 44.4844C8.37122 44.7108 8.25516 44.9127 8.25516 44.931C8.25516 44.9494 8.07191 45.2736 7.83979 45.6529C7.61378 46.0261 7.39999 46.3993 7.36334 46.485C7.32058 46.5706 7.07625 47.005 6.81359 47.4516C6.02561 48.7731 5.13989 50.3025 4.5596 51.3181C4.4191 51.5689 4.06482 52.1746 3.78383 52.664C3.49674 53.1535 3.09359 53.8509 2.87979 54.2241C2.666 54.5912 2.40945 55.0317 2.2995 55.203C2.18955 55.3682 1.98797 55.7291 1.84748 55.9922C1.70088 56.2614 1.47487 56.659 1.33438 56.8793C0.68078 57.9438 0.283736 58.7575 0.124918 59.3815C-0.0522249 60.079 -0.0400081 61.3331 0.15546 62.0917C0.45477 63.2603 1.07782 64.1902 2.05516 64.9182C2.62324 65.3465 3.08137 65.5728 3.76551 65.7686C4.03428 65.8481 4.26029 65.9277 4.2725 65.9521C4.30305 66.0256 57.5925 66.0133 57.7208 65.946C57.7758 65.9154 58.1056 65.8053 58.4416 65.6952C59.0829 65.4994 59.3578 65.3526 60.0725 64.8203C60.8971 64.2147 61.6912 62.9972 61.8317 62.1346C61.8623 61.9327 61.9172 61.7124 61.9478 61.6513C62.0272 61.5105 62.0272 59.8404 61.9539 59.7975C61.9233 59.7731 61.8806 59.614 61.8561 59.4366C61.7706 58.8187 61.6668 58.6045 60.4207 56.4571C60.1702 56.0228 59.7182 55.2458 59.4189 54.7319C59.1196 54.218 58.7287 53.545 58.5576 53.2452C58.3805 52.9394 58.1545 52.5417 58.0506 52.3581C57.9529 52.1746 57.6963 51.728 57.4825 51.367C57.2688 51.0061 56.8961 50.3698 56.6579 49.9599C56.4197 49.5439 56.0104 48.8342 55.7478 48.3815C54.9109 46.9377 54.4161 46.0812 53.9763 45.3164C53.7442 44.9127 53.3044 44.154 52.999 43.6401C52.6997 43.1201 52.2416 42.337 51.9911 41.8965C51.7407 41.456 51.4047 40.881 51.252 40.6179C51.0993 40.3609 50.8855 39.9816 50.7756 39.7797C50.6656 39.584 50.4029 39.1312 50.1891 38.7764C49.7188 37.9872 49.1813 37.0573 48.8453 36.4516C48.6987 36.2008 48.3383 35.5645 48.0329 35.0445C47.7275 34.5244 47.3732 33.9188 47.251 33.6985C47.1289 33.4783 46.799 32.9154 46.5241 32.4444C45.5651 30.8048 45.3208 30.3826 44.5756 29.0673C44.4473 28.8409 44.1296 28.2903 43.8731 27.8559C43.3356 26.9505 42.798 26.0267 42.401 25.317C42.2483 25.0478 41.9734 24.5706 41.7901 24.2647C41.6069 23.9527 41.442 23.6713 41.4297 23.6346C41.4175 23.604 41.2526 23.3103 41.0571 22.9922C40.8678 22.6741 40.5501 22.1296 40.3486 21.7808C40.1531 21.4382 39.7377 20.7224 39.4262 20.1902C39.1147 19.664 38.7787 19.0706 38.6749 18.8748C38.571 18.6852 38.4 18.3793 38.2839 18.2019C38.174 18.0306 37.9846 17.7063 37.8686 17.4861C37.7464 17.2658 37.5692 16.9477 37.4654 16.7825C37.3616 16.6112 37.1478 16.2441 36.9828 15.9566C36.824 15.669 36.5308 15.1551 36.3231 14.8125C36.1216 14.4699 35.8223 13.9438 35.6512 13.6501C35.4313 13.2647 35.1809 12.9466 34.7655 12.5244C34.228 11.9861 34.1302 11.9127 33.4217 11.5639C33.0002 11.362 32.4749 11.1479 32.255 11.099C31.6869 10.9583 30.1659 10.9705 29.665 11.1173ZM34.0569 30.0094C34.0997 30.0523 34.4662 30.1012 34.8449 30.1134C34.9365 30.1195 35.0098 30.144 35.0098 30.1685C35.0098 30.1991 35.0404 30.1991 35.0709 30.1807C35.1076 30.1624 35.1748 30.1868 35.2297 30.2358C35.2786 30.2909 35.3763 30.3337 35.4435 30.3337C35.6757 30.3337 36.0544 30.5845 36.4759 31.0189C36.8118 31.3615 36.9157 31.5144 36.9401 31.6919C36.9645 31.8203 37.0195 31.9549 37.0623 31.9916C37.1111 32.0283 37.1294 32.0834 37.1111 32.114C37.0928 32.1446 37.1233 32.2302 37.1722 32.3036C37.2394 32.3954 37.2455 32.4566 37.2027 32.5117C37.16 32.5667 37.16 32.6279 37.2089 32.7135C37.2577 32.8053 37.2577 32.8787 37.2089 32.9705C37.1722 33.0378 37.16 33.1785 37.1783 33.2764C37.2027 33.3865 37.1905 33.4966 37.1478 33.5456C37.1111 33.5945 37.0928 33.6618 37.1111 33.6924C37.1356 33.723 37.1233 33.7658 37.0989 33.7842C37.0684 33.8025 37.0439 33.9188 37.0378 34.0472C37.0317 34.1757 36.989 34.292 36.934 34.3226C36.8851 34.3531 36.8424 34.4204 36.8424 34.4694C36.8424 34.5612 36.5675 34.9711 36.4514 35.0506C36.4209 35.0751 36.4209 35.1301 36.4453 35.1729C36.4759 35.2219 36.4697 35.2402 36.4453 35.2096C36.4148 35.1852 36.317 35.2402 36.2193 35.332C36.1277 35.4238 36.0483 35.4727 36.0483 35.4421C36.0483 35.4177 35.9994 35.4482 35.9444 35.5094C35.8833 35.5767 35.7917 35.6318 35.7428 35.6318C35.5107 35.6379 34.8877 35.8092 34.8877 35.8704C34.8877 35.901 34.8571 35.8887 34.8266 35.8398C34.7716 35.7603 34.7594 35.7603 34.7044 35.8398C34.6556 35.9193 34.6372 35.9193 34.5884 35.8459C34.5517 35.7909 34.4723 35.7725 34.3501 35.797C34.2463 35.8214 34.1547 35.8092 34.1425 35.7725C34.1302 35.7358 34.0814 35.7052 34.0325 35.6991C33.9836 35.6868 33.9042 35.6624 33.8676 35.6379C33.8248 35.6073 33.7637 35.6073 33.7271 35.6257C33.6965 35.644 33.666 35.6195 33.666 35.5706C33.666 35.5155 33.611 35.4727 33.5438 35.4727C33.4217 35.4727 32.8719 35.0139 32.8719 34.916C32.8719 34.8854 32.8047 34.7508 32.7253 34.6223C32.6459 34.4939 32.5359 34.243 32.481 34.0656C32.426 33.8821 32.3466 33.7169 32.3038 33.6863C32.2672 33.6618 32.2611 33.6373 32.2977 33.6373C32.3649 33.6373 32.3588 32.5912 32.2916 32.4749C32.2733 32.4444 32.2855 32.4138 32.316 32.4138C32.3527 32.4138 32.3832 32.3587 32.3832 32.2914C32.3832 32.0589 32.5726 31.3492 32.6948 31.1107C32.762 30.9883 32.7986 30.8843 32.7681 30.8843C32.7436 30.8843 32.7681 30.8537 32.8292 30.817C32.8841 30.7864 32.933 30.7191 32.933 30.6763C32.933 30.56 33.385 30.1991 33.5744 30.1746C33.7332 30.1501 33.9103 30.0706 33.9103 30.0217C33.9103 29.9544 33.9959 29.9482 34.0569 30.0094ZM28.0035 34.3715C29.5551 34.3715 30.9294 34.4021 31.0638 34.4266C31.1921 34.4571 31.4242 34.5612 31.583 34.659C31.7358 34.7569 31.9312 34.8793 32.0167 34.9282C32.2122 35.0383 32.2489 35.0751 32.5359 35.4421C32.6703 35.6073 32.7986 35.7603 32.8169 35.7786C32.8475 35.8031 33.1162 36.6168 33.214 36.9716C33.2751 37.198 33.3117 37.3509 33.3117 37.4121C33.3178 37.4549 33.3423 37.4916 33.3667 37.4916C33.3911 37.4916 33.4033 37.5712 33.3911 37.6752C33.3789 37.7731 33.3911 37.8709 33.4278 37.8893C33.4583 37.9138 33.4644 37.9566 33.4461 37.9933C33.4217 38.03 33.44 38.0789 33.4889 38.1034C33.5316 38.134 33.5866 38.2992 33.6049 38.4827C33.6293 38.6602 33.721 39.0517 33.8187 39.3576C34.002 39.9694 34.0936 40.3303 34.1119 40.5322C34.118 40.6056 34.1425 40.6791 34.1669 40.7035C34.1913 40.728 34.1913 40.7831 34.173 40.832C34.1547 40.881 34.1669 40.9177 34.1974 40.9177C34.2585 40.9177 34.4357 41.5662 34.4112 41.6763C34.399 41.7008 34.4234 41.7619 34.4601 41.7986C34.4906 41.8415 34.5028 41.8904 34.4906 41.9088C34.4723 41.9271 34.4845 42.0189 34.5212 42.1168C34.5578 42.2147 34.5945 42.3064 34.6006 42.3248C34.6006 42.3431 34.6556 42.5328 34.7166 42.753C34.7777 42.9733 34.8877 43.3587 34.9549 43.6095C35.0221 43.8604 35.1076 44.1663 35.1381 44.2825C35.1748 44.3987 35.1992 44.5578 35.1992 44.6373C35.1931 44.7169 35.2481 44.9004 35.3153 45.0472C35.3825 45.1941 35.4374 45.3899 35.4374 45.4816C35.4374 45.6346 35.6879 46.5645 35.8039 46.8214C35.865 46.9683 35.9505 47.4088 35.9322 47.4883C35.9261 47.5189 35.9627 47.6351 36.0177 47.7452C36.0666 47.8554 36.1277 48.0267 36.146 48.1307C36.1888 48.3264 36.5125 48.6262 36.6835 48.6262C36.7385 48.6262 36.7813 48.6568 36.7813 48.6935C36.7813 48.7241 36.8118 48.7363 36.8424 48.718C36.879 48.6996 36.9034 48.7058 36.9034 48.7425C36.9034 48.7792 36.9462 48.7914 36.9951 48.7731C37.0439 48.7486 37.0867 48.7608 37.0867 48.7975C37.0867 48.8465 37.7769 49.2992 37.8625 49.2992C37.8808 49.2992 37.9663 49.3481 38.0518 49.4154C38.1434 49.4766 38.2839 49.55 38.3633 49.5745C38.4427 49.599 38.571 49.6785 38.6565 49.7519C38.7359 49.8192 38.8276 49.8804 38.8459 49.8743C38.8703 49.8743 39.0353 49.966 39.2124 50.0762C39.3895 50.1924 39.5606 50.2658 39.5911 50.2475C39.6278 50.2291 39.6522 50.2475 39.6522 50.2964C39.6522 50.3454 39.7744 50.4432 39.9271 50.5228C40.0798 50.6023 40.202 50.6818 40.202 50.7002C40.202 50.7247 40.3241 50.7797 40.4768 50.8226C40.6295 50.8654 40.7517 50.9266 40.7517 50.9633C40.7517 50.9939 40.7823 51 40.8128 50.9816C40.8494 50.9633 40.8739 50.9694 40.8739 51C40.8739 51.0734 41.332 51.3793 41.4481 51.3793C41.4969 51.3793 41.5458 51.3976 41.558 51.4282C41.5702 51.4527 41.7229 51.5506 41.9062 51.6424C42.0833 51.7341 42.4132 51.9238 42.6331 52.0706C42.853 52.2113 43.0485 52.3153 43.0607 52.3092C43.079 52.297 43.1095 52.3153 43.134 52.352C43.2073 52.4805 43.6654 51.9666 44.2518 51.0979C44.3434 50.9633 44.5511 50.7124 44.7099 50.5411C44.8688 50.3759 45.0398 50.1863 45.0948 50.119C45.3941 49.7642 46.3225 49.0178 46.6341 48.8832C46.7257 48.8465 46.799 48.7853 46.799 48.7547C46.799 48.718 46.9028 48.6629 47.0311 48.6323C47.3365 48.5467 47.3488 48.5467 47.3488 48.6813C47.3488 48.7425 47.3854 48.8098 47.4343 48.8281C47.4831 48.8465 47.5809 48.9811 47.6481 49.1279C47.8191 49.4827 47.9901 49.7764 48.1062 49.9049C48.1612 49.966 48.2039 50.0456 48.2039 50.0884C48.2039 50.2108 48.3994 50.5472 48.5155 50.6329C48.5826 50.6757 48.6315 50.7491 48.6315 50.792C48.6315 50.8287 48.717 50.9939 48.8148 51.1529C48.9186 51.312 48.998 51.4833 48.998 51.5322C48.998 51.5812 49.053 51.6485 49.1202 51.6852C49.1874 51.7219 49.2362 51.7708 49.224 51.7953C49.1996 51.8687 49.4378 52.3581 49.4989 52.3581C49.5294 52.3581 49.6272 52.505 49.7127 52.6763C49.9387 53.1474 50.0731 53.3921 50.1708 53.5083C50.2197 53.5634 50.3113 53.7286 50.3724 53.8693C50.4335 54.0161 50.5007 54.1323 50.5251 54.1323C50.5495 54.1323 50.69 54.3587 50.8305 54.6401C50.971 54.9154 51.1237 55.1846 51.1665 55.2336C51.2092 55.2825 51.3009 55.4355 51.3742 55.5701C51.4414 55.7046 51.5696 55.9249 51.6552 56.0595C51.7407 56.1941 51.8262 56.3531 51.8445 56.4143C51.869 56.4694 51.9056 56.5183 51.9361 56.5183C51.9667 56.5183 51.9911 56.5612 51.9911 56.6101C51.9911 56.708 52.1622 57.0078 52.2538 57.0751C52.3271 57.124 52.4798 57.436 52.4798 57.5278C52.4798 57.5706 52.5164 57.6379 52.5653 57.6746C52.6142 57.7113 52.7669 57.9744 52.9074 58.2497C53.0479 58.525 53.2128 58.7942 53.28 58.8554C53.3411 58.9104 53.396 58.9838 53.396 59.0206C53.396 59.0695 50.9466 59.0878 44.7527 59.0878H36.1032L36.1399 58.8554C36.1888 58.5801 36.3354 58.1335 36.4514 57.9132C36.5003 57.8276 36.5369 57.7113 36.5369 57.6624C36.5369 57.5523 36.9584 56.7019 37.0684 56.5917C37.1111 56.5489 37.1478 56.4755 37.1478 56.4266C37.1478 56.3837 37.1905 56.3348 37.2394 56.3103C37.2883 56.292 37.331 56.2186 37.331 56.1513C37.331 56.0778 37.3616 56.0411 37.3921 56.0595C37.4288 56.0778 37.4532 56.0656 37.4532 56.0289C37.4532 55.9188 38.0824 55.3559 38.2045 55.3559C38.2595 55.3559 38.3633 55.3009 38.4305 55.2336C38.5038 55.1602 38.5832 55.1234 38.6138 55.1418C38.6504 55.1663 38.6871 55.1418 38.7054 55.099C38.7237 55.0561 38.8154 55.0133 38.907 55.0072C38.9986 55.0011 39.3895 54.9093 39.7744 54.8053C40.1592 54.7013 40.5318 54.6034 40.599 54.5973C40.6662 54.5912 40.8189 54.53 40.935 54.4688C41.051 54.4015 41.1732 54.3587 41.2037 54.3648C41.2282 54.3771 41.2831 54.3404 41.3259 54.2853C41.3625 54.2363 41.4603 54.1813 41.5397 54.1629C41.6802 54.1385 41.784 54.0589 42.0528 53.802C42.175 53.6857 42.175 53.6857 42.0039 53.545C41.9062 53.4716 41.7168 53.3554 41.5825 53.3003C41.442 53.2391 41.3076 53.1535 41.2831 53.1107C41.2587 53.0678 41.1915 53.0311 41.1426 53.0311C41.0632 53.0311 40.825 52.921 40.7517 52.8476C40.7334 52.8292 40.6479 52.7803 40.5562 52.7313C40.4646 52.6824 40.3363 52.6029 40.2753 52.5478C40.1103 52.401 39.6705 52.1746 39.5606 52.1746C39.5056 52.1746 39.4812 52.144 39.4995 52.1134C39.5178 52.0767 39.5056 52.0461 39.4751 52.0461C39.4384 52.04 39.3895 52.0339 39.3651 52.0278C39.3162 52.0155 39.0658 51.8687 38.797 51.6852C38.7115 51.6301 38.4855 51.5078 38.2961 51.416C38.1007 51.3181 37.9419 51.2141 37.9419 51.1835C37.9419 51.1529 37.9174 51.1407 37.893 51.159C37.8625 51.1774 37.7647 51.1223 37.667 51.0428C37.5754 50.9571 37.4043 50.8593 37.2944 50.8164C37.1783 50.7736 37.0867 50.7185 37.0867 50.6941C37.0867 50.6696 37.0561 50.6451 37.0195 50.6451C36.9828 50.6451 36.8729 50.5901 36.7813 50.5228C36.4759 50.3086 35.6634 49.911 35.6024 49.9538C35.5657 49.9722 35.5596 49.9599 35.584 49.9232C35.6207 49.862 35.1992 49.5194 35.1503 49.5623C35.1442 49.5745 35.132 51.3365 35.132 53.4777C35.132 56.2124 35.1076 57.4238 35.0587 57.5706C34.8816 58.0784 34.1486 58.7391 33.8737 58.6351C33.8187 58.6168 33.7332 58.629 33.6904 58.6657C33.6232 58.7208 33.5805 58.7147 33.5011 58.6535C33.4217 58.5862 33.3972 58.5862 33.3728 58.6474C33.3545 58.7085 33.33 58.7085 33.2506 58.6474C33.2018 58.6045 33.1162 58.5678 33.0613 58.5678C32.9269 58.5678 32.4871 58.1335 32.3283 57.8459C32.2 57.6196 32.2 57.5645 32.2 53.5817V49.5439H32.0717C31.9984 49.5439 31.8885 49.4766 31.8274 49.3971C31.7663 49.3175 31.6502 49.238 31.5708 49.2135C31.4242 49.1768 30.7584 48.7975 30.6485 48.6874C30.6118 48.6507 30.5263 48.6262 30.4469 48.6262C30.3675 48.6262 30.2881 48.5834 30.2697 48.5345C30.2453 48.4855 30.2087 48.4549 30.1842 48.4733C30.1598 48.4916 30.1231 48.4672 30.1048 48.4182C30.0865 48.3754 30.001 48.3203 29.9093 48.2959C29.8177 48.2714 29.6406 48.1857 29.5062 48.1062C29.3779 48.0206 29.2558 47.9533 29.2313 47.9533C29.213 47.9533 29.158 47.9104 29.103 47.8615C29.0542 47.8064 28.9809 47.7758 28.9442 47.7881C28.9015 47.8003 28.8037 47.7452 28.7243 47.6718C28.6388 47.5923 28.5533 47.5434 28.5227 47.5617C28.4983 47.5801 28.4739 47.5617 28.4739 47.525C28.4739 47.4883 28.4494 47.4761 28.4128 47.4944C28.3823 47.5128 28.2906 47.4761 28.2173 47.4088C28.144 47.3353 28.0646 47.2803 28.0402 47.2803C27.9974 47.2803 27.6126 47.0417 27.466 46.9254C27.4355 46.901 27.3072 46.8398 27.1911 46.7909C27.0751 46.748 26.9346 46.6746 26.8796 46.6257C26.8307 46.5828 26.7635 46.5461 26.7391 46.5461C26.7208 46.5461 26.4826 46.4177 26.2138 46.2647C25.945 46.1056 25.7068 45.9894 25.6885 46.0078C25.6762 46.0261 25.5724 45.9588 25.4747 45.867C25.3708 45.7692 25.2487 45.6896 25.1998 45.6896C25.1082 45.6896 24.8089 45.4082 24.8089 45.3226C24.8089 45.292 24.7722 45.2308 24.7294 45.188C24.534 44.98 24.3813 44.3253 24.5157 44.2458C24.5401 44.2274 24.5645 44.1173 24.5645 44.0011C24.5645 43.8848 24.589 43.7931 24.6195 43.7931C24.65 43.7931 24.6867 43.738 24.705 43.6768C24.7356 43.5545 24.5828 43.3648 24.4546 43.3648C24.4118 43.3648 24.3813 43.3342 24.3813 43.2975C24.3813 43.2608 24.3385 43.2425 24.2896 43.2669C24.2347 43.2853 24.198 43.2669 24.198 43.218C24.198 43.169 24.0697 43.0834 23.9109 43.0222C23.746 42.9672 23.5933 42.8876 23.5566 42.8448C23.4528 42.7286 22.903 42.4471 22.8481 42.4838C22.8175 42.5022 22.7931 42.4777 22.7931 42.4288C22.7931 42.3492 22.4999 42.1657 21.9074 41.8659C21.773 41.7986 21.6508 41.7313 21.6325 41.713C21.6142 41.6946 21.5287 41.6457 21.437 41.5967C21.2232 41.4866 20.9484 41.089 20.9361 40.8748C20.93 40.7831 20.9056 40.6729 20.8812 40.6301C20.8262 40.5445 20.8445 40.1223 20.8995 40.1223C20.9239 40.1223 20.9423 40.0367 20.9423 39.9266C20.9423 39.8164 20.9728 39.7185 21.0094 39.7063C21.0522 39.6941 21.0827 39.6451 21.0827 39.5901C21.0827 39.5411 21.1499 39.4127 21.2293 39.3086C21.3088 39.1985 21.5897 38.7397 21.8463 38.287C22.109 37.8342 22.3411 37.4488 22.3655 37.4305C22.3899 37.4121 22.4999 37.2224 22.616 37.0022C22.7259 36.782 22.8359 36.5923 22.8542 36.5739C22.8786 36.5556 23.0374 36.2925 23.2207 35.9927C23.4039 35.6868 23.5627 35.4299 23.5811 35.4115C23.6055 35.3932 23.6849 35.2769 23.7704 35.1546C23.9354 34.9099 24.3752 34.555 24.5157 34.555C24.5645 34.555 24.6623 34.5 24.7356 34.4327C24.8089 34.3593 24.8699 34.3287 24.8699 34.3654C24.8699 34.4449 25.1143 34.3715 25.1204 34.2858C25.1204 34.243 25.1326 34.2491 25.157 34.292C25.1815 34.3531 25.8106 34.3715 28.0035 34.3715ZM25.1876 46.589C25.2426 46.6379 25.3159 46.6624 25.3464 46.644C25.383 46.6257 25.4197 46.6501 25.4441 46.6991C25.4625 46.748 25.5174 46.7909 25.5724 46.7909C25.6213 46.7909 25.664 46.8153 25.664 46.8459C25.664 46.8765 25.7373 46.9316 25.8351 46.9683C25.9267 47.0111 26.1466 47.1212 26.3298 47.2252C26.507 47.3292 26.6719 47.3965 26.6841 47.3782C26.7025 47.3598 26.7696 47.4088 26.8307 47.4883C26.9407 47.629 27.4293 47.9043 27.6187 47.9349C27.7531 47.9533 27.9241 48.1857 27.8814 48.2897C27.863 48.3387 27.8753 48.3815 27.9119 48.3815C27.9425 48.3815 27.9913 48.4243 28.0096 48.4794C28.028 48.5283 28.0219 48.5528 27.9852 48.5345C27.9486 48.5161 27.9241 48.5222 27.9241 48.5589C27.9241 48.5895 27.9547 48.6385 27.9913 48.6629C28.028 48.6813 28.0463 48.7547 28.028 48.8159C28.0096 48.8771 28.0341 49.0422 28.0829 49.1768C28.1379 49.3359 28.1501 49.4644 28.1135 49.5317C28.0891 49.5867 28.0646 49.8926 28.0707 50.2108C28.0707 50.5289 28.0524 50.8164 28.0158 50.8531C27.9852 50.8899 27.9486 51 27.9425 51.0979C27.9241 51.312 27.7042 51.8075 27.6187 51.8075C27.5821 51.8075 27.5576 51.8442 27.5576 51.8871C27.5576 51.9299 27.4782 52.0523 27.3805 52.1624C27.2827 52.2664 27.1361 52.4683 27.0628 52.6029C26.9834 52.7375 26.904 52.8476 26.8735 52.8476C26.8429 52.8476 26.7941 52.921 26.7635 53.0066C26.7269 53.0984 26.6475 53.2391 26.5742 53.3309C26.1099 53.9366 25.9694 54.1323 25.9694 54.1568C25.9694 54.1752 25.8778 54.3159 25.774 54.4749C25.664 54.6279 25.548 54.7992 25.5113 54.8543C25.4808 54.9093 25.4075 54.995 25.3525 55.05C25.2975 55.099 25.1876 55.2642 25.1082 55.4171C25.0288 55.5701 24.9127 55.7475 24.8516 55.8148C24.6256 56.0534 24.3507 56.4877 24.3691 56.5734C24.3813 56.6162 24.3629 56.6346 24.3263 56.6101C24.2896 56.5917 24.2591 56.5979 24.2591 56.6285C24.2591 56.659 24.1919 56.7569 24.1064 56.8487C24.027 56.9343 23.972 57.0078 23.9903 57.0078C24.0331 57.0078 23.8254 57.2953 23.6422 57.5033C23.5627 57.589 23.4406 57.7541 23.3795 57.8704C23.2512 58.1029 22.9275 58.4149 22.8114 58.4149C22.7687 58.4149 22.732 58.4394 22.732 58.4638C22.732 58.4944 22.6954 58.5189 22.6587 58.525C22.616 58.525 22.451 58.5739 22.2922 58.6351C22.0051 58.733 21.999 58.733 21.5959 58.5617C21.376 58.4699 21.1438 58.3231 21.0766 58.2375C21.0156 58.1518 20.9361 58.0478 20.8995 58.005C20.869 57.9622 20.8384 57.901 20.8384 57.8643C20.8384 57.8276 20.7957 57.7174 20.7468 57.6196C20.6918 57.5155 20.6796 57.436 20.7101 57.436C20.7468 57.436 20.7529 57.3442 20.7346 57.228C20.6857 56.9343 20.759 56.6223 20.8995 56.4571C20.9667 56.3776 21.0217 56.2797 21.0217 56.2369C21.0217 56.1941 21.0583 56.1329 21.1011 56.1084C21.1438 56.084 21.2782 55.9065 21.4004 55.7169C21.5226 55.5333 21.6692 55.3437 21.718 55.3009C21.773 55.2519 21.8158 55.1846 21.8158 55.1357C21.8158 55.0929 21.8524 55.0194 21.8952 54.9766C21.9379 54.9338 22.0357 54.7992 22.1212 54.683C22.2006 54.5667 22.3594 54.3648 22.4693 54.2363C22.5854 54.1079 22.6587 53.9794 22.6404 53.9488C22.6221 53.9182 22.7076 53.7897 22.8236 53.6613C22.9397 53.5328 23.0374 53.4104 23.0374 53.386C23.0374 53.3615 23.0741 53.3064 23.1168 53.2636C23.2757 53.0923 23.6483 52.5539 23.7032 52.401C23.7399 52.3092 23.7949 52.2358 23.8315 52.2358C23.8621 52.2358 23.8926 52.2052 23.8926 52.1685C23.8926 52.1257 24.0453 51.9115 24.2286 51.6791C24.4118 51.4527 24.5645 51.2447 24.5645 51.2263C24.5645 51.1713 25.1265 50.3759 25.2059 50.327C25.3159 50.2475 25.2792 49.0117 25.1509 48.5039C25.0837 48.253 25.0104 48.0267 24.9738 48.0083C24.9371 47.9838 24.9371 47.9533 24.9799 47.9349C25.0165 47.9104 25.0043 47.7758 24.9493 47.5739C24.9066 47.3965 24.8516 47.1396 24.8394 47.005C24.8211 46.8704 24.7905 46.7052 24.7722 46.6379C24.6684 46.2586 24.6561 46.2831 24.8822 46.3932C24.9921 46.4544 25.1326 46.54 25.1876 46.589Z"
        fill={colourFill}
      />
      <path
        d="M25.4442 37.1674C25.3954 37.2775 25.3343 37.3693 25.3037 37.3693C25.261 37.3693 24.9922 37.9382 24.9922 38.0422C24.9922 38.0728 24.9311 38.1585 24.8578 38.238C24.7051 38.391 24.418 38.8804 24.3142 39.1557C24.2775 39.2536 24.2103 39.327 24.1615 39.327C24.1126 39.327 24.076 39.3821 24.076 39.4493C24.076 39.5595 23.9294 39.8225 23.6667 40.1835C23.6056 40.2691 23.5018 40.4405 23.4346 40.5689C23.2941 40.8381 23.2697 40.7953 23.8255 41.1318C23.9966 41.2297 24.137 41.3337 24.137 41.3581C24.137 41.3887 24.1981 41.4071 24.2775 41.4132C24.3508 41.4132 24.5769 41.5233 24.7784 41.6518C24.98 41.7864 25.2549 41.9516 25.3893 42.0189C25.6153 42.1351 25.6397 42.1412 25.6947 42.0433C25.7313 41.9822 25.8718 41.7619 26.0184 41.5417C26.1589 41.3214 26.275 41.1257 26.275 41.1073C26.275 41.0461 26.7026 40.2263 26.7942 40.1223C26.8308 40.0734 26.8858 39.9877 26.9103 39.9388C26.9286 39.8898 27.0019 39.7614 27.0691 39.6635C27.1363 39.5595 27.2157 39.4126 27.2523 39.327C27.3684 39.0456 27.4661 38.8681 27.5272 38.8253C27.5577 38.8009 27.5883 38.758 27.5944 38.7336C27.6005 38.6295 27.7654 38.3481 27.8143 38.3481C27.8387 38.3481 27.8632 38.3053 27.8632 38.2564C27.8632 38.2074 27.9303 38.0667 28.0159 37.9443C28.1014 37.822 28.1564 37.7057 28.1441 37.6874C28.1258 37.6752 28.1625 37.614 28.2297 37.5589C28.2969 37.5039 28.3824 37.3509 28.4312 37.2163L28.5106 36.9716H27.0263H25.542L25.4442 37.1674Z"
        fill={colourFill}
      />
      <path
        d="M31.6622 41.2113C31.6195 41.2236 31.5462 41.3276 31.4973 41.4438C31.4484 41.5601 31.3201 41.7987 31.2041 41.9761C30.862 42.5083 30.6299 42.906 30.5871 43.0467C30.5627 43.1201 30.5077 43.218 30.4711 43.2547C30.4283 43.2975 30.3367 43.4627 30.2573 43.6218C30.1779 43.7809 30.0924 43.9277 30.0557 43.946C30.0252 43.9705 29.9274 44.1173 29.848 44.2825L29.6953 44.5823L29.9213 44.7414C30.0496 44.827 30.184 44.8943 30.2267 44.8943C30.2695 44.8943 30.3062 44.9249 30.3062 44.9616C30.3062 44.9922 30.3367 45.0044 30.3672 44.9861C30.4039 44.9677 30.4283 44.98 30.4283 45.0228C30.4283 45.0656 30.4466 45.084 30.465 45.0595C30.4894 45.0411 30.6421 45.1207 30.8193 45.2369C30.9903 45.347 31.1552 45.4449 31.1858 45.4449C31.2163 45.4449 31.3263 45.5061 31.4301 45.5856C31.5339 45.6652 31.7111 45.7692 31.821 45.8181C31.9249 45.8671 32.0165 45.9282 32.0165 45.9527C32.0165 45.9833 32.0409 45.9894 32.0776 45.9649C32.1081 45.9466 32.2731 46.0322 32.4441 46.1485C32.6212 46.2708 32.8106 46.3748 32.8778 46.381C32.9389 46.3871 32.9938 46.4238 32.9938 46.4666C32.9938 46.5094 33.0244 46.5461 33.0549 46.5461C33.1466 46.5461 33.1282 46.381 33 45.9221C32.9328 45.7019 32.8961 45.5 32.9144 45.4816C32.9328 45.4633 32.9022 45.4082 32.8472 45.347C32.7862 45.292 32.7617 45.2002 32.7801 45.139C32.7984 45.0778 32.7739 44.9249 32.719 44.7964C32.6701 44.6741 32.609 44.4844 32.5968 44.3804C32.5418 44.0806 32.4991 43.9705 32.4441 44.0072C32.4197 44.0256 32.4074 43.9889 32.4197 43.9338C32.438 43.8726 32.3708 43.5484 32.2669 43.218C32.1692 42.8815 32.102 42.5756 32.1203 42.5267C32.1387 42.4839 32.1203 42.4471 32.0776 42.4471C32.0348 42.4471 32.0165 42.4043 32.0409 42.3493C32.0593 42.3003 32.0348 42.2147 31.986 42.1596C31.931 42.1107 31.9066 42.0189 31.9249 41.9577C31.9432 41.8965 31.931 41.8292 31.9004 41.8109C31.8638 41.7864 31.8516 41.7314 31.876 41.6824C31.8943 41.6335 31.876 41.5906 31.8455 41.5906C31.8088 41.5906 31.7722 41.4989 31.7599 41.3888C31.7477 41.2542 31.7172 41.193 31.6622 41.2113Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;
