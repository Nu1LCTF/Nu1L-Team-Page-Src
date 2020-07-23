import React from 'react'
import {
    Container,
    Divider,
    Grid,
    Segment,
  } from 'semantic-ui-react'

const Footer = () => (
    <Segment inverted vertical style={{ padding: '2em 0em' }}>
        <Container>
          <Divider inverted />
            <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        Nu1L Team &copy; 2015 - 2020  All Rights Reserved. <a href="http://beian.miit.gov.cn/" target="_blank">鲁ICP备20029104号</a>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
  )

  export default Footer
