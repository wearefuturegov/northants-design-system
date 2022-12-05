import React from 'react';
import { CustomSearchProps } from './CustomSearch.types';
import * as Styles from './CustomSearch.styles';
import Input from '../Input/Input';
import { uniqueID } from '../../helpers/helpers';

const CustomSearch: React.FC<CustomSearchProps> = ({
  method,
  path,
  label,
  labelHidden = true,
  fieldName,
  placeholder,
  searchText,
  id,
}) => {
  if (id === null) {
    id = uniqueID();
  }
  return (
    <Styles.Container data-testid="CustomSearch">
      <form method={method} action={path} aria-label={label}>
        <div role="search">
          <Styles.Label htmlFor={id} labelHidden={labelHidden}>
            {label}
          </Styles.Label>
          <Styles.InputWrapper>
            <Input name={fieldName} placeholder={placeholder} id={id} />
            <Styles.SubmitButton type="submit" value={searchText} />
          </Styles.InputWrapper>
        </div>
      </form>
    </Styles.Container>
  );
};

export default CustomSearch;
