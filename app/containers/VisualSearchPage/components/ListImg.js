import React from 'react';
import Img from '../../../components/Img';
import H3 from '../../../components/H3';
import { Option } from '@material/react-select';

export function ListImg(props) {

  console.log('ListImg -',props.listImg[0]);

  const listImg = props.listImg.map((e,i) => (
    <Img
      key={i}
      src={e}
      alt=""
    />
  ));

  return (
    <div>
      <H3 children="Search Result" />
      {listImg}
    </div>
  );
}
