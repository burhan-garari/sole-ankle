import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../constants";
import SuperHeader from "../SuperHeader/super-header";

function Header() {
    return (
        <header>
            <SuperHeader />
            <MainHeader>
                <Side>
                    <Link href="/">
                        <Wrapper>
                            Sole & Ankle
                        </Wrapper>
                    </Link>
                </Side>
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/releases">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
                <Side></Side>
            </MainHeader>
        </header>
    )
}

const MainHeader = styled.div`
    margin: 0;
    padding-inline: 32px;
    border-bottom: 3px solid ${COLORS.gray[300]};

    display: flex;
    align-items: center;
`

const Nav = styled.nav`
    display: flex;
    gap: 2rem;
`;

const Side = styled.div `
    flex: 1;
`

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};
    margin-bottom: -5px;

    &:first-of-type {
        color: ${COLORS.secondary};
    }
`;

const Wrapper = styled.h1`
    font-size: 1.5rem;
    font-weight: ${WEIGHTS.bold};
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
`;

export default Header;