import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const IconInput = ({ label, icon, width = 250, size, ...remainingProps }) => {
  const iconSize = size === 'small' ? 16 : 24
  const Input = size === 'small' ? SmallInput : LargeInput
  const borderSize = size === 'small' ? 1 : 2

  return (
    <Wrapper style={{ '--borderSize': borderSize + 'px' }}>
      <IconWrapper style={{ '--width': iconSize + 'px' }}>
        <Icon id={icon} size={iconSize} />
        <VisuallyHidden>{label}</VisuallyHidden>
      </IconWrapper>
      <Input type='text' name={label} style={{ '--width': width + 'px' }} {...remainingProps} />
      <VisuallyHidden>Input Entry</VisuallyHidden>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: var(--width);
  display: inline-flex;
  align-items: center;
  border-bottom: var(--borderSize) solid ${COLORS.gray700};

  &:focus-within {
    outline: var(--borderSize) solid #3065a7;
    outline-offset: var(--borderSize);
    border-radius: var(--borderSize);
  }
`

const IconWrapper = styled.span`
  margin-right: 14px;

  > div,
  svg {
    display: inline;
  }
`

const TextInput = styled.input`
  border: none;
  width: var(--width);
  outline: none;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`

const SmallInput = styled(TextInput)`
  height: 24px;
  font-size: ${14 / 16}rem;
`

const LargeInput = styled(TextInput)`
  height: 36px;
  font-size: ${18 / 16}rem;
`

export default IconInput
