import React from 'react'

function Header() {
    let menu = ["All", "NEW", "Shirts", "Hood", "Sweats", "Pants", "Coats & Jacket"]
    return (
        <header>
            <div className='inner'>
                <div className='login_box'>
                    <button type="button">Login</button>
                </div>
                <div className='logo_box'>
                    <h1><img src='https://aape.jp/client_info/AAPE/view/userweb/images/logo.png' /></h1>
                </div>
                <div className='nav'>
                    <div className='gnb'>
                        <ul>
                            {
                                menu.map((item, idx)=>(
                                    <li key={idx}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='search_box'>
                        <input type="text" />
                        <button type="button">검색</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
