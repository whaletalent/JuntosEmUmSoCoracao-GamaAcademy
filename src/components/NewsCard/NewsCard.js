import React, {Component, Fragment} from 'react'
import {Card, Media, Title, Image, Content} from 'rbx'

export default class NewsSection extends Component{
    render(){
        return(
            <Fragment>
                <Card>
                <Card.Image>
                    <Image.Container size="4by3">
                    <Image src={this.props.image} />
                    </Image.Container>
                </Card.Image>
                <Card.Content>
                    <Content>
                        {this.props.content} 
                    <br />
                    <time dateTime="2016-1-1">{this.props.datetime}</time>
                    </Content>
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
                        {this.props.author}
                        </Title>
                        <Title as="p" subtitle size={6}>
                        {this.props.social}
                        </Title>
                    </Media.Item>
                    </Media>
                </Card.Content>
                </Card>
                
            </Fragment>
        )
    }
}