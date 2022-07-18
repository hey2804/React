// 要放入home/index這個頁面的子元件

import React from 'react';

const Edit = () => {
    return <div className='edit'>
        <h1>備忘錄</h1>
        <hr/>
        <p>記事：</p>
        <input type="text" />
        <p>日期：</p>
        <input type="date" />
        <p>時間：</p>
        <input type="time" />
        <br/>
        <button className='btnAdd'>新增</button>
    </div>
}

export default Edit;