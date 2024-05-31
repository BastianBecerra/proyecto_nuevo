import  NavBar from '../componentes/no_editables/navbar.jsx';
import  Footer from '../componentes/no_editables/footer.jsx';
import PaginaPrincipal from './pagina_principal/paginaPrincipal.jsx';

const Inicio = () => {
    return(
        <>
          <NavBar/>
          <PaginaPrincipal/>
          <Footer/>
        </>
    )
}  

export default Inicio;