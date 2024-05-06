import styled from 'styled-components';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard/shoe-card';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe: any) => (
        <ShoeCard key={shoe.slug} {...shoe} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: space-between;
  flex-wrap: wrap;
  gap: 2.5rem;
  margin: 2rem;
`;

export default ShoeGrid;