import React from 'react';

import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.48 19.085c-.57.156-.928.486-1.207 1.133a28.18 28.18 0 0 0-.234.525c-.056.134-.123.24-.146.24-.022 0-.055.067-.078.151-.016.09-.117.33-.223.547-.1.212-.318.681-.491 1.033a45.83 45.83 0 0 0-.48 1.033c-.101.212-.207.43-.235.475a1.177 1.177 0 0 0-.084.167c-.044.106-.592 1.268-.781 1.659-.079.161-.134.295-.129.307.011.01-.033.089-.095.184-.067.09-.15.268-.195.39-.04.123-.134.319-.201.43-.067.112-.14.269-.162.347-.017.078-.056.145-.084.145-.028 0-.045.017-.039.039.017.05-.084.274-.525 1.161-.184.369-.335.682-.34.698 0 .034-.324.737-.52 1.145-.072.15-.134.301-.128.33a.106.106 0 0 1-.045.083c-.05.034-.575 1.094-.575 1.161 0 .062-.413.888-.497.989-.056.072-.061.094-.016.067.06-.04.06-.023 0 .083-.04.073-.107.179-.151.23-.045.055-.056.1-.034.1.023 0 0 .05-.056.111-.055.062-.083.112-.055.112.022 0 .01.04-.028.084-.04.044-.05.084-.023.084.028 0 .023.022-.01.044-.045.034-.258.425-.274.514a2.49 2.49 0 0 1-.29.57c-.051.055-.073.1-.057.1.05 0-.122.39-.245.564-.056.078-.095.156-.084.167.011.011-.022.112-.084.218-.195.374-.452.921-.469 1.016-.01.05-.044.14-.072.196-.05.095-.05 11.077 0 11.323.01.061.056.167.089.234.04.073.05.129.028.129-.022 0-.017.022.011.044.034.023.129.134.212.252.207.279.38.435.441.396.023-.017.045-.006.045.022 0 .056.073.084.447.184.106.028 1.373.05 2.82.05 2.4.006 2.629 0 2.69-.089.04-.05.056-.117.04-.14-.017-.027 0-.05.039-.05s.055-.016.033-.033c-.017-.017.056-.234.162-.48.106-.246.201-.497.212-.564.017-.067.184-.536.374-1.044s.408-1.111.492-1.34c.078-.229.156-.43.173-.447a.446.446 0 0 0 .044-.167c.006-.078.04-.151.067-.157.034-.01.056-.083.056-.156 0-.072.023-.134.045-.134s.045-.045.05-.106c.006-.056.05-.201.106-.318.05-.117.1-.246.106-.274 0-.033.028-.106.05-.167.33-.827.43-1.106.403-1.128-.017-.017-.989-.034-2.167-.04l-2.144-.005-.223-.178c-.24-.19-.251-.224-.263-.643-.005-.318.112-.508.402-.647.201-.1.363-.106 2.524-.09 1.273.012 2.356.006 2.412-.01a.145.145 0 0 0 .095-.13c0-.055.017-.116.045-.139a.147.147 0 0 0 .039-.078 2.45 2.45 0 0 1 .2-.547.421.421 0 0 0 .068-.168c.028-.122.061-.228.206-.58.056-.14.134-.363.173-.503.04-.14.123-.363.185-.502a2.45 2.45 0 0 0 .128-.358.45.45 0 0 1 .073-.173.45.45 0 0 0 .072-.173 2.38 2.38 0 0 1 .078-.245c.034-.079.14-.38.24-.67.101-.29.196-.542.218-.559.034-.028.05-.078.095-.301.011-.056.067-.207.129-.335.061-.123.145-.346.184-.497.033-.145.09-.263.117-.263.022 0 .034-.022.011-.055-.017-.028.023-.168.09-.307.067-.14.1-.274.078-.296-.017-.023-.977-.04-2.122-.04l-2.082-.005-.201-.134c-.112-.078-.201-.168-.201-.207a.094.094 0 0 0-.067-.083c-.107-.04-.073-.564.044-.77.23-.386.184-.38 2.758-.38 2.814-.006 2.58 0 2.54-.062-.016-.028-.005-.067.029-.09.033-.022.044-.06.028-.089-.023-.028-.006-.05.027-.05.034 0 .045-.022.028-.056-.016-.028.012-.117.062-.195s.072-.14.056-.14c-.023 0-.006-.056.033-.128.034-.067.073-.15.078-.179.006-.033.079-.212.151-.407.078-.19.134-.347.117-.347-.022 0 .129-.396.285-.753.04-.095.112-.296.168-.447.05-.156.106-.318.122-.363a.59.59 0 0 0 .045-.128.587.587 0 0 0 .028-.067c.006-.017.017-.05.022-.079 0-.027.023-.072.05-.094.023-.023.04-.084.04-.14 0-.05.039-.162.078-.251.044-.084.072-.173.056-.201-.017-.023 0-.045.028-.045.033 0 .061-.05.061-.112 0-.061.022-.156.05-.212.028-.05.073-.156.1-.234l.151-.352c.05-.117.09-.257.09-.307 0-.056.039-.15.084-.212a.392.392 0 0 0 .083-.196c0-.05.045-.19.095-.307.05-.123.1-.257.106-.301.011-.045.045-.134.084-.207.04-.072.05-.145.034-.162-.023-.022-.994-.033-2.167-.033-1.451.005-2.166-.011-2.244-.056-.129-.067-.408-.33-.397-.38a.561.561 0 0 0-.044-.167.649.649 0 0 1-.017-.313c.039-.229.34-.558.553-.614.089-.022 1.234-.04 2.546-.04l2.384-.005.078-.167c.039-.095.078-.184.078-.201.011-.062.095-.319.196-.586.055-.157.206-.57.334-.922.134-.351.268-.72.308-.81.061-.139.145-.373.167-.474.067-.251.128-.413.24-.67.073-.167.196-.486.268-.698.067-.218.196-.57.274-.781.083-.218.162-.442.178-.503.023-.112-.005-.112-4.193-.112-3.685-.005-4.254.006-4.539.084ZM19.423 20.693c-.084.011-.14.084-.195.251-.04.129-.107.296-.146.374a.716.716 0 0 0-.072.263c0 .067-.023.128-.05.14-.034.005-.068.089-.084.172a.627.627 0 0 1-.1.246c-.04.05-.068.106-.057.123.017.039-.229.76-.363 1.06-.044.101-.089.219-.1.252a.829.829 0 0 1-.05.156.733.733 0 0 0-.056.168c-.022.111-.09.279-.168.435-.072.14-.14.374-.14.47.006.027-.016.066-.044.083-.022.017-.09.173-.145.34a6.598 6.598 0 0 1-.15.42c-.073.167-.285.77-.302.865-.011.044-.14.38-.28.742-.139.363-.256.676-.256.704 0 .028-.05.162-.112.296-.061.14-.117.301-.128.357a1.39 1.39 0 0 1-.112.285c-.056.1-.095.195-.09.212a.758.758 0 0 1-.05.184c-.033.084-.14.374-.234.654-.095.273-.207.569-.251.647-.045.078-.067.162-.045.179.017.022.006.067-.022.106-.034.039-.09.173-.129.296-.039.123-.111.313-.156.419-.05.106-.09.217-.095.25a1.177 1.177 0 0 1-.073.213.82.82 0 0 0-.067.207.767.767 0 0 1-.078.206c-.15.307-.251.564-.284.765-.023.112-.068.201-.101.201-.034 0-.045.017-.022.034.016.016-.006.14-.056.262-.045.129-.09.257-.095.29-.011.028-.056.151-.106.263-.05.111-.123.318-.162.458-.04.14-.084.257-.106.257-.022 0-.056.067-.084.15-.05.179-.05.184-.095.296-.017.045-.067.195-.112.335-.05.14-.14.391-.206.558-.067.168-.128.33-.134.363l-.05.14-.129.363c-.056.15-.123.313-.15.346-.028.04-.034.073-.017.073.022 0 .005.056-.034.123a1.238 1.238 0 0 0-.084.24.89.89 0 0 1-.1.234.483.483 0 0 0-.084.201c0 .112-.229.787-.273.82a.319.319 0 0 0-.073.14c-.017.062-.112.324-.207.587-.1.262-.228.636-.29.837-.067.201-.14.385-.167.419-.028.028-.05.106-.05.173 0 .072-.023.145-.056.162a.143.143 0 0 0-.056.106c0 .045-.045.173-.095.29-.05.123-.1.24-.106.274l-.162.447c-.084.212-.156.43-.168.48a3.194 3.194 0 0 1-.1.285c-.05.111-.073.217-.05.234.016.017.005.034-.028.034-.05 0-.207.39-.212.53 0 .028-.012.067-.028.084-.04.039-.18.407-.185.485 0 .04-.022.073-.05.073-.028 0-.045.033-.039.067.011.072-.04.229-.207.603-.044.112-.089.235-.1.28a.706.706 0 0 1-.073.195 1.458 1.458 0 0 0-.095.318c-.022.117-.055.212-.078.212-.022 0-.05.067-.056.145a.457.457 0 0 1-.061.212c-.039.056-.251.581-.257.648a.826.826 0 0 1-.072.145c-.034.067-.05.134-.034.15.017.012-.033.18-.112.364-.078.184-.178.435-.223.564l-.078.229h.15c.079.005.559.01 1.067.016.58.006.921-.01.921-.044a4.95 4.95 0 0 1 .179-.587.938.938 0 0 0 .05-.178 2.66 2.66 0 0 1 .162-.391c.078-.156.14-.313.14-.34 0-.029.056-.129.123-.224s.128-.212.14-.257c.005-.044.027-.095.055-.111a.834.834 0 0 0 .123-.185c.045-.084.123-.206.184-.262.056-.061.1-.145.1-.179 0-.039.017-.05.034-.033.022.022.112-.073.196-.207.223-.33.848-.916 1.34-1.25.43-.285 1.278-.76 1.278-.704 0 .017.067-.006.156-.05.084-.04.235-.118.335-.168a.972.972 0 0 1 .268-.095c.05 0 .201-.033.347-.078 1.2-.363 3.076-.301 4.288.134.178.067.363.123.402.123.033.005.067.028.067.056 0 .022.033.044.078.044.044 0 .251.09.463.196.207.106.402.195.424.195.028 0 .084.034.123.067.185.168.252.212.307.212.028 0 .056.023.056.045 0 .028.062.078.134.112.212.095 1.262 1.094 1.262 1.195 0 .028.062.117.134.2.29.325.815 1.207.815 1.368 0 .056.023.096.05.096.04 0 .079.1.129.318a.33.33 0 0 0 .084.117c.039.039.072.123.072.184 0 .151-.005.14.09.397a.974.974 0 0 0 .128.268c.073.039 16.381.027 16.454-.017.034-.017.117-.229.19-.47a6.07 6.07 0 0 1 .296-.797c.09-.202.162-.38.162-.408-.006-.023.01-.04.039-.04.028 0 .061-.044.084-.094.016-.056.095-.201.173-.324.078-.123.156-.268.178-.324.017-.05.05-.095.079-.095.027 0 .083-.067.128-.156.123-.24.971-1.078 1.373-1.362.201-.134.497-.341.654-.453.162-.117.335-.206.38-.206.044 0 .083-.023.083-.056 0-.028.017-.05.045-.045.022.006.1-.022.178-.05.201-.09.414-.168.458-.179.023-.005.157-.056.296-.117.14-.061.251-.095.251-.084 0 .017.067 0 .157-.033.14-.056.407-.112.932-.201.123-.023.637-.034 1.145-.034 1.022.006 1.853.151 2.568.447.045.017.112.04.145.045.067.016.358.162.882.44a6.17 6.17 0 0 1 1.128.788c.062.062.179.162.263.223.083.062.15.146.15.19 0 .045.017.067.034.045.033-.028.625.63.597.67a.64.64 0 0 0 .123.162c.078.084.14.179.14.218 0 .039.039.106.095.145.05.044.14.19.2.33.062.139.13.261.146.278.061.045.268.553.396.977.207.665.173.626.497.603.179-.016.285-.005.285.034 0 .044.782.061 2.596.061h2.596v-2.166c0-1.306-.022-2.245-.055-2.367a2.107 2.107 0 0 0-.24-.475l-.18-.268.124-.307c.117-.285.123-.39.128-1.63 0-1.217-.011-1.351-.117-1.647-.162-.436-.631-.91-1.039-1.056-.162-.056-.296-.123-.296-.145 0-.028-.323-.044-.72-.044h-.72l.005-.52a9.98 9.98 0 0 0-.217-2.021c-.062-.296-.062-.296-.196-.63a.8.8 0 0 1-.05-.241.635.635 0 0 0-.078-.262 3.218 3.218 0 0 1-.173-.402 6.019 6.019 0 0 0-.129-.296 1.909 1.909 0 0 1-.122-.324c0-.028-.023-.05-.056-.05-.028 0-.056-.04-.056-.084 0-.045-.028-.084-.062-.084-.027 0-.044-.022-.027-.05.016-.023-.045-.145-.134-.263-.09-.117-.168-.234-.168-.262 0-.045-.374-.586-.469-.687-.128-.128-.307-.385-.307-.435.006-.028-.033-.073-.084-.1-.05-.029-.09-.079-.09-.112 0-.034-.06-.112-.133-.179a4.306 4.306 0 0 1-.397-.508c-.145-.218-.29-.402-.318-.408-.022-.01-.044-.05-.044-.084 0-.038-.067-.128-.146-.2a1.25 1.25 0 0 1-.223-.296c-.045-.084-.106-.157-.134-.157-.033 0-.056-.022-.056-.055 0-.062-.374-.57-.469-.626-.033-.022-.039-.044-.01-.044.033 0 0-.05-.068-.112a3.508 3.508 0 0 1-.34-.436 4.13 4.13 0 0 0-.335-.44c-.067-.068-.118-.146-.118-.168 0-.028-.1-.162-.223-.296a2.732 2.732 0 0 1-.235-.28c-.039-.089-.647-.519-.904-.636-.71-.324-.592-.313-4.444-.318-3.953 0-3.92 0-4.01.056-.06.033-.072 1.652-.072 8.637 0 8.168-.005 8.604-.1 8.822a.595.595 0 0 1-.319.33c-.206.094-.591.1-9.078.1l-8.86.005-.224-.156c-.419-.29-.452-.86-.078-1.25.039-.04.072-.056.072-.029 0 .023.028.006.056-.039.045-.072 1.05-.084 8.425-.089 4.607-.006 8.414-.022 8.46-.04.066-.027.077-1.384.077-10.1 0-5.538-.022-10.094-.044-10.122a.667.667 0 0 1-.067-.223c-.04-.352-.374-.921-.77-1.318-.219-.212-.392-.369-.392-.346 0 .028-.022.017-.044-.017-.04-.061-.626-.368-.626-.33 0 .017-.061 0-.134-.027a3.42 3.42 0 0 0-.547-.09c-.385-.039-19.927-.066-20.178-.033Zm12.64 2.685c.012.006-.167.107-.396.224s-.48.279-.558.363c-.15.15-.82 1.122-.82 1.195 0 .022-.062.111-.14.195-.079.084-.129.15-.107.15.023 0 0 .046-.044.096-.14.156-.603.865-.603.915 0 .028-.023.05-.045.05-.056 0-.262.347-.246.408.006.028-.01.034-.039.017-.028-.017-.089.05-.14.15-.144.286-.474.771-.563.833-.028.022-.04.044-.017.044.022 0-.017.09-.095.201-.072.106-.117.235-.106.274.017.045.173.173.346.285.441.29.57.413.57.564 0 .089-.04.134-.134.162-.078.016-.162.016-.19 0-.028-.017-.402-.045-.826-.062a16.59 16.59 0 0 1-.916-.056 7.525 7.525 0 0 0-.642-.056c-1.027-.055-1.385-.078-1.396-.095-.061-.072-.916-1.775-.888-1.775.017 0-.017-.067-.078-.156a4.553 4.553 0 0 1-.234-.43 2.345 2.345 0 0 0-.218-.386c-.05-.055-.084-.117-.078-.14 0-.016-.062-.172-.146-.34-.156-.323-.167-.38-.1-.491.078-.112.235-.078.542.128.162.107.312.196.335.196.022 0 .072.039.111.083.04.045.112.084.162.084.09-.005.475-.491.637-.82.05-.095.111-.185.14-.196.027-.006.2-.268.39-.57.19-.306.346-.535.346-.508 0 .023.05-.022.112-.1.14-.173.57-.385.865-.43.179-.022 5.148-.028 5.21-.006Zm1.575.548c.19.084.302.218.447.558.067.162.15.296.178.296.028 0 .04.022.023.045-.017.027.01.106.061.178.129.179.352.614.324.614-.017 0 .034.101.117.23.078.128.151.273.162.329.011.056.084.2.162.33.084.128.128.228.112.228-.023 0-.006.045.039.095.117.14.553 1.027.58 1.172.012.073-.005.14-.033.157-.028.022-.04.056-.028.078.056.09-.285.39-.636.564-.201.1-.414.206-.475.24-.246.134-.676.34-.726.352-.028.005-.19.084-.346.184-.162.095-.296.15-.296.128 0-.022-.022-.01-.045.023-.061.1-.686.346-.82.324a1.403 1.403 0 0 1-.374-.1c-.09-.04-1.586-2.938-1.514-2.938.017 0 0-.039-.039-.084-.095-.117-.279-.485-.301-.614-.011-.072.078-.262.223-.474.134-.201.246-.386.246-.413 0-.034.05-.107.106-.168.061-.067.15-.195.212-.29.173-.302.318-.497.391-.542.04-.022.073-.072.073-.111 0-.067.39-.341.502-.352.034-.006.073-.017.1-.023.023-.005.056-.01.084-.005.023 0 .04-.017.04-.045 0-.061 1.278-.033 1.451.034Zm17.364 3.59c.017.005.117.017.224.022.335.023.949.352 1.267.681.156.168.274.302.262.302-.033 0 .084.145.218.268.05.05.095.123.095.167 0 .04.028.056.056.04.033-.017.056-.006.056.022 0 .033.05.111.106.167.061.062.15.19.2.28.046.094.113.172.14.172.034 0 .056.028.056.056 0 .034.062.129.14.212.078.084.14.173.14.207s.05.095.111.14c.062.044.112.1.112.123 0 .044.033.083.324.401.067.079.122.162.122.19 0 .028.062.117.14.201.078.084.14.173.14.201 0 .028.044.079.1.106.05.034.073.062.05.062-.028 0-.01.033.028.072.09.09.201.235.72.933.369.486.643.988.682 1.217.005.05.028.117.044.15.095.174.023.978-.117 1.285-.028.061-.09.207-.134.318-.045.117-.112.212-.15.212-.04 0-.05.017-.034.034.067.067-.547.603-.866.76-.167.088-.435.178-.591.211-.174.028-1.854.05-4.154.05-4.294-.005-4.194.006-4.819-.39-.413-.257-.737-.66-.949-1.167l-.15-.363-.012-2.569c-.005-1.412.011-2.657.034-2.763.106-.447.184-.654.346-.893.195-.29.698-.793.76-.754.021.01.083-.023.139-.084a.37.37 0 0 1 .234-.112c.067 0 .129-.022.129-.044 0-.05.094-.067.318-.067.067 0 .134-.023.15-.045.017-.034 4.25-.045 4.333-.011Zm-27.48 1.73c.094.062.178.096.178.073 0-.017.05.011.111.067.056.05.213.151.347.218.351.179.787.441.865.514.04.039.207.134.374.212.168.078.324.173.34.2.023.034.062.046.09.029.028-.023.05-.006.05.022 0 .034.04.061.084.061.045 0 .084.023.084.056 0 .034.033.05.072.045.034-.011.062.017.05.05-.005.04.012.073.045.073.09 0 .19.245.179.447-.017.212-.112.502-.179.502-.017 0-.095.134-.167.29a4.155 4.155 0 0 1-.23.436c-.05.078-.161.262-.245.419-.09.15-.173.29-.195.307-.023.016-.162.25-.313.53-.145.274-.301.536-.34.575a.318.318 0 0 0-.073.19c0 .067-.017.1-.04.084-.016-.023-.077.039-.139.128l-.1.168-1.24-.017c-.943-.011-1.278-.034-1.384-.095-.079-.045-.157-.073-.185-.067-.072.022-.558-.508-.737-.798-.089-.151-.212-.347-.268-.442-.123-.195-.089-.62.062-.77a.22.22 0 0 0 .067-.134c0-.033.039-.084.09-.1.05-.023.077-.05.06-.073-.022-.017.012-.1.067-.179.056-.078.201-.335.324-.564.129-.234.29-.519.369-.636.084-.112.162-.257.178-.319.023-.055.062-.106.09-.106.028 0 .05-.039.05-.083 0-.045.028-.084.056-.084.033 0 .056-.04.056-.09 0-.044.078-.195.167-.329.095-.134.168-.285.168-.33 0-.05.028-.088.056-.088.033 0 .055-.023.055-.056 0-.084.235-.341.363-.391.196-.084.497-.056.687.056Zm14.884.408c.129.14.095.252-.117.38-.117.073-.223.14-.24.156a1.225 1.225 0 0 1-.246.145c-.29.145-.351.29-.217.514.424.726.776 1.34.787 1.396.01.039.044.073.072.073.034 0 .045.022.028.044-.017.028.023.1.078.168.062.067.112.145.112.173 0 .028.028.122.067.212.129.301.145.815.034.949-.034.04-.045.073-.023.073.017 0-.09.234-.24.525-.15.29-.262.541-.24.558.017.016-.006.033-.045.033s-.055.017-.039.034c.023.022-.01.106-.072.19-.062.083-.095.167-.073.19.017.016.011.033-.022.033-.028 0-.1.106-.157.234a3.834 3.834 0 0 1-.195.38c-.05.078-.14.251-.195.391-.062.14-.123.262-.14.28a2.85 2.85 0 0 0-.167.306c-.079.151-.213.402-.302.559a2.13 2.13 0 0 0-.173.334c-.045.185-.156.42-.207.42-.027 0-.033.022-.016.055.016.028.01.056-.017.056-.034 0-.056-.184-.056-.408-.005-.346-.028-.591-.067-.642-.011-.005-.017-.028-.022-.056a5.609 5.609 0 0 0-.257-.48c-.14-.245-.302-.536-.363-.642a6.683 6.683 0 0 0-.207-.34 1.02 1.02 0 0 1-.111-.224c-.017-.072-.05-.128-.184-.296-.09-.111-.24-.38-.341-.614-.05-.111-.106-.206-.128-.206-.017 0-.084-.106-.146-.24a1.953 1.953 0 0 0-.178-.307c-.04-.04-.073-.101-.073-.135a.28.28 0 0 0-.078-.15 3.751 3.751 0 0 1-.218-.346c-.39-.715-.38-.704-.642-.564-.112.055-.352.184-.525.279-.285.156-.541.19-.463.067.017-.028.005-.062-.023-.084-.05-.028.123-.458.218-.53.023-.017.157-.257.307-.53.145-.28.285-.515.307-.531.05-.045.559-.955.559-1.01 0-.029.028-.051.056-.051.033 0 .055-.022.055-.05 0-.05.347-.66.442-.765.072-.09 4.014-.095 4.103-.006ZM27.815 34.25c.095.106.195.28.513.888.079.15.179.307.218.352.034.039.067.095.067.123 0 .027.078.161.168.295.095.14.167.28.167.313 0 .034.028.062.061.062.028 0 .04.022.023.056-.017.027-.006.055.028.055.033 0 .044.023.028.056-.017.028-.012.056.01.056.029 0 .073.05.101.106.034.062.14.274.246.475.106.2.207.368.223.368.095 0 .04.263-.1.47-.09.127-.212.34-.285.48a1.66 1.66 0 0 1-.212.345c-.045.056-.062.101-.04.101.023 0 .006.045-.038.095-.078.09-.24.374-.642 1.117a8.053 8.053 0 0 1-.352.586c-.123.19-.223.368-.223.39 0 .09-.274.045-.324-.055-.028-.05-.05-.319-.05-.586 0-.28-.028-.52-.062-.553-.039-.04-.53-.062-1.39-.073-.9-.005-1.385-.033-1.497-.078-.089-.039-.167-.061-.173-.05 0 .011-.044-.028-.1-.084a4.43 4.43 0 0 0-.29-.24c-.107-.084-.19-.179-.19-.212 0-.04-.045-.117-.106-.179a2.892 2.892 0 0 1-.257-.363c-.09-.134-.179-.262-.207-.279-.028-.017-.05-.05-.05-.067.006-.061-.184-.385-.301-.508a.62.62 0 0 1-.129-.201c-.011-.045-.045-.09-.067-.1-.028-.012-.145-.174-.262-.363a2.64 2.64 0 0 0-.263-.386c-.033-.022-.039-.044-.017-.044.05 0-.295-.52-.362-.547-.028-.012-.045-.056-.045-.096 0-.038-.022-.083-.045-.094a1.775 1.775 0 0 1-.229-.296c-.502-.748-.53-.838-.173-.53.106.089.201.15.218.139.011-.017.05-.006.084.022.223.173.525.196 3.143.201h2.635l.067-.117c.034-.067.067-.34.073-.609.006-.335.034-.496.084-.524.111-.073.218-.045.324.083Zm6.95 1.474c.085.1.157.218.157.257 0 .04.034.106.073.145.039.04.111.157.156.252.04.1.095.184.112.184.022 0 .056.061.072.134a.898.898 0 0 0 .168.296c.078.089.184.273.234.413.056.134.112.257.129.273.017.017.039.101.044.196.012.09.017.19.023.223.022.145-.078.525-.207.793-.078.156-.14.296-.128.307.072.067-.402.653-.536.665-.028 0-.106.016-.168.028-.061.016-1.016.033-2.121.038-1.81.012-2.033.006-2.211-.083-.369-.173-.386-.263-.391-2.133-.006-1.653 0-1.664.128-1.854.212-.312.346-.33 2.44-.318l1.87.006.157.178Zm14.311 1.754c.19.083.48.312.39.312-.016 0-.016.034.012.067.184.296-.073.966-.413 1.072-.14.045-2.06.05-2.25.011-.162-.039-.413-.212-.397-.279.006-.022-.033-.078-.089-.117-.056-.04-.084-.09-.061-.112.022-.022.016-.1-.012-.173-.033-.09-.028-.19.028-.313.073-.184.363-.558.363-.474 0 .028.045.011.106-.028.168-.117 2.033-.09 2.323.034Zm11.016 3.283c.045.044.067.38.067 1.133 0 .754-.022 1.089-.067 1.133-.04.04-.235.067-.475.067h-.407v-2.4h.407c.24 0 .436.027.475.067Z"
        fill={colourFill}
      />
      <path
        d="M46.703 29.118c-.184.073-.441.386-.491.603-.056.268-.045 4.696.016 4.858.09.257.174.38.33.491.167.117.19.117 3.964.123 4.065.011 3.964.017 4.232-.257.302-.296.285-.837-.028-1.223a6.513 6.513 0 0 1-.234-.312 19.884 19.884 0 0 0-.335-.441c-.123-.151-.313-.408-.419-.559a2.707 2.707 0 0 0-.257-.335 3.72 3.72 0 0 1-.296-.402 4.226 4.226 0 0 0-.368-.474c-.078-.073-.14-.146-.14-.168 0-.033-.318-.474-.67-.938a12.307 12.307 0 0 1-.318-.419c-.469-.62-.257-.575-2.753-.575-1.183 0-2.188.012-2.233.028ZM17.53 45.388c-2.177.29-3.942 1.87-4.522 4.043-.218.803-.162 2.032.123 2.959.296.943.703 1.602 1.406 2.272.994.944 2.278 1.44 3.719 1.44 3.093 0 5.4-2.322 5.4-5.443.005-2.468-1.748-4.634-4.183-5.187-.508-.112-1.43-.157-1.943-.084Zm1.396 2.82c.09.022.246.089.346.15.1.056.184.084.184.056 0-.022.023-.017.045.023.022.033.14.123.268.195.218.123.637.542.637.637 0 .022.061.14.145.25.078.113.145.258.15.325.006.061.034.117.062.117.028 0 .034.017.017.033-.017.023-.012.084.022.145.056.107.073.804.022 1.05-.078.408-.106.492-.212.698-.184.363-.519.776-.76.921-.122.078-.228.157-.228.173 0 .023-.084.067-.179.106-.1.04-.273.107-.38.157-.206.09-.43.123-.837.117-.234 0-.53-.028-.53-.05 0-.006-.05-.017-.112-.023-.179-.022-.72-.273-.77-.351-.023-.04-.073-.073-.112-.073-.078 0-.71-.664-.71-.742 0-.034-.033-.1-.077-.145-.146-.174-.307-.938-.285-1.335.039-.564.05-.625.234-1.016.201-.436.743-1 1.162-1.217.156-.078.419-.173.586-.212.324-.068 1.027-.062 1.312.01Z"
        fill={colourFill}
      />
      <path
        d="M17.86 49.788c-.514.234-.76.681-.637 1.161.084.335.19.486.475.676.212.14.29.162.57.145.407-.023.463-.028.463-.09 0-.027.055-.072.128-.105.218-.096.408-.453.424-.771a.945.945 0 0 0-.14-.564c-.083-.156-.172-.28-.195-.28-.022 0-.078-.033-.117-.072-.095-.1-.413-.206-.597-.206-.079 0-.246.05-.374.106ZM48.35 45.388c-2.758.363-4.796 2.809-4.645 5.567.173 3.104 2.535 5.265 5.622 5.13 1.111-.05 2.038-.345 2.91-.937 1.847-1.245 2.701-3.858 1.992-6.08a5.416 5.416 0 0 0-3.852-3.574c-.547-.134-1.48-.184-2.027-.106Zm1.452 2.837c.463.145 1.005.48 1.19.737.038.055.105.134.144.173.04.044.095.134.112.2.022.068.061.123.09.123.044 0 .111.14.111.24a.95.95 0 0 0 .084.207c.05.095.072.168.05.168-.022 0-.006.039.034.083.072.09.094.76.033 1.106-.045.29-.296.81-.475 1.01-.078.09-.106.14-.061.118.045-.028-.033.061-.179.2-.363.341-.435.397-.435.347 0-.022-.04.006-.084.061-.045.062-.084.095-.084.073 0-.022-.095.006-.212.067-.536.273-1.178.313-1.798.106a3.578 3.578 0 0 0-.234-.078c-.028-.006-.056-.017-.073-.022-.017-.006-.044-.017-.067-.023-.028-.005-.156-.084-.296-.167-.491-.319-.781-.693-1.089-1.39-.167-.386-.134-1.301.067-1.77.017-.045.04-.118.05-.162.006-.045.034-.095.062-.112a.257.257 0 0 0 .062-.117.61.61 0 0 1 .122-.196c.347-.38.52-.536.67-.614.09-.045.168-.112.168-.145 0-.034.022-.045.05-.028.028.017.078-.006.112-.045.039-.044.173-.1.301-.117.129-.022.274-.061.319-.084.117-.067.993-.028 1.256.05Z"
        fill={colourFill}
      />
      <path
        d="M48.909 49.72c-.29.056-.352.079-.508.224-.341.318-.442.603-.352 1.027.05.24.413.765.48.698.017-.01.112.011.212.056a.86.86 0 0 0 .843-.078c.441-.28.67-.932.458-1.301-.117-.207-.39-.497-.469-.497-.04 0-.078-.022-.09-.05-.022-.05-.412-.106-.574-.078Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;
