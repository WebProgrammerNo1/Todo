import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import ListGroupItemWrapper from './ListGroupItemWrapper'
import { faArrowDown, faArrowUp, faBars, faEdit, faSave, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup, Input,  DropdownItem, DropdownMenu, DropdownToggle,  UncontrolledButtonDropdown } from 'reactstrap';
import { deleteTask, editTask, taskDown, taskUp, toggleTask } from '../../Redux/action';

const ListGroupItem = ({index, item}) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState(item.title);

    const cancel = () => {
        setValue(item.title);
        setIsEdit(false)
    }

    const save = () => {
        editTask(dispatch, index, value);
        setIsEdit(false);
    }

    return (
        <ListGroupItemWrapper key={index} tag='a' href='#' action
            className='d-flex align-items-center justify-content-between'
            onDoubleClik={() => toggleTask(dispatch, index)}>
           {isEdit ? <Input value={value} onChange={(e)=>setValue(e.target.value)} className="me-2" />
                :<span style={{textDecoration:item.compled ? "line-through":"none"}}>{index+1}. {item.title}</span>}
          {isEdit ?
       <ButtonGroup>
            <Button color="success"onClick={save}><FontAwesomeIcon icon={faSave}/></Button>
            <Button color="danger"onClick={cancel}><FontAwesomeIcon icon={faTimes}/></Button>
       </ButtonGroup>

       :<UncontrolledButtonDropdown>
           <DropdownToggle caret>
           <FontAwesomeIcon icon={faBars}/>
           </DropdownToggle>
           <DropdownMenu>
               <DropdownItem header>Function</DropdownItem>
                <DropdownItem onClick={()=> setIsEdit(true)}>
                    <FontAwesomeIcon icon={faEdit}/> Edit
                </DropdownItem>
                <DropdownItem onClick={()=> deleteTask(dispatch, index)}>
                    <FontAwesomeIcon icon={faTrash}/> Delete
                </DropdownItem>
                <DropdownItem onClick={()=> taskUp(dispatch, index)}>
                    <FontAwesomeIcon icon={faArrowUp}/> Up
                </DropdownItem>
                <DropdownItem onClick={()=> taskDown(dispatch, index)}>
                    <FontAwesomeIcon icon={faArrowDown}/> Down
                </DropdownItem>
           </DropdownMenu>
       </UncontrolledButtonDropdown>}
    </ListGroupItemWrapper>
    )
}

export default ListGroupItem
