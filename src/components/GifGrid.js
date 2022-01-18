import React from 'react'
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
    // Reemplaza la useEffect de esta página
    const { data: images, loading } = useFetchGifs(category);
    // const [images, setImages] = useState([]);
    // // Cuando se carga el componente por primera vez, lance
    // // la peticion para obtener los gifs y los guarde en imagenes
    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages);
    //     //.then(imgs => setImages(imgs));
    // }, [category])
    // Enviar el spread del img
    return (
        <>
            <h3>{category}</h3>
            {/* Mensaje en pantalla */}
            {loading && <p className="card animate__animated animate__flash">Cargando...</p>}
            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            // Enviar cada una de las propiedades de la 
                            // imagen de manera independiente
                            {...img} />
                    ))
                    // images.map(({ id, title }) => (
                    //     <li key={id}>{title}</li>
                    // ))
                }
            </div>
        </>
    )
}
// Manejo de propiedades
GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
//
export default GifGrid
