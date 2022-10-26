import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none">
      <path
        fill={colourFill}
        d="M17.145 17.615c-.448.336-1.063.788-1.363 1.002-.305.213-1.413 1.042-2.465 1.835-2.227 1.672-2.277 1.708-3.086 2.089-.89.427-2.587 1.042-3.502 1.276-.224.056-.946.284-1.601.503-2.313.762-2.954 1.098-3.737 1.942L1 26.679l.015 1.225c.016 1.164.026 1.24.163 1.703.152.513.518 1.301.823 1.753.244.372.844 1.053 1.246 1.419.67.61 1.688 1.174 2.587 1.438l.483.143 8.108.015 8.103.01.27-.264.269-.265v-.513c0-.28-.02-.636-.046-.788-.03-.152-.132-.747-.234-1.322a228.04 228.04 0 0 1-.28-1.6l-.33-1.882c-.127-.727-.29-1.652-.36-2.059-.072-.406-.169-.99-.224-1.296-.056-.31-.158-.894-.23-1.311l-.258-1.5a81.01 81.01 0 0 1-.23-1.423c-.203-1.403-.36-2.222-.457-2.384a3.434 3.434 0 0 0-.432-.468l-.33-.31h-.85l-.848.005-.813.61Zm1.494 2.232c.03.208.112.747.183 1.194.066.448.178 1.154.254 1.576.072.417.188 1.093.26 1.5.066.406.167.986.223 1.296.056.305.153.89.224 1.296.071.407.234 1.332.36 2.059l.336 1.906c.143.829.25 1.429.28 1.566l.02.112-6.72-.01-6.725-.016-.483-.142c-.9-.264-2.08-.92-2.465-1.367-.616-.717-1.24-2.09-1.332-2.918-.02-.194-.01-.214.173-.336.269-.178.711-.396 1.26-.625.55-.229 2.69-.94 3.259-1.088.915-.234 2.612-.849 3.502-1.276.803-.381.86-.417 3.086-2.09a164.63 164.63 0 0 1 2.313-1.722 43.98 43.98 0 0 0 1.128-.829c.407-.3.752-.529.773-.508.02.025.06.213.091.422Z"
      />
      <path
        fill={colourFill}
        d="M43.908 28.255c-.498.183-1.321.553-1.575.716-1.109.697-2.659 2.201-3.366 3.264-.442.656-.986 1.84-1.087 2.348l-.03.158H11.09l-.264.27-.264.269v.666c0 .416.035.884.096 1.265a89.7 89.7 0 0 1 .234 1.495c.071.488.173 1.174.229 1.525.05.35.157 1.067.229 1.601.27 1.972.391 2.704.513 3.152a9.11 9.11 0 0 0 1.22 2.694l.402.61-.041.356a349.562 349.562 0 0 1-.63 5.21c-.117.92-.143 1.281-.143 2.288v1.194l.173.356c.244.498 1.16 1.423 1.632 1.647l.33.158h2.324l.34-.158c.437-.208 1.383-1.144 1.596-1.57.071-.153.305-.946.509-1.755.208-.813.559-2.175.777-3.04l.402-1.56 7.62.01 7.62.016.147.533c.076.295.27 1.002.427 1.576.158.575.442 1.627.63 2.339.402 1.499.458 1.667.661 1.987.25.386 1.2 1.276 1.55 1.449l.306.147 1.138.016 1.144.015.356-.178c.285-.137.478-.295.905-.732.844-.854.991-1.271.94-2.654a16.886 16.886 0 0 0-.127-1.449c-.06-.39-.163-1.169-.239-1.728-.071-.559-.188-1.438-.26-1.957-.065-.518-.167-1.296-.223-1.728a463.333 463.333 0 0 0-.467-3.508c-.112-.818-.117-.94-.117-4.651v-3.813l.122-.457c.28-1.067.97-2.15 1.708-2.679.452-.325 1.098-.66 1.448-.752.188-.051.32-.158.768-.605.295-.295.58-.63.635-.742.082-.173.102-.34.112-1.113l.02-.905-.157-.32c-.198-.407-.854-1.043-1.266-1.236-.27-.127-.345-.137-1.103-.152-.747-.01-.839 0-1.144.111Zm1.271 2.089c.407.208.305.716-.168.843-.284.072-.915.392-1.311.656-.447.3-1.505 1.353-1.932 1.917a5.574 5.574 0 0 0-.915 1.87l-.122.458v4.829c0 4.773 0 4.84.117 5.668.112.803.244 1.8.468 3.508l.224 1.728c.07.518.188 1.398.259 1.957.076.559.178 1.332.229 1.713.111.773.101.844-.188 1.367-.117.219-.184.28-.509.438-.356.172-.381.182-.59.121-.386-.111-.721-.35-.89-.635-.187-.315-.279-.61-.645-2.013a57.63 57.63 0 0 0-.356-1.322c-.035-.127-.269-.97-.513-1.88l-.442-1.653-.26-.264-.259-.264-9.017-.01-9.013-.01-.25.249-.243.249-.468 1.83c-.254 1.006-.635 2.49-.844 3.304-.391 1.535-.539 1.937-.803 2.135-.203.157-.61.33-.778.33-.218 0-.747-.274-.89-.462-.198-.26-.34-.636-.34-.9 0-.127.056-.691.127-1.25.143-1.16.27-2.212.458-3.793.07-.6.173-1.459.228-1.911.112-.905.133-1.774.046-1.83-.117-.071-.884-1.286-1.088-1.723-.6-1.286-.701-1.724-1.118-4.779-.071-.533-.178-1.25-.229-1.6a104.761 104.761 0 0 1-.356-2.385c0-.04 3.737-.056 13.207-.056H39.21l.26-.27c.234-.238.274-.314.396-.746.407-1.45 1.052-2.593 1.998-3.554.823-.834 1.545-1.306 2.714-1.784.438-.178.412-.173.6-.076ZM52.154 47.673c-1.15 1.931-1.571 2.648-1.724 2.928-.284.518-1.453 2.511-1.49 2.541-.02.016-.258.412-.533.89-.478.829-1.728 2.984-1.911 3.304l-.092.153 6.507-.03c3.573-.016 6.512-.041 6.522-.052.01-.01-.453-.686-1.032-1.504-.575-.819-1.21-1.724-1.413-2.008-.199-.29-.412-.58-.468-.646-.06-.066-.468-.635-.91-1.26a850.866 850.866 0 0 0-1.937-2.75c-.625-.885-1.174-1.683-1.22-1.77l-.086-.157-.213.36Z"
      />
    </svg>
  );
};

export default ServiceIcon;
