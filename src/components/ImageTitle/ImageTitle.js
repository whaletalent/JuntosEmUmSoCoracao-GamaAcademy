import React, {Component, Fragment} from 'react'
import {Hero, Container, Title} from 'rbx'

export default class ImageTitle extends Component{
    image ={
        backgroundImage: "url(https://images.pexels.com/photos/889087/pexels-photo-889087.jpeg)",
        backgroundSize: 'cover'
    }
    render(){
        return(
            <Fragment>
                <Hero size="medium"
                    style={this.image}
                >
                    <Hero.Body>
                    <Container>
                        <Title>{this.props.title}</Title>
                        <Title  subtitle>
                            {this.props.subtitle}
                        </Title>
                    </Container>
                    </Hero.Body>
                </Hero>
            </Fragment>
        )
    }
}