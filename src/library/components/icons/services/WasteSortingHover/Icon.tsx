import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.168 13.785c-.978.978-1.78 1.804-1.78 1.829 0 .03.807.855 1.795 1.844l1.795 1.794 1.794-1.794c.988-.989 1.795-1.815 1.795-1.844 0-.05-3.54-3.614-3.59-3.614-.014 0-.825.802-1.809 1.785ZM32.997 19.764c-.541 1.273-.989 2.33-.989 2.36 0 .039 4.558 2.02 4.656 2.02.045 0 2.055-4.66 2.026-4.69-.03-.025-4.528-1.957-4.622-1.982-.063-.02-.28.443-1.071 2.291ZM10.065 19.887a.895.895 0 0 0-.53.496c-.084.177-.094.344-.094 1.74 0 1.013.02 1.608.054 1.731.069.222.35.502.58.58.394.128.826 0 1.067-.32l.143-.181.014-1.096.015-1.097 1.067-.015c1.028-.014 1.072-.02 1.259-.132.103-.064.25-.217.324-.335.128-.201.138-.206.167-.093.04.167.384.457.62.521.128.034.732.05 1.736.04 1.76-.015 1.804-.025 2.055-.428.113-.177.142-.276.142-.507 0-.472-.206-.772-.634-.914-.221-.079-3.048-.079-3.314-.005-.226.059-.565.354-.605.516-.03.113-.039.108-.167-.093a1.243 1.243 0 0 0-.324-.335c-.192-.118-.197-.118-1.79-.128-1.268-.01-1.637 0-1.785.055ZM41.424 19.877c-.404.142-.615.452-.615.9 0 .457.212.757.634.9.222.078 3.049.078 3.314.004.226-.059.566-.354.605-.516.03-.113.04-.108.167.093.074.118.221.27.325.335.186.113.23.118 1.258.132l1.067.015.015 1.097.015 1.096.142.182c.428.565 1.308.462 1.608-.192.084-.177.093-.344.093-1.77 0-1.75-.014-1.829-.339-2.104-.26-.221-.432-.236-2.11-.221-1.548.014-1.558.014-1.75.132-.103.064-.25.217-.324.335-.128.201-.138.206-.167.093-.04-.162-.379-.457-.605-.516-.25-.069-3.132-.064-3.333.005ZM25.912 24.666c-.718.412-1.298.771-1.293.791.024.113 1.504 2.62 1.548 2.62.064 0 2.646-1.49 2.646-1.524-.005-.063-1.51-2.625-1.554-2.635-.025-.005-.63.33-1.347.748ZM10.006 25.59c-.196.083-.413.31-.496.506-.054.128-.07.644-.07 2.557 0 2.237.01 2.414.094 2.6.143.316.394.478.772.502.187.015.379-.005.462-.039.177-.074.477-.398.517-.55.014-.065.02-1.235.014-2.602l-.014-2.488-.143-.181c-.25-.33-.767-.468-1.136-.305ZM48.696 25.614c-.114.05-.266.177-.345.28l-.142.183-.015 2.487c-.005 1.367 0 2.537.015 2.601.04.153.339.477.516.551.084.034.275.054.462.04.384-.025.63-.188.777-.512.089-.202.093-.34.079-2.665l-.015-2.448-.118-.177a.973.973 0 0 0-1.214-.34ZM29.309 30.084a1.145 1.145 0 0 0-.32.27l-.152.192-.015 1.691c-.014 1.588-.01 1.701.084 1.873.167.335.457.507.84.507.384 0 .674-.172.841-.507.094-.172.099-.285.084-1.873l-.015-1.691-.152-.192c-.202-.25-.428-.359-.757-.359-.163 0-.34.034-.438.088ZM10.065 32.871a.873.873 0 0 0-.53.492c-.084.182-.094.369-.094 2.581 0 2.208.01 2.4.093 2.582a.925.925 0 0 0 1.141.506c.256-.084.433-.226.536-.433.093-.186.098-.3.098-2.655s-.005-2.468-.098-2.655c-.103-.206-.28-.349-.536-.432-.216-.074-.379-.07-.61.014ZM48.799 32.857a.896.896 0 0 0-.517.432c-.093.187-.098.3-.098 2.655 0 2.375.005 2.468.098 2.655.34.669 1.362.62 1.677-.073.084-.182.093-.374.093-2.582 0-2.207-.01-2.399-.093-2.58a.946.946 0 0 0-1.16-.507ZM29.329 34.946a.854.854 0 0 0-.423.418c-.089.172-.093.315-.093 2.006 0 1.692.004 1.834.093 2.006.167.33.457.502.84.502.384 0 .674-.172.841-.502.089-.172.094-.314.094-2.006 0-1.932-.005-1.962-.241-2.232-.226-.26-.797-.359-1.111-.192ZM9.942 40.227a.977.977 0 0 0-.344.305l-.132.196-.015 1.642c-.015 1.53-.005 1.652.078 1.854.143.31.394.487.753.511.368.03.496-.005.708-.196.324-.28.32-.256.32-2.09 0-1.863 0-1.863-.36-2.148-.255-.202-.693-.236-1.008-.074ZM29.329 40.207a.844.844 0 0 0-.423.423c-.094.172-.098.285-.084 1.873l.015 1.691.152.192c.202.251.428.36.758.36.329 0 .555-.109.757-.36l.152-.192.015-1.69c.015-1.8.01-1.83-.231-2.105-.226-.26-.797-.36-1.111-.192ZM48.7 40.197a1.717 1.717 0 0 0-.265.187c-.241.221-.25.31-.25 2.075 0 1.824-.006 1.8.319 2.08.211.191.339.226.708.196.354-.024.61-.196.747-.501.084-.182.093-.344.093-1.795 0-1.529-.005-1.608-.103-1.814-.147-.305-.418-.467-.801-.492-.212-.01-.344.01-.448.064ZM5.9 49.023c-.142.329-.245.604-.235.614.015.015 2.149.02 4.744.015l4.72-.015-.25-.59-.256-.59-4.228-.014-4.233-.01-.261.59ZM25.474 48.54c-.025.065-.133.32-.246.576a4.427 4.427 0 0 0-.201.507c0 .02 2.124.039 4.72.039 2.787 0 4.72-.02 4.72-.044 0-.025-.109-.295-.241-.605l-.236-.556-4.239-.014-4.233-.01-.044.108ZM44.757 48.713c-.069.157-.187.428-.26.605l-.138.32 4.72.014c2.6.005 4.735 0 4.75-.015.01-.01-.094-.285-.237-.614l-.26-.59h-8.447l-.128.28ZM3 51.874v.394h14.8v-.787H3v.393ZM22.372 51.874v.394h14.75v-.787h-14.75v.393ZM41.694 51.874v.394h14.8v-.787h-14.8v.393ZM5.262 54.146c-.005.034.157 2.084.354 4.548l.359 4.489H14.79l.03-.285c.02-.153.172-2.085.349-4.288.172-2.203.33-4.125.344-4.267l.03-.256h-5.139c-4.08 0-5.142.014-5.142.059ZM24.614 54.269c.03.221.708 8.732.708 8.84 0 .064.526.074 4.425.074s4.425-.01 4.425-.074c0-.108.678-8.619.708-8.84l.02-.182H24.593l.02.182ZM43.98 54.343c.015.142.173 2.064.345 4.267.177 2.203.329 4.135.349 4.288l.03.285H53.518l.359-4.49c.196-2.462.359-4.513.354-4.547 0-.044-1.062-.06-5.143-.06H43.95l.03.257Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;
