import React from 'react'
import { NavLink } from 'react-router-dom'
import {

    Container,
    Menu,
    Segment,
} from 'semantic-ui-react'

const SMenu = () => (
    <Segment inverted vertical
        style={{ padding: '1em 0em' }} >
        <Menu size='large' pointing secondary inverted style={{ border: "0px" }}>
            <Container>
                <Menu.Item as={NavLink} name='home' to='/' activeClassName='active' exact> Home </Menu.Item>
                <Menu.Item as={NavLink} name='members' to='/members' activeClassName='active'>Members</Menu.Item>
                <Menu.Item as={NavLink} name='home' to='/awards' activeClassName='active'>Awards</Menu.Item>
                <Menu.Item as={NavLink} name='contact' to='/contact' activeClassName='active'>Contact Us</Menu.Item>
            </Container>
        </Menu>

    </Segment>
)

export default SMenu