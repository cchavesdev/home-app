import React, { useEffect, useState } from 'react';
import  homeDb  from '../FirebaseConfig';
import { collection, addDoc, getDocs, doc, setDoc} from "firebase/firestore";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



 const Home = ()=>{

    useEffect(()=>{
         
        
       const getTodos = async() =>{
        let tempTodoList = [];
        const todoList = await getDocs(collection(homeDb, "todos"));  
        todoList.forEach((doc=>{
            tempTodoList.push({...doc.data(), Id: doc.id});
            
        }));  
        setTodoList(tempTodoList);
        console.log(tempTodoList);
    }       
       getTodos();

    },[]);
    const [todoList, setTodoList] = useState([]);
    const handleCheck = async (todo, input)=>{
        await setDoc(doc(homeDb, "todos", todo.Id), {            
            IsDone: !todo.IsDone,            
          }, { merge: true });
    }

    const handleAddNew = async ()=>{
        let isChecked = document.getElementById("newCheckBox").checked;
        let newName = document.getElementById("newName").value;
        let newTodo =  {   
            Name: newName,         
            IsDone: isChecked,            
          };
        await addDoc(collection(homeDb, "todos"),newTodo);
          setTodoList([...todoList, newTodo]);
          document.getElementById("newName").value = "";
    }
    const handleChange = (e, todo)=>{
        let cloneOfTodos = [...todoList];
        cloneOfTodos.forEach((todoInList)=>{
           
            if(todoInList.Id === todo.Id){               
                todoInList.Name = e.target.value;  
                setTodoList(cloneOfTodos);
                return;              
            }
        });
    }
    const handleChangeName = async (e, editedTodo) =>{
        //let todoTobeEdited = todoList.find(x=> x.Id === editedTodo.Id);
        if(e.target.value && e.target.value !== editedTodo.Name){
            console.log(true);
            await setDoc(doc(homeDb, "todos", editedTodo.Id), {            
                Name: e.target.value,            
              }, { merge: true });
              console.log("done");
        }
    }
    
        return (
            <div className="todo-list-container">
                <h1>To do - List</h1>
                <ul className="todo-list">
                <li key={0}>
                                <input id="newCheckBox" type="checkbox"></input>
                                <input id="newName" type="text" placeholder="Do something Cool"></input>
                                <button className="add-new-button" onClick={handleAddNew}><FontAwesomeIcon icon={faPlus} size="lg" /></button>
                            </li> 
                    {
                        todoList.map((todo)=>{
                            let isChecked = todo.IsDone ? "checked" : "";
                            
                            return (                                
                             <li>
                                <input type="checkbox" defaultChecked={isChecked} onClick={()=>{handleCheck(todo, this)}} ></input>
                                <input onBlur={(e)=>{handleChangeName(e, todo)}}  className="on-blur" type="text" defaultValue={todo.Name}></input>
                            </li>)                            
                        })
                    }    
                           
                </ul>
            </div>
        );

}

export default Home;