function ImageGrid({ serverImages }) {

    return (
        <div>
            {serverImages && serverImages?.map(x => {
                return (
                    <img src={x.original}></img>
                )
            })}
        </div>
    )

}

export default ImageGrid;