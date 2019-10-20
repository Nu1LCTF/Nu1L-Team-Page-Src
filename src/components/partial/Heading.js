import React from 'react'

import {
    Button,
    Container,
    Header,
    Icon,
    Segment,
} from 'semantic-ui-react'

const Heading = () => (
    <Segment inverted vertical>
        <Container text style={{ minHeight: 500, }}>
            <Header
                as='h1'
                content='Nu1L Team'
                inverted
                style={{
                    fontSize: '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '3em',
                }}
            />
            <Header
                as='h2'
                content='Hack for fun.'
                inverted
                style={{
                    fontSize: '1.7em',
                    fontWeight: 'normal',
                    marginTop: '1.5em',
                }}
            />
            <Button primary size='huge'>
                More About Us
            <Icon name='right arrow' />
            </Button>
        </Container>
    </Segment>
)

export default Heading