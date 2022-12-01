import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <DisplaySelect>
        {displayedValue}
        <IconWrapper style={{ '--size': '24px' }}>
          <Icon id='chevron-down' strokeWidth={1} size={24} />
        </IconWrapper>
      </DisplaySelect>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

const StyledSelect = styled.select`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
`

const DisplaySelect = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  padding: 10px 14px;
  padding-right: 40px;
  border-radius: 6px;

  ${StyledSelect}:focus + & {
    outline: 1px dotted #3065a7;
    outline: 4px auto -webkit-focus-ring-color;
  }

  ${StyledSelect}:hover + & {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  right: 8px;
  top: 0;
  bottom: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`

export default Select
