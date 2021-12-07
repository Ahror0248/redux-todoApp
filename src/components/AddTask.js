function AddTask(){
    return(
        <div className={'row'}>
            <div className="col-md-10">
                <input type="text" className={'form-control'} />
            </div>
            <div className="col-md-2">
                <button className={'btn btn-dark'}>Add</button>
            </div>
        </div>
    )
}

export default AddTask 