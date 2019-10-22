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
                        A Team
            </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Nu1L is a CTF team founded in 2015, whose name is derived from the word "NULL".
                        </p>
                    <p style={{ fontSize: '1.33em' }}>
                        The team members are from multiple universities and organizations in China, they are cybersecurity
                        enthusiasts interested in various fields like web security, binary analysis, IoT security, cryptography, etc.
                        </p>

                    <Header as='h3' style={{ fontSize: '2em' }}>
                        Aiming To Stand At The Top
            </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        We have participated in professional hacking competitions like Pwn2Own and Geekpwn, some members have lectured at security conferences such as HITCON, KCON, Blackhat and Tianfu Cup.
                </p>
                    <p style={{ fontSize: '1.33em' }}>
                        We've also hosted N1CTF2018 & N1CTF2019, which have won praises from all over the world. Read more on <a href="https://ctftime.org/team/19208">CTFTime.</a>
                    </p>
                </Grid.Column>
                <Grid.Column floated='right' width={7} only='computer tablet'>
                    <Image size='huge' src='/images/logo-round.png' />
                </Grid.Column>

            </Grid.Row>
        </Grid>
    </Segment>
)

export default History