import React, {Fragment, useState} from 'react';


const Registro = () => {
    return (
    <Fragment>
        <div className= "container-register">
            <p>Hola</p>
            <div className="form-register">
                <h4>REGISTRO DE USUARIO</h4>
                <form className="form-register">
                    <input
                        className = "input-regiter"
                        type = "text"
                        placeholder = "Nombre"
                    ></input>
                    <input
                        className = "input-regiter"
                        type = "text"
                        placeholder = "Apellido"
                    ></input>
                    <input
                        className = "input-regiter number"
                        type = "number"
                        placeholder = "Edad"
                    ></input>
                    <input
                        className = "input-regiter"
                        type = "email"
                        placeholder = "Email"
                    ></input>
                    <input
                        className = "input-regiter"
                        type = "password"
                        placeholder = "Contraseña"
                    ></input>
                    <input type="submit" value="Registrar" className="btn-register"/>
                    <p>¿Ya tengo una cuenta?<a href="#" className="link-register"> Inisiar sesion</a></p>
                </form>
            </div>
        </div>
    </Fragment>   
    );
  }
  
  export default Registro;