import  { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom_hooks/FetchData';

const columns: GridColDef[]=[
    {field: 'id', headerName: "ID", width: 90, hide: true},
    {field: 'brand', headerName: 'Brand', flex: 1},
    {field: 'category', headerName: 'Category', flex: 1},
    {field: 'proof', headerName: 'Proof', flex: 1},
    {field: 'year', headerName: 'Year', flex: 1},
    {field: 'price', headerName: 'Price', flex: 2},

]
function DataTable() {
    let [ open, setOpen ] = useState(false);
    let [count, setCount] = useState(0)
    const { alcoholData, getData }= useGetData();
    const [selectionModel, setSelectionModel ] = useState<any>([])
    const handleOpen = () => {
        setOpen(true)
    }
    const increaseCount =() => {
        setCount(count+1)
    }

    const handleClose = () => {
        setOpen(false)
    }
    const deleteData = () =>{
        server_calls.delete(selectionModel);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout(() => {window.location.reload()}, 10000)
    
    }

  return (
    <>
        <Modal 
            id= {selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-col items-center">
            <div className='flex flex-row' >
                <div>
                    <Button
                        className="p-3 bg-indigo-500 border text-white hover:border-indigo-600 rounded m-3 hover:bg-slate-800 hover:text-blue-400"
                        onClick={() => handleOpen()}
                    >
                        Add Alcohol
                    </Button>
                </div>
                <div>
                    <Button onClick= {handleOpen} className="p-3 bg-indigo-500 border text-white hover:border-indigo-400 rounded m-3 hover:bg-slate-800 hover:text-blue-400" >
                        Update
                    </Button>
                </div>
                <div>
                    <Button onClick= {deleteData} className="p-3 bg-indigo-500 border text-white hover:border-indigo-400 rounded m-3 hover:bg-slate-800 hover:text-blue-400" >
                        Delete
                    </Button>
                </div>
                <div>
                    <Button onClick = {increaseCount} className="p-3 bg-indigo-500 border text-white hover:border-indigo-400 rounded m-3 hover:bg-slate-800 hover:text-blue-400" >
                        Push For Drinks Today Counter {count}
                    </Button>
                </div>
                { count > 20 ?
                    (
                        <div className='p-10 flex flex-col justify-between bg-red-500 border text-white hover:border-indigo-400 rounded m-3 hover:bg-slate-800 hover:text-blue-400'>
                            <button className='text-sm bg-white text-black rounded p-1' onClick = {() => setCount(0)}>Maybe We should Sober Up?</button>
                        </div>
                        
                    ) :  count > 10? (
                        <div className='p-5 bg-yellow-500 border text-white hover:border-indigo-400 rounded m-3 hover:bg-slate-800 hover:text-blue-400'>
                            <h1>I think it might be time to Lay off</h1>
                        </div>
                    ) :  count > 5? (
                        <div className='p-3 bg-green-500 border text-white hover:border-indigo-400 rounded m-3 hover:bg-slate-800 hover:text-blue-400'>
                            <h1>I like the way you drink! But be Careful</h1>
                        </div>
                    ):
                    <></>
                } 
            </div>
            <div>
                <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
                style={{ height: 400, width: '100%'}}>
                                                            
                    <h2 className="p-3 bg-slate-300 my-2 rounded">The Beverages</h2>
                    <DataGrid 
                    className='bg-white text-black'
                    rows={alcoholData} 
                    columns ={columns} 
                    rowsPerPageOptions={[5, 10, 100]}
                    checkboxSelection={true}
                    onSelectionModelChange={(item:any)=>{
                        setSelectionModel(item)
                    }}
                    />
                </div>
            </div>
            
        </div>
        
    </>
  )
}

export default DataTable