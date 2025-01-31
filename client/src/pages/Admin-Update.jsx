import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

export const AdminUpdate = () => {
    const [data, setData] = useState({
        username: "",  // Initialize with empty values
        email: "",
        phone: "",
    });

    const params = useParams();
    console.log("params single user: ", params);
    const { authorizationToken } = useAuth();


    const getSingleUserData = async () => { // Function to fetch user data
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log(`users single data ${data}`); // Check if data is fetched
            setData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getSingleUserData(); // Call the function on component mount
    }, [params.id,authorizationToken]);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData(data);
    };

    //to update data dynamically

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: authorizationToken,
                    },
                    body: JSON.stringify(data),
                }
            );
            if (response.ok) {
                toast.success("Updated successfully");
            } else {
                toast.error("Update Failed");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="section-form">
            <div className="container grid grid-two-cols">
                <h1 className="main-heading mb-3">Update User Data</h1>
                <br />
                <div className="update-form">
                    <form key={params.id} onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="username"
                                id="username" required
                                autoComplete="off"
                                value={data.username}
                                onChange={handleInput}
                            />
                        </div>
                        <br />

                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                id="email" required
                                autoComplete="off"
                                value={data.email}
                                onChange={handleInput}
                            />
                        </div>
                        <br />

                        <div>
                            <label htmlFor="phone">Mobile</label>
                            <input
                                type="number"
                                name="phone"
                                placeholder="phone"
                                id="phone" required
                                autoComplete="off"
                                value={data.phone}
                                onChange={handleInput}
                            />
                        </div>
                        <br />
                        <button type="update" className="btn btn-submit">Update</button>
                    </form>
                </div>
            </div>
        </section>
    );
};