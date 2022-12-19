function ImageGrid({ serverImages }) {

    return (
        <div>
            {serverImages && serverImages?.map(x => {
                return (
                    // <div>
                    //     <img src={x.original}></img>
                    //     <span>{x.original}</span>
                    // </div>
                    <img src={x.original}></img>
                )
            })}
        </div>
    )

}

export default ImageGrid;