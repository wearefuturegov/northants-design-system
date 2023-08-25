import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none">
      <path
        fill={colourFill}
        d="M26.844 14.956c-.42.144-.882.4-1.25.707-.35.28-.357.287-.894.306-1.025.031-1.569.319-2.413 1.25-.312.343-1.493 1.675-2.625 2.956-1.125 1.275-2.056 2.325-2.068 2.325-.007 0-.35-.069-.757-.15a58.312 58.312 0 0 0-2.18-.375c-.788-.125-1.832-.3-2.313-.388-.725-.137-.988-.156-1.532-.13-2.28.124-4.375 1.5-6.006 3.943C2.637 28.663 1.95 33.163 3.1 36.65c.481 1.481 1.575 3.031 2.687 3.825a6.325 6.325 0 0 0 1.888.875c.425.112.475.137.706.444.431.556 1.2 1.056 1.994 1.294.931.28 8.244.593 13.925.6 1.45 0 2.637.024 2.637.05 0 .03-.2.612-.443 1.3-.72 2.037-.7 2.218.45 3.756l.73.987-9.087.019-9.087.013v1.625h19.419l3.025 4.012c3.162 4.194 3.306 4.369 3.893 4.544.275.075.838.093 1.538.044.187-.013.975-.063 1.75-.1.775-.038 1.469-.1 1.55-.132.081-.031 2.631-1.925 5.669-4.212l5.525-4.157h12.318v-1.625l-5.05-.012-5.056-.019 4.306-3.237 4.307-3.238 1.2-2.406 1.2-2.406.28.044c.476.075.638.08 1 .018 1.15-.187 2.057-1.212 2.113-2.387.032-.531-.056-.95-.256-1.294-.212-.362-8.787-11.762-9.069-12.05-.325-.344-.53-.469-1.03-.631-.75-.244-1.532-.125-2.238.35-.575.381-1.038 1.181-1.075 1.862-.007.169-.032.325-.044.338-.013.012-.313.075-.663.137-.587.107-2.356.431-3.987.738l-.663.119-3.656 2.75-3.662 2.75.212-.413c.544-1.075.488-2.212-.175-3.531-.256-.5-1.025-1.719-1.581-2.5-1.431-2.013-3.213-3.838-5.363-5.519-1.887-1.469-5.53-3.831-6.412-4.15-.644-.238-1.55-.313-1.981-.169Zm1.562 1.85c.294.131 2.306 1.394 3.531 2.219 3.938 2.65 6.357 5.119 8.388 8.531.525.881.675 1.275.675 1.75 0 .613-.144.806-2.156 2.832-4.713 4.743-6.788 6.668-9.163 8.468-.969.731-1.787 1.338-1.831 1.338-.288.031-7.456-.025-9.288-.075-2.306-.056-5.118-.194-6.437-.313-.675-.056-1.406-.206-1.469-.306-.012-.025.175-.119.425-.212 1.544-.594 3.138-2.02 4.225-3.77.925-1.493 1.544-3.162 1.894-5.143.187-1.05.2-3.256.025-4.219-.244-1.331-.669-2.537-1.219-3.431-.144-.238-.244-.444-.231-.463.019-.012.519.05 1.112.144l1.082.169.393.387c1.1 1.063 2.463 3.338 3.732 6.226.23.53.587 1.318.78 1.75.2.43.62 1.393.932 2.143.313.75.694 1.606.844 1.906.675 1.332 1.594 2.444 2.312 2.794.682.331 1.363.275 1.632-.137.18-.269.587-2.563.837-4.738.363-3.093.475-5.418.425-9.031-.031-2.45-.106-4.394-.2-5.3-.019-.175-.006-.325.025-.325.088 0 1.394 1.038 2.288 1.819 1.043.906 3.175 3.037 4.4 4.4.53.581 1.05 1.112 1.156 1.168a.82.82 0 0 0 1.194-.412c.18-.475.093-.65-.888-1.744-1.175-1.306-4.006-4.125-4.981-4.95-1.55-1.325-3.3-2.587-4.538-3.281-.256-.144-.493-.288-.53-.325-.088-.088.305-.006.624.131Zm-2.556.944c.8.381 1.669 1.225 1.962 1.906.182.407.282 2.869.282 6.782-.007 3.575-.07 4.9-.344 7.406-.131 1.125-.488 3.537-.538 3.587-.037.038-.025.044-.456-.618-.6-.92-1.162-2.088-2.181-4.5-1.206-2.857-1.613-3.776-2.144-4.813-.85-1.675-1.687-2.925-2.575-3.837a10.173 10.173 0 0 1-.481-.52c0-.018 2.412-2.768 3.95-4.5.894-1 1.162-1.168 1.794-1.105.187.012.512.112.73.212Zm-13.875 5.525c1.237.331 2.344 1.431 3 2.981.925 2.188.869 5.35-.131 8.025-1.22 3.257-3.632 5.482-5.944 5.482-1 0-1.781-.307-2.519-.988-1.394-1.288-2.094-3.25-2.087-5.806.012-2.507.743-4.925 2.062-6.8.444-.631 1.275-1.5 1.85-1.944.5-.381 1.325-.8 1.856-.938.438-.118 1.5-.124 1.913-.012Zm46.062.256c.225.132.988 1.107 4.475 5.75 2.313 3.081 4.294 5.725 4.407 5.875.106.157.23.438.275.625.062.294.062.375-.038.638-.231.606-.769.944-1.412.881-.37-.037-.6-.206-1.013-.725-.431-.538-8.369-11.119-8.5-11.325-.056-.087-.119-.3-.137-.475-.038-.262-.02-.375.118-.656.338-.719 1.15-.982 1.825-.588Zm1.575 8.369 4.413 5.863-.969 1.93c-.525 1.063-.975 1.932-.994 1.926-.05 0-11.143-14.806-11.118-14.831.03-.026 1.43-.3 2.462-.476.413-.075.931-.168 1.156-.218.225-.044.463-.075.525-.069.082.006 1.557 1.919 4.525 5.875Zm-4.08 3.212c3.355 4.463 5.718 7.663 5.68 7.694-.037.038-18.025 13.55-20.437 15.363l-.194.144-5.631-7.494-5.631-7.494.23-.175c.695-.531 3.163-2.694 5.676-4.981.556-.506 2.906-2.313 7.587-5.825 6.375-4.788 6.788-5.088 6.882-4.982.056.057 2.68 3.544 5.837 7.75ZM33.868 51.544c2.925 3.894 5.3 7.087 5.268 7.087-.137.025-.375.044-1.137.081-.463.02-1.038.057-1.281.075-.394.032-.457.02-.638-.112-.3-.212-8.737-11.475-8.787-11.719-.032-.15.03-.406.243-1 .157-.437.37-1.05.475-1.356l.194-.556.175.212c.094.119 2.563 3.4 5.488 7.288Z"
      />
      <path
        fill={colourFill}
        d="M10.512 23.844c-1.756.637-3.187 2.025-4.2 4.062-.712 1.431-1.056 2.681-1.2 4.394-.118 1.331.075 2.938.482 4.075.218.594.725 1.594.956 1.869.137.162.225.212.387.212.425 0 .494-.394.15-.925-1.262-1.981-1.5-5.125-.587-7.856.487-1.463 1.194-2.631 2.187-3.613.775-.768 1.4-1.175 2.294-1.468.331-.113.644-.257.688-.319.206-.281-.007-.65-.37-.65-.112.006-.468.1-.787.219Z"
      />
      <path
        fill={colourFill}
        d="M10.712 25.519c-.762.256-1.5.831-2.106 1.656-.344.469-.469.913-.362 1.294.193.719.887 1.325 2.075 1.8.206.081.225.119.35.587.268.988.675 1.613 1.175 1.807.837.318 2.056-.282 2.775-1.357 1.15-1.718.606-4.15-1.188-5.337-.575-.388-1.031-.538-1.712-.569-.47-.025-.632-.006-1.007.119Zm1.525 1.756c.638.325 1.063.919 1.207 1.694.118.644-.07 1.219-.544 1.656-.15.138-.3.25-.338.25-.1 0-.23-.35-.362-.956-.144-.675-.25-.831-.688-1.025-.85-.375-1.112-.506-1.256-.625l-.156-.125.2-.256c.112-.144.375-.37.587-.507.325-.218.425-.256.713-.256.237 0 .431.044.637.15ZM8.644 30.75c-.263.156-.394.425-.394.788 0 .256.031.318.244.53.212.213.275.245.531.245.544 0 .912-.344.912-.844a.846.846 0 0 0-1.293-.719ZM49.981 32.881c-.606.144-1.15.619-1.362 1.181-.107.276-.125.432-.1.8.037.52.187.857.53 1.22 1.12 1.168 3.138.412 3.245-1.207.087-1.244-1.113-2.281-2.313-1.994Zm.763 1.344a.87.87 0 0 1 .23.313c.076.18.076.243 0 .425-.162.393-.48.506-.887.312-.243-.119-.38-.469-.28-.731.137-.363.63-.531.937-.319ZM46.637 38.413c-.737.368-1.062 1.175-.793 1.968.137.407.418.713.825.907.306.143.412.162.793.137.494-.031.738-.137 1.044-.438.306-.306.456-.693.45-1.175 0-.462-.094-.687-.444-1.075-.456-.506-1.237-.643-1.875-.325Zm.938 1.193c.137.125.144.319.006.469-.137.15-.3.144-.456-.025-.156-.169-.156-.269 0-.425.15-.15.294-.156.45-.019ZM39.287 39.381c-1.48.369-2.562 1.85-2.456 3.35.138 1.869 1.838 3.244 3.681 2.969.894-.131 1.644-.588 2.132-1.275.45-.65.612-1.15.618-1.912 0-.57-.075-.888-.362-1.488-.313-.656-1.013-1.269-1.75-1.538-.419-.15-1.456-.212-1.863-.106Zm1.438 1.319a2.02 2.02 0 0 1 1.062.969c.244.5.257 1.212.025 1.675-.756 1.506-2.88 1.475-3.53-.056-.15-.357-.17-.463-.145-.875.038-.525.182-.875.538-1.244a1.889 1.889 0 0 1 2.05-.469ZM50.962 40.494a2.794 2.794 0 0 0-1.825 3.269c.144.637.713 1.418 1.257 1.725.519.293.881.393 1.444.393 1.93 0 3.23-1.83 2.612-3.693-.256-.77-.913-1.407-1.744-1.682-.494-.168-1.281-.168-1.744-.012ZM52.32 41.7c.581.194.993.781 1 1.413 0 .193-.025.425-.056.512-.138.35-.444.675-.794.844-.294.15-.4.169-.713.137-.481-.043-.837-.23-1.1-.593-.356-.488-.393-1.075-.106-1.632.3-.58 1.131-.9 1.769-.68ZM46.325 44.638c-.713.106-1.481.68-1.825 1.362-.481.956-.369 1.944.312 2.806.494.625 1.138.913 2.032.913.5 0 .612-.025.98-.2 1.545-.725 2.013-2.556 1.007-3.9-.581-.769-1.512-1.138-2.506-.981Zm1.194 1.468c1.03.694.506 2.363-.738 2.35-.994-.006-1.575-1.006-1.106-1.9.137-.268.237-.368.512-.512.307-.163.388-.175.707-.144.25.025.45.094.625.206Z"
      />
    </svg>
  );
};

export default ServiceIcon;
