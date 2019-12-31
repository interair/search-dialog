import '@material/react-button/dist/button.css';
import React from 'react';
import Img from '../../../components/Img';
import H3 from '../../../components/H3';
import Button from '@material/react-button';

export function ListImg(props) {

  const countInPage = 10;
  const page = props.listImg.page;
  const listImg = props.listImg.img.map((e,i) => {
    if(i<countInPage*page)
    return(
    <Img
      className={"list-img"}
      key={i}
      src={e}
      alt=""
    />
  )});

  const loadMore = () => {

  };

  return (
    <div>
      <div className={"d-head-list-img"}>
        <H3 children="Search Result" />
        {props.listImg.countImg && <span className={"count-result"}>{props.listImg.countImg} result</span>}
      </div>
      <div className={"d-list-img"}>
        {listImg}
      </div>
      <div className={"d-button-load-more"}>
        {countInPage*page<props.listImg.countImg &&<Button onClick={loadMore}>Load More...</Button>}
      </div>
    </div>
  );
}
