import React from 'react';
import { getBackgroundCSS, getBorderCSS, getTypoCSS } from '../../../../Components/utils/getCSS';
import { getBoxCss } from '../../utils/functions';

const MainStyle = ({ attributes }) => {
  const { columns, cId, heightColumns, background, marginColumns, paddingColumns, overlyBackground, border, shapedColumns, innerBlockStyles, shaped } = attributes;

  const { oNormalBg, oHoverBg, normalOpacity, hoverOpacity, hoverTransition, isOverly, } = overlyBackground;
  const { isHeight, contentAlign, contentColor, contentTypo } = innerBlockStyles;
  const { flip, isShaped } = shaped;
  const { isTopFlip, isBottomFlip } = flip;
  const { bottomUploadShaped } = isShaped;



  const mainWrapper = `#wrapper-${cId}`;
  const mainDiv = `${mainWrapper} .mainDiv`;
  const innerBlock = `${mainDiv} .innerBlock`;
  const bottomShaped = `${mainDiv} .bottom-shaped`;
  const topShaped = `${mainDiv} .top-shaped`;

  // ${ shapedColumns.topHeight.desktop }

  return (
    <style>
      {`
        ${innerBlock}{
          ${isHeight === true && `
            ${contentAlign === "start" && `
              top: 10%;
            `};
            ${contentAlign === "center" && `
              top: 40%;
            `};
            ${contentAlign === "end" && `
              top: 70%;
            `}
          `};
          color: ${contentColor};
        }

        ${getTypoCSS(`${innerBlock}`, contentTypo)?.styles};

        ${innerBlock}::before{      
          ${isOverly === true && `
            ${getBackgroundCSS(oNormalBg)}
          `};
          opacity: ${normalOpacity};
        }

        ${innerBlock}:hover::before{
          transition: ${hoverTransition}s ease-in-out;
          ${isOverly === true && `
            ${getBackgroundCSS(oHoverBg)}
          `};
          opacity: ${hoverOpacity};
        }

        ${mainWrapper}{
          ${isHeight === true && `
            height: ${heightColumns.height.desktop};
            overflow: scroll;
          `};
          ${getBackgroundCSS(background.normalBg)};
          ${isHeight === false && `
            height: 80px;
          `}
        }

        ${mainWrapper}:hover{
          ${getBackgroundCSS(background.hoverBg)}
          transition: ${background.transition}s ease-in-out;
        }

        ${mainDiv}{
          height:inherit;
          width: ${columns.width.desktop || "100%"};
          ${getBoxCss(marginColumns.margin.desktop, "margin")};
          ${getBoxCss(paddingColumns.padding.desktop, "padding")};
          ${getBorderCSS(border)};
        } 

        ${topShaped} svg{
        width: ${shapedColumns.topWidth.desktop};
        height: ${shapedColumns.topHeight.desktop};
        ${isTopFlip === true && `
          transform: translateX(0%) rotateY(180deg);
        `}
      }

      ${bottomShaped} svg{
        width: ${shapedColumns.bottomWidth.desktop};
        height: ${shapedColumns.bottomHeight.desktop};
        ${isBottomFlip === true && `
          transform: translateX(0%) rotateX(180deg);
        `};
        ${isBottomFlip === false && `
          transform: rotate(180deg);
        `}
        ${bottomUploadShaped === true && `
          transform: none;
        `}
      }

        @media only screen and (max-width:640px){
          ${mainWrapper}{
          ${isHeight === true && `
            height: ${heightColumns.height.mobile};
            overflow: scroll;
            display: flex;
            align-items: center;
          `}
          ${isHeight === false && `
            height: 80px;
          `}
          }

          ${mainDiv}{
          height:inherit;
          width: ${columns.width.mobile};
          ${getBoxCss(paddingColumns.padding.mobile, "padding")};
          ${getBoxCss(marginColumns.margin.mobile, "margin")};
        }

        ${topShaped} svg{
          width: ${shapedColumns.topWidth.mobile};
          height: ${shapedColumns.topHeight.mobile};
        }

        ${bottomShaped} svg{
          width: ${shapedColumns.bottomWidth.mobile};
          height: ${shapedColumns.bottomHeight.mobile};
        }

      }

      @media only screen and (min-width:641px) and (max-width: 1024px){
        ${mainDiv}{
          height:inherit;
          width: ${columns.width.tablet};
          ${getBoxCss(paddingColumns.padding.tablet, "padding")};
          ${getBoxCss(marginColumns.margin.tablet, "margin")};
        }

        ${topShaped} svg{
          width: ${shapedColumns.topWidth.tablet} !important;
          height: ${shapedColumns.topHeight.tablet};
        }

         ${bottomShaped} svg{
          width: ${shapedColumns.bottomWidth.tablet};
          height: ${shapedColumns.bottomHeight.tablet};
        }

        ${mainWrapper}{
            ${isHeight === true && `
            height: ${heightColumns.height.tablet};
            overflow: scroll;
            display: flex;
            align-items: center;
          `}
          ${isHeight === false && `
            height: 80px;
          `}
          }
      }

      `}

    </style>
  );
};

export default MainStyle;