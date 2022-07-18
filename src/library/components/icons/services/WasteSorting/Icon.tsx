import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26.422 10.092c-.128.064-1.126 1.027-2.763 2.665l-2.562 2.571-.059.27c-.123.566-.246.409 2.62 3.285 1.412 1.416 2.65 2.616 2.75 2.67.22.113.623.123.845.02.083-.04 1.317-1.24 2.743-2.67 2.69-2.695 2.695-2.7 2.695-3.083 0-.384-.005-.393-2.67-3.063-1.701-1.701-2.636-2.601-2.768-2.665a.982.982 0 0 0-.831 0Zm2.203 3.973 1.755 1.755-1.77 1.77-1.77 1.77-1.77-1.77-1.77-1.77 1.755-1.755c.969-.969 1.77-1.76 1.785-1.76.015 0 .816.791 1.785 1.76ZM34.962 15.633a.958.958 0 0 0-.275.212c-.064.078-.752 1.622-1.53 3.441-1.273 2.975-1.415 3.329-1.41 3.565 0 .29.083.482.29.668.083.08 1.4.684 3.382 1.544 2.813 1.225 3.285 1.416 3.545 1.436.335.03.502-.034.713-.266.133-.137 2.92-6.465 3-6.8.053-.23-.035-.609-.188-.79-.167-.198-.122-.178-3.707-1.736-2.832-1.23-3.151-1.357-3.392-1.357-.148 0-.34.039-.428.083Zm3.275 3.132 2.266.973-.113.256c-.059.138-.501 1.17-.988 2.296l-.875 2.04-1.775-.752-2.301-.983-.526-.226.064-.152c.034-.084.457-1.072.939-2.193.477-1.121.89-2.09.914-2.154.025-.064.064-.108.089-.098.02.01 1.062.452 2.306.993ZM11.928 20.093a.896.896 0 0 0-.532.496c-.083.177-.093.344-.093 1.74 0 1.014.02 1.608.054 1.731.069.222.35.502.58.58.394.128.826 0 1.067-.32l.143-.181.015-1.096.014-1.097 1.067-.015c1.028-.014 1.072-.02 1.259-.132.103-.064.25-.217.324-.335.128-.201.138-.206.168-.093.039.167.383.457.62.521.127.035.732.05 1.735.04 1.76-.015 1.804-.025 2.055-.428.113-.177.142-.276.142-.507 0-.472-.206-.772-.634-.914-.221-.079-3.048-.079-3.314-.005-.226.059-.565.354-.604.516-.03.113-.04.108-.168-.093a1.238 1.238 0 0 0-.324-.335c-.192-.118-.197-.118-1.79-.128-1.268-.01-1.637 0-1.784.055ZM43.286 20.083c-.403.142-.615.452-.615.9 0 .457.212.757.635.9.22.078 3.048.078 3.314.004.226-.059.565-.354.604-.516.03-.113.04-.108.167.093.074.118.222.27.325.335.187.113.231.118 1.259.132l1.066.015.015 1.097.015 1.096.143.182c.427.565 1.307.462 1.607-.192.084-.177.094-.344.094-1.77 0-1.75-.015-1.829-.34-2.104-.26-.221-.432-.236-2.109-.221-1.549.014-1.558.014-1.75.132a1.24 1.24 0 0 0-.325.335c-.127.201-.137.206-.167.093-.04-.162-.378-.457-.604-.516-.251-.069-3.132-.064-3.334.005ZM29.072 22.035c-.108.049-1.165.649-2.35 1.332-2.463 1.426-2.414 1.387-2.414 1.962l.005.324 1.307 2.262c.95 1.637 1.357 2.301 1.485 2.404.212.177.585.222.895.118.3-.108 4.435-2.502 4.597-2.665.182-.186.256-.422.231-.742-.02-.231-.152-.487-1.263-2.414a99.244 99.244 0 0 0-1.367-2.326c-.246-.32-.733-.432-1.126-.255Zm.85 3.48c.389.655.704 1.2.704 1.215 0 .015-.536.33-1.19.698-.66.374-1.244.708-1.298.743-.104.064-.133.03-.836-1.2-.403-.693-.733-1.283-.733-1.303 0-.02.576-.369 1.279-.777 1.12-.644 1.283-.722 1.322-.649.025.045.364.62.752 1.274ZM11.868 25.796c-.196.083-.412.31-.496.506-.054.128-.069.644-.069 2.557 0 2.237.01 2.414.093 2.6.143.316.394.478.772.502.187.015.379-.005.463-.039.177-.074.476-.398.516-.55.015-.065.02-1.235.015-2.602l-.015-2.487-.143-.182c-.25-.33-.767-.467-1.136-.305ZM50.558 25.82c-.113.05-.266.177-.344.28l-.143.183-.015 2.487c-.005 1.367 0 2.537.015 2.601.04.153.34.477.516.551.084.034.276.054.462.04.384-.025.63-.188.777-.512.089-.202.094-.34.079-2.665l-.015-2.448-.118-.177a.973.973 0 0 0-1.214-.34ZM31.171 30.29a1.145 1.145 0 0 0-.32.27l-.152.192-.014 1.691c-.015 1.588-.01 1.702.083 1.874.167.334.457.506.841.506.383 0 .674-.172.84-.506.094-.172.1-.286.084-1.874l-.014-1.691-.153-.192c-.201-.25-.428-.359-.757-.359-.162 0-.34.035-.438.089ZM11.928 33.077a.874.874 0 0 0-.532.492c-.083.182-.093.369-.093 2.581 0 2.208.01 2.4.093 2.582a.925.925 0 0 0 1.141.506c.256-.084.433-.226.536-.433.093-.187.098-.3.098-2.655s-.005-2.468-.098-2.655c-.103-.206-.28-.349-.536-.432-.216-.074-.378-.07-.61.014ZM50.661 33.063a.896.896 0 0 0-.516.432c-.094.187-.099.3-.099 2.655 0 2.375.005 2.469.099 2.655.339.67 1.362.62 1.676-.073.084-.182.094-.374.094-2.582 0-2.207-.01-2.399-.094-2.58a.946.946 0 0 0-1.16-.507ZM31.191 35.152a.854.854 0 0 0-.423.418c-.088.172-.093.315-.093 2.006 0 1.692.005 1.834.093 2.006.167.33.457.502.841.502.383 0 .674-.172.84-.502.09-.172.094-.314.094-2.006 0-1.932-.005-1.962-.24-2.232-.227-.26-.797-.359-1.112-.192ZM11.805 40.433a.978.978 0 0 0-.345.305l-.132.196-.015 1.643c-.015 1.529-.005 1.651.079 1.853.142.31.393.487.752.511.369.03.496-.005.708-.196.324-.28.32-.256.32-2.09 0-1.863 0-1.863-.36-2.148-.255-.202-.693-.236-1.007-.074ZM31.191 40.413a.844.844 0 0 0-.423.423c-.093.172-.098.285-.083 1.873l.014 1.691.153.192c.201.251.428.36.757.36.33 0 .556-.109.757-.36l.153-.191.014-1.692c.015-1.8.01-1.829-.23-2.104-.227-.26-.797-.36-1.112-.192ZM50.563 40.403a1.724 1.724 0 0 0-.266.187c-.24.221-.25.31-.25 2.075 0 1.824-.005 1.8.319 2.08.211.192.34.226.708.196.354-.024.61-.196.747-.501.084-.182.094-.344.094-1.795 0-1.529-.005-1.607-.103-1.814-.148-.305-.418-.467-.802-.492-.211-.01-.344.01-.447.064ZM7.05 46.864a1.14 1.14 0 0 0-.305.206c-.059.064-.359.703-.663 1.421l-.56 1.303-.935.025c-.915.024-.94.03-1.136.157-.108.074-.25.216-.314.32-.118.182-.118.206-.133 1.671-.015 1.598.005 1.775.221 2.036.24.28.443.34 1.254.34h.723l.024.156c.015.089.202 2.306.418 4.932.216 2.62.418 4.887.443 5.035.063.324.245.575.516.698.192.088.432.093 5.61.093 3.495 0 5.472-.02 5.585-.05.231-.063.57-.427.61-.648.03-.177.81-9.863.81-10.08v-.132l.827-.015c.806-.014.836-.02 1.027-.147a.978.978 0 0 0 .305-.344c.099-.207.104-.29.104-1.75 0-1.707-.005-1.746-.31-2.012-.256-.22-.448-.26-1.367-.26h-.816l-.526-1.244c-.29-.679-.58-1.318-.644-1.416a.932.932 0 0 0-.33-.285c-.216-.104-.221-.104-5.231-.104-4.764 0-5.02.005-5.207.094Zm9.612 2.365.236.565-4.626.015c-2.542.005-4.632 0-4.647-.015-.01-.01.084-.275.217-.585l.24-.57 4.17.014 4.174.01.236.566Zm2.95 2.876v.369h-14.7v-.738h14.7v.369Zm-2.286 2.444c-.015.118-.172 2.015-.344 4.218-.177 2.203-.33 4.145-.35 4.312l-.029.31H7.886l-.334-4.219-.364-4.523-.03-.305H17.351l-.025.207ZM26.422 46.864c-.108.049-.25.147-.315.216-.064.069-.364.708-.673 1.421l-.556 1.293-.924.025c-.984.024-1.092.049-1.328.305-.246.26-.26.373-.26 1.937 0 .949.02 1.524.054 1.647.068.221.349.501.58.58.093.03.487.054.895.054.403 0 .732.015.732.035-.005.25.802 10.069.841 10.202.064.24.265.477.511.585.187.088.463.093 5.605.093 5.143 0 5.418-.005 5.605-.093a.949.949 0 0 0 .517-.585c.024-.099.226-2.316.442-4.927.216-2.61.408-4.872.428-5.03l.03-.28h.732c.959 0 1.204-.098 1.42-.565.084-.177.094-.345.094-1.687 0-1.593-.014-1.706-.26-1.966-.236-.256-.344-.28-1.328-.305l-.924-.025-.556-1.293c-.31-.713-.61-1.352-.673-1.42a1.181 1.181 0 0 0-.315-.217c-.187-.089-.438-.094-5.187-.094-4.75 0-5 .005-5.187.094Zm9.538 2.203c.099.24.212.506.25.59l.07.162h-9.332l.246-.59.25-.59h8.329l.187.427Zm3.024 3.038v.369h-14.75v-.738h14.75v.369Zm-2.31 2.394c0 .089-.158 2.085-.345 4.435-.192 2.35-.344 4.317-.344 4.366 0 .084-.182.089-4.376.089s-4.376-.005-4.376-.089c0-.049-.152-2.016-.344-4.366-.187-2.35-.344-4.346-.344-4.435v-.157h10.128v.157ZM45.73 46.874a.983.983 0 0 0-.33.285c-.064.098-.354.737-.644 1.416l-.526 1.244h-.816c-.92 0-1.111.04-1.367.26-.305.266-.31.305-.31 2.011 0 1.46.005 1.544.104 1.75a.977.977 0 0 0 .304.345c.192.128.227.133 1.003.147.689.015.802.03.802.094 0 .31.845 10.06.885 10.197.064.226.359.521.585.585.113.03 2.134.05 5.55.05 4.74 0 5.394-.01 5.557-.075a.967.967 0 0 0 .486-.437c.055-.103.187-1.5.512-5.261.236-2.812.432-5.123.437-5.133 0-.005.34-.01.753-.01.84 0 1.037-.054 1.278-.34.216-.26.236-.437.221-2.04l-.015-1.49-.132-.196a1.292 1.292 0 0 0-.32-.315c-.177-.108-.246-.118-1.12-.142l-.93-.025-.56-1.303c-.306-.718-.605-1.357-.664-1.42a1.14 1.14 0 0 0-.305-.207c-.187-.089-.443-.094-5.212-.094h-5.015l-.211.104Zm9.66 2.355.257.59h-4.671c-2.567 0-4.666-.005-4.666-.015 0-.01.088-.226.201-.482.113-.256.222-.511.246-.575l.044-.108h8.335l.255.59Zm2.916 2.876v.369h-14.7v-.738h14.7v.369Zm-2.276 2.542c-.015.172-.177 2.208-.364 4.523l-.334 4.219H46.615l-.03-.305c-.02-.172-.172-2.114-.349-4.317-.172-2.203-.33-4.1-.344-4.218l-.025-.207H56.06l-.03.305Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;
