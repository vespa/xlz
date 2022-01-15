import React from 'react'
import { Outlet } from "react-router-dom";
import { Container, Header } from 'components'
export const Layout = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default Layout