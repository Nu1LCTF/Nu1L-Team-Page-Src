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
                        From A Team
            </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Nu1L is a CTF team established in 2015, whose name is taken from the word "NULL". 
                        </p>
                    <p style={{ fontSize: '1.33em' }}>
                        Most of our members come from China, and they are whitehats who loves CTFs and cyber security.
                        </p>
                        
                    <Header as='h3' style={{ fontSize: '2em' }}>
                        To The Top In The World
            </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Which actively participated in online and on-site CTF competitions. Read more on <a href="https://ctftime.org/team/19208">CTFTime.</a>
                </p>
                <p style={{ fontSize: '1.33em' }}>
                    Which held CTF competitions, which is known as <a href="https://ctftime.org/ctf/240">N1CTF</a> & contributed to the community of CTF.
                </p>
                <p style={{ fontSize: '1.33em' }}>
                    Whose members participated in professional hacking contests like Pwn2Own & Geekpwn and security conferences like HITCON, KCON and Blackhat.
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