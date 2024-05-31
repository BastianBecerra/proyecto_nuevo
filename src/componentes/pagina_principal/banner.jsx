import './paginaPrincipal.css'

const Banner = () => {
    return (
        <section className='BGPaginaPrincipal'>
            <div className="d-flex imagenMasParrafo">
                <img 
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/2e7a5841-c626-45ae-ad67-93b1db9c06b8/d1t090c-caca7589-bef4-424b-8582-71b10088dd3d.jpg"
                    alt="Hombre con mascara"
                />
                <p className="primerParrafo">Esto es una prueba de una pagina para empezar a crear la verdadera. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad repellendus doloremque laudantium mollitia, quisquam facilis rem molestias pariatur saepe, doloribus rerum! Ut libero quis, sint mollitia unde dicta culpa corrupti!</p>
            </div>
        </section>
    )
}


export default Banner;