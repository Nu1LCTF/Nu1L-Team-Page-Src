import React from 'react'

import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'

const Heading = () => (
    <Segment inverted vertical>
        <Container text style={{ minHeight: 500, }}>
            <Header
                as='h1'
                content='Nu1L Team'
                inverted
                style={{
                    fontSize: '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '3em',
                }}
            />
            <Header
                as='h2'
                content='Hack for fun.'
                inverted
                style={{
                    fontSize: '1.7em',
                    fontWeight: 'normal',
                    marginTop: '1.5em',
                }}
            />
            <Button primary size='huge'>
                More About Us
            <Icon name='right arrow' />
            </Button>
        </Container>
    </Segment>
)

const Members = () => (
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
                    <Button size='huge'>Find Them Out</Button>
                </Grid.Column>
                <Grid.Column floated='right' width={6}>
                    <Image bordered rounded size='large' src='/images/white-image.png' />
                </Grid.Column>

            </Grid.Row>
        </Grid>
    </Segment>
)

const Awards = () => (
    <Segment style={{ padding: '8em 0em' }} vertical inverted>
        <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
                
                <Grid.Column width={6}>
                    <Image bordered rounded inverted size='large' src='/images/white-image.png' />
                </Grid.Column>
                <Grid.Column floated='right' width={8}>
                    <Header as='h3' style={{ fontSize: '2em' }} inverted>
                        Awarded in the competitions
            </Header>
                    <p style={{ fontSize: '1.33em' }} inverted>
                        // 这里想要一个列表, 写一些奖项, 逐渐变淡 ul li
                        We can give your company superpowers to do things that they never thought possible.
                        Let us delight your customers and empower your needs... through pure data analytics.
            </p>
                    <Header as='h3' style={{ fontSize: '2em' }} inverted>
                        But more than awards
            </Header>
                    <p style={{ fontSize: '1.33em' }} inverted>
                        // 写写出版物啊, 团队成员挖了什么漏洞啊什么的...
                        Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                        bioengineered.
            </p>
            <Button size='huge'>More In Timeline</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
)

const JoinUs = () => (
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
            <Grid.Column>
            <Header as='h3' style={{ fontSize: '2em' }}>
                What they said may also be you.
            </Header>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "lalallalala"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
                <b>John</b> From Team X
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Emmmmm."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            <b>Doe</b> From Team Y
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Cool."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <b>4uuu</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign='center'>
            <Grid.Column>
                <Button size='huge'>Come & Join Us</Button>
            </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
)

const Home = () => (
    <div>
        <Heading />

        <Members />

        <Awards />

        <JoinUs />
    </div>
)

export default Home