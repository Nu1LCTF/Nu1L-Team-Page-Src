import React from 'react'
import {
    Container,
    Divider,
    Grid,
    Header,
    List,
    Segment,
  } from 'semantic-ui-react'

const Footer = () => (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Divider inverted />
            <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Contact Us' />
                        <List link inverted>
                            <List.Item as='a' href="mailto:Nu1Lctf@163.com">Email</List.Item>
                            <List.Item as='a'>Wechat</List.Item>
                            <List.Item as='a' href="https://twitter.com/Nu1L_Team">Twitter</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Services' />
                        <List link inverted>
                            <List.Item as='a'>Banana Pre-Order</List.Item>
                            <List.Item as='a'>DNA FAQ</List.Item>
                            <List.Item as='a'>How To Access</List.Item>
                            <List.Item as='a'>Favorite X-Men</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header as='h4' inverted>
                            Recent Posts
              </Header>
                        <p>
                            zsxq
              </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
  )

  export default Footer