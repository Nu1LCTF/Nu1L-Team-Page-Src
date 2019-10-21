import React from 'react'

import {
    Grid,
    Header,
    Segment,
} from 'semantic-ui-react'

import AwardFeed from './AwardFeed'

const Awards = () => (
    <Segment style={{ padding: '8em 0em' }} vertical inverted color='grey'>
        <Grid container stackable>
            <Grid.Row>
                <Grid.Column width={8}>
                    <AwardFeed />
                </Grid.Column>
                <Grid.Column floated='right' width={6} verticalAlign='middle'>
                    <Header as='h3' style={{ fontSize: '2em' }} inverted>
                        Awarded in the competitions
            </Header>
                    <p style={{ fontSize: '1.33em' }} >
                        We can give your company superpowers to do things that they never thought possible.
                        Let us delight your customers and empower your needs... through pure data analytics.
            </p>
                    <Header as='h3' style={{ fontSize: '2em' }} inverted>
                        But more than awards
            </Header>
                    <p style={{ fontSize: '1.33em' }} >
                        Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                        bioengineered.
            </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
)

export default Awards