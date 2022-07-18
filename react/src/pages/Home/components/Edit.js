// 要放入home/index這個頁面的子元件

import { useState } from 'react';
import { v4 } from 'uuid';

import React from 'react';

const Edit = ({add}) => {   // 用add名稱去取出setData工具,並執行自己寫的setState動作:function addItem()

    const [note, setNote] = useState("")   // 預設input內容為空字串
    function noteChange(e){
        setNote(e.target.value)        // 將note、setNote與預設的setState進行雙向綁定,當輸入內容時也立刻改變input欄位狀態
    }
    const [date, setDate] = useState("")
    function dateChange(e){
        setDate(e.target.value)
    }
    const [time, setTime] = useState("")
    function timeChange(e){
        setTime(e.target.value)
    }
    
    // function addItem(){
    //     add([1, 1, 1])  // click之後變成長度為3的陣列
    // }
    // console.log(note, date, time);
    function addItem(){
        add(function(prevData){
            return [             // 先取得原來的Data(在此為空陣列),再將輸入的值放進去陣列中
                ...prevData,
                {
                    id: v4(),
                    note,
                    date,
                    time
                }
            ]
        })
    }

    return <div className='edit'>
        <h1>備忘錄</h1>
        <hr/>
        <p>記事：</p>
        <input type="text" value={note} onChange={noteChange}/>
        <p>日期：</p>
        <input type="date" value={date} onChange={dateChange}/>
        <p>時間：</p>
        <input type="time" value={time} onChange={timeChange}/>
        <br/>
        <button onClick={addItem} className='btnAdd'>新增</button>   {/* onClick事件: 執行addItem動作,去改變Home.index的useState狀態 */}
    </div>
}

export default Edit;