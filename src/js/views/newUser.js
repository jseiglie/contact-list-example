import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const NewUser = () => {
    const [full_name, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        if (actions.addContact(full_name, email, address, phone)) navigate("/");
    }

    return (
        <form className="form-control" onSubmit={e => handleSubmit(e)}>
            <label> Name
                <input className="form-control" type="text" placeholder="name" value={full_name} required onChange={e => setFullName(e.target.value)} />
            </label>
            <label> address
                <input className="form-control" type="text" placeholder="address" value={address} onChange={e => setAddress(e.target.value)} required />
            </label>
            <label> email
                <input className="form-control" type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </label>
            <label> phone
                <input className="form-control" type="text" placeholder="phone" value={phone} onChange={e => setPhone(e.target.value)} required />
            </label>
            <input className="btn btn-primary" type="submit" role="button" value={"Add"} />
            <button className="btn btn-danger" onClick={()=>navigate("/")}>Cancel</button>
        </form>
    )
}