import carrito from "./imagenes/carrito.svg";

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-light position-relative">
            <img src={carrito} alt="Carrito" width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}

export default CartWidget;