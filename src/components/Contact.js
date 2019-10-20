import React from 'react'

import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
    Statistic,
} from 'semantic-ui-react'

const Contact () => (
    <Segment inverted vertical>
                    <Container style={{ minHeight: 300, padding: "4em 0em"}}>
                        <Header as='h2' icon inverted textAlign='center'>
                        <Icon name='grid layout' />
                        Members
                        <Header.Subheader>
                            This page contains our lovely team members.
                        </Header.Subheader>
                        </Header>
                        <Divider />
                    </Container>
)

export default Contact