import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import SearchInput from "../SearchInput/search-input";
import UnstyledButton from "../UnstyledButton/unstyled-button";
import Icon from "../Icon/icon";

function SuperHeader() {
    return (
        <Wrapper>
            <MarketingMessage>
                Free Shipping on 
                domestic orders over $75
            </MarketingMessage>
            <SearchInput />
            <HelpLink href="/help">Help</HelpLink>
            <UnstyledButton>
                <Icon id="shopping-bag" strokeWidth={1} />
            </UnstyledButton>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-block: 0.35rem;
    padding-inline: 0.5rem;
    font-size: 0.875rem;
    color: ${COLORS.white};
    background-color: ${COLORS.gray[900]};

    display: flex;
    gap: 18px;
`;

const MarketingMessage = styled.span`
    color: ${COLORS.white};
    margin-right: auto;
`;

const HelpLink = styled.a`
    color: inherit;
    text-decoration: none;
    outline-offset: 2px;

    &:not(:focus-visible) {
        outline: none;
    }
`
export default SuperHeader;