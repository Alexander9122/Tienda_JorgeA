const NavBar = () => {
    return (
        <ul class="nav justify-content-center">
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Ropa
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Hombre</a></li>
                <li><a class="dropdown-item" href="#">Mujer</a></li>
                <li><a class="dropdown-item" href="#">Niño</a></li>
            </ul>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Calzado
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Hombre</a></li>
                <li><a class="dropdown-item" href="#">Mujer</a></li>
                <li><a class="dropdown-item" href="#">Niño</a></li>
            </ul>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Accesorios
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Hombre</a></li>
                <li><a class="dropdown-item" href="#">Mujer</a></li>
                <li><a class="dropdown-item" href="#">Niño</a></li>
            </ul>
            </li>
        </ul>
    )
}

export default NavBar;