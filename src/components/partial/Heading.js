import React from 'react'

import {
    Container,
    Header,
    Segment,
    Image,
} from 'semantic-ui-react'

const Heading = () => (
    <Segment inverted vertical >
        <Container text style={{ minHeight: 500, }}>
            <Header
                as='h1'
                inverted
                style={{
                    fontSize: '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '3em',
                }}
            >
                <Image src='/images/logo.png' />
                <Header.Content>
                    Nu1L Team
        <Header.Subheader
                        style={{
                            fontSize: '0.5em',
                            fontWeight: 'normal',
                        }}
                    >
                        Hack for fun.
                    </Header.Subheader>
                </Header.Content>

            </Header>
        </Container>
    </Segment>
)

export default Heading