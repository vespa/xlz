import React from 'react'
import { Outlet as RDOutlet } from "react-router-dom";
import { Container, Header, SearchBox } from 'components'

export const Layout = ({ Outlet = RDOutlet }) => {
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