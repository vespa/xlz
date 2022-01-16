import React from 'react'
import { Outlet } from "react-router-dom";
import { Container, Header, SearchBox } from 'components'
export const Layout = () => {
    return (
        <>
            <Header
                searchBox={<SearchBox />}
            />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default Layout