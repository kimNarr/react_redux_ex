import { Route, Routes } from 'react-router-dom';
import './css/layout.css';
import Header from './component/Header';
import Main from './component/Main';
import Login from './component/Login';
import { getProducts } from './redux/slice/listSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {

    const dispatch = useDispatch();
    const {list, status} = useSelector(state=>state.List);

    useEffect(()=>{
        dispatch(getProducts());
    }, [dispatch])

    return (
        <div className="wrap">
            <Header />
            <Routes>
                <Route path='/' element={<Main list={list} />}/>
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
