// 要放入home/index這個頁面的子元件

import React from 'react';
import Item from './Item';

// const arr = ['333',2,3]

const Info = ({infoData, deleteData}) => {         // {想取得的State名稱}
    // console.log('infoData', infoData);     // 印出來看看infoData有沒有從Home被傳入Info元件  //印出一個陣列
    return <div className='info'>
        {
            infoData.map(item => {     // 用map()函式秀出陣列內容
                const { note, date, time, id} = item      // 用解構賦值的方式給值
                return (
                    <Item     // 給定名稱，方便傳值取值
                        key={id}
                        id={id}
                        AAA={note} 
                        BBB={date} 
                        CCC={time} 
                        deleteData={deleteData}
                    />     
                )
            })     
        }

        {/* 1.引入多個子元件<Item/>  */}
        {/* <Item/>
        <Item/>
        <Item/> */}
        
        {/* 2.用js的陣列map函式將陣列內容渲染進來，之後從外部撈資料就可以這樣用 */}
        {/* {
            arr.map(item => <div>
                {item}
            </div>)
        } */}
        
    </div>
}

export default Info;