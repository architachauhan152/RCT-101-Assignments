import { useState } from "react";
import "./form.css";

export const Form = () => {
  const [formState, setFormState] = useState({
    username: "",
    age: "",
    adress: "",
    salery: "",
    department: "",
    maried: false,
  });
  const [data1, setData1] = useState([]);
  
  const getdata = async () => {
    fetch(`http://localhost:8080/user`)
      .then((d) => d.json())
      .then((data) => {
        // console.log(data)
        setData1(data);
      });
  };
  getdata();

  // console.log(data1);

  const handelChange = (e) => {
    const { id, value } = e.target;
    setFormState({
      ...formState,
      [id]: value,
    });
  };

  const handelsubmite = (e) => {
    e.preventDefault();
    // console.log(formState)

    fetch("http://localhost:8080/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        getdata();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handelsubmite} id="personalform">
        <input
          onChange={handelChange}
          value={formState.username}
          type="text"
          placeholder="Username"
          id="username"
        ></input>
        <br></br>
        <br></br>

        <input
          onChange={handelChange}
          value={formState.age}
          type="Number"
          placeholder="age"
          id="age"
        ></input>
        <br></br>
        <br></br>

        <input
          onChange={handelChange}
          value={formState.adress}
          type="text"
          placeholder="Adress"
          id="adress"
        ></input>
        <br></br>
        <br></br>

        <label for="cars">Choose a Department:</label>
        <select
          value={formState.department}
          id="department"
          onChange={handelChange}
        >
          <option value="Production">Production</option>
          <option value="Developement">Developement</option>
          <option value="Markating">Markating</option>
          <option value="Operations">Operations</option>
        </select>
        <br></br>
        <br></br>

        <input
          onChange={handelChange}
          value={formState.salery}
          type="Number"
          placeholder="Salery"
          id="salery"
        ></input>
        <br></br>
        <br></br>

        <input
          type="checkbox"
          onChange={handelChange}
          value={formState.maried}
          id="maried"
        ></input>
        <span>if Married please check</span>
        <br></br>
        <br></br>

        <input type="Submit" value="submit"></input>
        <br></br>
      </form>

      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Adress</th>
          <th>Salery</th>
          <th>Department</th>
          <th>Maririale Status</th>
        </tr>

        {data1.map((e) => (
          <tr>
            <td>{e.username}</td><td>{e.age}</td><td>{e.adress}</td>
            <td>{e.salery}</td><td>{e.department}</td>
            <td>{e.maried ? "Maried" : "Single"}</td>
          </tr>
        ))}
        <br>
        </br>
        <br>
        </br>
        
      </table>
    </div>
  );
};
