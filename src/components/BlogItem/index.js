// Write your JS code here
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class BlogItem extends Component {
    state = {
        blogId: '',
    }

    clickBlog = (event) => {
        this.setState({ blogId: event.target.value })
    }

    render(props) {
        const { blogsData } = this.props
        const { id,
            title,
            author,
            authorUrl,
            imgUrl,
            topic, } = blogsData


        return (
            <Link to={`/blogs/${id}`} >
                <button value={id} onClick={this.clickBlog} className='flex flex-row justify-start items-start my-3 mx-4'>
                    <img className='h-32 w-48' src={imgUrl} />

                    <div className='pl-3'>
                        <p className='text-gray-500 text-sm'>{topic}</p>
                        <h1 className='text-gray-500 font-3xl font-bold'>{title}</h1>
                        <div className="flex flex-row my-2">
                            <img className='w-8 rounded-full' src={authorUrl} />
                            <p className='text-sm text-gray-500 pl-2 items-center'>{author}</p>
                        </div>
                    </div>
                </button>
            </Link>
        )
    }
}

export default BlogItem
