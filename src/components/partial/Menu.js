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
        <Menu size='large' pointing secondary inverted>
            <Container>
                <Menu.Item inverted as={NavLink} name='home' to='/' activeClassName='active' exact> Home </Menu.Item>
                <Menu.Item inverted as={NavLink} name='members' to='/members' activeClassName='active'>Members</Menu.Item>
                <Menu.Item inverted as={NavLink} name='home' to='/awards' activeClassName='active'>Awards</Menu.Item>
                <Menu.Item inverted as={NavLink} name='contact' to='/contact' activeClassName='active'>Contact Us</Menu.Item>
            </Container>
        </Menu>

    </Segment>
)

export default SMenu