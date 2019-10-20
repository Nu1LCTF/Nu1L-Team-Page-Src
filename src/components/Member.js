import React from 'react';
import {Card, Segment, Container, Image} from 'semantic-ui-react';

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
        <Container style={{ minHeight: 500, }}>
        <Card.Group itemsPerRow={5}>
                    {this.state.member.map((member, index) => 
                        <Card >
                            <Card.Content>
                            <Card.Header>
                                <Image src={member.avatar} avatar/>{member.name}
                            </Card.Header>
                            <Card.Description>
                                {member.desc}
                            </Card.Description>
                            </Card.Content>
                        </Card>
                    )}
                </Card.Group>
        </Container>
        </Segment>
                    
            )
        }
    }
}