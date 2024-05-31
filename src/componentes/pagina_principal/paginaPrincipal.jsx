import './paginaPrincipal.css'

const PaginaPrincipal = () => {
    return (
        <section>
            <div className="d-flex imagenMasParrafo">
                <img 
                    src="https://store-images.s-microsoft.com/image/apps.4271.66609754472706512.79e04ddb-9eb0-4c5b-bdc5-e761d99aa39b.f0e082e5-5509-4a3f-9d09-ec02af7ff2c9?q=90&w=480&h=270"
                    alt="Hombre con mascara"
                />
                <p className="primerParrafo">Esto es una prueba de una pagina para empezar a crear la verdadera. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad repellendus doloremque laudantium mollitia, quisquam facilis rem molestias pariatur saepe, doloribus rerum! Ut libero quis, sint mollitia unde dicta culpa corrupti!</p>
            </div>
        </section>
    )
}


export default PaginaPrincipal;