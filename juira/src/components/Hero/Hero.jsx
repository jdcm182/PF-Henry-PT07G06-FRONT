import React from 'react';
import styles from './Hero.module.css';
import { Link } from 'react-router-dom';


export default function Hero() {


    const categories = [
        { id: 1, name: 'Baño' },
        { id: 2, name: 'Cocina' },
        { id: 3, name: 'Muebles' },
        { id: 4, name: 'Electrodomesticos' },
        { id: 5, name: 'Tecnología' },
        { id: 6, name: 'Herramientas' },
        { id: 7, name: 'Pinturas' },
        { id: 8, name: 'Aire Libre' },
        { id: 9, name: 'Aseo' },
        { id: 10, name: 'Organizadores' },
        { id: 11, name: 'Construcción' },
        { id: 21, name: 'Mascotas' },
        /* { id: 51, name: 'Decoración' },
        { id: 61, name: 'Pisos' },
        { id: 71, name: 'Paredes' },
        { id: 81, name: 'Electricidad' },
        { id: 31, name: 'Iluminación' },
        { id: 18, name: 'Jardín' },
        { id: 12, name: 'Mesas' },
        { id: 13, name: 'Camas' },
        { id: 15, name: 'Plomería' },
        { id: 16, name: 'Indumentaria' },
        { id: 17, name: 'Bicicletas' }, */

    ]

    return (
        <section className={styles.heroContainer}>
            {/* <div className={styles.divContainer}>
                <div className={styles.centerBox}>
                    hero
                </div>
            </div> */}
            <div className={styles.box}>

                {categories && categories.map(c => (
                    <Link key={c.name} to="/juira" className={styles.categoryBtn}>
                        {c.name}
                    </Link>
                ))}

            </div>
            { /* <div className={styles.imgWrapper}> */}
            <div className={styles.imgPattern}>
            </div>
            {/* </div> */}

        </section>
    )
}