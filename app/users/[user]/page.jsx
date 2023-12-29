"use client";

const User = ({ params }) => {
    console.log(params)
    return (
        <div>
            <p>Hello {params.user}</p>
        </div>
    )
}

export default User;