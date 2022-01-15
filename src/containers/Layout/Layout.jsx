import React from 'react'
import { Outlet } from "react-router-dom";
import { Container } from 'components'
export const Layout = () => {
    return (
        <Container>
            x
            <Outlet />
        </Container>
    )
}

export default Layout