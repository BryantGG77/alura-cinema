import Banner from "components/Banner/Banner"
import styles from "./Favoritos.module.css"
import Titulo from "components/Titulo/Titulo"
import Card from "components/Card/Card"
import { useFavoritosContext } from "context/Favoritos"
const Favoritos = () => {

    const { favorito } = useFavoritosContext()
    return (
        <>
            <Banner img="favoritos" color="#118040" />
            <Titulo>
                <h1>Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => <Card key={fav.id} {...fav} />)}
            </section>
        </>
    )
}

export default Favoritos;