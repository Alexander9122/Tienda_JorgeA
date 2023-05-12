import NavBar from "./NavBar";
import CartWidget from "./CartWidget";

const Header = () => {
    return (
        <div className= "header">
            <div className="container-fluid">
                <div className="row p-3">
                    <div className="col-md-3 text-center">
                        <NavBar />
                    </div>
                    <div className="col-md-4 text-center">
                        <h1>Urban Fit</h1>
                    </div>
                    <div className="col-md-4 text-end">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;