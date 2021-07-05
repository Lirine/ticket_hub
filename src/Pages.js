import Pagination from "@material-ui/lab/Pagination"
import {useState} from "react";


function Pages(props) {

    const [page,setPage] = useState(1)



    const handleChange = (event,value) => {
        setPage(value)
        props.getList(value)
    }


    return (
        <div>
            <Pagination count={props.pager.pageCount} color="primary" onChange={handleChange}/>
        </div>
    )
}

export default Pages