import React from "react";

const Paginator = (props) => { //TODO healthy paginator
    let pages = [];
    let length = Math.ceil(props.totalUsersCount / props.pageSize);
    for (let i = 1; i <= 10; i += 1) {
        pages.push(
            <span
                className={i === props.currentPage ? 'selector-page_selected' : ''}
                key={i}
                onClick={() => {
                    props.onPageChanged(i)
                }}
            >
                {i}
                </span>)
    }
    return (
        <div>
            {pages}
        </div>
    );
};

export default Paginator;
