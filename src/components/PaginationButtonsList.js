import React from 'react'
const PaginationButtonsList = (props) => {
    let buttons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    const setPageNo = props.setPageNo;

    return (
        <div className="pagination-buttons-list">
            {buttons.map((btn)=>{
                return(
                    <button
                    onClick={()=>{
                        setPageNo(`${btn}`);
                    }}
                    className={btn==props.pageNo? 'active-btn':''}
                    key={btn} id={`button-${btn}`}>{btn}</button>
                )
            })}
        </div>
    )
}

export { PaginationButtonsList }
