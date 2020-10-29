import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css'

import { ResearchContext } from '../../Contexts/ResearchContext'

export default function Main(props) {
    const [list, setList] = useState({
        products: [],
        productInfo: {},
        page: 1
    })

    const { research } = useContext(ResearchContext);

    useEffect(() => {
        (async (page) => {
            const response = await api.get(`/products?page=${page}`);
            const { docs, ...productInfo} = response.data;

            setList({ products: docs, productInfo })
        })()
    }, [list.page])

    const prevPage = () => {
        if(list.page === 1) return;
        const pageNumber = list.page - 1;
        setList({ page: pageNumber })
    }

    const nextPage = () => {
        if(list.page === list.productInfo.pages) return;
        const pageNumber = list.page + 1;
        setList({ page: pageNumber })
    }

    const researchFilter = (products) => {
        if (!research) {
            return products
        }
        const filteredProducts = products.filter(product => product.title === research);
        return filteredProducts
    }

    return(
        <div className="product-list">
            {researchFilter(list.products).map(product => (
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>
                    <Link to={`/products/${product._id}`}>Acessar</Link>
                </article>
            ))}
            <div className="actions">
                <button disabled={ list.page === 1 } onClick={() => prevPage()}>Anterior</button>
                <button disabled={ list.page === list.productInfo.pages } onClick={() => nextPage()}>Próximo</button>
            </div>
        </div>
    )
    
    
}