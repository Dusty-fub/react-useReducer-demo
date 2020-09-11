import React from 'react'


function FunctionForm(props) {



    function add(e) {
        e.preventDefault()

        if (0 < props.grade && 10 > props.grade) {
            props.addStudents({ name: props.name, grade: props.grade });
        } else {
            alert('please input right grade')
        }
    }

    function grade_change(e) {
        if (isNaN(e.target.value)) {
            alert('please input number')
            props.handleChange('grade', e.target.value)
        } else if (0 > e.target.value || 10 < e.target.value) {
            alert('please input number between 1-9')
            props.handleChange('grade', e.target.value)
        }
        else {
            props.handleChange('grade', e.target.value)
        }
    }
    return (
        <>
            <form>
                name:
                <input
                    style={{ outline: 'none' }}
                    type="text"
                    onChange={(e) => { props.handleChange('name', e.target.value) }}
                />

                grade:
                <input
                    style={{ outline: 'none' }}
                    type="text"
                    onChange={grade_change}
                />

                <button onClick={add} >add</button>
            </form>
        </>
    )
}


export default FunctionForm;