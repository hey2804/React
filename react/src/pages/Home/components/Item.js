// 要放入home/index這個頁面的子元件

import React from 'react';

const Item = ({id, AAA, BBB, CCC, deleteData}) => {    // 去跟父層Info那邊取得名為AAA, BBB, CCC 這三個東西的'值'

    function deleteItem(){
        deleteData(function(prev){
            return prev.filter(item => item.id !== id)
        })
    }

    return <div className='item'>
        <div className='itemNote'>
            <p>{AAA}</p>
            <p>{`${BBB} ${CCC}`}</p>
        </div>
        <button onClick={deleteItem} className='btnRemove'>刪除</button>
    </div>
}

export default Item;