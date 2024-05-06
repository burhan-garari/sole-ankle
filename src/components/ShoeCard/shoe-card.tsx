import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer/spacer';

const VariantTextDisplay: Record<string, string> = {
  'on-sale': "Sale",
  'new-release': "Just Released!",
  'default': ""
}

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}: any) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
          {
            variant !== 'default' && <VariantTag variant={variant}>{VariantTextDisplay[variant]}</VariantTag>
          }
         
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price salePrice={salePrice}>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          {salePrice > 0 && <SalePrice>{formatPrice(salePrice)}</SalePrice>}
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  height: 300px;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
    width: 100%;
    border-top-left-radius:  0.75rem;
    border-top-right-radius: 0.75rem;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price: any = styled.span`
  text-decoration: ${({salePrice}: any) => {
    if(salePrice>0) return 'line-through';
    return 'default';
  }}
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
  margin: 0;
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

const VariantTag: any = styled.div`
  position: absolute;
  top: 0.75rem;
  right: -0.5rem;
  padding: 0.35rem;
  border-radius: 0.2rem;
  background-color: ${({variant}: any) => {
    if(variant==='on-sale') return COLORS.primary
    else if(variant==='new-release') return COLORS.secondary
    return COLORS.gray[100];
  }};
  color: ${COLORS.white};
  font-size: 0.75rem;
  font-weight: ${WEIGHTS.normal};
`

export default ShoeCard;