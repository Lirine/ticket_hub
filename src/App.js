import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import Item from "./Item";
import {Button, Grid} from "@material-ui/core";
import Pages from "./Pages";
import Input from "@material-ui/core/Input"


function App() {

    const [list, setList] = useState([])
    const [pager, setPager] = useState({})
    const [searchName, setSearchName] = useState('')


    const getList = (page = 1) => {
        const data = {
            limit: 20,
            page
        }
        axios
            .post("http://localhost:3000/event/search", data)
            .then(res => {
                setList(res.data.payload.items)
                setPager(res.data.payload.pager)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getList()

    }, [])

    const editItem = (id, obj) => {
        axios
            .patch(`http://localhost:3000/event/${id}`, {...obj})
            .then(res => {
                getList()
            })
            .catch(err => console.log(err))
    }


    let onChangeSearchName;
    let retrieveName;


    return (
        <div className="App">
            <h2>TRAININGS</h2>

            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <Input type="text"
                               className="form-control"
                               placeholder="Search by name"
                               value={searchName}
                               onChange={onChangeSearchName}
                               />
                        <div className="input-group-append">
                            <Button className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={retrieveName}
                                    >
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Pages pager={pager} getList={getList}/>
            </div>

            <div>

            <Grid container spasing={3}>

                {list.map(el => <Grid item xs={3} key={el._id}> <Item item={el} editItem={editItem}/> </Grid>)}

            </Grid>
            </div>
        </div>
    );
}

export default App;
