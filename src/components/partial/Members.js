import React from 'react';
import { Card, Segment, Grid, Image, Button, Header, } from 'semantic-ui-react';
import JoinUsModal from './JoinUsModal';

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
                    <Grid container verticalAlign='middle'>
                        <Grid.Row textAlign='center'>
                            <Grid.Column>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Members
                    </Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Card.Group stackable centered>
                                    {this.state.member.map((member, index) =>
                                                <Card key={'member-' + index}>
                                                    <Card.Content>
                                                        <Card.Header as='h2' style={{fontSize: "2em", fontWeight: "normal", }}>
                                                            {member.name}
                                                            <Image
                                                                floated='right'
                                                                size='mini'
                                                                src={member.avatar}
                                                                verticalAlign='middle'
                                                            />
                                                        </Card.Header>
                                                        <Card.Description>
                                                            {member.desc}
                                                        </Card.Description>
                                                    </Card.Content>
                                                    <Card.Content extra>
                                                        
                                                        <div className='ui two buttons'>
                                                            <Button basic color='green' disabled>
                                                                {member.direction}
                                                            </Button>
                                                            <Button basic color='blue' as='a' href={member.blog}>
                                                                Blog
                                                            </Button>
                                                        </div>
                                                    </Card.Content>
                                                </Card>
                                    )}
                                </Card.Group>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row textAlign='center' divided>
                            <Grid.Column>
                                <JoinUsModal memberSize={this.state.member.length} /> 
                            </Grid.Column>
                        </Grid.Row>
                        </Grid>
                </Segment>

                    )
                }
            }
}