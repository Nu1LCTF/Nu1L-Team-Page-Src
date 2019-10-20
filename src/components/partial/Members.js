import React from 'react';
import { Card, Segment, Grid, Image, Button, Popup, Header } from 'semantic-ui-react';

export default class Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            member: {}
        }
    }

    componentDidMount() {
        fetch('/data/member.json')
            .then(res => res.json())
            .then((data) => { this.setState({ loading: false, member: data }) })
    }

    render() {
        if (this.state.loading) {
            return (
                "Member loading..."
            )
        } else {
            return (
                <Segment vertical style={{ padding: '8em 0em' }}>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row textAlign='center'>
                            <Grid.Column>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Members
                    </Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row textAlign='center'>
                            <Grid.Column>
                                <Card.Group itemsPerRow={4}>
                                    {this.state.member.map((member, index) =>
                                        <Popup
                                            trigger={
                                                <Card>
                                                    <Card.Content>
                                                        <Image
                                                            floated='right'
                                                            size='mini'
                                                            src={member.avatar}
                                                        />
                                                        <Card.Header>{member.name}</Card.Header>
                                                        <Card.Meta>{member.direction}</Card.Meta>
                                                        <Card.Description>
                                                            {member.desc}
                                                        </Card.Description>
                                                    </Card.Content>
                                                    <Card.Content extra>
                                                        <div className='ui two buttons'>
                                                            <Button basic color='green'>
                                                                Blog
                                    </Button>
                                                            <Button basic color='blue'>
                                                                Github
                                    </Button>
                                                        </div>
                                                    </Card.Content>
                                                </Card>
                                            }
                                        >
                                            <Popup.Header>{member.name}</Popup.Header>
                                            <Popup.Content>
                                                <Card
                                                    image={member.avatar}
                                                    header={member.name}
                                                    meta={member.direction}
                                                    description={member.desc}
                                                >
                                                </Card>
                                            </Popup.Content>
                                        </Popup>
                                    )}
                                </Card.Group>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row textAlign='center'>

                            <Grid.Column>
                            <Button
                                basic
                                color='blue'
                                content='Come & Join Us'
                                icon='paper plane outline'
                                size='huge'
                                label={{
                                    as: 'a',
                                    basic: true,
                                    color: 'blue',
                                    pointing: 'left',
                                    content: this.state.member.length,
                                }}
                                />
                            </Grid.Column>
                        </Grid.Row>
                        </Grid>
                </Segment>

                    )
                }
            }
}