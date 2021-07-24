import React, {useState, useEffect} from 'react';
import { ApiWebUrl } from '../utils';

function Ficha(props) {
    const [country, setcountry] = useState([]);
    const [singleCountry, setsingleCountry] = useState({})
    useEffect(() => {
        
        getCountries('https://zisoftacademy.com/apiclases/examenfinal/ciudad.php')
    }, [])

    const getCountries = async(url) => {
        let res = await fetch(url);
        let  json = await res.json()
            console.log(json)
            setcountry(json)
    }
    
    return (
        <div className="card" style={{width: '18rem;'}}>
            { country.map( itemPais => {
                return <>
                    <h3>{itemPais.idpais}</h3>
                    <div className="card-body">
        <h5 className="card-title">{itemPais.nombre}</h5>
        <p className="card-text">{itemPais.pais} {itemPais.moneda}</p>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Datos
        </button>
        </div>
                </>
            } ) }
        

          
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>

    );
}

export default Ficha;