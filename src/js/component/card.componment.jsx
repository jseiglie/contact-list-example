import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

export const CardComponent = props => {
    const navigate = useNavigate();
    const {store, actions} = useContext(Context);
    return (
        <div className="col-12 d-flex">

            <div className="card d-flex flex-row justify-content-around">

                <img className="img-fluid w-25"  src={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdreamworthsolutions.com%2Fgarwarealfa%2Fstudent%2Fdist%2Fimg%2Fuser.png&f=1&nofb=1&ipt=53dcdb1e18554475ea07336bf71c09cc7d10378b52137c7cc53740b486e09124&ipo=images"} alt="" />
                <div className="justify-content-center align-self-center">

                    <h2>{props.el.full_name}</h2>
                    <p>{props.el.address}</p>
                    <p>
                        {props.el.phone}
                    </p>
                    <p>
                        {props.el.email}
                    </p>
                    <button className="btn btn-primary mx-3" onClick={e => navigate("/edit/" + props.el.id)}>EDIT</button>
                    <button className="btn btn-danger" onClick={e => actions.deleteUser(props.el.id)}>X</button>

                </div>
            </div>
        </div>
    )
}