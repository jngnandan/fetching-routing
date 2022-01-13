// Write your JS code here

import React, { Component } from 'react'
import BlogItem from '../BlogItem'

export class BlogList extends Component {
    state = {
        blogsData: [], isActive: true,
    }
    componentDidMount() {
        this.blogsList()
    }

    blogsList = async () => {
        const { blogsData } = this.state

        const response = await fetch('https://apis.ccbp.in/blogs')
        const statusCode = await response.statusCode
        const data = await response.json()
        const formattedData = data.map(eachitem => ({
            id: eachitem.id,
            title: eachitem.title,
            author: eachitem.author,
            authorUrl: eachitem.avatar_url,
            imgUrl: eachitem.image_url,
            topic: eachitem.topic,
        }))
        this.setState({ blogsData: formattedData, isActive: false, })
    }


    render(props) {
        const { blogsData } = this.state
        return (
            <button className='pt-4'>
                {blogsData.map(eachitem => (
                    <BlogItem blogsData={eachitem} />
                ))}
            </button>
        )
    }
}

export default BlogList
