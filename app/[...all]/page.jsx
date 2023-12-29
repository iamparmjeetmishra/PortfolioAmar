"use client";

const Products = ({ params }) => {
    return (
        <div>
            <h1>Products {Products.all}</h1>
            <br />
            <p>All routes</p>
            {params.all.map((p) => (
                <li key={p}>{p}</li>
            ))}
        </div>
    )
}

export default Products