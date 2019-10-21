import React from 'react'

import {
    Grid,
    Header,
    Segment,
    Image,
} from 'semantic-ui-react'

const History = () => (
    <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                        From Team of Four
            </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        // 什么时候成立的, 带历史学家

                        We can give your company superpowers to do things that they never thought possible.
                        Let us delight your customers and empower your needs... through pure data analytics.
            </p>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                        To A Large Family
            </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        // 现在正在干啥  blabla blahhh

                        Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                        bioengineered.
            </p>
                </Grid.Column>
                <Grid.Column floated='right' width={6} only='computer tablet'>
                    <Image bordered rounded size='large' src='/images/logo-round.png' />
                </Grid.Column>

            </Grid.Row>
        </Grid>
    </Segment>
)

export default History