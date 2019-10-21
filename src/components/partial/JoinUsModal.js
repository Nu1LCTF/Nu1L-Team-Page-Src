import React, { Component } from 'react'
import { Button, Header, Icon, Modal, List } from 'semantic-ui-react'

export default class JoinUsModal extends Component {
    state = { modalOpen: false }

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    render() {
        return (
            <Modal
                trigger={
                    <Button
                        basic
                        color='blue'
                        content='Come & Join Us'
                        icon='paper plane outline'
                        size='huge'
                        onClick={this.handleOpen}
                        label={{
                            as: 'a',
                            basic: true,
                            color: 'blue',
                            pointing: 'left',
                            content: this.props.memberSize,
                        }}
                    />
                } basic
                open={this.state.modalOpen}
                onClose={this.handleClose}
            >
                <Header icon='user secret' content='Tell Us More About Youself' />
                <Modal.Content>
                    <p>
                        Send following data to our email 'Nu1Lctf@163.com'.
            </p>
                    <List>
                        <List.Item>ID: `Incognito`</List.Item>
                        <List.Item>Skill: `Pwn`</List.Item>
                        <List.Item>Profile: `From where`</List.Item>
                        <List.Item>P.S. Please attached your achievements as detailed as possible.</List.Item>
                    </List>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' onClick={this.handleClose} inverted>
                        <Icon name='checkmark' /> Got it
        </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}