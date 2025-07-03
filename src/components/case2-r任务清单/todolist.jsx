import React from "react";

export default () => {
    const [addTask, setAddTask] = React.useState("");
    const [taskList,setTaskList]=React.useState([{
        id: 1,
        name: 'Learn Vite',
        isComplete: false
    },
        {
            id: 2,
            name: 'Learn Nuxt.js',
            isComplete: true
        },
        {
            id: 3,
            name: 'Master React.js',
            isComplete: false
        },
        {
            id: 4,
            name: 'Understand TypeScript',
            isComplete: true
        },
        {
            id: 5,
            name: 'Explore Tailwind CSS',
            isComplete: false
        },
        {
            id: 6,
            name: 'Learn GraphQL',
            isComplete: false
        },
        {
            id: 7,
            name: 'Build with Next.js',
            isComplete: true
        },
        {
            id: 8,
            name: 'Study Svelte',
            isComplete: false
        }
    ]);

    // 插眼 回来学 大概是数据初始化执行
    React.useEffect(() => {
        setTaskList(sortedTaskList([...taskList]));
    }, []);

    function sortedTaskList(taskList) {
        taskList.sort((a,b) => {
            if(a.isComplete === b.isComplete){
                // 这个很奇妙！ 倒序刚好是加第一个按id排序
                return b.id - a.id;
            }
            return a.isComplete ? 1 : -1;
        })
        return taskList;
    }

    function handleAddTask(event) {
        event.preventDefault();
        if(!addTask.trim()){
            return;
        }
        setTaskList(sortedTaskList([...taskList,{
            id: taskList.length + 1,
            name:addTask,
            isComplete: false
        }]))
        setAddTask('');
    }
    function handleDeleteTask(id) {
        setTaskList(sortedTaskList(taskList.filter((task)=>
            id !== task.id
        )))
    }
    function handleClickTask(id) {
        // sort 效果？
        setTaskList(sortedTaskList(taskList.map((task)=>
            id === task.id ? {...task, isComplete:!task.isComplete} : task
        )))
    }
    return (
       <>
           <p>任务清单</p>
           <input
               type="text"
               placeholder={"Add tasks"}
               value={addTask}
               onChange={(event) => {setAddTask(event.target.value)}}
               style={{margin:'10px'}}
               onKeyDown={(event)=>{
                   if (event.key === 'Enter'){
                       handleAddTask(event);
                   }
               }}
           />
           <button onClick = {handleAddTask}>confirm </button>

           <ul style={{ paddingLeft: 0, listStyleType: 'none' }}>
               {taskList.map(task =>
                       <li key={task.id}>
                           <input
                               type="checkbox"
                               style={{margin:'10px'}}
                               onChange = {() => handleClickTask(task.id)}
                               checked={task.isComplete}
                           />
                           <p style={{display: 'inline' , textDecoration:task.isComplete?'line-through':"none"}}>{task.name}</p>
                           <button
                               onClick={()=>{
                               handleDeleteTask(task.id)
                           }}
                               style={{margin:'10px'}}
                           >del</button>
                       </li>
               )}

           </ul>
       </>
    )
};
