import React from 'react'
import List from './List'

export default function Content({ tasks, query, setTasks }) {

    const onUpdate = (id) => {
        const t = tasks.map((v) => {
            if(v.id === id){
                v.isDone = !v.isDone
            }
            return v
        })
        setTasks(t)
    }

    return (
        <div className="content">
            {
                tasks.map((value, i) => {
                    if(query === ''){
                        return !value.isDone && <List index={i} key={i} value={value} onUpdate={onUpdate}/>
                    }
                    if(value.title.includes(query.toLowerCase())){
                        return !value.isDone && <List index={i} key={i} value={value} onUpdate={onUpdate}/>
                    }
                    return <div key={i} className="error-task">NO DATA FOUND</div>
                })
            }
        </div>
    )
}
