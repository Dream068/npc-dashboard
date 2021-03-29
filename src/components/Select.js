import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect, { createFilter } from 'react-select';
import { useTheme } from '@material-ui/core';

const defaultFilterOption = createFilter({
  ignoreCase: true,
  ignoreAccents: false,
  trim: true,
  matchFrom: 'any',
});

function Select({
  label,
  isMulti,
  isClearable,
  filterOption,
  width,
  height,
  selectStyles: selectStylesOverrides,
  ...props
}) {
  const theme = useTheme();
  const selectStyles = {
    input: (provided) => ({
      ...provided,
      '& input': {
        font: 'inherit',
      },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    control: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      border: `1px solid ${theme.palette.primary.main}`,
      // eslint-disable-next-line max-len
      borderRadius: state.selectProps.borderRadius ? state.selectProps.borderRadius : theme.spacing(1.5),
      boxShadow: 'none',
      fontSize: theme.typography.h5.fontSize,
      color: theme.palette.primary.main,
      background: theme.palette.common.white,
      paddingLeft: theme.spacing(2),
      minHeight: state.selectProps.height ? state.selectProps.height : '48px',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      cursor: 'pointer',
      color: theme.palette.primary.main,
    }),
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      fontSize: theme.typography.h5.fontSize,
    }),
    menuList: (provided) => ({
      ...provided,
      background: theme.palette.common.white,
      color: theme.palette.primary.main,
      marginTop: theme.spacing(-0.5),
      overflowX: 'hidden',
      paddingRight: theme.spacing(0.5),
    }),
    singleValue: (provided) => ({
      ...provided,
      width: '100%',
      color: theme.palette.primary.main,
    }),
    option: (provided, { isDisabled, isSelected }) => ({
      ...provided,
      // eslint-disable-next-line no-nested-ternary
      backgroundColor: isDisabled ? null : isSelected
        ? theme.palette.divider
        : null,
      color: theme.palette.primary.main,
    }),
    placeholder: (provided) => ({
      ...provided,
      color: theme.palette.secondary.main,
    }),
    ...selectStylesOverrides,
  };

  return (
    <ReactSelect
      styles={selectStyles}
      isMulti={isMulti}
      label={label}
      width={width}
      height={height}
      {...props}
    />
  );
}

Select.defaultProps = {
  label: null,
  isMulti: false,
  header: null,
  isClearable: true,
  showSpinner: false,
  width: '100%',
  height: '48px',
  filterOption: defaultFilterOption,
  selectStyles: null,
};

Select.propTypes = {
  label: PropTypes.string,
  isMulti: PropTypes.bool,
  isClearable: PropTypes.bool,
  showSpinner: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  header: PropTypes.node,
  filterOption: PropTypes.func,
  selectStyles: PropTypes.shape(),
};

export default Select;
