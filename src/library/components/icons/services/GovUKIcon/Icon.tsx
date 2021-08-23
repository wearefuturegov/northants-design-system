
import React from "react";

import { IconProps } from "../Icon.types";

const ServiceIcon: React.FC<IconProps> = ({ colourFill }) => {
    
    return (
        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
        <g clip-path="url(#clip1)">
        <path d="M10.3791 12.081C10.1249 12.2236 10.0071 12.4716 9.4428 14.0774C9.13276 14.9641 8.77932 15.9685 8.6553 16.3095C8.53129 16.6505 8.26466 17.3883 8.06623 17.9525C7.86781 18.5167 7.57638 19.3228 7.42756 19.7506C6.0634 23.5575 5.94558 23.9233 6.02619 23.9729C6.13781 24.0411 15.3273 24.0411 15.4389 23.9729C15.5071 23.9295 15.4699 23.7621 15.2281 23.0925C15.0669 22.6336 14.856 22.0384 14.7568 21.7656C14.6638 21.4928 14.484 20.9906 14.36 20.6496C14.236 20.3086 13.9507 19.515 13.7275 18.8826C13.5043 18.2501 13.2252 17.4689 13.1074 17.1465C12.9896 16.8241 12.816 16.3343 12.723 16.0615C12.6238 15.7887 12.3199 14.9207 12.0347 14.1394C11.7557 13.352 11.5138 12.6576 11.489 12.5894C11.3588 12.1182 10.7822 11.8578 10.3791 12.081ZM11.0364 15.4229C11.5696 16.9419 11.6627 17.1899 11.8673 17.7665C11.9851 18.0889 12.2641 18.8702 12.4874 19.5026C12.7106 20.135 12.9958 20.9286 13.1198 21.2696C13.2438 21.6106 13.3989 22.0446 13.4609 22.2306C13.5229 22.4166 13.5911 22.6212 13.6159 22.677C13.6593 22.7824 13.4981 22.7886 10.7387 22.7886C9.13276 22.7886 7.8182 22.7762 7.8182 22.7576C7.8182 22.7452 7.99803 22.2306 8.21505 21.6292C8.43208 21.0216 8.68631 20.3148 8.77932 20.0606C9.41799 18.2563 9.69703 17.4689 9.89545 16.9295C10.0195 16.5885 10.2489 15.9375 10.4101 15.4849C10.5651 15.0385 10.7139 14.6665 10.7325 14.6665C10.7512 14.6665 10.8876 15.0075 11.0364 15.4229Z" fill={colourFill}/>
        <path d="M1.40023 25.2005C1.29482 25.2625 1.1584 25.3865 1.10259 25.4733C1.00338 25.6283 0.997181 26.2669 1.00958 35.2013L1.02818 44.7681L10.7261 44.7868C17.8446 44.793 20.4427 44.7805 20.5047 44.7309C20.5791 44.6689 20.5915 43.1065 20.5915 35.3129C20.5915 30.173 20.5729 25.8825 20.5543 25.7771C20.5295 25.6717 20.4303 25.4795 20.3186 25.3617C19.9652 24.9525 19.3637 25.0145 19.0599 25.4857C18.9235 25.6903 18.9173 25.7585 18.9173 27.0481L18.9111 28.3998L18.7437 28.2076C18.6506 28.1022 18.1608 27.4759 17.6461 26.8187C17.1377 26.1615 16.6788 25.5849 16.6354 25.5415C16.5672 25.4671 15.5441 25.4547 10.7633 25.4547H4.97185L4.34557 26.2421C3.60149 27.1845 3.65109 27.1225 3.26665 27.6247C3.09923 27.848 2.8884 28.1084 2.80159 28.2014L2.64037 28.375L2.60937 26.9923C2.57837 25.7337 2.56596 25.5973 2.45435 25.4423C2.20012 25.0951 1.73507 24.9897 1.40023 25.2005ZM16.592 27.6743C17.0013 28.2076 17.5407 28.8586 17.7949 29.1252L18.2538 29.6088H18.8057H19.3513V36.584V43.5591H16.3006H13.2436L13.8203 43.2739C14.5644 42.9143 14.9488 42.6167 15.7673 41.7797C16.7346 40.7815 17.1129 40.1428 17.4167 39.002C17.6895 37.9542 17.6895 36.0817 17.4167 35.0339C17.1067 33.8559 16.4804 32.8577 15.4573 31.8904C14.521 31.01 13.8885 30.6442 12.6855 30.297C12.2143 30.1668 11.6252 30.1048 10.7323 30.1048C8.60547 30.1048 7.36533 30.5822 5.96396 31.9338C4.94084 32.9197 4.33937 33.8621 4.02314 34.9719C3.89292 35.4307 3.88052 35.5857 3.88672 36.987C3.88672 38.7106 3.94253 39.0144 4.40138 39.994C4.74242 40.7257 4.95324 41.0109 5.76554 41.8417C6.50343 42.5981 7.29712 43.1809 7.89859 43.4041C8.05981 43.4661 8.19002 43.5219 8.19002 43.5343C8.19002 43.5467 6.85067 43.5591 5.21368 43.5591H2.23733V36.584V29.6088H2.75199H3.26665L3.7627 29.0942C4.02934 28.8152 4.41998 28.3688 4.62461 28.096C4.82923 27.8294 5.15787 27.4077 5.35629 27.1535L5.72213 26.6947L10.7819 26.7009H15.8479L16.592 27.6743ZM11.4144 31.4068C12.3817 31.5556 13.38 31.9524 14.0621 32.4671C14.924 33.1119 15.7301 34.2155 16.0277 35.1393C16.4742 36.5654 16.4742 37.4768 16.0277 38.878C15.7301 39.8142 14.9426 40.8745 14.0497 41.5503C13.5537 41.9223 12.7538 42.2757 11.8795 42.5113C11.464 42.6229 9.99443 42.6229 9.58519 42.5113C8.64888 42.2571 8.17762 42.0525 7.49554 41.5875C6.44142 40.8745 5.62292 39.6902 5.26328 38.3758C5.07106 37.6566 5.07106 36.2864 5.26328 35.6043C5.79654 33.7133 7.1297 32.2873 8.92171 31.6796C9.79601 31.382 10.6455 31.289 11.4144 31.4068Z" fill={colourFill}/>
        <path d="M10.4469 33.5149C10.3477 33.5459 10.1927 33.6451 10.1059 33.7381L9.95708 33.8993L9.93847 35.7035C9.91987 37.6814 9.93227 37.7744 10.2671 37.979C10.4531 38.0968 10.5709 38.103 11.9289 38.103H13.3861L13.5783 37.9418C14.0558 37.545 13.9069 36.7824 13.3179 36.5591C13.2187 36.5219 12.7784 36.4909 12.3382 36.4909H11.5383V35.2633C11.5383 34.1659 11.5259 34.0233 11.4142 33.8435C11.3522 33.7381 11.2468 33.6203 11.1848 33.5893C10.9988 33.4901 10.6516 33.4529 10.4469 33.5149Z" fill={colourFill}/>
        <path d="M0.885448 53.746C0.904051 60.8761 0.910251 61.2729 1.01566 61.4341C1.07767 61.5333 1.21409 61.6635 1.3257 61.7255C1.50552 61.8371 1.64814 61.8495 2.96889 61.8495H4.40746V54.0374V46.2252H2.64025H0.873047L0.885448 53.746ZM3.16732 54.0374V60.6095H2.67746C2.28681 60.6095 2.1814 60.5909 2.1504 60.5103C2.13179 60.4545 2.11319 57.497 2.11319 53.9382V47.4652H2.64025H3.16732V54.0374Z" fill={colourFill}/>
        <path d="M5.89502 54.0374V61.8495H7.84825H9.80148V54.0374V46.2252H7.84825H5.89502V54.0374ZM8.56133 54.0374V60.6095H7.84825H7.13516V54.0374V47.4652H7.84825H8.56133V54.0374Z" fill={colourFill}/>
        <path d="M11.3521 54.0374V61.8495H13.3053H15.2585V54.0374V46.2252H13.3053H11.3521V54.0374ZM14.0184 54.0374V60.6095H13.3053H12.5922V54.0374V47.4652H13.3053H14.0184V54.0374Z" fill={colourFill}/>
        <path d="M16.6851 54.0374V61.8495H18.2662C19.9838 61.8495 20.0769 61.8371 20.3373 61.5023L20.4675 61.3349V53.7832V46.2252H18.5763H16.6851V54.0374ZM19.2274 54.0374V60.6095H18.5763H17.9252V54.0374V47.4652H18.5763H19.2274V54.0374Z" fill={colourFill}/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0">
        <rect width="76" height="76" fill="white"/>
        </clipPath>
        <clipPath id="clip1">
        <rect width="71" height="66" fill="white" transform="translate(0 12)"/>
        </clipPath>
        </defs>
        </svg>
        )
    } 
    
    
    export default ServiceIcon;
    
    