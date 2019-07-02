import React, {Component, Fragment} from 'react'
import {Navbar, Container, Button} from 'rbx'

export default class SectionContent extends Component{
    render(){
        return(
            <Fragment>

                <Card>
                <Card.Image>
                    <Image.Container size="4by3">
                    <Image src="https://bulma.io/images/placeholders/1280x960.png" />
                    </Image.Container>
                </Card.Image>
                <Card.Content>
                    <Media>
                    <Media.Item as="figure" align="left">
                        <Image.Container as="p" size={64}>
                        <Image
                            alt="64x64"
                            src="https://bulma.io/images/placeholders/128x128.png"
                        />
                        </Image.Container>
                    </Media.Item>
                    <Media.Item>
                        <Title as="p" size={4}>
                        John Smith
                        </Title>
                        <Title as="p" subtitle size={6}>
                        @johnsmith
                        </Title>
                    </Media.Item>
                    </Media>
                    <Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                    iaculis mauris. <a href="#@bulmaio">@bulmaio</a>.{' '}
                    <a href="#css">#css</a> <a href="#responsive">#responsive</a>
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </Content>
                </Card.Content>
                </Card>
            </Fragment>
        )
    }
}