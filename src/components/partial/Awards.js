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
                    Awards
            </Header>
                    <p style={{ fontSize: '1.33em' }} >
                        We have won lots of awards in different competitions since the beginning.
            </p>
                    <Header as='h3' style={{ fontSize: '2em' }} inverted>
                    And ...
            </Header>
                    <p style={{ fontSize: '1.33em' }} >
                        We are trying hard to contribute to the CTF community, bringing more geeks into the hacking world.
            </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
)

export default Awards