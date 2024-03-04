import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';


const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hide: true},
    { field: 'base_liquor', headerName: "Base Liquor", flex: 1,},
    { field: 'name', headerName: "Name", flex: 1},
    { field: 'glass_type', headerName: "Glass type", flex: 1},
    { field: 'recipe', headerName: "Recipe", flex: 1},
    { field: 'comments', headerName: "Comments", flex: 1}
]


function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }


  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 bg-cyan-200 rounded m-3 hover:bg-cyan-200 hover:drop-shadow-custom_button hover:border-2 hover:border-grey-100/100"
                    onClick={() => handleOpen()}
                >
                    Create New Drink
                </button>
            </div> 
            <Button onClick={handleOpen} className="p-3 bg-cyan-200 rounded m-3 hover:bg-cyan-200 hover:drop-shadow-custom_button hover:border-2 hover:border-grey-100/100" >Update</Button>
            <Button onClick={deleteData} className="p-3 bg-cyan-200 rounded m-3 hover:bg-cyan-200 hover:drop-shadow-custom_button hover:border-2 hover:border-grey-100/100" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ 
                minHeight: '500px',
                maxHeight: "700px",
                width: '100%'}}
        >
            <h2 className="p-3 bg-slate-300 my-2 rounded">My Drinks</h2>
            <DataGrid 
            rows={contactData} 
            columns={columns}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {setSelectionModel(item);
            }}
            componentsProps={{
                pagination: {
                    rowsPerPageOptions: [7]
                }
            }}
            />
        </div>
    </>
  )
}

export default DataTable