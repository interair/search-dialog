import '@material/react-button/dist/button.css';
import React from 'react';
import Button from '@material/react-button';

export function SearchButton(props) {

  const onResetSearchAction = () => {
    props.resetSearchAction();
  };
  const onSearchAction = () => {
    console.log("1. SearchButton - onSearchAction");
    console.log("1. -",props.fileUpload);
    props.fetchImg(props.fileUpload);
  };

  return (
    <div className={"d-search-button"}>
      <div className={"d-search-button-l"}>
        <Button onClick={onResetSearchAction}>Reset</Button>
      </div>
      <div className={"d-search-button-r"}>
        <Button onClick={onSearchAction}>Search</Button>
      </div>
    </div>
  );
}
