import React from 'react';
import { AiFillLock } from '../../../utils/icons';

const Premium = ({ attributes }) => {
  const { shaped } = attributes;
  const { topShaped } = shaped;

  return (
    <div>
      {/* top shaped */}
      {topShaped === "cloud" && <div className='premium'>
        <span style={{ color: "#FFC100" }}><AiFillLock /></span>
        <p style={{ marginTop: "10px" }}> <span style={{ color: "#10439F", cursor: "pointer" }}>Upgrade To Pro premium</span> features</p></div>
      }
      {topShaped === "mountain" && <div className='premium'>
        <span style={{ color: "#FFC100" }}><AiFillLock /></span>
        <p style={{ marginTop: "10px" }}> <span style={{ color: "#10439F", cursor: "pointer" }}>Upgrade To Pro premium</span> features</p></div>
      }
      {topShaped === "fire" && <div className='premium'>
        <span style={{ color: "#FFC100" }}><AiFillLock /></span>
        <p style={{ marginTop: "10px" }}> <span style={{ color: "#10439F", cursor: "pointer" }}>Upgrade To Pro premium</span> features</p></div>
      }
      {topShaped === "sports" && <div className='premium'>
        <span style={{ color: "#FFC100" }}><AiFillLock /></span>
        <p style={{ marginTop: "10px" }}> <span style={{ color: "#10439F", cursor: "pointer" }}>Upgrade To Pro premium</span> features</p></div>
      }
      {topShaped === "travel" && <div className='premium'>
        <span style={{ color: "#FFC100" }}><AiFillLock /></span>
        <p style={{ marginTop: "10px" }}> <span style={{ color: "#10439F", cursor: "pointer" }}>Upgrade To Pro premium</span> features</p></div>
      }
    </div>
  );
};

export default Premium;