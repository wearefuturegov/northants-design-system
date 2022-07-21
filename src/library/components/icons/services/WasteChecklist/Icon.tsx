import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.217 9.1c-.764.202-1.624.733-2.093 1.288-.343.413-.512.713-1.368 2.459l-.817 1.657h-.773c-.517 0-.875.024-1.083.073-.947.226-1.769 1.038-2.01 1.967-.059.231-.073.585-.073 1.672 0 .767.024 1.475.053 1.598.237 1.057 1.194 1.927 2.277 2.08l.42.053.03.202c.014.108.816 10.315 1.788 22.68 1.208 15.39 1.783 22.534 1.831 22.642a.959.959 0 0 0 .479.472c.087.034.86.054 2.199.054 2.315 0 2.252.01 2.542-.36l.15-.19.015-1.57.014-1.568h3.524l.024.133c.217 1.077.696 1.918 1.44 2.522.358.29 1.044.65 1.484.772.3.084.918.089 12.76.089 14.05 0 12.644.04 13.51-.398.995-.502 1.69-1.328 2.063-2.454l.111-.344.015-16.86c.01-16.652.01-16.859-.087-17.267a3.967 3.967 0 0 0-2.16-2.709c-.745-.359-1.06-.408-2.775-.408h-1.484l.024-.211c.015-.113.126-1.333.247-2.71l.227-2.507.435-.064a2.74 2.74 0 0 0 2.272-2.03c.101-.389.101-2.906 0-3.294-.252-.97-1.054-1.76-2.011-1.992-.208-.049-.566-.073-1.083-.073h-.773l-.817-1.657c-.855-1.746-1.025-2.046-1.368-2.459-.473-.565-1.339-1.091-2.112-1.293-.377-.098-.517-.098-13.533-.093-12.886 0-13.162 0-13.514.098Zm26.607 1.839c.401.108.73.3 1.044.614.237.241.348.428.933 1.613l.657 1.338H17.042l.657-1.338c.585-1.185.686-1.367.928-1.608.155-.152.387-.334.522-.408.546-.3-.392-.28 13.577-.28 11.363-.005 12.842.005 13.098.069Zm6.139 5.487c.27.074.502.265.608.506.078.177.092.33.092 1.284 0 .953-.014 1.106-.091 1.283a.908.908 0 0 1-.634.506c-.125.03-.85.054-1.682.054-1.363 0-1.479.005-1.653.099-.203.103-.343.28-.425.536a.93.93 0 0 0 .498 1.14c.145.07.314.094.686.094h.498l-.029.206c-.039.325-.454 5.035-.454 5.148 0 .098-.025.103-.576.103h-.58l-.014-.973c-.014-.974-.014-.979-.15-1.18a1.009 1.009 0 0 0-.324-.305c-.188-.099-.265-.099-5.655-.099-5.389 0-5.466 0-5.655.099a1.01 1.01 0 0 0-.324.305c-.135.201-.135.206-.15 1.18l-.014.973H32.93c-2.765 0-3.04.01-3.451.094-1.503.314-2.702 1.5-3.06 3.018-.096.399-.096.65-.096 16.171v15.773h-2.33c-2.272 0-2.335 0-2.542.103a.967.967 0 0 0-.339.305l-.13.197-.015 1.544-.014 1.538h-1.827l-.024-.21c-.024-.173-3.461-43.838-3.461-43.956 0-.02 6.747-.034 14.998-.034 14.442 0 14.998-.005 15.186-.094a.93.93 0 0 0 .498-1.14c-.082-.256-.222-.433-.425-.536-.189-.099-.348-.099-16.153-.099-10.798 0-16.033-.02-16.182-.054a.908.908 0 0 1-.633-.506c-.078-.177-.092-.33-.092-1.283 0-1.18.034-1.338.304-1.588.28-.266-.928-.251 19.585-.251 13.63-.005 19.096.01 19.236.049ZM46.38 28.319v1.623h-8.603v-3.245h8.603v1.622Zm-10.44 1.854c0 .792.015.954.092 1.12a.938.938 0 0 0 .575.517c.246.069 10.696.069 10.943 0a.938.938 0 0 0 .575-.516c.077-.167.092-.33.092-1.121v-.92h.981l-.024.222-.03.221h1.866l.03-.221.033-.222h1.363c.75 0 1.494.025 1.653.05.865.142 1.576.835 1.76 1.71.072.35.077 32.815.004 33.198a2.195 2.195 0 0 1-1.682 1.716c-.362.079-23.92.079-24.282 0a2.195 2.195 0 0 1-1.682-1.716c-.073-.383-.068-32.848.005-33.197a2.135 2.135 0 0 1 1.126-1.49c.193-.098.454-.197.59-.216.13-.025 1.536-.045 3.126-.05l2.886-.005v.92Z"
        fill={colourFill}
      />
      <path
        d="M51.14 38.885c-.077.05-.536.472-1.019.944-2.31 2.267-2.876 2.813-2.886 2.793-.145-.197-1.566-1.834-1.657-1.908-.208-.167-.42-.182-.682-.049-.41.211-.57.654-.358 1.003.18.3 2.219 2.66 2.345 2.719.164.074.45.074.618-.005.165-.074 4.51-4.317 4.636-4.528.357-.6-.402-1.343-.996-.969ZM32.31 39.298a1.21 1.21 0 0 0-.27.276l-.112.167v2.625c0 2.877-.01 2.773.29 3.029a.987.987 0 0 0 .329.182c.251.069 4.901.069 5.157-.005.121-.034.27-.138.401-.27l.203-.217V39.741l-.11-.167a1.21 1.21 0 0 0-.272-.276l-.164-.113h-5.288l-.164.113Zm4.403 3.083v1.573h-3.19v-3.146h3.19v1.573ZM51.43 47.244c-.076.049-.536.472-1.019.944-2.31 2.266-2.876 2.812-2.885 2.792-.145-.196-1.566-1.834-1.658-1.907-.208-.168-.42-.182-.682-.05-.41.212-.57.654-.357 1.003.178.3 2.218 2.66 2.344 2.72.164.073.45.073.618-.006.165-.073 4.51-4.316 4.636-4.528.357-.6-.402-1.342-.996-.968ZM32.6 47.657a1.209 1.209 0 0 0-.27.275l-.112.167v2.626c0 2.876-.01 2.773.29 3.028a.987.987 0 0 0 .329.182c.251.069 4.901.069 5.157-.005.121-.034.27-.138.401-.27l.203-.217V48.1l-.11-.167a1.209 1.209 0 0 0-.271-.276l-.165-.113h-5.288l-.164.114Zm4.403 3.082v1.574h-3.19V49.166h3.19v1.573ZM46.105 56.099a.76.76 0 0 0-.305.255c-.126.207-.13.605-.01.777.044.069.503.546 1.015 1.057l.933.93-1 1.017-1 1.018-.025.25c-.029.325.053.522.295.699.26.192.517.192.812 0 .116-.079.604-.541 1.083-1.033l.87-.89.966.979c.532.54 1.03 1.003 1.102 1.032a.734.734 0 0 0 1-.673.907.907 0 0 0-.053-.32c-.028-.059-.488-.55-1.014-1.091l-.962-.984.947-.959c.517-.525.976-1.017 1.015-1.091a.827.827 0 0 0-.029-.708c-.106-.167-.435-.364-.619-.364-.28 0-.478.167-1.831 1.534l-.542.55-.981-.987c-.541-.546-1.044-1.013-1.116-1.043-.194-.074-.32-.064-.551.044ZM32.943 56.182c-.28.103-.4.197-.507.383l-.121.207v2.616c0 2.502.005 2.62.097 2.802a.89.89 0 0 0 .256.295c.164.103.208.103 2.842.103h2.677l.184-.123c.338-.236.324-.118.324-3.082v-2.67l-.12-.187c-.247-.369-.131-.354-2.998-.364-1.406-.005-2.595.005-2.634.02Zm4.157 3.186v1.598h-3.19v-3.191l1.595-.005H37.1v1.598Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;
