import { useState } from "react";
import React from "react";
import { v1 as uuidv1 } from 'uuid';
import {Col, Row, Button, FormControl} from 'react-bootstrap';
import s from './AddTodo.module.css'


function AddTodo ({todo , setTodo}) {
    const [value, setValue] = useState("");
   
    function saveTodo () {
        setTodo (

            [...todo, {
                id: uuidv1(),
                title:value,
                status:true
            }]
        )
        setValue("");
    }


    return(

        <Row>
            <Col className={s.AddTodoForm}>
                <FormControl placeholder="Введите задачу" value={value} onChange={ (e) => setValue(e.target.value)} />
                <Button className= {s.btn} variant="info" onClick={saveTodo}>Сохранить</Button> 
            </Col>
        </Row>
    )
}

export default AddTodo;