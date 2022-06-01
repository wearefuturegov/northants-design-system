import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.46406 14.0947C3.23108 14.1435 2.81416 14.2898 2.5444 14.4179C1.29366 15.0093 0.459831 16.0154 0.122622 17.3264C0 17.7898 0 18.1008 0 38.9971C0 59.8935 0 60.2044 0.122622 60.6679C0.533404 62.2715 1.77801 63.491 3.39049 63.8752C3.8871 63.9971 4.20592 63.9971 29 63.9971C53.7941 63.9971 54.1129 63.9971 54.6095 63.8752C56.222 63.491 57.4666 62.2715 57.8774 60.6679C58 60.2044 58 59.8935 58 38.9971C58 17.9422 58 17.7959 57.8774 17.3142C57.5402 16.0215 56.6941 15.0032 55.4556 14.4179C54.4869 13.9605 56.8535 13.9971 28.9571 14.0032C7.22854 14.0093 3.83805 14.0215 3.46406 14.0947ZM44.481 22.5581C46.3755 22.8996 47.6078 24.8264 47.0867 26.6435C46.8782 27.3691 46.2896 28.1679 45.7011 28.5276C45.0696 28.9057 44.5484 29.0581 43.8556 29.0581C42.4577 29.0581 41.1518 28.0886 40.7165 26.7471C40.6123 26.4179 40.5693 25.5886 40.6429 25.1679C40.8514 23.8996 42.0899 22.6922 43.3161 22.5581C43.4877 22.5398 43.6349 22.5093 43.6471 22.4971C43.6962 22.4544 44.0457 22.4788 44.481 22.5581ZM18.522 23.7959C20.2755 24.2532 21.4465 25.424 21.7899 27.0459C22.1393 28.674 21.7899 30.2776 20.8641 31.363C20.3429 31.9666 19.4907 32.4666 18.5465 32.7227C18.0989 32.8447 17.8721 32.8569 15.8366 32.8813L13.611 32.9118V35.4971V38.0825L12.0047 38.0703L10.3922 38.052L10.3738 30.8386L10.3615 23.6252L14.2057 23.6496C17.823 23.6679 18.0867 23.6801 18.522 23.7959ZM32.93 24.0581C33.2427 24.1191 33.7822 24.3508 34.1808 24.6069C34.285 24.674 34.4199 24.7532 34.4873 24.7898C34.5548 24.8264 34.6958 24.9057 34.7939 24.9727C34.8981 25.0398 35.033 25.1191 35.1004 25.1557C35.1679 25.1922 35.3089 25.2715 35.407 25.3386C35.5112 25.4057 35.6338 25.4788 35.6829 25.5032C35.7319 25.5276 36.0078 25.6862 36.296 25.8569C36.5841 26.0276 36.86 26.1862 36.9091 26.2105C36.9581 26.2349 37.0869 26.3081 37.185 26.3752C37.2892 26.4422 37.4118 26.5154 37.4609 26.5398C37.5099 26.5642 37.9514 26.8203 38.4419 27.1069C38.9323 27.3996 39.8949 27.9666 40.5877 28.3691C41.2805 28.7715 41.9427 29.1618 42.0592 29.2288C42.1757 29.302 42.3596 29.3996 42.4638 29.4544C42.7888 29.6191 43.2548 30.1374 43.2977 30.3813C43.3038 30.4118 43.3467 30.5276 43.3958 30.6435C43.5368 30.9849 43.5061 31.8813 43.3406 32.2593C43.2118 32.5459 42.9973 32.8691 42.7949 33.0825C42.7459 33.1374 42.5252 33.3813 42.3044 33.6252C42.0837 33.8752 41.8753 34.1069 41.8446 34.1435C41.8078 34.1801 41.5871 34.4301 41.3541 34.6983C41.115 34.9666 40.9004 35.2166 40.8636 35.2532C40.833 35.2898 40.7104 35.4301 40.5939 35.5581C40.4774 35.6862 40.2689 35.9179 40.134 36.0703C39.993 36.2227 39.7907 36.4605 39.6742 36.5886C39.5577 36.7227 39.4167 36.8874 39.3554 36.9544C39.245 37.0764 39.2512 37.0764 40.2076 37.0337C40.7349 37.0154 41.722 36.9666 42.3964 36.9301C45.8114 36.7532 46.2038 36.741 46.5165 36.8203C47.148 36.9849 47.6569 37.4118 47.9144 38.0032C48.0125 38.2349 48.0186 38.3691 47.9818 39.1923C47.9573 39.7044 47.9144 40.3508 47.8776 40.6252C47.8469 40.9057 47.7918 41.5093 47.7611 41.9666C47.7304 42.4301 47.6691 43.2471 47.614 43.7837C47.4975 44.991 47.3442 46.7837 47.3013 47.4727C47.24 48.3874 47.0867 49.3874 46.9763 49.6008C46.4368 50.674 45.1677 51.0459 44.1376 50.4483C43.7575 50.2288 43.3651 49.7471 43.3099 49.4423C43.3038 49.4057 43.2609 49.2715 43.2241 49.1435C43.1628 48.9605 43.1689 48.7105 43.2486 47.8447C43.3038 47.2532 43.4019 46.1374 43.4755 45.3691C43.5429 44.5947 43.6349 43.5398 43.6839 43.0215C43.733 42.5032 43.7882 41.7959 43.8127 41.4544L43.8495 40.8386L42.8808 40.8691C42.3412 40.8874 41.7772 40.9179 41.6178 40.9423L41.3296 40.9788L41.4461 41.2227C41.863 42.0825 42.0285 42.7166 42.2125 44.0581C42.4025 45.5032 42.2615 46.9362 41.7894 48.3874C41.6791 48.741 41.4032 49.4544 41.3296 49.5886C41.1334 49.9605 40.4467 51.0642 40.3302 51.2044C40.2505 51.2959 40.0543 51.5337 39.8827 51.7349C39.7171 51.9362 39.5577 52.1008 39.5332 52.1008C39.5025 52.1069 38.9201 51.5398 38.2273 50.8386C37.418 50.0276 36.9827 49.552 37.0133 49.5093C37.0378 49.4666 37.1911 49.2715 37.3505 49.0764C37.6264 48.7227 37.7368 48.5459 38.0617 47.9179C38.3008 47.4605 38.497 46.7532 38.5951 45.9788C38.7852 44.4971 38.4235 43.0215 37.5406 41.6923C36.7252 40.4666 35.64 39.6923 33.9662 39.1252C33.5493 38.9849 32.3721 38.8813 31.7283 38.9362C31.1214 38.9849 30.3734 39.1435 30.2569 39.2471C30.2262 39.2776 30.1526 39.302 30.0913 39.302C30.03 39.302 29.9319 39.3264 29.8706 39.363C29.8154 39.3935 29.6438 39.4788 29.4905 39.5459C29.3372 39.613 29.1594 39.7044 29.0981 39.7471C29.0307 39.7837 28.8345 39.9057 28.6628 40.0093C28.4911 40.1191 28.3133 40.2471 28.2643 40.3081C28.019 40.6008 28.0129 40.5947 26.9277 39.4971C26.3636 38.924 25.7934 38.3508 25.6647 38.2105L25.4194 37.9666L25.5973 37.802C25.8118 37.6069 26.897 36.802 26.9522 36.802C26.9706 36.802 27.0626 36.7532 27.1484 36.6862C27.3017 36.5825 28.0619 36.1862 28.3562 36.0642C28.7364 35.9057 29.4721 35.6435 29.5457 35.6435C29.5947 35.6435 29.7173 35.6191 29.8216 35.5886C29.9258 35.552 30.1649 35.4971 30.355 35.4605C30.6554 35.4057 30.729 35.3569 30.9619 35.0825C31.1091 34.9118 31.2624 34.741 31.293 34.7044C31.434 34.5581 32.2985 33.5947 32.4395 33.4301C32.5192 33.3325 32.6725 33.1679 32.7706 33.0581C32.8748 32.9544 33.0956 32.7044 33.2734 32.5032C33.445 32.302 33.6535 32.0642 33.7332 31.9788C33.8068 31.8935 34.0091 31.674 34.1685 31.491C34.334 31.3081 34.5548 31.0642 34.6651 30.9483C34.7693 30.8325 35.0023 30.5703 35.174 30.363C35.5173 29.9666 35.5173 29.9666 35.1311 29.7715C35.082 29.7471 34.9594 29.674 34.8552 29.6069C34.7571 29.5398 34.6283 29.4666 34.5793 29.4422C34.5302 29.4179 34.1746 29.2166 33.7945 28.9849C33.4144 28.7593 33.0772 28.5703 33.0526 28.5703C33.022 28.5703 32.9668 28.5276 32.9239 28.4788C32.881 28.424 32.8258 28.4057 32.8074 28.4301C32.789 28.4544 32.5622 28.6557 32.3108 28.8752C32.0594 29.0947 31.8203 29.2959 31.7835 29.3325C31.7467 29.363 31.5137 29.5703 31.2685 29.7898C31.0171 30.0093 30.7535 30.241 30.6799 30.3081C30.0852 30.8447 29.6499 31.2227 29.5027 31.3325C29.4108 31.4057 29.3249 31.4788 29.3066 31.4971C29.2085 31.6008 28.7915 31.7471 28.4727 31.7898C27.7983 31.8813 27.1791 31.6557 26.7192 31.1435C26.3636 30.7532 26.2839 30.5154 26.2778 29.8508C26.2717 28.9605 26.3759 28.8081 27.8658 27.5032C28.0987 27.302 28.3501 27.0825 28.4237 27.0154C28.4973 26.9483 28.626 26.8386 28.6996 26.7654C29.4598 26.113 30.6063 25.1069 30.778 24.9483C31.5321 24.2654 31.9184 24.052 32.5008 24.0032C32.556 24.0032 32.7522 24.0276 32.93 24.0581ZM25.7873 40.4057C26.4617 41.0764 27.0013 41.6496 26.9951 41.6801C26.989 41.7044 26.9154 41.8264 26.8357 41.9423C26.756 42.0581 26.615 42.3142 26.523 42.5093C26.4249 42.7044 26.3268 42.9118 26.3023 42.9605C26.1123 43.3447 25.8731 44.613 25.8731 45.2349C25.8731 46.0947 26.1123 47.1313 26.5169 47.991C26.6518 48.2837 27.0135 48.863 27.1362 48.9788C27.1852 49.0276 27.222 49.0886 27.222 49.113C27.222 49.1862 28.0619 50.0337 28.3869 50.2898C28.5402 50.4118 28.7731 50.5703 28.908 50.6435C29.0429 50.7166 29.2698 50.8386 29.4047 50.9118C29.5457 50.991 29.7112 51.0703 29.7725 51.0886C29.84 51.1069 30.0423 51.1801 30.2262 51.2532C30.5818 51.3874 31.2808 51.5276 31.9429 51.5947C32.5805 51.6557 33.4757 51.5215 34.426 51.2227C34.659 51.1435 35.4499 50.7593 35.7197 50.5886C35.8423 50.5093 35.922 50.5764 37.1421 51.802C37.8594 52.5215 38.4357 53.1069 38.4235 53.113C37.608 53.7105 36.8416 54.174 36.3573 54.3569C36.2408 54.4057 36.063 54.4788 35.9588 54.5215C34.1317 55.2776 31.7406 55.4179 29.6744 54.8874C28.8099 54.6618 27.9822 54.3081 27.0687 53.7654C26.333 53.3203 25.8915 52.9788 25.2294 52.3203C24.4875 51.5825 24.1994 51.2227 23.623 50.3081C23.5311 50.1679 23.0038 49.0886 22.9302 48.9057C22.9057 48.8386 22.8505 48.6983 22.8076 48.6008C22.5072 47.8874 22.2436 46.2776 22.2436 45.2166C22.2497 44.113 22.5624 42.4301 22.8996 41.6983C22.9486 41.5947 22.9915 41.491 22.9915 41.4727C22.9915 41.3874 23.574 40.2715 23.807 39.9057C24.2239 39.2532 24.4078 39.0459 24.4937 39.1191C24.5366 39.1557 25.119 39.7349 25.7873 40.4057Z"
        fill={colourFill}
      />
      <path
        d="M13.6108 28.2655V30.3996H15.0455C17.1301 30.3996 17.6635 30.302 18.2091 29.8142C18.6628 29.4057 18.8713 28.7655 18.7977 27.9911C18.7058 27.0033 18.1294 26.3874 17.0994 26.1984C16.9155 26.1679 16.0571 26.1374 15.1927 26.1313L13.6108 26.1252V28.2655Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;
