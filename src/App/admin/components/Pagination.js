import React, { useState, useEffect } from 'react'

export default function Pagination({ perPage, changePagination, totalCategories }) {
    const [count, setCount] = useState(1);

    const onButtonClick = (type) => {
        if (type === 'prev') {
            if (count === 1) {
                setCount(1)
            } else {
                setCount(count - 1)
            }
        } else if (type === 'next') {
            if (Math.ceil(totalCategories / perPage) === count) {
                setCount(count)
            } else {
                setCount(count + 1)
            }
        }

    }

    useEffect(() => {

        const value = count * perPage;
        changePagination(value - perPage, value)
    }, [count, changePagination, perPage])
    return (
        <React.Fragment>
            <div className="d-flex justify-content-between">
                <button className="btn btn-primary-light" onClick={() => onButtonClick('prev')}>Prev</button>
                <button className="btn btn-primary-light" onClick={() => onButtonClick('next')}>Next</button>
            </div>
        </React.Fragment>
    )
}
