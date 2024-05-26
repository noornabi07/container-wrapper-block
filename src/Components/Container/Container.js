import { InnerBlocks } from '@wordpress/block-editor';
import { Abstract, AsymmetricCurve, AsymmetricTriangle, OceanWabe, } from '../../utils/icons';

const Container = ({ attributes }) => {
  const { shaped } = attributes;
  const { topShaped, bottomShaped, topColors, bottomColors } = shaped;

  return (
    <div className='mainDiv'>

      {
        topShaped === "none" ? "" :
          <div className='top-shaped'>
            {topShaped === "ocean wave" && <OceanWabe color={topColors} />}
            {topShaped === "asymmetric triangle" && <AsymmetricTriangle color={topColors} />}
            {topShaped === "abstract paintbrush" && <Abstract color={topColors} />}
            {topShaped === "asymmetric curve" && <AsymmetricCurve color={topColors} />}
          </div>
      }

      {
        bottomShaped === "none" ? "" :
          <div className='bottom-shaped'>
            {bottomShaped === "ocean wave" && <OceanWabe color={bottomColors} />}
            {bottomShaped === "asymmetric triangle" && <AsymmetricTriangle color={bottomColors} />}
            {bottomShaped === "abstract paintbrush" && <Abstract color={bottomColors} />}
            {bottomShaped === "asymmetric curve" && <AsymmetricCurve color={bottomColors} />}
          </div>
      }

      <div className='innerBlock'>
        <InnerBlocks />
      </div>
    </div>
  );
};

export default Container;