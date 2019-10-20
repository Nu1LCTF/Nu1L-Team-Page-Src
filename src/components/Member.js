import React from 'react';
import {Card, Segment, Container, Image, Header, Icon, Divider, Button, Popup} from 'semantic-ui-react';

export default class MemberComponent extends React.Component {
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
            .then((data) => { this.setState({loading: false, member: data})})
    }

    render() {
        if(this.state.loading) {
            return (
               "Member loading..."
            )
        } else {
            return (
                <Segment inverted vertical>
                    <Container style={{ minHeight: 300, padding: "4em 0em"}}>
                        <Header as='h2' icon inverted textAlign='center'>
                        <Icon name='grid layout' />
                        Members
                        <Header.Subheader>
                            This page contains our lovely team members.
                        </Header.Subheader>
                        </Header>
                        <Divider />
                    </Container>


        <Container style={{ minHeight: 500, }}>
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
        </Container>
        </Segment>
                    
            )
        }
    }
}