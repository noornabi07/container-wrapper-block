import { PanelBody, PanelRow, SelectControl, ToggleControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import React, { useState } from 'react';
import { BDevice, Label, BColor } from '../../../../../Components';
import { updateData } from '../../../utils/functions';
import { produce } from 'immer';
import { alignmentOptions, shapedOptions } from '../../../utils/options';
import Premium from './Premium';
import BottomPremium from './BottomPremium';


const ContentSettings = ({ attributes, setAttributes }) => {
  const { columns, isWrapper, isHeight, contentAlign, shapedButton, shaped, align, heightColumns, shapedColumns, isTopFlip, isBottomFlip, isTopFront, isBottomFront } = attributes;


  const { topColors, bottomColors } = shaped;

  const [device, setDevice] = useState('desktop');
  const { topShaped, bottomShaped } = shaped;

  return (
    <Fragment>
      {/* General setting */}
      <PanelBody title={__("General", "container-block")} initialOpen={false}>
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
            <BDevice device={device} onChange={val => setDevice(val)} />
          </PanelRow>
          <UnitControl value={columns.width[device]} onChange={val => setAttributes({ columns: updateData(columns, val, "width", device) })} beforeIcon='grid-view' ></UnitControl>
        </div>

        {/* ToggleControl */}
        <div>
          {/* wrapper */}
          <ToggleControl
            label="Use With In Wrapper"
            checked={isWrapper}
            onChange={() => setAttributes({ isWrapper: !isWrapper })}
          >
          </ToggleControl>

          {/* custom height */}
          <ToggleControl
            label="Use Custom Height"
            checked={isHeight}
            onChange={() => setAttributes({ isHeight: !isHeight })}
          >
          </ToggleControl>
          {
            isHeight === true ? <>
              <div style={{ marginTop: '10px', marginBottom: '20px' }}>
                <PanelRow>
                  <Label className='mb5'>{__('Height:', 'container-block')}</Label>
                  <BDevice device={device} onChange={val => setDevice(val)} />
                </PanelRow>
                <UnitControl value={heightColumns.height[device]} onChange={val => setAttributes({ heightColumns: updateData(heightColumns, val, "height", device) })} beforeIcon='grid-view' ></UnitControl>

              </div>

              <SelectControl
                label={__("Content Alignment", "container-block")}
                value={contentAlign}
                options={alignmentOptions}
                onChange={(val) => {
                  setAttributes({ contentAlign: val })
                }}
              >
              </SelectControl>
            </> : ""
          }
        </div>
      </PanelBody>

      {/* shaped divider setting */}
      <PanelBody title={__("Shaped Divider", "container-block")} initialOpen={false}>
        <div style={{ marginBottom: "20px" }}>
          <div className='shaped-types'>
            {
              ["top", "bottom"].map((el, i) => <button className={`${shapedButton === el && "shapedActive"}`} onClick={() => setAttributes({ shapedButton: el })} key={i}>{el}</button>)
            }
          </div>
        </div>

        {
          shapedButton === "top" ? <><SelectControl
            label={__("Top Shaped Type", "container-block")}
            value={topShaped}
            options={shapedOptions}
            onChange={(val) => {
              const newShaped = produce(shaped, draft => {
                draft.topShaped = val
              })
              setAttributes({ shaped: newShaped })
            }}
          >
          </SelectControl>

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
                <BDevice device={device} onChange={val => setDevice(val)} />
              </PanelRow>
              <UnitControl value={shapedColumns.topWidth[device]} onChange={val => setAttributes({ shapedColumns: updateData(shapedColumns, val, "topWidth", device) })} beforeIcon='grid-view' ></UnitControl>
            </div>

            {/* top shaped height settings */}
            <div style={{ marginTop: '10px', marginBottom: '20px' }}>
              <PanelRow>
                <Label className='mb5'>{__('Top shaped Height:', 'container-block')}</Label>
                <BDevice device={device} onChange={val => setDevice(val)} />
              </PanelRow>
              <UnitControl value={shapedColumns.topHeight[device]} onChange={val => setAttributes({ shapedColumns: updateData(shapedColumns, val, "topHeight", device) })} beforeIcon='grid-view' ></UnitControl>
            </div>

            {/* Toggle flip */}
            <ToggleControl
              label="Flip"
              checked={isTopFlip}
              onChange={() => setAttributes({ isTopFlip: !isTopFlip })}
            >
            </ToggleControl>

            {/* toggle front */}
            <ToggleControl
              label="Bring to Front"
              checked={isTopFront}
              onChange={() => setAttributes({ isTopFront: !isTopFront })}
            >
            </ToggleControl>

          </> : <>
              
              {/* Bottom shaped */}

            <SelectControl
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
                  <BDevice device={device} onChange={val => setDevice(val)} />
                </PanelRow>
                <UnitControl value={shapedColumns.bottomWidth[device]} onChange={val => setAttributes({ shapedColumns: updateData(shapedColumns, val, "bottomWidth", device) })} beforeIcon='grid-view' ></UnitControl>
              </div>

              {/* bottom shaped height settings */}
              <div style={{ marginTop: '10px', marginBottom: '20px' }}>
                <PanelRow>
                  <Label className='mb5'>{__('Bottom Shaped Height:', 'container-block')}</Label>
                  <BDevice device={device} onChange={val => setDevice(val)} />
                </PanelRow>
                <UnitControl value={shapedColumns.bottomHeight[device]} onChange={val => setAttributes({ shapedColumns: updateData(shapedColumns, val, "bottomHeight", device) })} beforeIcon='grid-view' ></UnitControl>
              </div>

              {/* Toggle flip */}
              <ToggleControl
                label="Flip"
                checked={isBottomFlip}
                onChange={() => setAttributes({ isBottomFlip: !isBottomFlip })}
              >
              </ToggleControl>

              {/* toggle front */}
              <ToggleControl
                label="Bring to Front"
                checked={isBottomFront}
                onChange={() => setAttributes({ isBottomFront: !isBottomFront })}
              >
              </ToggleControl>

          </>
        }

      </PanelBody>
    </Fragment>
  );
};

export default ContentSettings;