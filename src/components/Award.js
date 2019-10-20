import React from 'react';
import {Segment, Container, Header, Divider, Icon, Feed} from 'semantic-ui-react';

export default class AwardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            items: {}
        }
    }

    componentDidMount() {
        fetch('/data/award.json')
            .then(res => res.json())
            .then((data) => { this.setState({loading: false, items: data})})
    }

    render() {
        if(this.state.loading) {
            return (
                "Awards Loading..."
            )
        } else {
            return (
                <Segment inverted vertical>
                     <Container style={{ minHeight: 300, padding: "4em 0em"}}>
                        <Header as='h2' icon inverted textAlign='center'>
                        <Icon name='chess queen' />
                        Awards
                        </Header>
                        <Divider />
                    </Container>
                    <Container style={{ minHeight: 500, }}>
                        <Feed>
                            {this.state.items.map((item, index ) =>
                                <Feed.Event>
                                    <Feed.Content>
                                        <Feed.Summary style={{ color: "white" }}>
                                            {item.title}
                                            <Feed.Date>{item.date}</Feed.Date>
                                        </Feed.Summary>
                                        <Feed.Extra text style={{ color: "white" }}>
                                            {item.desc}
                                        </Feed.Extra>
                                    </Feed.Content>
                                </Feed.Event>
                            )}
                        </Feed>
                    </Container>
                </Segment>
            )
        }
    }
}