import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    Icon,
    Image,
    Container,
    Menu,
    Segment,
    Popup,
} from 'semantic-ui-react'

const SMenu = () => (
    <Segment inverted vertical
        style={{ padding: '1em 0em' }} >
        <Menu size='large' pointing secondary inverted style={{ border: "0px" }}>
            <Container>
                <Menu.Item as={NavLink} name='home' to='/' activeClassName='active' exact><Icon name='home' /></Menu.Item>
                <Menu.Item as='a' name='GitHub' href="https://github.com/Nu1LCTF/">GitHub</Menu.Item>
                <Menu.Item as='a' name='Twitter' href="https://twitter.com/Nu1L_Team">Twitter</Menu.Item>
                <Popup trigger={<Menu.Item name='WeChat'>WeChat</Menu.Item>} ><Image size='small' src='images/wechat.jpg'></Image></Popup>
                <Menu.Item as='a' name='Writeups' href="https://wx.zsxq.com/dweb2/index/group/824215518412">Writeup</Menu.Item>
            </Container>
        </Menu>

    </Segment>
)

export default SMenu