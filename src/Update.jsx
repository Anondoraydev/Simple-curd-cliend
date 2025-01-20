import { useLoaderData } from "react-router-dom";


const Update = () => {
    const lodeedUser = useLoaderData();
    const heandealUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        console.log(email, name);
        const updatedUser = { email, name }

        fetch(`http://localhost:5000/users/${lodeedUser._id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
    }

    return (
        <div>
            <h2>Update Infometion of {lodeedUser.name}</h2>

            <form onSubmit={heandealUpdate}>
                <input type="text" name="name" defaultValue={lodeedUser?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={lodeedUser?.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;