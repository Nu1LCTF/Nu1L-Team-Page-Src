import React, { Component } from 'react'

import {
    Container,
    Header,
    Segment,
    Image,
} from 'semantic-ui-react'

import Particles from 'react-particles-js'



export default class JoinUsModal extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://cdn.rawgit.com/progers/pathseg/master/pathseg.js";
        script.async = true;

        document.body.appendChild(script);
    }
    render() {
        return (
            <Segment inverted vertical >
                <Particles
                    style={{
                        position: "absolute",
                        right: "0",
                        top: "0",
                        bottom: "0",
                        left: "0",
                    }}
                    params={{
                        "particles": {
                            "number": {
                                "value": 160,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "speed": 4,
                                    "size_min": 0.3
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "random": true,
                                "speed": 1,
                                "direction": "top",
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 2,
                                    "size": 0,
                                    "opacity": 0
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 4
                                }
                            }
                        }
                    }} />
                <Container text style={{ minHeight: 500, }}>
                    <Header
                        as='h1'
                        inverted
                        style={{
                            fontSize: '4em',
                            fontWeight: 'normal',
                            marginBottom: 0,
                            marginTop: '3em',
                        }}
                    >
                        <Image src='/images/logo.png.webp' />
                        <Header.Content>
                            Nu1L Team
        <Header.Subheader
                                style={{
                                    fontSize: '0.5em',
                                    fontWeight: 'normal',
                                }}
                            >
                                Hack for fun.
                    </Header.Subheader>
                        </Header.Content>

                    </Header>
                </Container>
            </Segment>
        )
    }
}