import React from 'react'
import { useSelector } from 'react-redux';

function NewsList() {
    const {list} = useSelector(state=>state.List);
    console.log(list);
    return (
        <ul className='list'>
            {
                list.map(item=>
                    <li key={item?.article_id}>
                        <figure>
                            <img src={item?.image_url} alt={item?.title} />
                        </figure>
                        <div className='text_box'>
                            <h2>{item?.title}</h2>
                            <p className='source_name'>{item?.source_name}</p>
                            <p className='date'>{item?.pubDate}</p>
                            <a href={item?.link} target='_blank'>Read More</a>
                        </div>
                        {/* <p>{item?.description === null ? item?.title : item?.description}</p> */}
                    </li>
                )
            }
        </ul>
    )
}

export default NewsList
