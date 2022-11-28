import styled from 'styled-components'
export const Row = styled.div<{ gap?: number | boolean; between?: boolean; marginBottom?: number }>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.between ? 'space-between' : undefined)};
  > * {
    margin-top: 0 !important;
    margin-left: 0 !important;
    margin-right: ${props =>
      typeof props.gap === 'number' ? props.gap + 'rem' : props.gap ? '2rem' : undefined};
    margin-bottom: ${props => props.marginBottom + 'rem'};
  }
`
