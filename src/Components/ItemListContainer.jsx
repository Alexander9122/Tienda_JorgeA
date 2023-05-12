const ItemListContainer = ({text}) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <div >
                        {text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;