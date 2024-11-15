import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

function Blog() {
    return (
        <section className='blog_section'>
            <div className='heading'>
                <h6>Blog</h6>
                <a href='/'>
                    Wszystkie artykuły <MdKeyboardArrowRight className='icon' />
                </a>
            </div>

            <article></article>
        </section>
    );
}

export default Blog;
