import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.2437 9.08464C21.7479 9.23631 20.2254 10.0413 19.4379 10.5605C18.4171 11.243 17.8104 11.7388 17.0287 12.5205C15.7687 13.7805 14.7596 15.2155 14.1412 16.633C14.0362 16.8721 13.9429 17.0763 13.9371 17.088C13.9254 17.0996 13.6862 17.0646 13.4062 17.018C10.6179 16.5396 7.26375 16.9071 4.44041 17.998C3.15708 18.4938 1.44791 19.3921 0.934581 19.8471C0.473748 20.2496 0.555415 20.9438 1.09208 21.218C1.25541 21.3055 1.39541 21.3055 2.49208 21.2413C4.14291 21.1421 5.52541 21.218 6.95458 21.4805C7.31041 21.5505 7.60791 21.6263 7.60791 21.6496C7.60791 21.673 7.42125 21.8071 7.19375 21.9413C6.12625 22.5771 4.68541 23.8605 3.79291 24.9746C2.77791 26.2463 1.65208 28.2296 1.10375 29.7171C0.380415 31.6888 0.0187479 33.6721 0.00124792 35.7371C-0.00458541 36.7755 0.00708126 36.9271 0.100415 37.0671C0.327915 37.4113 0.841248 37.563 1.22041 37.388C1.31375 37.3471 1.59958 37.003 1.92041 36.5538C3.78708 33.923 5.87541 31.7121 7.92875 30.1955C8.28458 29.933 8.67541 29.6588 8.79791 29.583L9.02541 29.4488L8.87375 29.7055C8.68125 30.038 8.23791 31.1288 8.08041 31.6538C7.75375 32.7796 7.60791 33.8705 7.60791 35.2355C7.60208 37.1838 7.93458 38.928 8.64041 40.7246C9.10708 41.903 9.92958 43.443 10.2562 43.7521C10.4662 43.9505 10.9446 43.9855 11.2071 43.8221C11.5279 43.618 11.5862 43.4313 11.6387 42.358C11.7846 39.6688 12.3387 37.3238 13.2954 35.4105C14.2929 33.4155 15.5296 32.068 17.2329 31.1171C17.8046 30.7963 17.7637 30.7788 18.1662 31.4905C21.0129 36.5305 22.7921 42.463 23.3229 48.6871C23.3754 49.2646 23.4396 50.3671 23.4746 51.1313C23.5096 51.9013 23.5446 52.5371 23.5562 52.5546C23.5737 52.5663 23.9471 52.5196 24.3904 52.4555C24.8337 52.3855 25.2187 52.333 25.2479 52.333C25.3237 52.333 25.2421 49.0255 25.1371 47.8996C25.0496 46.9255 24.8921 45.5255 24.8454 45.2338C24.8279 45.1405 24.7637 44.7263 24.6996 44.3121C24.3904 42.3871 23.6962 39.4646 23.2646 38.2746C23.1887 38.0646 23.1129 37.8138 23.0896 37.7205C23.0662 37.6213 23.0312 37.5163 23.0079 37.4871C22.9846 37.4521 22.9496 37.3646 22.9321 37.283C22.8971 37.1255 22.7454 36.6821 22.6579 36.4955C22.6287 36.4313 22.5879 36.3146 22.5646 36.233C22.5062 36.023 22.1446 35.0955 21.9521 34.6696C21.8587 34.4713 21.7829 34.2788 21.7829 34.2496C21.7829 34.2146 21.7596 34.1446 21.7246 34.0863C21.6954 34.0338 21.5087 33.643 21.3104 33.2288C20.7329 31.9921 20.3771 31.3155 19.7004 30.1488C19.6654 30.0846 19.4146 29.8163 19.1521 29.548L18.6621 29.058H17.7579H16.8537L16.4746 29.2505C15.5121 29.7405 14.9812 30.1546 13.8146 31.3446C13.0796 32.0913 12.0996 33.2696 12.0996 33.4038C12.0996 33.4271 12.0471 33.5146 11.9887 33.6021C11.9246 33.6896 11.7262 34.063 11.5454 34.4305C11.3646 34.798 11.1896 35.1421 11.1604 35.1946C10.9504 35.5913 10.4954 37.0788 10.2621 38.1288C10.1804 38.5138 10.1046 38.8288 10.0987 38.8405C10.0871 38.8463 10.0346 38.6771 9.97625 38.4613C9.92375 38.2455 9.85375 38.0296 9.83041 37.983C9.80125 37.9305 9.74875 37.6971 9.70791 37.458C9.67291 37.2188 9.60291 36.8746 9.56208 36.6996C9.42208 36.1163 9.39291 35.1071 9.50375 34.3371C9.63208 33.4213 9.84208 32.5055 10.0346 32.0621C10.0754 31.963 10.1629 31.7413 10.2329 31.5663C10.3029 31.3913 10.4721 31.0121 10.6179 30.7321L10.8746 30.213V29.3263V28.4455L10.4196 27.9905L9.97041 27.5413H9.11291H8.25541L8.00458 27.7163C7.86458 27.8155 7.57291 28.0138 7.35125 28.1596C6.31875 28.8421 5.14041 29.8921 3.48958 31.5896C2.82458 32.278 2.27041 32.838 2.25875 32.8321C2.21791 32.7913 2.66125 31.2221 2.77208 31.0296C2.80125 30.9713 2.82458 30.8955 2.82458 30.8605C2.82458 30.7438 3.38458 29.4138 3.61791 28.9705C3.67041 28.8713 3.80458 28.6263 3.91541 28.4163C4.02625 28.2063 4.16625 27.9555 4.23041 27.8621C4.28875 27.763 4.35875 27.6463 4.38208 27.5996C4.42875 27.4888 4.94791 26.7188 5.21041 26.3746C5.64791 25.7913 6.15541 25.2196 6.53458 24.8813C6.93708 24.5313 7.80041 23.8663 7.85875 23.8663C7.99291 23.8663 8.77458 23.3005 9.14208 22.9446L9.59125 22.4955V21.6205V20.7455L9.14208 20.2963L8.68708 19.8471L8.10375 19.7305C7.78291 19.6663 7.23458 19.5846 6.89041 19.5438L6.26041 19.468L6.54041 19.3863C6.69208 19.3396 6.87291 19.2813 6.93708 19.2521C7.04208 19.2113 8.27291 18.9546 9.18291 18.7913C10.2504 18.5988 11.3587 18.6105 12.5721 18.8205C12.8579 18.873 13.4237 18.908 13.9371 18.908H14.8121L15.2846 18.4238C15.5996 18.1088 15.7979 17.8463 15.8796 17.6538C16.0837 17.1638 16.5912 16.2188 16.7429 16.0438C16.7896 15.9971 16.8246 15.933 16.8246 15.9038C16.8246 15.7755 18.2129 14.0313 18.5862 13.6988C18.9654 13.3605 19.7996 12.7013 19.7996 12.7421C19.7996 12.7538 19.7471 12.8705 19.6829 12.9988C19.6187 13.133 19.5429 13.3546 19.5137 13.4946C19.4787 13.6346 19.4146 13.8446 19.3621 13.9613C19.2979 14.1246 19.2746 14.3988 19.2746 15.0696V15.9621L19.7296 16.4171L20.1787 16.8663H21.0654C21.8179 16.8663 21.9929 16.8488 22.2029 16.7555C23.1304 16.3413 23.7429 16.1488 24.9621 15.9038C25.9887 15.6996 26.9221 15.6238 27.6396 15.6996C29.0979 15.8455 30.9879 16.2596 31.7987 16.6096C31.8979 16.6563 32.0321 16.6913 32.0904 16.6913C32.1487 16.6913 32.2246 16.7146 32.2596 16.7438C32.2887 16.773 32.5221 16.8838 32.7787 16.983C33.0354 17.088 33.2687 17.193 33.2979 17.2163C33.3212 17.2455 33.1112 17.2805 32.8312 17.298C31.4254 17.3913 29.1737 17.683 28.2579 17.8871C28.0187 17.9396 27.7154 18.0096 27.5871 18.033C27.2662 18.103 26.8521 18.208 26.7121 18.2663C26.6479 18.2896 26.4379 18.3538 26.2454 18.4121C25.9421 18.4938 25.8312 18.5755 25.4462 18.9546L24.9912 19.4038V20.2788V21.1596L25.4812 21.638C25.7671 21.918 26.0179 22.1163 26.0879 22.1163C26.2629 22.1163 27.5754 22.4663 27.6454 22.5305C27.6746 22.5596 27.7329 22.583 27.7737 22.583C27.8204 22.583 28.0479 22.6763 28.2812 22.7871C28.5204 22.898 28.7304 22.9913 28.7479 22.9913C28.8179 22.9913 30.0429 23.703 30.3287 23.913C31.2387 24.5721 31.8046 25.103 32.4229 25.8788C32.7846 26.328 33.4496 27.2788 33.4496 27.343C33.4496 27.3955 33.2221 27.3605 33.1871 27.308C33.1696 27.2788 33.0121 27.1855 32.8487 27.1096C32.6796 27.0338 32.3646 26.888 32.1429 26.783C31.9212 26.678 31.6587 26.573 31.5596 26.5438C31.3496 26.4913 30.8712 26.328 30.6204 26.223C30.3112 26.0946 29.1329 25.8496 28.3804 25.7621C27.5287 25.663 25.6329 25.6513 24.6121 25.733C23.6787 25.8146 22.6637 26.0246 22.1329 26.2463C22.0512 26.2813 21.8296 26.363 21.6371 26.4388C21.3629 26.538 21.1879 26.6663 20.8379 27.0105L20.3829 27.4538V28.3521V29.2505L20.9371 30.0846C21.2404 30.5396 21.4912 30.9363 21.4912 30.9538C21.4912 30.9771 21.5729 31.0938 21.6662 31.2163C21.7654 31.3388 21.8412 31.4555 21.8412 31.473C21.8412 31.4905 21.9346 31.648 22.0454 31.823C22.1562 31.998 22.2496 32.1671 22.2496 32.1963C22.2496 32.2255 22.3021 32.3188 22.3721 32.4063C22.5004 32.5696 22.8154 33.1063 23.1129 33.6663C23.2062 33.8413 23.3404 34.0805 23.4046 34.1913C23.5154 34.3721 23.6496 34.623 23.8654 35.0371C23.9004 35.1013 23.9821 35.2705 24.0521 35.4105C24.1221 35.5505 24.2154 35.7313 24.2621 35.8188C24.5479 36.3438 25.7204 38.823 25.9596 39.4121C26.0412 39.6046 26.1637 39.8905 26.2396 40.0538C26.4204 40.433 26.7296 41.1971 26.9979 41.8913C27.1146 42.1946 27.2487 42.5213 27.2896 42.6205C27.3362 42.7138 27.3946 42.8596 27.4121 42.9413C27.4354 43.023 27.4996 43.198 27.5579 43.3321C27.6221 43.4605 27.8029 43.9621 27.9604 44.4405C28.1237 44.913 28.3454 45.5663 28.4562 45.8871C28.6896 46.5696 28.9812 47.503 29.3429 48.7746C29.5879 49.6146 30.2121 51.5105 30.2646 51.563C30.2879 51.5805 31.9971 51.3413 32.0321 51.318C32.0496 51.3005 31.3846 48.7105 31.1746 47.9871C29.1912 41.1038 26.2746 34.5996 22.7979 29.2738L22.1971 28.358L22.4129 28.2646C22.8271 28.0896 23.6262 27.8446 24.1746 27.728C26.6712 27.1855 29.3021 27.5996 31.9912 28.953C33.1229 29.5188 33.8696 29.9913 35.0129 30.8488C35.7537 31.4088 35.9462 31.5255 36.1504 31.5488C36.4887 31.5838 36.7687 31.4205 36.9379 31.0938C37.1012 30.7788 37.0896 30.6913 36.7454 29.6705C35.6721 26.4796 33.6187 23.7263 31.0346 21.9996C29.9787 21.2938 28.6079 20.6871 27.4879 20.4188C27.1729 20.343 26.9279 20.2788 26.9337 20.2671C26.9921 20.2146 28.5496 19.8063 29.2496 19.6663C31.1746 19.2813 32.9479 19.1005 35.5962 19.0305C37.5971 18.9721 37.5971 18.9721 37.8246 18.5988C37.9646 18.3713 37.9762 17.9805 37.8537 17.7413C37.5796 17.2046 34.8496 15.6063 33.1287 14.9646C31.8862 14.5038 30.5621 14.1655 29.2204 13.9671C28.2287 13.8213 25.7612 13.8213 24.8162 13.9671C23.5737 14.1596 22.3079 14.5096 21.4037 14.9121C21.2287 14.988 21.0829 15.0405 21.0829 15.023C21.0829 15.0055 21.2171 14.6321 21.3804 14.1946C21.7304 13.2496 22.4187 11.8146 23.0021 10.7996C23.4046 10.1055 23.4221 10.053 23.3987 9.76131C23.3754 9.41714 23.2237 9.20714 22.9087 9.07298C22.6812 8.97381 22.5879 8.97381 22.2437 9.08464Z"
        fill={colourFill}
      />
      <path
        d="M47.9861 19.6663C47.3794 19.8296 46.8311 20.1388 46.3119 20.6113C45.7344 21.148 45.3436 21.6671 45.1219 22.1921C44.8711 22.8046 44.8069 23.2713 44.8361 24.3213C44.8594 25.1146 44.8828 25.2955 45.0169 25.6746C45.2444 26.3396 45.4369 26.643 46.0378 27.2613C46.3936 27.6288 46.5628 27.8388 46.5103 27.8563C46.4636 27.868 46.3003 27.9088 46.1369 27.9496C45.5419 28.0838 45.0111 28.4046 44.3753 29.0171C44.0486 29.3321 43.6869 29.7288 43.5761 29.898C43.4711 30.0613 42.5844 31.9163 41.6103 34.0163L39.8369 37.8371V38.683C39.8369 39.7796 39.8836 39.9138 40.5019 40.5146C40.7527 40.7596 41.0561 40.9988 41.1727 41.0455C41.3244 41.1096 41.6044 41.133 42.2403 41.133C43.0278 41.133 43.1269 41.1213 43.3953 40.993C43.5644 40.9113 43.8561 40.6838 44.0778 40.4563C44.4044 40.118 44.5269 39.9313 44.8186 39.3246L45.1628 38.5955L45.1686 39.0038C45.1744 39.3071 43.7861 50.0638 43.6286 50.9505L43.5994 51.108L44.5503 51.0963L45.4953 51.0788L45.5653 50.6996C45.6061 50.4896 45.6644 50.0988 45.6994 49.8246C45.7344 49.5505 45.7869 49.1421 45.8161 48.9205C45.8453 48.693 45.9269 48.1038 45.9911 47.608C46.0553 47.1121 46.1486 46.4121 46.1953 46.0621C46.5978 43.1513 46.7553 41.9613 46.8078 41.483C46.8428 41.1796 46.8953 40.7655 46.9244 40.573C46.9594 40.3746 46.9828 38.7763 46.9828 37.0088V33.8063L46.7319 33.5613C46.4869 33.3221 46.4753 33.3163 46.0728 33.3163C45.6703 33.3163 45.6644 33.3221 45.4253 33.5613C45.1861 33.8005 45.0753 34.0046 44.6378 34.9496C44.4336 35.3871 44.2178 35.848 43.8036 36.7288C43.5003 37.3763 42.9753 38.4788 42.7944 38.8405C42.5611 39.3071 42.2053 39.4063 41.8436 39.1088C41.6511 38.9513 41.6628 38.7121 41.8844 38.2338C42.2694 37.4055 42.4444 37.0263 42.5903 36.6996C42.6719 36.5246 42.8061 36.2213 42.8994 36.0288C42.9869 35.8363 43.1444 35.4921 43.2494 35.2705C43.3486 35.043 43.4944 34.728 43.5703 34.5705C43.7336 34.2263 44.0719 33.4971 44.3111 32.9663C45.4078 30.5805 45.4894 30.4638 46.2828 30.0555C47.1403 29.618 47.1928 29.6121 49.3161 29.6121C51.3344 29.6121 51.5444 29.6355 52.1628 29.9096C52.6003 30.108 53.0728 30.4696 53.2711 30.7613C53.5103 31.1171 53.7553 31.6071 54.3911 32.9955C54.4786 33.188 54.6361 33.5263 54.7411 33.7538C54.8461 33.9755 55.0036 34.3255 55.0969 34.5238C55.1903 34.728 55.3478 35.0605 55.4411 35.2705C55.5403 35.4805 55.6919 35.813 55.7853 36.0113C55.8786 36.2155 56.0303 36.548 56.1294 36.758C56.2228 36.968 56.3686 37.283 56.4503 37.458C56.5319 37.633 56.6778 37.9538 56.7769 38.1696C56.8761 38.3796 56.9753 38.6305 56.9928 38.7296C57.0453 38.9805 56.8936 39.2313 56.6486 39.3071C56.3453 39.4005 56.1236 39.2371 55.8961 38.7471C55.7969 38.5371 55.5986 38.1113 55.4586 37.808C55.3128 37.5046 55.1028 37.0555 54.9919 36.8163C54.8811 36.5771 54.7119 36.2213 54.6244 36.0288C54.3386 35.4163 53.9769 34.6405 53.7961 34.2496C53.6969 34.0396 53.4986 33.748 53.3528 33.5905L53.0844 33.3163H52.6761C52.2736 33.3163 52.2619 33.3221 52.0169 33.5613L51.7661 33.8063V37.003C51.7661 40.1005 51.7719 40.2405 51.9178 41.3255C51.9994 41.938 52.0986 42.7721 52.1453 43.1746C52.1919 43.5771 52.3378 44.7438 52.4661 45.7705C52.6003 46.7971 52.7344 47.853 52.7636 48.1213C52.7928 48.3896 52.8569 48.8855 52.9094 49.2296C52.9561 49.568 53.0378 50.1513 53.0786 50.5188C53.1253 50.8921 53.1894 51.4055 53.2244 51.6621C53.2536 51.9188 53.2886 52.1988 53.2944 52.2863C53.3061 52.438 53.3353 52.4496 53.9244 52.5896C54.9978 52.8346 55.2078 52.8755 55.2428 52.8405C55.2603 52.823 54.8928 49.7955 54.4261 46.1088C53.9594 42.428 53.5744 39.2255 53.5803 39.0038V38.5955L53.9594 39.3713C54.2803 40.048 54.3853 40.2055 54.7353 40.5555C55.3303 41.1505 55.5169 41.2205 56.5203 41.2205C57.2961 41.2205 57.3544 41.2146 57.6694 41.0571C58.1069 40.8413 58.6669 40.2405 58.7953 39.8438C58.8711 39.6221 58.8886 39.3771 58.8711 38.7296L58.8536 37.8955L57.2261 34.3663C55.0969 29.7463 55.1903 29.9213 54.5194 29.2271C53.8019 28.4805 53.0669 28.0196 52.4136 27.9146C52.2853 27.8913 52.1744 27.8621 52.1744 27.8388C52.1744 27.8155 52.3728 27.6055 52.6178 27.3663C53.1661 26.8296 53.5219 26.2988 53.7319 25.698C53.8894 25.2546 53.8953 25.2021 53.8953 24.0705C53.8953 22.9563 53.8836 22.8863 53.7378 22.478C53.4986 21.813 53.2419 21.4338 52.6119 20.8038C51.9469 20.1388 51.4803 19.853 50.7394 19.6663C50.1094 19.503 48.6044 19.503 47.9861 19.6663ZM50.1619 21.5446C50.3544 21.6146 50.5761 21.7138 50.6578 21.7663C50.7394 21.8246 50.8619 21.883 50.9319 21.9063C51.1419 21.9705 51.5328 22.4605 51.7661 22.9621C52.1803 23.843 52.1686 24.3621 51.7194 25.3305C51.4511 25.9021 50.9378 26.3338 50.1328 26.6546C50.0044 26.7071 49.7069 26.7363 49.3453 26.7421H48.7619L48.1494 26.4213C47.6769 26.1763 47.5019 26.048 47.3503 25.8438C47.0936 25.4938 46.8428 24.9513 46.7261 24.4905C46.6386 24.1463 46.6386 24.0646 46.7144 23.703C46.8719 22.9563 47.3969 22.1221 47.8403 21.9121C47.9628 21.8538 48.1261 21.7605 48.2078 21.708C48.2894 21.6555 48.5111 21.5621 48.7036 21.5038C48.8961 21.4513 49.0828 21.393 49.1119 21.3813C49.2403 21.3346 49.8294 21.428 50.1619 21.5446Z"
        fill={colourFill}
      />
      <path
        d="M48.692 40.8529L48.4586 41.1038L47.8345 45.9746C47.4903 48.6521 47.1986 50.933 47.1753 51.0438L47.1403 51.2363L46.6678 51.2071L46.1953 51.1721L46.7786 51.283C47.5661 51.4346 48.972 51.6446 49.007 51.6096C49.0186 51.598 49.1003 51.0438 49.1878 50.3846C49.2695 49.7255 49.3453 49.1946 49.357 49.2005C49.3745 49.218 49.6661 51.5455 49.6661 51.6621C49.6661 51.703 49.9636 51.7671 50.4711 51.8313C50.9086 51.8838 51.352 51.9421 51.4511 51.9596L51.632 51.9946L51.5853 51.6213C51.562 51.4171 51.5095 51.0438 51.4745 50.7871C51.3461 49.8013 51.072 47.5555 51.0078 46.9955C50.9728 46.6746 50.9203 46.2255 50.8853 46.0038C50.7978 45.3388 50.4945 42.9004 50.4245 42.2704C50.3078 41.1621 50.3136 41.1913 50.0278 40.8879L49.7653 40.6079H49.3511C48.937 40.6079 48.9311 40.6079 48.692 40.8529Z"
        fill={colourFill}
      />
      <path
        d="M29.9964 51.9771C26.7006 52.3096 25.0673 52.5838 21.8998 53.348C20.9256 53.5871 19.1639 54.1705 17.9039 54.678C12.8756 56.708 9.08978 59.963 8.01061 63.1888C7.78895 63.848 7.71895 64.6063 7.85895 64.8221C8.36645 65.5921 11.5689 66.2746 16.8539 66.7413C25.5689 67.5055 39.7323 67.6396 50.5414 67.0621C57.7748 66.6713 62.8323 66.0296 65.1423 65.2071C65.8189 64.9621 66.1631 64.7696 66.3789 64.513C66.5364 64.3321 66.5364 64.3088 66.5131 63.7663C66.4431 62.483 65.6906 61.0363 64.3664 59.6596C61.5139 56.6905 56.3223 54.4038 49.5439 53.1263C47.5606 52.753 45.2798 52.4321 43.2206 52.2455C42.6781 52.1988 41.9431 52.1288 41.5873 52.0938C40.5664 52.0005 36.8156 51.8546 33.5373 51.7846C32.3531 51.7555 32.0789 51.773 29.9964 51.9771ZM36.1798 54.5496C36.7164 54.5788 37.7314 54.6313 38.4373 54.6663C39.1431 54.7071 40.5723 54.8121 41.6164 54.9113C44.5739 55.1855 45.2331 55.2555 45.9331 55.3955C46.1723 55.4363 46.6448 55.518 46.9831 55.5763C47.9398 55.728 48.4064 55.8155 49.2873 55.9963C50.2614 56.2005 51.6323 56.5271 51.7956 56.5913C51.8598 56.6146 52.0989 56.6846 52.3206 56.7371C52.5481 56.7896 52.9564 56.9121 53.2364 57.0055C53.5164 57.0988 53.7964 57.1746 53.8548 57.1746C53.9131 57.1746 53.9831 57.198 54.0123 57.2213C54.0473 57.2505 54.1873 57.303 54.3331 57.3438C54.4789 57.3846 54.6773 57.4546 54.7706 57.4955C54.8698 57.5421 55.0098 57.5946 55.0914 57.6121C55.1731 57.6355 55.3189 57.688 55.4123 57.7288C55.5114 57.7696 55.8264 57.8863 56.1123 57.9913C56.9348 58.2888 59.3323 59.4846 60.0264 59.9455C60.1956 60.0563 60.3473 60.1496 60.3706 60.1496C60.3939 60.1496 60.5631 60.2663 60.7498 60.4121C60.9364 60.558 61.1114 60.6746 61.1289 60.6746C61.1523 60.6746 61.2923 60.7738 61.4439 60.9021C61.5898 61.0246 61.7706 61.153 61.8406 61.1938C62.0389 61.293 63.0831 62.623 63.0831 62.7746C63.0831 62.798 62.9839 62.833 62.8673 62.8505C62.7448 62.868 62.4764 62.9263 62.2664 62.9788C61.3739 63.1888 60.2481 63.3871 59.0931 63.533C58.5798 63.5971 57.9556 63.6788 57.7164 63.708C57.1973 63.778 55.1964 63.9705 54.1289 64.058C53.7148 64.0871 53.0439 64.1396 52.6414 64.1746C49.4739 64.4313 43.3139 64.6646 37.9414 64.7346C31.9564 64.8163 23.0606 64.513 18.0206 64.058C16.5681 63.9238 14.5264 63.6963 14.0423 63.6146C13.7623 63.568 13.3073 63.4921 13.0331 63.4455C12.3098 63.3288 11.3939 63.1421 11.3589 63.1071C11.3181 63.0605 11.5048 62.7396 11.7906 62.3605C11.9306 62.1855 12.0414 62.0105 12.0414 61.9813C12.0414 61.8763 13.0506 60.8905 13.4998 60.5463C14.0014 60.173 15.6873 59.0413 15.7514 59.0413C15.7748 59.0413 15.9498 58.9421 16.1481 58.8196C16.4923 58.6038 17.7698 57.9621 18.3706 57.7055C18.5339 57.6355 18.7264 57.5421 18.8081 57.5013C18.8898 57.4605 19.0589 57.3905 19.1873 57.3496C19.3156 57.3088 19.5256 57.2271 19.6539 57.1746C20.0273 57.0113 20.3306 56.9005 20.6748 56.7896C20.8498 56.7371 21.1298 56.6438 21.2873 56.5855C21.4506 56.533 21.8298 56.4163 22.1331 56.3288C22.4364 56.2471 22.7456 56.148 22.8214 56.1188C22.8973 56.0896 23.0081 56.0663 23.0723 56.0663C23.1306 56.0663 23.2298 56.043 23.2881 56.0138C23.5739 55.868 24.2798 55.7396 26.9164 55.3371C28.5031 55.0921 29.8448 54.8821 29.8914 54.8705C30.2006 54.7771 33.1814 54.5613 34.9256 54.503C35.0773 54.4971 35.6431 54.5146 36.1798 54.5496Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;
