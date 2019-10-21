import React from 'react'
import {
    Container,
    Divider,
    Grid,
    Segment,
  } from 'semantic-ui-react'

const Footer = () => (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Divider inverted />
            <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        Nu1L Team &copy; 2015 - 2019  All Rights Reserved.
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
  )

  export default Footer