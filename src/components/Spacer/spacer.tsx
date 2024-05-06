import styled from 'styled-components';

function getHeight({ axis, size }: any) {
  return axis === 'horizontal' ? 1 : size;
}
function getWidth({ axis, size }: any) {
  return axis === 'vertical' ? 1 : size;
}

const Spacer: any = styled.span`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;

export default Spacer;