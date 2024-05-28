import React from 'react';
import { getBackgroundCSS, getBorderCSS } from '../../../../Components/utils/getCSS';
import { getBoxCss } from '../../utils/functions';

const MainStyle = ({ attributes }) => {
  const { columns, cId, heightColumns, background, isHeight, contentAlign, marginColumns, paddingColumns, overlyBackground, isOverly, border, shapedColumns, isTopFlip, isBottomFlip } = attributes;

  const { oNormalBg, oHoverBg, normalOpacity, hoverOpacity, hoverTransition } = overlyBackground;


  const mainWrapper = `#wrapper-${cId}`;
  const mainDiv = `${mainWrapper} .mainDiv`;
  const innerBlock = `${mainDiv} .innerBlock`;
  const bottomShaped = `${mainDiv} .bottom-shaped`;
  const topShaped = `${mainDiv} .top-shaped`;

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
          `}
        }
        ${innerBlock}::before{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          ${isOverly === true && `
            ${getBackgroundCSS(oNormalBg)}
          `};
          opacity: ${normalOpacity};
        }

        ${innerBlock}:hover::before{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
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
        @media only screen and (max-width: 640px){
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
        }
        @media only screen and (min-width: 641px) and (max-width: 1024px){
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
        ${mainDiv}{
          height:inherit;
          width: ${columns.width.desktop || "100%"};
          ${getBoxCss(marginColumns.margin.desktop, "margin")};
          ${getBoxCss(paddingColumns.padding.desktop, "padding")};
          ${getBorderCSS(border)};
          
        }   
        @media only screen and (max-width:640px){
          ${mainDiv}{
          height:inherit;
          width: ${columns.width.mobile};
          ${getBoxCss(paddingColumns.padding.mobile, "padding")};
          ${getBoxCss(marginColumns.margin.mobile, "margin")};
        }
      }
      @media only screen and (min-width:641px) and (max-width: 1024px){
        ${mainDiv}{
          height:inherit;
          width: ${columns.width.tablet};
          ${getBoxCss(paddingColumns.padding.tablet, "padding")};
          ${getBoxCss(marginColumns.margin.tablet, "margin")};
        }
      }

      ${topShaped} svg{
        width: ${shapedColumns.topWidth.desktop};
        height: ${shapedColumns.topHeight.desktop};
        ${isTopFlip === true && `
          transform: translateX(0%) rotateY(180deg);
        `}
      }
      @media only screen and (min-width:641px) and (max-width: 1024px){
        ${topShaped} svg{
          width: ${shapedColumns.topWidth.tablet};
          height: ${shapedColumns.topHeight.tablet};
        }
      }
      @media only screen and (max-width: 640px){
        ${topShaped} svg{
          width: ${shapedColumns.topWidth.mobile};
          height: ${shapedColumns.topHeight.mobile};
        }
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
      }
      @media only screen and (min-width:641px) and (max-width: 1024px){
        ${bottomShaped} svg{
          width: ${shapedColumns.bottomWidth.tablet};
          height: ${shapedColumns.bottomHeight.tablet};
        }
      }
      @media only screen and (max-width: 640px){
        ${bottomShaped} svg{
          width: ${shapedColumns.bottomWidth.mobile};
          height: ${shapedColumns.bottomHeight.mobile};
        }
      }
      `}

    </style>
  );
};

export default MainStyle;