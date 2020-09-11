import React from 'react'
import './sc.css'

function StudentContainer(props) {
    return (
        <>
            {props.students.map(item => {
                return (
                    <div key={item.id} className='stu-li'>
                        <span >
                            {item.name} is in grade: {item.grade}
                        </span>
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                props.removeChange(item.id)
                            }}
                        >
                            删除
                        </button>
                    </div>
                )
            })}
        </>
    )
}


export default StudentContainer;