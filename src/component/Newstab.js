import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeStatus, getNewslist } from '../redux/slice/listSlice'

function Newstab() {
    const tabs = [
        {name: 'all', text: '전체'},
        {name: 'top', text: 'TOP뉴스'},
        {name: 'sports', text: '스포츠'},
        {name: 'technology', text: '테크놀로지'},
        {name: 'business', text: '비즈니스'},
        {name: 'science', text: '사이언스'},
        {name: 'entertainment', text: '엔터'},
        {name: 'health', text: '건강'},
        {name: 'world', text: '국제'},
        {name: 'politics', text: '정치'},
        {name: 'enviroment', text: '환경'},
    ]
    const dispatch = useDispatch();
    const {status} = useSelector(state=>state.List)
    const selectTab = (name) => {
        dispatch(changeStatus(name))
        dispatch(getNewslist(name))
    }

    return (
        <div className='newstab'>
            {
                tabs.map((tab, idx)=>
                    <button 
                    type='button'
                    key={idx}
                    onClick={()=>selectTab(tab.name)}
                    className={status === tab.name ? 'active' : ''}
                    >
                    {tab.text}
                    </button>
                )
            }
        </div>
    )
}

export default Newstab
