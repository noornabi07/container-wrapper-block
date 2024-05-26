import React from 'react';
import { AiFillLock } from '../../../utils/icons';

const BottomPremium = ({ attributes }) => {
  const { shaped } = attributes;
  const { bottomShaped } = shaped;
  return (
    <div>
      {/* top shaped */}
      {bottomShaped === "cloud" && <div className='premium'>
        <span style={{ color: "#FFC100" }}><AiFillLock /></span>
        <p style={{ marginTop: "10px" }}> <span style={{ color: "#10439F", cursor: "pointer" }}>Upgrade To Pro premium</span> features</p></div>
      }
      {bottomShaped === "mountain" && <div className='premium'>
        <span style={{ color: "#FFC100" }}><AiFillLock /></span>
        <p style={{ marginTop: "10px" }}> <span style={{ color: "#10439F", cursor: "pointer" }}>Upgrade To Pro premium</span> features</p></div>
      }
      {bottomShaped === "fire" && <div className='premium'>
        <span style={{ color: "#FFC100" }}><AiFillLock /></span>
        <p style={{ marginTop: "10px" }}> <span style={{ color: "#10439F", cursor: "pointer" }}>Upgrade To Pro premium</span> features</p></div>
      }
      {bottomShaped === "sports" && <div className='premium'>
        <span style={{ color: "#FFC100" }}><AiFillLock /></span>
        <p style={{ marginTop: "10px" }}> <span style={{ color: "#10439F", cursor: "pointer" }}>Upgrade To Pro premium</span> features</p></div>
      }
      {bottomShaped === "travel" && <div className='premium'>
        <span style={{ color: "#FFC100" }}><AiFillLock /></span>
        <p style={{ marginTop: "10px" }}> <span style={{ color: "#10439F", cursor: "pointer" }}>Upgrade To Pro premium</span> features</p></div>
      }
    </div>
  );
};

export default BottomPremium;