import React from 'react';
import { Feed, Icon } from 'semantic-ui-react';

export default class AwardFeed extends React.Component {
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
            .then((data) => { this.setState({ loading: false, items: data }) })
    }

    render() {
        if (this.state.loading) {
            return (
                "Awards Loading..."
            )
        } else {
            return (
                <Feed>
                    {this.state.items.map((item, index) =>
                        <Feed.Event key={item.title}>
                            <Feed.Label>
                                <Icon name={item.icon} />
                            </Feed.Label>
                            <Feed.Content>
                                <Feed.Summary>
                                    {item.title}
                                    <Feed.Date>{item.date}</Feed.Date>
                                </Feed.Summary>
                                <Feed.Extra text>
                                    {item.desc}
                                </Feed.Extra>
                            </Feed.Content>
                        </Feed.Event>
                    )}
                </Feed>
            )
        }
    }
}