import { FormControl, Input, InputLabel, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import todoListApi from '../../api/todoListApi';
import Clock from '../Clock';
import Pagination from '../Pagination';

TodoList.propTypes = {
};

const useStyles = makeStyles(() => ({
    filter: {
        display: 'flex',
        flexDirection: 'row',
    },

}))

function TodoList(props) {
    const classes = useStyles();

    const [data, setData] = useState([]);

    const [size, setSize] = useState(1);

    const [param, setParam] = useState({
        _page: 1,
        _limit: 10,
    });

    const handleChangeUserId = (e) => {
        if (e.target.value !== "")
            setParam({ ...param, userId: e.target.value, _page: 1 });
        else
            setParam({ ...param, userId: undefined, _page: 1 })
    }

    const handleChangePage = (e) => {
        setParam({ ...param, _page: e });
    }

    useEffect(() => {
        (async () => {
            const paramId = { userId: param.userId }
            const len = await todoListApi.getTodo(paramId);
            if (len) {
                setSize(len.data.length);
            }
        })();

    }, [param])

    useEffect(() => {
        (async () => {
            try {
                const getApi = await todoListApi.getTodo(param);
                if (getApi) {
                    setData(getApi.data);
                    console.log(getApi.data);
                }
            }
            catch (error) {
                console.log(error);
            }
        })()
    }, [param])

    return (
        <div>
            <Clock />
            <h1>This is my list</h1>
            <FormControl className={classes.filter}>
                <InputLabel htmlFor="filterUserId">Search by userId</InputLabel>
                <Input
                    id="filterUserId"
                    name="filterUserId"
                    onChange={handleChangeUserId}
                />
            </FormControl>
            <ul className="todo-list">

                {data.map(todo => (
                    <li
                        key={todo.id}
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>

            <Pagination page={param} totalPages={size} onPageChange={(e) => handleChangePage(e)} />
        </div>
    );
}

export default TodoList;