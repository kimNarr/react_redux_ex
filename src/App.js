import './css/layout.css';
import Newstab from './component/Newstab';
import { getNewslist } from './redux/slice/listSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import NewsList from './component/NewsList';

function App() {

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getNewslist('all'));
    }, [])

    return (
        <div className="wrap">
            <div className='inner'>
                <h1 className='title'>Today News</h1>
                <Newstab />
                <NewsList />
            </div>
        </div>
    );
}

export default App;
