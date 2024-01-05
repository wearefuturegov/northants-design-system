import React from 'react';
import { TextareaProps } from './Textarea.types';
import * as Styles from './Textarea.styles';

/**
 * Primary UI component for user interaction
 * If value is set then treat as controlled component
 */
const Textarea: React.FunctionComponent<TextareaProps> = ({
  placeholder = '',
  isErrored = false,
  errorText,
  name,
  maxLength,
  defaultValue,
  onChange,
  id,
  value,
  isFullWidth = false,
}) => {
  return (
    <>
      {errorText && <Styles.ErrorText>{errorText}</Styles.ErrorText>}
      {typeof value !== 'undefined' ? (
        <Styles.StyledTextarea
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          isErrored={isErrored}
          maxLength={maxLength}
          value={value}
          id={id}
          isFullWidth={isFullWidth}
        />
      ) : (
        <Styles.StyledTextarea
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          isErrored={isErrored}
          maxLength={maxLength}
          defaultValue={defaultValue}
          id={id}
          isFullWidth={isFullWidth}
        />
      )}
    </>
  );
};

export default Textarea;
