import { PanelBody, PanelRow, SelectControl, ToggleControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { produce } from 'immer';
import React, { useState } from 'react';
import { BColor, Label, Typography } from '../../../../../Components';
import { updateData } from '../../../utils/functions';
import { alignmentOptions, shapedOptions } from '../../../utils/options';
import { Device } from '../../Panel/Device/Device';
import { MediaArea } from '../../Panel/MediaArea/MediaArea';
import BottomPremium from './BottomPremium';
import Premium from './Premium';


const ContentSettings = ({ attributes, setAttributes }) => {
  const [device, setDevice] = useState('desktop');
  const { columns, shaped, align, heightColumns, shapedColumns, innerBlockStyles } = attributes;

  const { topColors, bottomColors, topShaped, bottomShaped, isShaped, topUploadSvg, bottomUploadSvg, flip, front, shapedButton } = shaped;
  const { topUploadShaped, bottomUploadShaped } = isShaped;
  const { isTopFlip, isBottomFlip } = flip;
  const { isTopFront, isBottomFront } = front;
  const { isWrapper, isHeight, contentAlign, contentColor, contentTypo } = innerBlockStyles;



  return (
    <Fragment>
      {/* General setting */}
      <PanelBody title={__("General", "container-block")} initialOpen={true}>
        {/* wrapper width */}
        <div>
          <h4>Wrapper Width</h4>
          <div className='wrapper-types'>
            {
              ["full", "wide", "none"].map((el, i) => <button className={`${align === el && "active"}`} onClick={() => setAttributes({ align: el })} key={i}>{el}</button>)
            }
          </div>
        </div>

        {/* content width */}
        <div style={{ marginTop: '10px', marginBottom: '20px' }}>
          <PanelRow>
            <Label className='mb5'>{__('Content Width:', 'container-block')}</Label>
            <Device onChange={val => setDevice(val)} />
          </PanelRow>
          <UnitControl value={columns.width[device]} onChange={val => setAttributes({ columns: updateData(columns, val, "width", device) })} beforeIcon='grid-view' ></UnitControl>
        </div>

        {/* Inner Content color setup */}
        <div style={{ marginBottom: "5px" }}>
          <BColor label={__('Content Color', 'container-block')} value={contentColor} onChange={val => setAttributes({
            innerBlockStyles: updateData(innerBlockStyles, val, "contentColor")
          })} defaultColor='#F7ED39' />
        </div>

        {/* Inner content typography */}
        <div style={{ marginBottom: "10px" }}>
          <Typography label={__('Content Typo', 'container-block')} value={contentTypo} onChange={val => setAttributes({ innerBlockStyles: updateData(innerBlockStyles, val, "contentTypo") })} defaults={{ fontSize: 20 }} />
        </div>

        {/* ToggleControl */}
        <div>
          {/* wrapper */}
          <ToggleControl
            label="Use With In Wrapper"
            checked={isWrapper}
            onChange={val => setAttributes({ innerBlockStyles: updateData(innerBlockStyles, val, "isWrapper") })}
          >
          </ToggleControl>

          {/* custom height */}
          <ToggleControl
            label="Use Custom Height"
            checked={isHeight}
            onChange={val => setAttributes({ innerBlockStyles: updateData(innerBlockStyles, val, "isHeight") })}
          >
          </ToggleControl>
          {
            isHeight === true ? <>
              <div style={{ marginTop: '10px', marginBottom: '20px' }}>
                <PanelRow>
                  <Label className='mb5'>{__('Height:', 'container-block')}</Label>
                  <Device onChange={val => setDevice(val)} />
                </PanelRow>
                <UnitControl value={heightColumns.height[device]} onChange={val => setAttributes({ heightColumns: updateData(heightColumns, val, "height", device) })} beforeIcon='grid-view' ></UnitControl>

              </div>

              <SelectControl
                label={__("Content Alignment", "container-block")}
                value={contentAlign}
                options={alignmentOptions}
                onChange={(val) => {
                  setAttributes({ innerBlockStyles: updateData(innerBlockStyles, val, "contentAlign") })
                }}
              >
              </SelectControl>
            </> : ""
          }
        </div>
      </PanelBody>

      {/* shaped divider setting */}
      <PanelBody title={__("Shaped Divider", "container-block")} initialOpen={true}>
        <div style={{ marginBottom: "20px" }}>
          <div className='shaped-types'>
            {
              ["top", "bottom"].map((el, i) => <button className={`${shapedButton === el && "shapedActive"}`} onClick={() => setAttributes({ shaped: updateData(shaped, el, "shapedButton") })} key={i}>{el}</button>)
            }
          </div>
        </div>


        {
          shapedButton === "top" ? <> <ToggleControl
            label="Top Upload Shaped"
            checked={topUploadShaped}
            onChange={val => setAttributes({ shaped: updateData(shaped, val, "isShaped", "topUploadShaped") })}
          >
          </ToggleControl>

            {
              topUploadShaped === true && <div style={{ margin: "10px 0px" }}>
                <MediaArea value={topUploadSvg} types="image/svg+xml" onChange={val => setAttributes({
                  shaped: updateData(shaped, val.url, "topUploadSvg", "url")
                })} height="100%" width="100%" />
              </div>
            }

            {
              topUploadShaped === false && <SelectControl
                label={__("Top Shaped Type", "container-block")}
                value={topShaped}
                options={shapedOptions}
                onChange={(val) => {
                  setAttributes({ shaped: updateData(shaped, val, "topShaped") })
                }}
              >
              </SelectControl>
            }

            <Premium attributes={attributes} />

            <BColor label={__('Top shaped color', 'container-block')} value={topColors} onChange={val => setAttributes({
              shaped: produce(shaped, draft => {
                draft.topColors = val
              })
            })} defaultColor='#006769' />

            {/* top shaped width setting */}
            <div style={{ marginTop: '10px', marginBottom: '20px' }}>
              <PanelRow>
                <Label className='mb5'>{__('Top shaped Width:', 'container-block')}</Label>
                <Device onChange={val => setDevice(val)} />
              </PanelRow>
              <UnitControl value={shapedColumns.topWidth[device]} onChange={val => setAttributes({ shapedColumns: updateData(shapedColumns, val, "topWidth", device) })} beforeIcon='grid-view' ></UnitControl>
            </div>

            {/* top shaped height settings */}
            <div style={{ marginTop: '10px', marginBottom: '20px' }}>
              <PanelRow>
                <Label className='mb5'>{__('Top shaped Height:', 'container-block')}</Label>
                <Device onChange={val => setDevice(val)} />
              </PanelRow>
              <UnitControl value={shapedColumns.topHeight[device]} onChange={val => setAttributes({ shapedColumns: updateData(shapedColumns, val, "topHeight", device) })} beforeIcon='grid-view' ></UnitControl>
            </div>

            {/* Toggle flip */}
            <ToggleControl
              label="Flip"
              checked={isTopFlip}
              onChange={val => setAttributes({ shaped: updateData(shaped, val, "flip", "isTopFlip") })}
            >
            </ToggleControl>

            {/* toggle front */}
            <ToggleControl
              label="Bring to Front"
              checked={isTopFront}
              onChange={val => setAttributes({ shaped: updateData(shaped, val, "front", "isTopFront") })}
            >
            </ToggleControl>

          </> : <>

            {/* Bottom shaped */}
            {/* Bottom upload shaped */}
            <ToggleControl
              label="Bottom Upload Shaped"
              checked={bottomUploadShaped}
              onChange={val => setAttributes({ shaped: updateData(shaped, val, "isShaped", "bottomUploadShaped") })}
            >
            </ToggleControl>
            {
              bottomUploadShaped === true && <div style={{ margin: "10px 0px" }}>
                <MediaArea value={bottomUploadSvg} types="image/svg+xml" onChange={val => setAttributes({
                  shaped: updateData(shaped, val.url, "bottomUploadSvg", "url")
                })} height="100%" width="100%" />
              </div>
            }

            {
              bottomUploadShaped === false && <SelectControl
                label={__("Bottom Shaped Type", "container-block")}
                value={bottomShaped}
                options={shapedOptions}
                onChange={(val) => {
                  const newShaped = produce(shaped, draft => {
                    draft.bottomShaped = val
                  })
                  setAttributes({ shaped: newShaped })
                }}
              >
              </SelectControl>
            }

            <BottomPremium attributes={attributes} />
            <BColor label={__('Bottom Shaped Color', 'container-block')} value={bottomColors} onChange={val => setAttributes({
              shaped: produce(shaped, draft => {
                draft.bottomColors = val
              })
            })} defaultColor='#006769' />

            {/* bottom shaped width setting */}
            <div style={{ marginTop: '10px', marginBottom: '20px' }}>
              <PanelRow>
                <Label className='mb5'>{__('Bottom Shaped Width:', 'container-block')}</Label>
                <Device onChange={val => setDevice(val)} />
              </PanelRow>
              <UnitControl value={shapedColumns.bottomWidth[device]} onChange={val => setAttributes({ shapedColumns: updateData(shapedColumns, val, "bottomWidth", device) })} beforeIcon='grid-view' ></UnitControl>
            </div>

            {/* bottom shaped height settings */}
            <div style={{ marginTop: '10px', marginBottom: '20px' }}>
              <PanelRow>
                <Label className='mb5'>{__('Bottom Shaped Height:', 'container-block')}</Label>
                <Device onChange={val => setDevice(val)} />
              </PanelRow>
              <UnitControl value={shapedColumns.bottomHeight[device]} onChange={val => setAttributes({ shapedColumns: updateData(shapedColumns, val, "bottomHeight", device) })} beforeIcon='grid-view' ></UnitControl>
            </div>

            {/* Toggle flip */}
            <ToggleControl
              label="Flip"
              checked={isBottomFlip}
              onChange={val => setAttributes({ shaped: updateData(shaped, val, "flip", "isBottomFlip") })}
            >
            </ToggleControl>

            {/* toggle front */}
            <ToggleControl
              label="Bring to Front"
              checked={isBottomFront}
              onChange={val => setAttributes({ shaped: updateData(shaped, val, "front", "isBottomFront") })}
            >
            </ToggleControl>

          </>
        }

      </PanelBody>
    </Fragment>
  );
};

export default ContentSettings;