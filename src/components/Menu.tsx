interface MenuProps {
    
}

const Menu: React.FC<MenuProps> = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Home (React Resume)</a>
                    <a className="nav-item nav-link" href="/react">React Resume</a>
                    <a className="nav-item nav-link" href="/angular">Angular Resume</a>
                </div>
            </div>
        </nav>
    )};
    
export default Menu;