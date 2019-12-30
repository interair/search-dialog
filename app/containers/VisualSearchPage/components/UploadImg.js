import React from 'react';
import Img from '../../../components/Img';
import H3 from '../../../components/H3';

export function UploadImg(props) {
  const onChangeImg = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      props.selectImg(reader.result);
    };
    props.selectImg(null, file);
  };

  return (
    <div className="UploadImg">
      <H3 children="Part to Match" />
      <Img
        src={props.uploadImg.selectedImg || props.uploadImg.defaultImg}
        alt=""
      />
      <input type="file" onChange={onChangeImg} />
    </div>
  );
}
