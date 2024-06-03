import { InnerBlocks } from '@wordpress/block-editor';
import { Abstract, AsymmetricCurve, AsymmetricTriangle, OceanWabe, } from '../../utils/icons';
import SVG from 'react-inlinesvg';

const Container = ({ attributes }) => {
  const { shaped } = attributes;
  const { topShaped, bottomShaped, isShaped, topUploadSvg, bottomUploadSvg } = shaped;
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
                {topShaped === "ocean wave" && <OceanWabe />}
                {topShaped === "asymmetric triangle" && <AsymmetricTriangle />}
                {topShaped === "abstract paintbrush" && <Abstract  />}
                {topShaped === "asymmetric curve" && <AsymmetricCurve  />}
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
                {bottomShaped === "ocean wave" && <OceanWabe  />}
                {bottomShaped === "asymmetric triangle" && <AsymmetricTriangle  />}
                {bottomShaped === "abstract paintbrush" && <Abstract />}
                {bottomShaped === "asymmetric curve" && <AsymmetricCurve  />}
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