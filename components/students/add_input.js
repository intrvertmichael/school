import { useEffect, useState, useRef } from 'react'

const AddInput = ({id, field, text, setStudents}) => {
    const [input, setInput] = useState(text)
    const [editing, setEditing] = useState(false)
    const inputReference = useRef(null);

    useEffect(() => {
        if(inputReference.current){
            inputReference.current.focus();
        }
    }, [editing]);

    async function editStudent() {
		const res = await fetch('./api/students', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
                id: id,
                field: field,
                value: input,
            }),
		})
		const data = await res.json()
		setStudents(data.students)
	}

    async function formSubmitted(e){
        e.preventDefault()
        await editStudent()
        setEditing(false)
    }

    if(editing){
        return (
            <th className="flex justify-center bg-gray-100 border-2">
                <form onSubmit={formSubmitted}>
                    <input type='text' value={input} onChange={e=>setInput(e.target.value)} ref={inputReference} />
                </form>
                <button
                    onClick={()=>setEditing(false)}
                    className='px-2 bg-white'
                >X</button>
            </th>
        )
    }

    return (
        <th className="border-2 " onClick={()=>setEditing(true)}>{text}</th>
    )
}

export default AddInput