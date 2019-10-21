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
                        As a CTF team, we have received a lot of awards from different competitions from
                        time to time. 
            </p>
                    <Header as='h3' style={{ fontSize: '2em' }} inverted>
                        But more than awards
            </Header>
                    <p style={{ fontSize: '1.33em' }} >
                        Yes that's right, what we want is not only awards, but also contribute to the community of CTF.
            </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
)

export default Awards