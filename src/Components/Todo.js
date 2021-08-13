import React from "react";
import { faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input, ListGroup} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import ListGroupItem from "./ListGroupItem/ListGroupItem";
import {setValue, addTask} from "../Redux/action"

const Todo = () => {

	const value = useSelector(state => state.value);

	const data = useSelector(state => state.tasks);

	const dispatch = useDispatch();
	
	const add = ()=> (value != "") && addTask(dispatch, value);
	
	return (
		<div className='bg-white rounded p-3 shadow'>
			<h1>Todo App</h1>
			<div className='d-flex mb-2'>
				<Input onChange={(e)=>setValue(dispatch, e.target.value)} value={value} placeholder='new task' className='me-2'/>
				<Button color='primary' onClick={add}>
					<FontAwesomeIcon icon={faPlus} />
				</Button>
			</div>
			<ListGroup> 
				{data?.map((item, index) => <ListGroupItem key="index" index={index} item={item}/>)}
			</ListGroup>
		</div>
	)
}

export default Todo;
