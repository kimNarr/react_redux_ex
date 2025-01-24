import React from 'react'

function Main({list}) {
    // console.log(list)
    return (
        <div className='main'>
            <div className='inner'>
                <ul>
                    {
                        list.map(item=>(
                            <li key={item.id}>
                                <figure>
                                    <img src={item.img} alt={item.title} />
                                </figure>
                                <h2 className='title'>{item.title}</h2>
                                <p className='price'>₩ {(item.price).toLocaleString('ko-KR')}</p>
                                <span className={item.new ? "new_item" : "new_none"}>
                                    {item.new ? "NEW" : ""}
                                </span>
                                <p className='size'>{item.size.map((size, idx)=>(<span key={idx}>{size}</span>))}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Main
