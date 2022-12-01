/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const styles = {
  small: {
    height: 8,
    radius: 3,
  },
  medium: {
    height: 12,
    radius: 4,
  },
  large: {
    height: 16,
    radius: 4,
  },
}

const ProgressBar = ({ value, size, filledColor = COLORS.gray700, max = 100 }) => {
  const { height, radius } = styles[size]

  return (
    <Wrapper role='progressbar' style={{ '--height': height + 'px', '--radius': radius + 'px' }}>
      <Filled style={{ '--value': (value / max) * 100 + '%', '--filledColor': filledColor }} />
      <VisuallyHidden>{(value / max) * 100}%</VisuallyHidden>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: var(--height);
  border-radius: var(--radius);
  border: 1px solid ${COLORS.gray300};
  background-color: ${COLORS.gray300};
  padding: 1px;
  box-sizing: border-box;
`

const Filled = styled.div`
  height: 100%;
  width: var(--value);
  background-color: var(--filledColor);
  border-radius: inherit;
`

export default ProgressBar
