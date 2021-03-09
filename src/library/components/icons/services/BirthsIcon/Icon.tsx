
import React from "react";

import { IconProps } from "../Icon.types";

const ServiceIcon: React.FC<IconProps> = ({ colourFill }) => {

    return (
        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99487 12.0012C3.72192 12.0271 3.46847 12.1551 3.28437 12.3598C3.10026 12.5645 2.99883 12.8313 3.00001 13.1076V58.7102C3.00001 61.619 5.35857 64 8.24876 64H44.2624C47.1526 64 49.5111 61.619 49.5111 58.7102V56.8087C49.5111 56.5153 49.3954 56.2339 49.1896 56.0264C48.9837 55.8189 48.7045 55.7024 48.4133 55.7023H45.12V46.2983C45.1545 46.2983 45.1885 46.2986 45.2229 46.2983L46.801 52.1239C46.8525 52.3103 46.9516 52.4798 47.0884 52.6155C47.2252 52.7513 47.3949 52.8485 47.5807 52.8974C47.7664 52.9464 47.9616 52.9455 48.1468 52.8947C48.332 52.8439 48.5008 52.745 48.6363 52.608L50.4202 50.8102L52.5815 51.2423C52.763 51.2798 52.9509 51.2704 53.1278 51.2149C53.3047 51.1595 53.4648 51.0599 53.5932 50.9253C53.7216 50.7907 53.8142 50.6255 53.8622 50.4452C53.9102 50.2649 53.9122 50.0752 53.8679 49.8939L52.1869 43.2731C53.9211 41.4777 55 39.0357 55 36.3411C55 30.855 50.5636 26.3839 45.12 26.3839V13.1076C45.12 12.8142 45.0043 12.5328 44.7984 12.3253C44.5926 12.1178 44.3134 12.0012 44.0222 12.0012H4.09779C4.0635 11.9996 4.02916 11.9996 3.99487 12.0012ZM5.19557 14.2139H42.9244V26.6432C38.5328 27.6537 35.24 31.6154 35.24 36.3411C35.24 39.0357 36.3189 41.4777 38.0531 43.2731L36.3721 49.8939C36.3278 50.0752 36.3298 50.2649 36.3778 50.4452C36.4258 50.6255 36.5184 50.7907 36.6468 50.9253C36.7752 51.0599 36.9353 51.1595 37.1122 51.2149C37.2891 51.2704 37.4771 51.2798 37.6586 51.2423L39.8198 50.8102L41.6037 52.608C41.7726 52.7815 41.9934 52.8941 42.2321 52.9284C42.4708 52.9628 42.7141 52.917 42.9244 52.7981V55.7023H12.3311C12.04 55.7024 11.7608 55.8189 11.5549 56.0264C11.349 56.2339 11.2334 56.5153 11.2333 56.8087V58.7102C11.2329 58.7275 11.2329 58.7448 11.2333 58.7621C11.3018 60.3903 10.0473 61.6805 8.42029 61.77C8.38573 61.7741 8.35139 61.7799 8.31737 61.7873H8.24876C6.53282 61.7873 5.19557 60.4272 5.19557 58.7102V14.2139ZM8.93487 17.533C8.79069 17.5398 8.64924 17.5751 8.51862 17.637C8.38799 17.6989 8.27073 17.7861 8.17355 17.8936C8.07637 18.0012 8.00116 18.127 7.95222 18.2638C7.90328 18.4007 7.88157 18.5459 7.88833 18.6912C7.89509 18.8365 7.93018 18.9791 7.99161 19.1107C8.05304 19.2424 8.13959 19.3605 8.24633 19.4584C8.35307 19.5563 8.47791 19.6321 8.6137 19.6814C8.7495 19.7307 8.89361 19.7526 9.03779 19.7457H39.0822C39.2277 19.7478 39.3721 19.7207 39.5071 19.666C39.6421 19.6114 39.765 19.5302 39.8686 19.4273C39.9722 19.3243 40.0544 19.2017 40.1106 19.0664C40.1667 18.9311 40.1956 18.786 40.1956 18.6394C40.1956 18.4927 40.1667 18.3476 40.1106 18.2123C40.0544 18.0771 39.9722 17.9544 39.8686 17.8515C39.765 17.7485 39.6421 17.6674 39.5071 17.6127C39.3721 17.558 39.2277 17.5309 39.0822 17.533H9.03779C9.0035 17.5314 8.96916 17.5314 8.93487 17.533ZM8.93487 24.1711C8.79069 24.1779 8.64924 24.2133 8.51862 24.2751C8.38799 24.337 8.27073 24.4242 8.17355 24.5318C8.07637 24.6393 8.00116 24.7651 7.95222 24.902C7.90328 25.0388 7.88157 25.1841 7.88833 25.3294C7.89509 25.4747 7.93018 25.6172 7.99161 25.7489C8.05304 25.8805 8.13959 25.9986 8.24633 26.0966C8.35307 26.1945 8.47791 26.2703 8.6137 26.3196C8.7495 26.3688 8.89361 26.3907 9.03779 26.3839H39.0822C39.2277 26.3859 39.3721 26.3588 39.5071 26.3042C39.6421 26.2495 39.765 26.1683 39.8686 26.0654C39.9722 25.9625 40.0544 25.8398 40.1106 25.7045C40.1667 25.5693 40.1956 25.4241 40.1956 25.2775C40.1956 25.1309 40.1667 24.9857 40.1106 24.8505C40.0544 24.7152 39.9722 24.5925 39.8686 24.4896C39.765 24.3867 39.6421 24.3055 39.5071 24.2508C39.3721 24.1962 39.2277 24.1691 39.0822 24.1711H9.03779C9.0035 24.1695 8.96916 24.1695 8.93487 24.1711ZM45.12 28.5966C49.377 28.5966 52.8044 32.0508 52.8044 36.3411C52.8044 40.6314 49.377 44.0856 45.12 44.0856C40.863 44.0856 37.4356 40.6314 37.4356 36.3411C37.4356 32.0508 40.863 28.5966 45.12 28.5966ZM8.93487 30.8093C8.79069 30.8161 8.64924 30.8514 8.51862 30.9133C8.38799 30.9752 8.27073 31.0624 8.17355 31.1699C8.07637 31.2775 8.00116 31.4033 7.95222 31.5401C7.90328 31.677 7.88157 31.8222 7.88833 31.9675C7.89509 32.1128 7.93018 32.2554 7.99161 32.387C8.05304 32.5186 8.13959 32.6368 8.24633 32.7347C8.35307 32.8326 8.47791 32.9084 8.6137 32.9577C8.7495 33.007 8.89361 33.0288 9.03779 33.022H24.4067C24.5521 33.0241 32.7855 32.997 32.9204 32.9423C33.0554 32.8876 33.1783 32.8065 33.2819 32.7035C33.3855 32.6006 33.4678 32.4779 33.5239 32.3427C33.5801 32.2074 33.609 32.0623 33.609 31.9156C33.609 31.769 33.5801 31.6239 33.5239 31.4886C33.4678 31.3533 33.3855 31.2307 33.2819 31.1277C33.1783 31.0248 33.0554 30.9436 32.9204 30.889C32.7855 30.8343 24.5521 30.8072 24.4067 30.8093H9.03779C9.0035 30.8077 8.96916 30.8077 8.93487 30.8093ZM45.12 30.8093C42.1016 30.8093 39.6311 33.299 39.6311 36.3411C39.6311 39.3831 42.1016 41.8729 45.12 41.8729C48.1384 41.8729 50.6089 39.3831 50.6089 36.3411C50.6089 33.299 48.1384 30.8093 45.12 30.8093ZM45.12 33.022C46.9519 33.022 48.4133 34.4949 48.4133 36.3411C48.4133 38.1873 46.9519 39.6601 45.12 39.6601C43.2881 39.6601 41.8267 38.1873 41.8267 36.3411C41.8267 34.4949 43.2881 33.022 45.12 33.022ZM8.93487 37.4474C8.79069 37.4542 8.64924 37.4896 8.51862 37.5514C8.38799 37.6133 8.27073 37.7005 8.17355 37.8081C8.07637 37.9156 8.00116 38.0414 7.95222 38.1783C7.90328 38.3151 7.88157 38.4604 7.88833 38.6057C7.89509 38.751 7.93018 38.8935 7.99161 39.0251C8.05304 39.1568 8.13959 39.2749 8.24633 39.3729C8.35307 39.4708 8.47791 39.5465 8.6137 39.5958C8.7495 39.6451 8.89361 39.667 9.03779 39.6601H24.4067C24.5521 39.6622 32.7855 39.6351 32.9204 39.5805C33.0554 39.5258 33.1783 39.4446 33.2819 39.3417C33.3855 39.2387 33.4678 39.1161 33.5239 38.9808C33.5801 38.8456 33.609 38.7004 33.609 38.5538C33.609 38.4072 33.5801 38.262 33.5239 38.1267C33.4678 37.9915 33.3855 37.8688 33.2819 37.7659C33.1783 37.6629 33.0554 37.5818 32.9204 37.5271C32.7855 37.4724 24.5521 37.4454 24.4067 37.4474H9.03779C9.0035 37.4458 8.96916 37.4458 8.93487 37.4474ZM8.93487 44.0856C8.79069 44.0924 8.64924 44.1277 8.51862 44.1896C8.38799 44.2515 8.27073 44.3387 8.17355 44.4462C8.07637 44.5538 8.00116 44.6796 7.95222 44.8164C7.90328 44.9533 7.88157 45.0985 7.88833 45.2438C7.89509 45.3891 7.93018 45.5317 7.99161 45.6633C8.05304 45.7949 8.13959 45.9131 8.24633 46.011C8.35307 46.1089 8.47791 46.1847 8.6137 46.234C8.7495 46.2833 8.89361 46.3051 9.03779 46.2983H33.5933C33.7388 46.3004 33.8832 46.2733 34.0182 46.2186C34.1532 46.1639 34.2761 46.0828 34.3797 45.9798C34.4833 45.8769 34.5655 45.7542 34.6217 45.619C34.6778 45.4837 34.7067 45.3385 34.7067 45.1919C34.7067 45.0453 34.6778 44.9002 34.6217 44.7649C34.5655 44.6296 34.4833 44.507 34.3797 44.404C34.2761 44.3011 34.1532 44.2199 34.0182 44.1653C33.8832 44.1106 33.7388 44.0835 33.5933 44.0856H9.03779C9.0035 44.084 8.96916 44.084 8.93487 44.0856ZM39.9227 44.8116C40.8058 45.365 41.7832 45.7706 42.8215 46.0217L41.8095 49.6865L40.9519 48.8222C40.8229 48.6944 40.6646 48.6007 40.491 48.5494C40.3175 48.4982 40.134 48.4909 39.957 48.5283L38.9278 48.7357L39.9227 44.8116ZM50.3173 44.8116L51.3122 48.7357L50.283 48.5283C50.106 48.4909 49.9225 48.4982 49.749 48.5494C49.5754 48.6007 49.4171 48.6944 49.2881 48.8222L48.4305 49.6865L47.4185 46.0217C48.4568 45.7706 49.4342 45.365 50.3173 44.8116ZM8.93487 50.7237C8.79069 50.7305 8.64924 50.7658 8.51862 50.8277C8.38799 50.8896 8.27073 50.9768 8.17355 51.0844C8.07637 51.1919 8.00116 51.3177 7.95222 51.4546C7.90328 51.5914 7.88157 51.7366 7.88833 51.8819C7.89509 52.0272 7.93018 52.1698 7.99161 52.3014C8.05304 52.4331 8.13959 52.5512 8.24633 52.6491C8.35307 52.7471 8.47791 52.8228 8.6137 52.8721C8.7495 52.9214 8.89361 52.9433 9.03779 52.9364H33.5933C33.7388 52.9385 33.8832 52.9114 34.0182 52.8567C34.1532 52.8021 34.2761 52.7209 34.3797 52.618C34.4833 52.515 34.5655 52.3924 34.6217 52.2571C34.6778 52.1218 34.7067 51.9767 34.7067 51.8301C34.7067 51.6835 34.6778 51.5383 34.6217 51.403C34.5655 51.2678 34.4833 51.1451 34.3797 51.0422C34.2761 50.9392 34.1532 50.8581 34.0182 50.8034C33.8832 50.7487 33.7388 50.7216 33.5933 50.7237H9.03779C9.0035 50.7221 8.96916 50.7221 8.93487 50.7237ZM13.4289 57.915H47.3156V58.7102C47.3156 60.4272 45.9783 61.7873 44.2624 61.7873H12.3997C13.035 60.9118 13.466 59.8803 13.4289 58.7102C13.4283 58.6925 13.4297 58.6761 13.4289 58.6584V57.915Z" fill={colourFill} />
</svg>


    )
} 


export default ServiceIcon;

