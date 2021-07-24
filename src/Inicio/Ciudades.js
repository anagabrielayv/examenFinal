import React, { Component } from 'react';
import { ApiWebUrl } from '../utils';
import './Categorias.css';
import $ from "jquery/dist/jquery";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

class Ciudades extends Component {
    constructor(props){
        super(props)
        this.state = {
            listaCategorias: [],
            nombre: "",
            pais: "",
            moneda: "",
            presidente: "",
            poblacion: "",

            categoriaSeleccionadaIdPais: "",
            categoriaSeleccionadaNombre: "",
            categoriaSeleccionadaPais: "",
            categoriaSeleccionadaMoneda: "",
            categoriaSeleccionadaPresidente: "",
            categoriaSeleccionadaPoblacion: "",
        }
    }

    componentDidMount(){
        this.leerCategorias();
    }
    leerCategorias(){
        const rutaServicio =  ApiWebUrl + "examenfinal/ciudad.php";

        fetch(rutaServicio)
        .then(
            res => res.json()
            //Asi se indica que los valores que devuelve el servicio estarán en formato JSON
        )
        .then(
            (result) => {
                console.log(result);
                //La variable result contiene los datos que envia el servicio web
                this.setState({
                    listaCategorias: result
                })
            }
        )
    }

    dibujarTabla(datosTabla){
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>Cod</th>
                        <th>Nombre</th>
                        <th>Pais</th>
                        <th>Moneda</th>
                        <th>Presidente</th>
                        <th>Problacion</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {datosTabla.map(itemCategoria =>
                    <tr key={itemCategoria.idpais}>
                        <td>{itemCategoria.idpais}</td>
                        <td>{itemCategoria.nombre}</td>
                        <td>{itemCategoria.pais}</td>
                        <td>{itemCategoria.moneda}</td>
                        <td>{itemCategoria.presidente}</td>
                        <td>{itemCategoria.poblacion}</td>
                        <td><FontAwesomeIcon className="fa-pen" icon={faPen} 
                            onClick={() => this.mostrarFormularioActualizar(itemCategoria)}/></td>
                        <td><FontAwesomeIcon className="fa-times" icon={faTimes}
                            onClick={() => this.categoriaEliminar(itemCategoria)}/></td>
                    </tr>
                    )}    
                </tbody>
            </table>
        )
    }

    categoriaEliminar(itemCategoria){
        var respuesta = window.confirm("¿Esta seguro que desea eliminar la ciudad " + itemCategoria.nombre + " ?");
        if(respuesta === true){
            const rutaServicio =  ApiWebUrl + "examenfinal/ciudadeliminar.php";

            var formData = new FormData();
            formData.append("idpais", itemCategoria.idpais)

            fetch(rutaServicio, {
                method: 'POST',
                body: formData
            })
            .then(res => {
                alert("Se ha eliminado la ciudad " + itemCategoria.nombre)
                this.leerCategorias();
                }
            ) 
        }

    }

    mostrarFormularioActualizar(itemCategoria){
        console.log(itemCategoria)
        this.setState({
            categoriaSeleccionadaIdPais: itemCategoria.idpais,
            categoriaSeleccionadaNombre: itemCategoria.nombre,
            categoriaSeleccionadaPais: itemCategoria.pais,
            categoriaSeleccionadaMoneda: itemCategoria.moneda,
            categoriaSeleccionadaPresidente: itemCategoria.presidente,
            categoriaSeleccionadaPoblacion: itemCategoria.poblacion
        })

        var myModal = new bootstrap.Modal(document.getElementById('modalActualizar'))
        myModal.show()
    }

    dibujarModal(){
        return(
            <div className="modal fade" id="modalActualizar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-2">
                            <input type="text" className="form-control" disabled
                                value={this.state.categoriaSeleccionadaIdPais} />
                        </div>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Nombre" 
                                required minLength="3" maxLength="15"
                                value={this.state.categoriaSeleccionadaNombre} 
                                onChange = { (e) => this.setState({categoriaSeleccionadaNombre: e.target.value})} />
                        </div>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Pais"
                                required minLength="3"
                                value={this.state.categoriaSeleccionadaPais} 
                                onChange = { (e) => this.setState({categoriaSeleccionadaPais: e.target.value})} />
                        </div>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Moneda"
                                required minLength="3"
                                value={this.state.categoriaSeleccionadaMoneda} 
                                onChange = { (e) => this.setState({categoriaSeleccionadaMoneda: e.target.value})} />
                        </div>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Presidente"
                                required minLength="3"
                                value={this.state.categoriaSeleccionadaPresidente} 
                                onChange = { (e) => this.setState({categoriaSeleccionadaPresidente: e.target.value})} />
                        </div>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Poblacion"
                                required minLength="3"
                                value={this.state.categoriaSeleccionadaPoblacion} 
                                onChange = { (e) => this.setState({categoriaSeleccionadaPoblacion: e.target.value})} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                            onClick = {(e) => this.categoriaActualizar()} >Actualizar</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

    categoriaActualizar(){
        const rutaServicio =  ApiWebUrl + "examenfinal/ciudadactualizar.php";

        var formData = new FormData();
        formData.append("idpais", this.state.categoriaSeleccionadaIdPais)
        formData.append("nombre", this.state.categoriaSeleccionadaNombre)
        formData.append("pais", this.state.categoriaSeleccionadaPais)
        formData.append("moneda", this.state.categoriaSeleccionadaMoneda)
        formData.append("presidente", this.state.categoriaSeleccionadaPresidente)
        formData.append("poblacion", this.state.categoriaSeleccionadaPoblacion)

        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        })
        .then(res => {
            alert("Actualizado correctamente")
            this.leerCategorias();
            }
        ) 
    }

    dibujarFormularioAgregar(){
        return(
            <div id="formulario-agregar">
                <form onSubmit={this.categoriasInsertar}>
                    <div className="mb-2">
                        <input type="text" className="form-control" placeholder="Nombre" id="txtNombre"
                        onChange = { (e) => this.setState({ nombre: e.target.value}) }
                        required minLength="3" maxLength="15"/>
                    </div>
                    <div className="mb-2">
                        <input type="text" className="form-control" placeholder="Pais" id="txtPais"
                        onChange = { (e) => this.setState({ pais: e.target.value}) }
                        required minLength="3"/>
                    </div>
                    <div className="mb-2">
                        <input type="text" className="form-control" placeholder="Moneda" id="txtMoneda"
                        onChange = { (e) => this.setState({ moneda: e.target.value}) }
                        required minLength="3"/>
                    </div>
                    <div className="mb-2">
                        <input type="text" className="form-control" placeholder="Presidente" id="txtPresidente"
                        onChange = { (e) => this.setState({ presidente: e.target.value}) }
                        required minLength="3"/>
                    </div>
                    <div className="mb-2">
                        <input type="text" className="form-control" placeholder="Poblacion" id="txtPoblacion"
                        onChange = { (e) => this.setState({ poblacion: e.target.value}) }
                        required minLength="3"/>
                    </div>
                    <div className="mb-2">
                        <button type="submit" className="btn btn-primary">Guardar</button>
                        <button type="button" className="btn btn-primary" onClick={this.ocultarFormularioAgregar}>Cerrar</button>
                    </div>
                </form>
            </div>
        )
    }
    categoriasInsertar = (e) =>{
        e.preventDefault();

        const rutaServicio =  ApiWebUrl + "examenfinal/insertarciudad.php";

        var formData = new FormData();
        formData.append("nombre", this.state.nombre)
        formData.append("pais", this.state.pais)
        formData.append("moneda", this.state.moneda)
        formData.append("presidente", this.state.presidente)
        formData.append("poblacion", this.state.poblacion)

        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        } )
        .then(
            res => res.text()
            //Asi se indica que los valores que devuelve el servicio estarán en formato JSON
        )
        .then(
            (result) => {
                console.log(result);
                //La variable result contiene los datos que envia el servicio web
                alert("Se ha agregado una nueva ciudad con el id: " + result);
                this.ocultarFormularioAgregar();
                this.leerCategorias();
                this.setState({ nombre: "" });
                this.setState({ pais: "" }); 
                this.setState({ moneda: "" });
                this.setState({ presidente: "" }); 
                this.setState({ poblacion: "" }); 
                document.getElementById("txtNombre").value = ""
                document.getElementById("txtPais").value = ""
                document.getElementById("txtMoneda").value = ""
                document.getElementById("txtPresidente").value = ""
                document.getElementById("txtPoblacion").value = ""
            }
        ) 

    }
    ocultarFormularioAgregar = () => {
        //document.getElementById("formulario-agregar").style.display = "none";
        $("#formulario-agregar").slideUp('fast')
    }
    mostrarFormularioAgregar = () => {
        //document.getElementById("formulario-agregar").style.display = "block";
        $("#formulario-agregar").slideDown('fast')
    }
    render() {
        let contenidoCategorias = this.dibujarTabla(this.state.listaCategorias)
        let contenidoFormularioAgregar = this.dibujarFormularioAgregar();
        let contenidoModal = this.dibujarModal();
        return (
            <section id="tabla-categorias" className="padded">
                <div className="container">
                    <h2>Tabla Ciudades</h2>
                    <div className="mb-2">
                        <button type="button" className="btn btn-primary" onClick={this.mostrarFormularioAgregar}>Nueva Ciudad</button>
                    </div>
                    {contenidoFormularioAgregar}                   
                    {contenidoCategorias}
                </div>
                {contenidoModal}
            </section>
        );
    }
}





export default Ciudades;