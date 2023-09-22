const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: "https://playground.4geeks.com/apis/fake/contact/",
			contacts: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			//get data from my agenda
			getData: async () => {
				const resp = await fetch(getStore().url+"agenda/seiglie")
				console.log(resp)
				if (!resp.ok) getActions().addContact();

				const data = await resp.json()
				console.log("data del fetch",  data)
				setStore({contacts: data})
				
			},
			editUser: () =>{
				fetch(url).then(resp=> resp.json()).then(data=>setStore({edit: data})).catch(error=> console.log(error))
			},
			addContact: async (full_name, email, address, phone) => {
				const opt = {
					headers: {
						"Content-Type": "application/json"
					},
					method: "POST",
					body: JSON.stringify({
						full_name: full_name || "Dave Bradley",
						email: email || "dave@gmail.com",
						agenda_slug: "seiglie",
						address: address || "47568 NW 34ST, 33434 FL, USA",
						phone: phone || "7864445566"
					})
				}
				const resp = await fetch(getStore().url, opt)
				console.log("resp addContact", resp)
				if (resp.statusText=== "OK") true
			},
			deleteUser: () => {},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
