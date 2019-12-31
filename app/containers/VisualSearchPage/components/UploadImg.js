import React,{useRef} from 'react';
import Img from '../../../components/Img';
import H3 from '../../../components/H3';
import Button from '@material/react-button';

export function UploadImg(props) {

  const inputEl = useRef(null);
  const onUploadImage = () => {
    inputEl.current.click();
  };
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
      <div className={"d-upload-button"}>
        <input type="file" onChange={onChangeImg} ref={inputEl} className={"d-none"}/>
        <Button onClick={onUploadImage}>Upload Image</Button>
      </div>
    </div>
  );
}
