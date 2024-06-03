import { PanelBody, PanelRow, RangeControl, SelectControl, ToggleControl } from '@wordpress/components';
import { Fragment, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { produce } from 'immer';
import React from 'react';
import { Background, BorderControl, Label } from '../../../../../Components';
import { updateData } from '../../../utils/functions';
import { BBoxControl } from '../../Panel/BBoxControl/BBoxControl';
import { Device } from '../../Panel/Device/Device';


const StyleSetting = ({ attributes, setAttributes }) => {
  const { marginColumns, paddingColumns, background, overlyBackground, innerBlockStyles } = attributes;

  const [device, setDevice] = useState('desktop');
  const { normalBg, hoverBg, transition } = background;
  const { oNormalBg, oHoverBg, normalOpacity, hoverOpacity, hoverTransition, isOverly, blendType } = overlyBackground;
  const { isFilterCss, actionStyleButton, overlyStyleButton, borderStyleButton, border } = innerBlockStyles;


  return (
    <Fragment>
      {/* Margin setting */}
      <PanelBody>
        <div>
          <PanelRow>
            <Label className='mb5'>{__('Margin:', 'text-domain')}</Label>
            <Device onChange={val => setDevice(val)} />
          </PanelRow>
          <BBoxControl values={marginColumns.margin[device]} onChange={val => setAttributes({ marginColumns: updateData(marginColumns, val, "margin", device) })}></BBoxControl>
        </div>

        {/* Padding setting */}
        <div>
          <PanelRow>
            <Label className='mb5'>{__('Padding:', 'text-domain')}</Label>
            <Device onChange={val => setDevice(val)} />
          </PanelRow>
          <BBoxControl values={paddingColumns.padding[device]} onChange={val => setAttributes({ paddingColumns: updateData(paddingColumns, val, "padding", device) })} ></BBoxControl>
        </div>
      </PanelBody>

      {/* Background settings  */}
      <PanelBody title={__("Background", "container-block")} initialOpen={false}>
        <div style={{ marginTop: "10px" }}>
          <div className='shaped-types'>
            {
              ["normal", "hover"].map((val, i) => <button className={`${actionStyleButton === val && "shapedActive"}`} onClick={() => setAttributes({ innerBlockStyles: updateData(innerBlockStyles, val, "actionStyleButton") })} key={i}>{val}</button>)
            }
          </div>
        </div>

        {
          actionStyleButton === "normal" ?
            <>
              {/* Background */}
              <Background label={__('Background Color', 'container-block')} value={normalBg} onChange={val => {
                const newBg = produce(background, draft => {
                  draft.normalBg = val
                })
                setAttributes({ background: newBg })
              }} defaults={{ color: '#fff' }} />

              {/* ToggleControl */}
              <div style={{ marginTop: "10px" }}>
                <ToggleControl
                  label="Enable Overly"
                  checked={isOverly}
                  onChange={val => setAttributes({ overlyBackground: updateData(overlyBackground, val, "isOverly") })}
                >
                </ToggleControl>
                {
                  isOverly === true ?
                    <>
                      <div style={{ marginTop: "10px" }}>
                        <div className='shaped-types'>
                          {
                            ["normal", "hover"].map((val, i) => <button className={`${overlyStyleButton === val && "shapedActive"}`} onClick={() => setAttributes({ innerBlockStyles: updateData(innerBlockStyles, val, "overlyStyleButton") })} key={i}>{val}</button>)
                          }
                        </div>
                      </div>

                      {/* overly normal background */}
                      <Background label={__('Overly Color', 'container-block')} value={oNormalBg} onChange={val => {
                        const newBg = produce(overlyBackground, draft => {
                          draft.oNormalBg = val
                        })
                        setAttributes({ overlyBackground: newBg })
                      }} defaults={{ color: '#fff' }} />

                      {/* Opacity */}
                      <RangeControl
                        label="Opacity"
                        value={normalOpacity}
                        onChange={val => {
                          const newOpacity = produce(overlyBackground, draft => {
                            draft.normalOpacity = val
                          })
                          setAttributes({ overlyBackground: newOpacity })
                        }}
                        step={0.1}
                      ></RangeControl>

                      <SelectControl
                        label={__("Blend Mode", "container-block")}
                        value={blendType}
                        options={[
                          { value: 'normal', label: 'Normal' },
                          { value: 'multiply', label: 'Multiply' },
                          { value: 'screen', label: 'Screen' },
                          { value: 'overly', label: 'Overly' },
                          { value: 'darken', label: 'Darken' },
                          { value: 'lighten', label: 'Lighten' },
                          { value: 'color dodge', label: 'Color Dodge' },
                          { value: 'saturation', label: 'Saturation' },
                          { value: 'color', label: 'Color' },
                          { value: 'luminosity', label: 'Luminosity' }
                        ]}
                        onChange={(val) => {
                          setAttributes({ overlyBackground: updateData(overlyBackground, val, "blendType") })
                        }}
                      >
                      </SelectControl>

                      <ToggleControl
                        label="CSS Filters"
                        checked={isFilterCss}
                        onChange={val => setAttributes({ innerBlockStyles: updateData(innerBlockStyles, val, "isFilterCss") })}
                      >
                      </ToggleControl>

                    </> : ""
                }
              </div></> :
            <>
              {/* Hover  Background */}
              <Background label={__('Hover Background Color', 'container-block')} value={hoverBg} onChange={val => {
                const newBg = produce(background, draft => {
                  draft.hoverBg = val
                })
                setAttributes({ background: newBg })
              }} defaults={{ color: '#fff' }} />

              {/* Background Transition */}
              <div style={{ marginTop: "10px" }}>
                <p style={{ marginBottom: "0px" }}>Background Transition</p>
                <RangeControl
                  value={transition}
                  onChange={val => {
                    const newTransition = produce(background, draft => {
                      draft.transition = val
                    })
                    setAttributes({ background: newTransition })
                  }}
                  step={0.5}
                ></RangeControl>
              </div>

              {/* ToggleControl */}
              <div style={{ marginTop: "10px" }}>
                <ToggleControl
                  label="Enable Overly"
                  checked={isOverly}
                  onChange={val => setAttributes({ overlyBackground: updateData(overlyBackground, val, "isOverly") })}
                >
                </ToggleControl>
                {
                  isOverly === true ?
                    <>
                      <div style={{ marginTop: "10px" }}>
                        <div className='shaped-types'>
                          {
                            ["normal", "hover"].map((val, i) => <button className={`${overlyStyleButton === val && "shapedActive"}`} onClick={() => setAttributes({ innerBlockStyles: updateData(innerBlockStyles, val, "overlyStyleButton") })} key={i}>{val}</button>)
                          }
                        </div>

                      </div>

                      {
                        overlyStyleButton === "normal" ?
                          <>{/* Overly background */}
                            <Background label={__('Overly Color', 'container-block')} value={oHoverBg} onChange={val => {
                              const newBg = produce(overlyBackground, draft => {
                                draft.oHoverBg = val
                              })
                              setAttributes({ overlyBackground: newBg })
                            }} defaults={{ color: '#000' }} />

                            {/* Opacity */}
                            <RangeControl
                              label="Opacity"
                              value={hoverOpacity}
                              onChange={val => {
                                const newOpacity = produce(overlyBackground, draft => {
                                  draft.hoverOpacity = val
                                })
                                setAttributes({ overlyBackground: newOpacity })
                              }}
                              step={0.1}
                            ></RangeControl>

                            <SelectControl
                              label={__("Blend Mode", "container-block")}
                              value={blendType}
                              options={[
                                { value: 'normal', label: 'Normal' },
                                { value: 'multiply', label: 'Multiply' },
                                { value: 'screen', label: 'Screen' },
                                { value: 'overly', label: 'Overly' },
                                { value: 'darken', label: 'Darken' },
                                { value: 'lighten', label: 'Lighten' },
                                { value: 'color dodge', label: 'Color Dodge' },
                                { value: 'saturation', label: 'Saturation' },
                                { value: 'color', label: 'Color' },
                                { value: 'luminosity', label: 'Luminosity' }
                              ]}
                              onChange={(val) => {
                                setAttributes({ blendType: val })
                              }}
                            >
                            </SelectControl></> :
                          <>{/* Overly background */}
                            <Background label={__('Overly Color', 'container-block')} value={oHoverBg} onChange={val => {
                              const newBg = produce(overlyBackground, draft => {
                                draft.oHoverBg = val
                              })
                              setAttributes({ overlyBackground: newBg })
                            }} defaults={{ color: '#000' }} />

                            {/* Opacity */}
                            <RangeControl
                              label="Opacity"
                              value={hoverOpacity}
                              onChange={val => {
                                const newOpacity = produce(overlyBackground, draft => {
                                  draft.hoverOpacity = val
                                })
                                setAttributes({ overlyBackground: newOpacity })
                              }}
                              step={0.1}
                            ></RangeControl>

                            {/* Transition */}
                            <RangeControl
                              label="Opacity Transition"
                              value={hoverTransition}
                              onChange={val => {
                                const newOpacity = produce(overlyBackground, draft => {
                                  draft.hoverTransition = val
                                })
                                setAttributes({ overlyBackground: newOpacity })
                              }}
                              step={0.1}
                            ></RangeControl>


                            <SelectControl
                              label={__("Blend Mode", "container-block")}
                              value={blendType}
                              options={[
                                { value: 'normal', label: 'Normal' },
                                { value: 'multiply', label: 'Multiply' },
                                { value: 'screen', label: 'Screen' },
                                { value: 'overly', label: 'Overly' },
                                { value: 'darken', label: 'Darken' },
                                { value: 'lighten', label: 'Lighten' },
                                { value: 'color dodge', label: 'Color Dodge' },
                                { value: 'saturation', label: 'Saturation' },
                                { value: 'color', label: 'Color' },
                                { value: 'luminosity', label: 'Luminosity' }
                              ]}
                              onChange={(val) => {
                                setAttributes({ blendType: val })
                              }}
                            >
                            </SelectControl></>
                      }

                      <ToggleControl
                        label="CSS Filters"
                        checked={isFilterCss}
                        onChange={() => setAttributes({ isFilterCss: !isFilterCss })}
                      >
                      </ToggleControl>

                    </> : ""
                }
              </div></>
        }

      </PanelBody>


      {/* Border and Shadow panel settings */}
      <PanelBody title={__("Border & Shadow", "container-block")} initialOpen={false}>
        <div style={{ marginTop: "10px" }}>
          <div className='shaped-types'>
            {
              ["normal", "hover"].map((value, i) => <button className={`${borderStyleButton === value && "shapedActive"}`} onClick={() => setAttributes({ innerBlockStyles: updateData(innerBlockStyles, value, "borderStyleButton") })} key={i}>{value}</button>)
            }
          </div>
        </div>


        {/* Border Control */}
        <BorderControl label={__('Border:', 'text-domain')} value={border} onChange={val => setAttributes({ innerBlockStyles: updateData(innerBlockStyles, val, "border") })} defaults={{ radius: '5px' }} />
      </PanelBody>
    </Fragment>
  );
};

export default StyleSetting;