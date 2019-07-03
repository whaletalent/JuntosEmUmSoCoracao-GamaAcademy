import React, {Component, Fragment} from 'react'
import {Column,} from 'rbx'
import NewsCard from '../NewsCard/NewsCard'

export default class NewsSection extends Component{
    render(){
        return(
            <Fragment>
                <Column.Group multiline centered>
                    <Column narrow size="one-quarter">
                        <NewsCard/>
                    </Column>
                    <Column narrow size="one-quarter">
                        <NewsCard/>
                    </Column>
                    <Column narrow size="one-quarter">
                        <NewsCard/>
                    </Column>
                </Column.Group>
            </Fragment>
        )
    }
}
