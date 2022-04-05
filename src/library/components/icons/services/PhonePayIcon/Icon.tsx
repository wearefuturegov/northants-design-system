import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.8181 4.07025C15.2284 4.6395 13.3528 6.721 13.0638 9.34875C12.9787 10.125 12.9787 66.843 13.0638 67.6192C13.2168 69.0165 13.7891 70.2182 14.7864 71.236C15.5061 71.9777 16.3164 72.455 17.3931 72.7942L17.9031 72.9552L30.9081 72.9725C40.5584 72.984 44.0208 72.9725 44.3381 72.9207C46.7804 72.5412 48.7694 70.5805 49.2341 68.0965C49.3134 67.6767 49.3248 66.4635 49.3248 57.574V47.523L49.7101 47.2067C50.1521 46.8445 51.0758 45.9015 51.4384 45.4415C52.1354 44.556 52.8834 43.2335 53.3198 42.1122C53.5974 41.3762 53.8808 40.2262 53.9998 39.3235C54.1358 38.3172 54.0961 36.5002 53.9204 35.5745C53.4444 33.0042 52.3224 30.8365 50.5431 29.0195C48.5994 27.0472 46.1458 25.8282 43.4031 25.489C42.7514 25.4085 41.1648 25.4085 40.5074 25.489C36.2008 26.0237 32.5344 28.8125 30.8118 32.849C30.1828 34.3267 29.8994 35.6435 29.8484 37.3167C29.7804 39.4442 30.1601 41.2555 31.0498 43.1127C32.6988 46.5627 35.8834 49.064 39.5724 49.8057C40.9381 50.0817 42.6891 50.1105 44.0094 49.869C44.8424 49.7195 45.8908 49.4205 46.5821 49.1272L47.1148 48.8972V58.126C47.1148 68.361 47.1374 67.763 46.7408 68.5852C46.3611 69.3787 45.7661 69.9825 44.9898 70.3677C44.1794 70.7645 45.1994 70.7415 31.1858 70.7415C18.7304 70.7415 18.5094 70.7415 18.0788 70.6265C17.0588 70.362 16.1238 69.603 15.6761 68.6715C15.5458 68.4012 15.3984 68.0275 15.3531 67.8377C15.2794 67.5387 15.2681 64.1692 15.2681 38.484C15.2681 12.7988 15.2794 9.42925 15.3531 9.13025C15.6874 7.78475 16.7698 6.68075 18.0788 6.3415C18.4868 6.23225 18.7191 6.2265 21.7111 6.2265C24.5558 6.2265 24.9014 6.238 24.9014 6.31275C24.9014 6.445 25.0658 6.74975 25.2301 6.93375C25.5418 7.26725 25.4568 7.2615 31.1744 7.2615C34.9541 7.2615 36.4841 7.24425 36.6711 7.1925C36.9998 7.112 37.3398 6.7785 37.4248 6.46225L37.4871 6.2265H40.6718C43.2501 6.2265 43.9244 6.24375 44.2021 6.31275C45.5054 6.62325 46.5254 7.595 46.9844 8.96925C47.0751 9.2395 47.1091 11.2865 47.1658 20.3542L47.1714 21.4525L47.4718 21.556C47.8854 21.6882 48.8374 22.0792 49.1038 22.2172L49.3248 22.3265V15.8347C49.3248 8.7105 49.3361 8.91175 48.9848 7.93425C48.3274 6.1115 46.9108 4.7775 44.9898 4.17375L44.4798 4.01275L31.3331 4.00125C20.2661 3.9955 18.1298 4.007 17.8181 4.07025ZM43.9528 27.8695C48.6051 28.8872 51.8804 32.9755 51.8748 37.7365C51.8691 41.3302 49.9424 44.6767 46.8654 46.4535C46.5481 46.6375 46.3781 46.7697 46.3781 46.833C46.3781 46.9135 46.3328 46.9365 46.1741 46.9365C46.0608 46.9365 45.7208 47.0285 45.4204 47.1435C42.9668 48.0807 40.3034 47.9887 37.8781 46.8847C35.6001 45.844 33.7018 43.8315 32.7724 41.474C31.7128 38.7772 31.8091 35.9195 33.0558 33.3377C34.5178 30.3132 37.2094 28.3122 40.5414 27.7602C40.8758 27.7027 41.3688 27.6855 42.1564 27.697C43.1028 27.72 43.3974 27.743 43.9528 27.8695Z"
        fill={colourFill}
      />
      <path
        d="M42.3207 29.6577C40.7397 30.0085 39.4817 31.216 39.0057 32.8547C38.898 33.2342 38.881 33.447 38.8583 34.873L38.83 36.46L38.1103 36.483C37.4813 36.5002 37.3737 36.5175 37.181 36.6325C36.824 36.8625 36.6653 37.1212 36.6427 37.541C36.6143 38.0067 36.6483 38.1447 36.8693 38.3977C37.181 38.76 37.385 38.829 38.1613 38.829H38.8413V39.8812C38.8413 40.7782 38.8243 40.9852 38.7337 41.2612C38.5183 41.8995 38.1613 42.2847 37.4813 42.6182C36.8013 42.9517 36.6313 43.2047 36.6313 43.889C36.6313 44.395 36.6937 44.5732 36.9543 44.8147C37.3283 45.1712 37.0393 45.154 42.026 45.154H46.5764L46.7974 45.0217C46.922 44.9527 47.0977 44.7975 47.194 44.6767C47.347 44.4812 47.3697 44.4065 47.3867 44.0442C47.4037 43.544 47.279 43.2737 46.8994 42.9977L46.65 42.8252L43.6353 42.808L40.6207 42.7907L40.7793 42.4515C41.108 41.7615 41.1817 41.336 41.1873 40.025L41.193 38.829H42.4567C43.5957 38.829 43.743 38.8175 43.9357 38.7197C44.7573 38.2885 44.8197 37.1787 44.049 36.6612L43.811 36.5002L42.502 36.483L41.193 36.4657L41.2213 34.9592C41.2497 33.5562 41.261 33.4355 41.3743 33.1767C41.6577 32.55 42.1167 32.1705 42.7797 32.0037C43.0913 31.929 43.2273 31.9175 43.5107 31.9692C44.0773 32.067 44.372 32.2452 45.0237 32.8892C45.3523 33.2112 45.715 33.516 45.8283 33.5677C46.293 33.7632 46.8597 33.6022 47.194 33.1825C47.3187 33.0157 47.364 32.8892 47.3867 32.6535C47.432 32.0555 47.3924 31.975 46.701 31.2562C45.7717 30.2902 45.0803 29.8647 44.1 29.6635C43.5787 29.5542 42.7967 29.5542 42.3207 29.6577Z"
        fill={colourFill}
      />
      <path
        d="M25.6212 63.8703C25.0318 64.0773 24.7428 64.7788 24.9865 65.3768C25.0998 65.6528 25.2188 65.785 25.4795 65.9173C25.6892 66.0265 25.8762 66.0265 31.2368 66.015L36.7845 65.9978L37.0169 65.8368C37.7479 65.3193 37.5552 64.083 36.7052 63.8473C36.5635 63.807 34.7105 63.784 31.1632 63.784C26.7998 63.7898 25.7968 63.8013 25.6212 63.8703Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;
