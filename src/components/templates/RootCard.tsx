import React, { FC, ReactNode, CSSProperties } from 'react';
import { CARD_HEIGHT, CARD_WIDTH, websiteUrl } from '../../constants/general';
import { cardColorsMap, SCALE_FACTOR } from '@/constants/general';

type RootCard = {
  bgColor: keyof typeof cardColorsMap;
  children: ReactNode;
  style?: CSSProperties;
  username: String;
  decoType?: 'confetti' | 'sunburst' | 'stars' | 'fireworks' | 'left-tree';
  showReflection?: boolean;
};

export const RootCard: FC<RootCard> = ({
  bgColor,
  children,
  style,
  username,
  decoType,
  showReflection = true
}) => {
  const computedStyle: CSSProperties = {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    padding: '20px',
    backgroundColor: cardColorsMap[bgColor] || 'red',
    transform: `scale(${SCALE_FACTOR})`,
    transformOrigin: '0.0000000000000001px 0.0000000000000001px',
    ...style
  };

  // this is the only way to pass image urls for the vercel/og library
  const reflection = `${websiteUrl}/assets/images/reflection.svg`;
  const deco = `${websiteUrl}/assets/images/${decoType}.png`;

  return (
    <section style={computedStyle} tw="relative flex">
      {showReflection && (
        <img
          src={reflection}
          alt="reflection"
          width={parseInt(CARD_WIDTH)}
          height={parseInt(CARD_HEIGHT)}
          tw="absolute top-0 right-0"
        />
      )}

      <Logo />
      <div
        tw={`flex h-full w-full relative flex-col ${
          Boolean(username) ? 'pt-4' : ''
        }`}
      >
        {decoType === 'confetti' ? (
          <img
            tw="absolute top-[-20px] left-[-20px] opacity-50"
            width={400}
            src={deco}
            alt=""
          />
        ) : decoType === 'sunburst' ? (
          <img
            tw="absolute top-[-20px] left-[-140px]"
            width={400}
            src={deco}
            alt=""
          />
        ) : decoType === 'stars' ? (
          <img
            tw="absolute top-[20px] right-[-20px]"
            width={150}
            src={deco}
            alt=""
          />
        ) : decoType === 'fireworks' ? (
          <img
            tw="absolute top-[-20px] right-[-20px]"
            width={180}
            src={deco}
            alt=""
          />
        ) : decoType === 'left-tree' ? (
          <img
            tw="absolute top-[20px] right-[-20px]"
            width={180}
            src={deco}
            alt=""
          />
        ) : null}
        {Boolean(username) && (
          <div
            tw="relative left-[5px] top-[-3] font-bold opacity-70 flex justify-between w-full"
            style={{ zIndex: 10 }}
          >
            <span>@{username}</span>
            <span tw="right-2">unwrapped.dev</span>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

const Logo = () => {
  return (
    <div tw="left-[20px] bottom-[20px] absolute flex items-center">
      <svg
        width={622 / 5}
        height={126 / 5}
        viewBox="0 0 622 126"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="63" cy="63" r="60.5" stroke="#6B1FB7" strokeWidth="5" />
        <circle
          cx="62.9996"
          cy="63.0001"
          r="47.9"
          stroke="#E6CEFF"
          strokeWidth="5"
        />
        <circle
          cx="63.0002"
          cy="63.0002"
          r="35.3"
          stroke="#6B1FB7"
          strokeWidth="5"
        />
        <path
          d="M159.889 32.9091H171.075L190.524 80.3977H191.24L210.689 32.9091H221.875V94H213.105V49.7926H212.539L194.521 93.9105H187.243L169.226 49.7628H168.659V94H159.889V32.9091ZM234.56 94V48.1818H243.479V94H234.56ZM239.064 41.1122C237.513 41.1122 236.181 40.5952 235.067 39.5611C233.974 38.5071 233.427 37.2543 233.427 35.8026C233.427 34.331 233.974 33.0781 235.067 32.044C236.181 30.9901 237.513 30.4631 239.064 30.4631C240.616 30.4631 241.938 30.9901 243.032 32.044C244.145 33.0781 244.702 34.331 244.702 35.8026C244.702 37.2543 244.145 38.5071 243.032 39.5611C241.938 40.5952 240.616 41.1122 239.064 41.1122ZM272.63 94.8949C268.931 94.8949 265.63 93.9503 262.727 92.0611C259.843 90.152 257.576 87.4375 255.926 83.9176C254.295 80.3778 253.48 76.1321 253.48 71.1804C253.48 66.2287 254.305 61.9929 255.955 58.473C257.626 54.9531 259.913 52.2585 262.816 50.3892C265.72 48.5199 269.011 47.5852 272.69 47.5852C275.534 47.5852 277.82 48.0625 279.551 49.017C281.301 49.9517 282.653 51.0455 283.607 52.2983C284.582 53.5511 285.338 54.6548 285.874 55.6094H286.411V32.9091H295.33V94H286.62V86.8707H285.874C285.338 87.8452 284.562 88.9588 283.548 90.2116C282.553 91.4645 281.181 92.5582 279.431 93.4929C277.681 94.4276 275.414 94.8949 272.63 94.8949ZM274.599 87.2884C277.164 87.2884 279.332 86.6122 281.102 85.2599C282.892 83.8878 284.244 81.9886 285.159 79.5625C286.093 77.1364 286.561 74.3125 286.561 71.0909C286.561 67.9091 286.103 65.125 285.188 62.7386C284.274 60.3523 282.931 58.4929 281.161 57.1605C279.392 55.8281 277.204 55.1619 274.599 55.1619C271.914 55.1619 269.677 55.858 267.887 57.25C266.097 58.642 264.745 60.5412 263.83 62.9474C262.936 65.3537 262.488 68.0682 262.488 71.0909C262.488 74.1534 262.945 76.9077 263.86 79.3537C264.775 81.7997 266.127 83.7386 267.917 85.1705C269.727 86.5824 271.954 87.2884 274.599 87.2884ZM325.212 94.8949C321.513 94.8949 318.212 93.9503 315.309 92.0611C312.425 90.152 310.158 87.4375 308.508 83.9176C306.877 80.3778 306.062 76.1321 306.062 71.1804C306.062 66.2287 306.887 61.9929 308.537 58.473C310.208 54.9531 312.495 52.2585 315.398 50.3892C318.302 48.5199 321.593 47.5852 325.272 47.5852C328.116 47.5852 330.403 48.0625 332.133 49.017C333.883 49.9517 335.235 51.0455 336.189 52.2983C337.164 53.5511 337.92 54.6548 338.457 55.6094H338.993V32.9091H347.912V94H339.202V86.8707H338.457C337.92 87.8452 337.144 88.9588 336.13 90.2116C335.135 91.4645 333.763 92.5582 332.013 93.4929C330.263 94.4276 327.996 94.8949 325.212 94.8949ZM327.181 87.2884C329.746 87.2884 331.914 86.6122 333.684 85.2599C335.474 83.8878 336.826 81.9886 337.741 79.5625C338.675 77.1364 339.143 74.3125 339.143 71.0909C339.143 67.9091 338.685 65.125 337.77 62.7386C336.856 60.3523 335.513 58.4929 333.743 57.1605C331.974 55.8281 329.786 55.1619 327.181 55.1619C324.496 55.1619 322.259 55.858 320.469 57.25C318.68 58.642 317.327 60.5412 316.412 62.9474C315.518 65.3537 315.07 68.0682 315.07 71.0909C315.07 74.1534 315.528 76.9077 316.442 79.3537C317.357 81.7997 318.709 83.7386 320.499 85.1705C322.309 86.5824 324.536 87.2884 327.181 87.2884ZM369.561 32.9091V94H360.642V32.9091H369.561ZM401.307 94.9247C396.793 94.9247 392.905 93.9602 389.644 92.0312C386.403 90.0824 383.897 87.348 382.127 83.8281C380.377 80.2884 379.502 76.142 379.502 71.3892C379.502 66.696 380.377 62.5597 382.127 58.9801C383.897 55.4006 386.363 52.6065 389.525 50.598C392.706 48.5895 396.425 47.5852 400.681 47.5852C403.266 47.5852 405.772 48.0128 408.198 48.8679C410.624 49.723 412.802 51.0653 414.731 52.8949C416.66 54.7244 418.181 57.1009 419.295 60.0241C420.408 62.9276 420.965 66.4574 420.965 70.6136V73.7756H384.543V67.0938H412.225C412.225 64.7472 411.748 62.669 410.793 60.8594C409.839 59.0298 408.496 57.5881 406.766 56.5341C405.056 55.4801 403.047 54.9531 400.741 54.9531C398.235 54.9531 396.047 55.5696 394.178 56.8026C392.329 58.0156 390.897 59.6065 389.883 61.5753C388.888 63.5241 388.391 65.642 388.391 67.929V73.1491C388.391 76.2116 388.928 78.8168 390.002 80.9645C391.096 83.1122 392.617 84.7528 394.566 85.8864C396.515 87 398.792 87.5568 401.397 87.5568C403.087 87.5568 404.628 87.3182 406.02 86.8409C407.412 86.3437 408.616 85.608 409.63 84.6335C410.644 83.6591 411.42 82.456 411.957 81.0241L420.398 82.5455C419.722 85.0312 418.509 87.2088 416.759 89.0781C415.029 90.9276 412.851 92.3693 410.226 93.4034C407.621 94.4176 404.648 94.9247 401.307 94.9247ZM440.712 94L427.229 48.1818H436.447L445.425 81.8295H445.873L454.881 48.1818H464.099L473.047 81.6804H473.495L482.414 48.1818H491.631L478.178 94H469.08L459.773 60.919H459.087L449.78 94H440.712ZM513.429 95.0142C510.526 95.0142 507.901 94.4773 505.554 93.4034C503.208 92.3097 501.348 90.7287 499.976 88.6605C498.624 86.5923 497.948 84.0568 497.948 81.054C497.948 78.4687 498.445 76.3409 499.439 74.6705C500.433 73 501.776 71.6776 503.466 70.7031C505.156 69.7287 507.046 68.9929 509.134 68.4957C511.222 67.9986 513.35 67.6207 515.517 67.3622C518.262 67.044 520.489 66.7855 522.199 66.5866C523.909 66.3679 525.152 66.0199 525.928 65.5426C526.703 65.0653 527.091 64.2898 527.091 63.2159V63.0071C527.091 60.402 526.355 58.3835 524.884 56.9517C523.432 55.5199 521.264 54.804 518.381 54.804C515.378 54.804 513.012 55.4702 511.281 56.8026C509.571 58.1151 508.388 59.5767 507.732 61.1875L499.35 59.2784C500.344 56.4943 501.796 54.2472 503.705 52.5369C505.634 50.8068 507.851 49.554 510.357 48.7784C512.862 47.983 515.497 47.5852 518.262 47.5852C520.091 47.5852 522.03 47.804 524.078 48.2415C526.146 48.6591 528.075 49.4347 529.865 50.5682C531.675 51.7017 533.156 53.3224 534.31 55.4304C535.463 57.5185 536.04 60.233 536.04 63.5739V94H527.33V87.7358H526.972C526.395 88.8892 525.53 90.0227 524.377 91.1364C523.223 92.25 521.742 93.1747 519.932 93.9105C518.122 94.6463 515.955 95.0142 513.429 95.0142ZM515.368 87.8551C517.834 87.8551 519.942 87.3679 521.692 86.3935C523.462 85.419 524.804 84.1463 525.719 82.5753C526.654 80.9844 527.121 79.2841 527.121 77.4744V71.5682C526.803 71.8864 526.186 72.1847 525.271 72.4631C524.377 72.7216 523.352 72.9503 522.199 73.1491C521.046 73.3281 519.922 73.4972 518.828 73.6562C517.735 73.7955 516.82 73.9148 516.084 74.0142C514.354 74.233 512.773 74.6009 511.341 75.1179C509.929 75.6349 508.796 76.3807 507.941 77.3551C507.105 78.3097 506.688 79.5824 506.688 81.1733C506.688 83.3807 507.503 85.0511 509.134 86.1847C510.764 87.2983 512.843 87.8551 515.368 87.8551ZM547.92 94V48.1818H556.54V55.4602H557.018C557.853 52.9943 559.324 51.0554 561.432 49.6435C563.56 48.2116 565.966 47.4957 568.651 47.4957C569.208 47.4957 569.864 47.5156 570.62 47.5554C571.395 47.5952 572.002 47.6449 572.439 47.7045V56.2358C572.081 56.1364 571.445 56.027 570.53 55.9077C569.616 55.7685 568.701 55.6989 567.786 55.6989C565.678 55.6989 563.799 56.1463 562.148 57.0412C560.518 57.9162 559.225 59.1392 558.27 60.7102C557.316 62.2614 556.839 64.0312 556.839 66.0199V94H547.92ZM598.264 94.9247C593.75 94.9247 589.862 93.9602 586.601 92.0312C583.36 90.0824 580.854 87.348 579.084 83.8281C577.334 80.2884 576.459 76.142 576.459 71.3892C576.459 66.696 577.334 62.5597 579.084 58.9801C580.854 55.4006 583.32 52.6065 586.482 50.598C589.664 48.5895 593.382 47.5852 597.638 47.5852C600.223 47.5852 602.729 48.0128 605.155 48.8679C607.581 49.723 609.759 51.0653 611.688 52.8949C613.617 54.7244 615.138 57.1009 616.252 60.0241C617.365 62.9276 617.922 66.4574 617.922 70.6136V73.7756H581.5V67.0938H609.182C609.182 64.7472 608.705 62.669 607.75 60.8594C606.796 59.0298 605.453 57.5881 603.723 56.5341C602.013 55.4801 600.004 54.9531 597.698 54.9531C595.192 54.9531 593.004 55.5696 591.135 56.8026C589.286 58.0156 587.854 59.6065 586.84 61.5753C585.845 63.5241 585.348 65.642 585.348 67.929V73.1491C585.348 76.2116 585.885 78.8168 586.959 80.9645C588.053 83.1122 589.574 84.7528 591.523 85.8864C593.472 87 595.749 87.5568 598.354 87.5568C600.044 87.5568 601.585 87.3182 602.977 86.8409C604.369 86.3437 605.573 85.608 606.587 84.6335C607.601 83.6591 608.377 82.456 608.914 81.0241L617.355 82.5455C616.679 85.0312 615.466 87.2088 613.716 89.0781C611.986 90.9276 609.808 92.3693 607.183 93.4034C604.578 94.4176 601.605 94.9247 598.264 94.9247Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
