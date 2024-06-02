import { InnerBlocks } from '@wordpress/block-editor';
import { Abstract, AsymmetricCurve, AsymmetricTriangle, OceanWabe, } from '../../utils/icons';
import SVG from 'react-inlinesvg';

const Container = ({ attributes }) => {
  const { shaped } = attributes;
  const { topShaped, bottomShaped, topColors, bottomColors, isShaped, topUploadSvg, bottomUploadSvg } = shaped;
  const { topUploadShaped, bottomUploadShaped } = isShaped;

  return (
    <div className='mainDiv'>


      {/* Top Shaped */}
      {
        topUploadShaped ? <div className='top-shaped'>
            <SVG
              src={topUploadSvg?.url}
              height=""
              width=""
            />
        </div> : <>
          {
            topShaped === "none" ? "" :
              <div className='top-shaped'>
                {topShaped === "ocean wave" && <OceanWabe color={topColors} />}
                {topShaped === "asymmetric triangle" && <AsymmetricTriangle color={topColors} />}
                {topShaped === "abstract paintbrush" && <Abstract color={topColors} />}
                {topShaped === "asymmetric curve" && <AsymmetricCurve color={topColors} />}
              </div>
          }
        </>
      }

      {/* Bottom shaped */}
      {
        bottomUploadShaped ? <div className='bottom-shaped'>
          <SVG
            src={bottomUploadSvg?.url}
            height=""
            width=""
          />
        </div> : <>
          {
            bottomShaped === "none" ? "" :
              <div className='bottom-shaped'>
                {bottomShaped === "ocean wave" && <OceanWabe color={bottomColors} />}
                {bottomShaped === "asymmetric triangle" && <AsymmetricTriangle color={bottomColors} />}
                {bottomShaped === "abstract paintbrush" && <Abstract color={bottomColors} />}
                {bottomShaped === "asymmetric curve" && <AsymmetricCurve color={bottomColors} />}
              </div>
          }
        </>
      }
      

      <div className='innerBlock'>
        <InnerBlocks />
      </div>
    </div>
  );
};

export default Container;