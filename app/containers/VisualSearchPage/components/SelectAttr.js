import React from 'react';
import H3 from '../../../components/H3';

import '@material/react-menu/dist/menu.css';
import '@material/react-select/dist/select.css';
import Select, { Option } from '@material/react-select';

export function SelectAttr(props) {
  const onChangeAttr = e => {
    props.changeAttr(e.target.name, e.target.value);
  };

  const attr = props.attr.map((attr, i1) => {
    const option = attr.value.map((v, i2) => (
      <Option value={v.value} key={i2}>
        {v.name}
      </Option>
    ));
    return (
      <Select
        label={attr.name}
        name={attr.name}
        value={attr.selected}
        onChange={onChangeAttr}
        key={i1}
      >
        <Option value="0" key={-1} />
        {option}
      </Select>
    );
  });

  return (
    <div>
      <H3 children="Attributes" />
      {attr}
    </div>
  );
}
