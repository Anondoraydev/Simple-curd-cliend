import { useLoaderData } from "react-router-dom";


const Update = () => {
    const lodedUser = useLoaderData();
    const heandealUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(email, name);
        const updatedUser = { email, name };

        fetch(`http://localhost:5000/users/${lodedUser._id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.matchedCount>0){
                    alert("user Update successfully")
                }

            })
    }

    return (
        <div>
            <h2>Update Infometion of {lodedUser.name}</h2>

            <form onSubmit={heandealUpdate}>
                <input type="text" name="name" defaultValue={lodedUser?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={lodedUser?.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;