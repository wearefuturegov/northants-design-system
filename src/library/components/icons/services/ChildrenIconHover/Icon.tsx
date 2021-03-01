
import React from "react";

import { IconProps } from "../Icon.types";

const ServiceIcon: React.FC<IconProps> = ({ colourFill }) => {

    return (
        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.4962 10C34.4586 10 31.9962 12.4624 31.9962 15.5C31.9962 18.5376 34.4586 21 37.4962 21C40.5338 21 42.9962 18.5376 42.9962 15.5C42.9909 12.4646 40.5315 10.0053 37.4962 10ZM40.9862 22.13C38.8182 23.2829 36.2207 23.2904 34.0462 22.15C33.0141 22.7788 32.055 23.5199 31.1862 24.36C33.3038 25.0529 34.9635 26.7151 35.6533 28.8338C36.343 30.9525 35.98 33.2732 34.6762 35.08C36.1462 36.48 38.5562 39.63 38.9362 45.4C39.1362 45.3201 39.3262 45.22 39.5162 45.16C41.1639 44.4992 42.6963 43.5811 44.0562 42.44C44.8162 36.88 42.1062 30.46 42.0762 30.39C41.9369 30.0613 41.9835 29.6833 42.1984 29.3983C42.4134 29.1132 42.7641 28.9646 43.1184 29.0083C43.4728 29.0519 43.7768 29.2813 43.9162 29.61C45.3824 33.1921 46.156 37.0197 46.1962 40.89C47.4082 40.3077 48.8138 40.2822 50.0462 40.82C50.3862 28.34 42.8962 23.23 40.9862 22.13ZM33.2862 36.52C30.7666 38.4934 27.2258 38.4934 24.7062 36.52C23.4661 37.71 21.0762 40.78 21.0062 46.72C21.2929 46.9909 21.5602 47.2816 21.8062 47.59C22.0588 47.9163 22.2926 48.2569 22.5062 48.61C22.9125 46.3429 23.844 44.2024 25.2262 42.36C25.454 42.0822 25.8132 41.9478 26.1674 42.0078C26.5217 42.0678 26.8166 42.3129 26.9403 42.6502C27.0641 42.9875 26.9976 43.3652 26.7662 43.64C24.0262 46.97 23.9962 52.94 23.9962 53C23.9877 53.0675 23.9743 53.1344 23.9562 53.2C23.9862 53.51 23.9962 53.82 23.9962 54.14V56C24.7071 56.0019 25.3629 56.3831 25.7162 57H32.2762C32.6295 56.3831 33.2853 56.0019 33.9962 56V54.14C33.9962 53.82 34.0062 53.51 34.0362 53.2C34.0181 53.1344 34.0047 53.0675 33.9962 53C33.9962 52.94 33.9562 46.96 31.2262 43.64C30.8771 43.2144 30.937 42.5868 31.3603 42.2349C31.7836 41.8831 32.4116 41.9389 32.7662 42.36C34.1484 44.2024 35.0799 46.3429 35.4862 48.61C35.6998 48.2569 35.9335 47.9163 36.1862 47.59C36.4322 47.2816 36.6995 46.9909 36.9862 46.72C36.9162 40.78 34.5262 37.71 33.2862 36.52ZM28.9962 26C26.2348 26 23.9962 28.2386 23.9962 31C23.9962 33.7614 26.2348 36 28.9962 36C31.7576 36 33.9962 33.7614 33.9962 31C33.9952 28.239 31.7572 26.001 28.9962 26ZM20.4962 10C17.4586 10 14.9962 12.4624 14.9962 15.5C14.9962 18.5376 17.4586 21 20.4962 21C23.5338 21 25.9962 18.5376 25.9962 15.5C25.9909 12.4646 23.5315 10.0053 20.4962 10ZM26.8462 24.34C25.9713 23.507 25.0129 22.7664 23.9862 22.13C21.8147 23.2829 19.2143 23.2904 17.0362 22.15C15.0862 23.28 7.66619 28.4 8.01619 40.81C9.22875 40.2902 10.6067 40.3194 11.7962 40.89C11.8363 37.0197 12.61 33.1921 14.0762 29.61C14.2155 29.2813 14.5196 29.0519 14.8739 29.0083C15.2283 28.9646 15.579 29.1132 15.7939 29.3983C16.0089 29.6833 16.0555 30.0613 15.9162 30.39C15.8862 30.4599 13.1862 36.89 13.9362 42.44C15.2943 43.5785 16.8229 44.4964 18.4662 45.16C18.6662 45.22 18.8562 45.32 19.0562 45.4C19.4362 39.63 21.8462 36.48 23.3162 35.08C22.0081 33.266 21.6472 30.9355 22.3456 28.8109C23.0439 26.6862 24.717 25.0242 26.8462 24.34ZM20.2462 48.84C19.636 48.0219 18.7975 47.4026 17.8362 47.06C15.874 46.2828 14.053 45.1882 12.4462 43.82C12.3976 43.7858 12.3509 43.749 12.3062 43.7099C12.0262 43.4899 11.7462 43.2599 11.4562 43.0099C10.5198 42.2404 9.1759 42.2196 8.21619 42.9599C8.57606 43.5019 8.99165 44.0046 9.45619 44.46L14.0162 49.03C14.2034 49.2168 14.3086 49.4705 14.3086 49.735C14.3086 49.9995 14.2034 50.2532 14.0162 50.44C13.8317 50.6317 13.5772 50.74 13.3112 50.74C13.0452 50.74 12.7906 50.6317 12.6062 50.44L8.03619 45.88C6.96814 44.807 6.11306 43.5413 5.51619 42.15L3.27619 36.93C3.09017 36.4931 2.66105 36.2096 2.18619 36.21C1.78261 36.2109 1.40706 36.4165 1.18882 36.756C0.970586 37.0955 0.93947 37.5225 1.10619 37.89L5.02619 46.52C5.45413 47.4663 6.05048 48.327 6.78619 49.06L13.7262 56H21.9962V54.14C22.0289 52.2263 21.412 50.358 20.2462 48.84ZM12.9962 58V66H23.9962V58H12.9962ZM21.9962 63H20.9962C20.4439 63 19.9962 62.5523 19.9962 62C19.9962 61.4477 20.4439 61 20.9962 61H21.9962C22.5485 61 22.9962 61.4477 22.9962 62C22.9962 62.5523 22.5485 63 21.9962 63ZM33.9962 58V66H44.9962V58H33.9962ZM36.9962 63H35.9962C35.4439 63 34.9962 62.5523 34.9962 62C34.9962 61.4477 35.4439 61 35.9962 61H36.9962C37.5485 61 37.9962 61.4477 37.9962 62C37.9962 62.5523 37.5485 63 36.9962 63ZM56.8062 36.76C56.5917 36.4147 56.2127 36.2063 55.8062 36.2099C55.3313 36.2096 54.9022 36.493 54.7162 36.93L52.4762 42.1499C51.8793 43.5413 51.0242 44.8069 49.9562 45.88L45.3862 50.4399C45.2017 50.6316 44.9472 50.7399 44.6812 50.7399C44.4152 50.7399 44.1606 50.6316 43.9762 50.4399C43.789 50.2531 43.6837 49.9995 43.6837 49.735C43.6837 49.4704 43.789 49.2168 43.9762 49.0299L48.5362 44.4599C49.0009 44.0011 49.4164 43.495 49.7762 42.95C48.814 42.213 47.4704 42.2378 46.5362 43.0099C46.2462 43.2599 45.9662 43.4899 45.6862 43.7099C45.6415 43.749 45.5947 43.7858 45.5462 43.82C43.9367 45.1846 42.1164 46.2789 40.1562 47.06C39.1948 47.4026 38.3563 48.0219 37.7462 48.84C36.5804 50.358 35.9635 52.2263 35.9962 54.14V56H44.2662L51.2062 49.06C51.9419 48.327 52.5382 47.4663 52.9662 46.52L56.8862 37.89C57.0564 37.5248 57.0262 37.0976 56.8062 36.76Z" fill={colourFill}/>
</svg>

    )
} 


export default ServiceIcon;

