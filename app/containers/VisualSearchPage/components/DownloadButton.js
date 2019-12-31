import React from 'react';
import Button from '@material/react-button';

export function DownloadButton(props) {
  return (
    <div className={"d-download-button"}>
      {props.countImg &&<Button >Download Part</Button>}
    </div>
  );
}
