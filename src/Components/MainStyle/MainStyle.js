import React from 'react';
import { getBackgroundCSS, getBorderCSS } from '../../../../Components/utils/getCSS';
import { getBoxCss } from '../../utils/functions';

const MainStyle = ({ attributes }) => {
  const { columns, cId, heightColumns, background, isHeight, contentAlign, marginColumns, paddingColumns, overlyBackground, isOverly, border, shapedColumns } = attributes;


  const { oNormalBg, oHoverBg, normalOpacity, hoverOpacity, hoverTransition } = overlyBackground;


  const mainWrapper = `#wrapper-${cId}`;
  const mainDiv = `${mainWrapper} .mainDiv`;
  const innerBlock = `${mainDiv} .innerBlock`;
  const bottomShaped = `${mainDiv} .bottom-shaped`;
  const topShaped = `${mainDiv} .top-shaped`;

  return (
    <style>
      {`
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
            display: flex;
            align-items: ${contentAlign};
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
          }
        }
        ${mainDiv}{
          width: ${columns.width.desktop};
          ${getBoxCss(marginColumns.margin.desktop, "margin")};
          ${getBoxCss(paddingColumns.padding.desktop, "padding")};
          ${getBorderCSS(border)};
          
        }   
        @media only screen and (max-width:640px){
          ${mainDiv}{
          width: ${columns.width.mobile};
          ${getBoxCss(paddingColumns.padding.mobile, "padding")};
          ${getBoxCss(marginColumns.margin.mobile, "margin")};
        }
      }
      @media only screen and (min-width:641px) and (max-width: 1024px){
        ${mainDiv}{
          width: ${columns.width.tablet};
          ${getBoxCss(paddingColumns.padding.tablet, "padding")};
          ${getBoxCss(marginColumns.margin.tablet, "margin")};
        }
      }

      ${topShaped} svg{
        width: ${shapedColumns.topWidth.desktop};
        height: ${shapedColumns.topHeight.desktop};
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