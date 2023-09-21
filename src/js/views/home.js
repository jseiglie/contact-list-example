import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardComponent } from "../component/card.componment.jsx";
import { useNavigate } from "react-router";

export const Home = () => {

	const { store, actions } = useContext(Context)
	const navigate = useNavigate()
	return (
		<div className="text-center mt-5">

			<h1>Contacts</h1>
			<button onClick={()=>actions.addContact()}>Create Agenda</button>
			<button className="rounded btn btn-primary" onClick={e => navigate("/add_new_user")} >+</button>
<div className="row">

			{store.contacts?.map((el, i) => <CardComponent id={el.id} key={i} el={el} />)}
</div>


		</div>
	);
}