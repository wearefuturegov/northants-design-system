import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_3526_5709)">
        <path
          d="M16.9281 8.13003C15.2881 8.56192 13.7274 9.95063 13.1785 11.4722L13.0331 11.8842L13.0132 37.9639L13 64.0436L13.1653 64.5885C13.6018 65.9971 15.0103 67.2995 16.604 67.7646C16.8223 67.8244 17.0537 67.9041 17.1132 67.9373C17.2653 68.0171 49.6553 68.0171 49.7347 67.944C49.7744 67.9107 49.9661 67.8509 50.1711 67.8044C51.4276 67.5387 52.9882 66.3294 53.5569 65.1931C54.0397 64.223 54 66.7413 54 37.9506V11.9905L53.8347 11.4722C53.4313 10.1898 52.5055 9.17322 51.1234 8.49548C50.0058 7.95063 51.5268 7.99714 33.4868 8.00378C17.9994 8.00378 17.3777 8.01043 16.9281 8.13003ZM40.3245 11.6649C40.3377 12.1898 40.3377 24.4623 40.3245 38.9407L40.3113 65.2729H29.4661C23.2434 65.2729 18.5681 65.2463 18.5019 65.2131C18.4424 65.1799 18.211 65.1001 17.9927 65.0403C17.7745 64.9805 17.3315 64.7878 17.0074 64.6217C16.3197 64.2563 16.1345 64.0304 15.8766 63.1931L15.7113 62.6749V38.1433C15.7113 11.0935 15.6782 13.233 16.1279 12.336C16.4056 11.7712 16.5313 11.6516 17.2389 11.2862C18.4027 10.6815 17.3447 10.728 29.5455 10.728L40.3047 10.7214L40.3245 11.6649ZM48.6634 10.8277C49.1924 10.9473 49.8339 11.2197 50.3034 11.5254C50.6605 11.7513 50.9316 12.2098 51.1498 12.9473L51.2887 13.4124L51.2755 38.13L51.2556 62.8476L51.0969 63.2662C50.8258 63.9971 50.601 64.2563 49.9331 64.6151C49.609 64.7878 49.1461 64.9805 48.9081 65.0403C48.67 65.1001 48.4253 65.1799 48.3658 65.2131C48.2997 65.2463 48.174 65.2729 48.0815 65.2729H47.9161V37.9971V10.7214H48.055C48.1277 10.7214 48.3989 10.7679 48.6634 10.8277Z"
          fill={colourFill}
        />
        <path
          d="M29.5523 15.439C29.0365 15.5586 28.9505 15.6782 27.7999 17.6981C27.3105 18.5553 26.6559 19.6915 26.345 20.223C26.0342 20.7546 25.6705 21.3925 25.5317 21.6516C25.0291 22.5752 24.6059 23.3393 23.8784 24.5752C23.475 25.2662 22.9394 26.1965 22.6881 26.635C22.4434 27.0735 22.0533 27.7446 21.8284 28.13C21.068 29.4191 20.7373 30.1101 20.7373 30.4157C20.7373 30.7812 20.9621 31.0935 21.425 31.3659C21.5309 31.4257 23.4618 31.4456 29.7838 31.4523C38.9426 31.4523 38.2747 31.4855 38.6451 31.0004C38.7972 30.8011 38.8302 30.6882 38.8501 30.2496C38.8699 29.8044 38.8501 29.7181 38.731 29.5985C38.5789 29.4456 37.7325 27.9905 37.7325 27.8775C37.7325 27.8377 37.7126 27.7978 37.6862 27.7845C37.6531 27.7712 37.5341 27.5719 37.4084 27.3327C37.177 26.9008 36.3702 25.4656 35.5039 23.9772C34.8691 22.8742 34.1615 21.6184 33.8242 20.9872C33.4738 20.3227 31.8205 17.4124 31.3312 16.5752C30.822 15.7181 30.7096 15.5918 30.3062 15.4722C29.9425 15.3659 29.8697 15.3593 29.5523 15.439Z"
          fill={colourFill}
        />
        <path
          d="M27.2175 40.8941C25.3725 41.0337 23.9375 41.326 23.2895 41.7114C22.8927 41.944 22.4893 42.4224 22.3967 42.7612C22.3372 42.9739 22.324 44.4955 22.3372 48.5619L22.357 54.0769L22.5356 54.3825C22.7538 54.7546 23.1109 55.0137 23.554 55.1068L23.8979 55.1798L23.9243 55.5719C23.9706 56.2297 23.9838 56.2363 25.399 56.2363C26.8208 56.2363 26.8274 56.2297 26.8737 55.5719L26.9001 55.1732H29.8032H32.7062V55.532C32.7062 55.7911 32.7459 55.9307 32.8451 56.0636L32.9774 56.2363H34.1677C35.5895 56.2363 35.6159 56.223 35.6159 55.5785V55.1865L35.9003 55.14C36.4293 55.047 36.8591 54.7347 37.0972 54.2629C37.1898 54.0702 37.203 53.4722 37.203 48.4157V42.7812L37.0112 42.4423C36.4822 41.5253 35.2456 41.1267 32.1838 40.8875C31.1522 40.8077 28.3285 40.8144 27.2175 40.8941ZM31.1787 41.9772C31.225 42.0303 31.2514 42.2164 31.2382 42.3958L31.2183 42.7147L29.7833 42.7347L28.3417 42.7479V42.3626C28.3417 42.1499 28.3616 41.9506 28.388 41.9307C28.4079 41.9041 29.0295 41.8842 29.7635 41.8842C30.8414 41.8842 31.1191 41.9041 31.1787 41.9772ZM35.5366 43.9971C35.6027 44.0436 35.6159 44.6483 35.6027 46.8077L35.5829 49.5586H29.7635H23.9441L23.9243 46.8343C23.9177 45.3393 23.9243 44.0702 23.9441 44.0303C23.964 43.9639 25.1808 43.944 29.7106 43.944C32.865 43.944 35.4903 43.9705 35.5366 43.9971ZM25.2601 51.1533C25.7627 51.2928 26.1595 51.439 26.2124 51.4988C26.3446 51.6848 26.3116 52.2961 26.1595 52.4489C26.0404 52.5685 25.9412 52.5818 25.1146 52.5818C23.9045 52.5818 23.9111 52.5885 23.9111 51.7247C23.9111 51.0337 23.9574 50.9207 24.2285 50.9207C24.3145 50.9207 24.7774 51.027 25.2601 51.1533ZM35.563 51.0337C35.6622 51.12 35.6821 51.2463 35.6821 51.7313C35.6821 52.5752 35.6754 52.5818 34.4917 52.5818C33.5924 52.5818 33.5527 52.5752 33.4006 52.4157C33.275 52.2961 33.2353 52.1832 33.2353 51.9639C33.2353 51.5054 33.3543 51.4124 34.2603 51.1599C35.1795 50.9008 35.3977 50.8808 35.563 51.0337Z"
          fill={colourFill}
        />
      </g>
      <g clip-path="url(#clip1_3526_5709)">
        <path
          d="M16.9281 8.13003C15.2881 8.56192 13.7274 9.95063 13.1785 11.4722L13.0331 11.8842L13.0132 37.9639L13 64.0436L13.1653 64.5885C13.6018 65.9971 15.0103 67.2995 16.604 67.7646C16.8223 67.8244 17.0537 67.9041 17.1132 67.9373C17.2653 68.0171 49.6553 68.0171 49.7347 67.944C49.7744 67.9107 49.9661 67.8509 50.1711 67.8044C51.4276 67.5387 52.9882 66.3294 53.5569 65.1931C54.0397 64.223 54 66.7413 54 37.9506V11.9905L53.8347 11.4722C53.4313 10.1898 52.5055 9.17322 51.1234 8.49548C50.0058 7.95063 51.5268 7.99714 33.4868 8.00378C17.9994 8.00378 17.3777 8.01043 16.9281 8.13003ZM40.3245 11.6649C40.3377 12.1898 40.3377 24.4623 40.3245 38.9407L40.3113 65.2729H29.4661C23.2434 65.2729 18.5681 65.2463 18.5019 65.2131C18.4424 65.1799 18.211 65.1001 17.9927 65.0403C17.7745 64.9805 17.3315 64.7878 17.0074 64.6217C16.3197 64.2563 16.1345 64.0304 15.8766 63.1931L15.7113 62.6749V38.1433C15.7113 11.0935 15.6782 13.233 16.1279 12.336C16.4056 11.7712 16.5313 11.6516 17.2389 11.2862C18.4027 10.6815 17.3447 10.728 29.5455 10.728L40.3047 10.7214L40.3245 11.6649ZM48.6634 10.8277C49.1924 10.9473 49.8339 11.2197 50.3034 11.5254C50.6605 11.7513 50.9316 12.2098 51.1498 12.9473L51.2887 13.4124L51.2755 38.13L51.2556 62.8476L51.0969 63.2662C50.8258 63.9971 50.601 64.2563 49.9331 64.6151C49.609 64.7878 49.1461 64.9805 48.9081 65.0403C48.67 65.1001 48.4253 65.1799 48.3658 65.2131C48.2997 65.2463 48.174 65.2729 48.0815 65.2729H47.9161V37.9971V10.7214H48.055C48.1277 10.7214 48.3989 10.7679 48.6634 10.8277Z"
          fill={colourFill}
        />
        <path
          d="M29.5523 15.439C29.0365 15.5586 28.9505 15.6782 27.7999 17.6981C27.3105 18.5553 26.6559 19.6915 26.345 20.223C26.0342 20.7546 25.6705 21.3925 25.5317 21.6516C25.0291 22.5752 24.6059 23.3393 23.8784 24.5752C23.475 25.2662 22.9394 26.1965 22.6881 26.635C22.4434 27.0735 22.0533 27.7446 21.8284 28.13C21.0679 29.4191 20.7373 30.1101 20.7373 30.4157C20.7373 30.7812 20.9621 31.0935 21.425 31.3659C21.5309 31.4257 23.4618 31.4456 29.7838 31.4523C38.9426 31.4523 38.2747 31.4855 38.6451 31.0004C38.7972 30.8011 38.8302 30.6882 38.8501 30.2496C38.8699 29.8044 38.8501 29.7181 38.731 29.5985C38.5789 29.4456 37.7325 27.9905 37.7325 27.8775C37.7325 27.8377 37.7126 27.7978 37.6862 27.7845C37.6531 27.7712 37.5341 27.5719 37.4084 27.3327C37.177 26.9008 36.3702 25.4656 35.5039 23.9772C34.8691 22.8742 34.1615 21.6184 33.8242 20.9872C33.4738 20.3227 31.8205 17.4124 31.3312 16.5752C30.822 15.7181 30.7096 15.5918 30.3062 15.4722C29.9425 15.3659 29.8697 15.3593 29.5523 15.439Z"
          fill={colourFill}
        />
        <path
          d="M27.2175 40.8941C25.3725 41.0337 23.9375 41.326 23.2895 41.7114C22.8927 41.944 22.4893 42.4224 22.3967 42.7612C22.3372 42.9739 22.324 44.4955 22.3372 48.5619L22.357 54.0769L22.5356 54.3825C22.7538 54.7546 23.1109 55.0137 23.554 55.1068L23.8979 55.1798L23.9243 55.5719C23.9706 56.2297 23.9838 56.2363 25.399 56.2363C26.8208 56.2363 26.8274 56.2297 26.8737 55.5719L26.9001 55.1732H29.8032H32.7062V55.532C32.7062 55.7911 32.7459 55.9307 32.8451 56.0636L32.9774 56.2363H34.1677C35.5895 56.2363 35.6159 56.223 35.6159 55.5785V55.1865L35.9003 55.14C36.4293 55.047 36.8591 54.7347 37.0972 54.2629C37.1898 54.0702 37.203 53.4722 37.203 48.4157V42.7812L37.0112 42.4423C36.4822 41.5253 35.2456 41.1267 32.1838 40.8875C31.1522 40.8077 28.3285 40.8144 27.2175 40.8941ZM31.1787 41.9772C31.225 42.0303 31.2514 42.2164 31.2382 42.3958L31.2183 42.7147L29.7833 42.7347L28.3417 42.7479V42.3626C28.3417 42.1499 28.3616 41.9506 28.388 41.9307C28.4079 41.9041 29.0295 41.8842 29.7635 41.8842C30.8414 41.8842 31.1191 41.9041 31.1787 41.9772ZM35.5366 43.9971C35.6027 44.0436 35.6159 44.6483 35.6027 46.8077L35.5829 49.5586H29.7635H23.9441L23.9243 46.8343C23.9177 45.3393 23.9243 44.0702 23.9441 44.0303C23.964 43.9639 25.1808 43.944 29.7106 43.944C32.865 43.944 35.4903 43.9705 35.5366 43.9971ZM25.2601 51.1533C25.7627 51.2928 26.1595 51.439 26.2124 51.4988C26.3446 51.6848 26.3116 52.2961 26.1595 52.4489C26.0404 52.5685 25.9412 52.5818 25.1146 52.5818C23.9045 52.5818 23.9111 52.5885 23.9111 51.7247C23.9111 51.0337 23.9574 50.9207 24.2285 50.9207C24.3145 50.9207 24.7774 51.027 25.2601 51.1533ZM35.563 51.0337C35.6622 51.12 35.6821 51.2463 35.6821 51.7313C35.6821 52.5752 35.6754 52.5818 34.4917 52.5818C33.5924 52.5818 33.5527 52.5752 33.4006 52.4157C33.275 52.2961 33.2353 52.1832 33.2353 51.9639C33.2353 51.5054 33.3543 51.4124 34.2603 51.1599C35.1795 50.9008 35.3977 50.8808 35.563 51.0337Z"
          fill={colourFill}
        />
      </g>
      <defs>
        <clipPath id="clip0_3526_5709">
          <rect width="41" height="60" fill="white" transform="translate(13 8)" />
        </clipPath>
        <clipPath id="clip1_3526_5709">
          <rect width="41" height="60" fill="white" transform="translate(13 8)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ServiceIcon;
