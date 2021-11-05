import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

const Icon = styled.svg`
  fill: none;
  stroke: ${(props) => props.color};
  stroke-width: 4px;
`;
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 1px;
  transition: all 150ms;
  box-shadow: 0 0 0 3px ${(props) => tinycolor(props.color).lighten(10)};

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${(props) => props.color};
  }

  ${HiddenCheckbox}:hover + & {
    box-shadow: 0 0 0 3px ${(props) => props.color};
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const Checkbox = ({ className, checked, color, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox color={color} checked={checked}>
      <Icon color={color} viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

Checkbox.propTypes = {
  checked: PropTypes.bool,
  color: PropTypes.string,
};

Checkbox.defaultProps = {
  checked: false,
  color: '#327B91',
};

export default Checkbox;
