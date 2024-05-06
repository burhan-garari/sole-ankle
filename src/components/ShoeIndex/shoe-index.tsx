import React from 'react';
import styled from 'styled-components';

import { WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs/breadcrumbs';
import Select from '../Select/select';
import Spacer from '../Spacer/spacer';
import ShoeSidebar from '../ShoeSidebar/shoe-sidebar'
import ShoeGrid from '../ShoeGrid/shoe-grid';

const ShoeIndex = ({ sortId, setSortId }: any) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev: any) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
            <option value="date">Date</option>
          </Select>
        </Header>
        <Spacer size={34} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 5rem;
    padding-top: 3rem;
`;

const LeftColumn = styled.div`
    padding: 2rem;
`;

const MainColumn = styled.div`
    flex: 1;
    padding-inline: 1rem;
`;

const Header = styled.header`
    display: flex;
    justify-content: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
  margin-right: auto;
`;

export default ShoeIndex;