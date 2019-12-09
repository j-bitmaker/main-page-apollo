import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useQuery} from "@apollo/react-hooks";
import {gql} from 'apollo-boost';
import Loader from './loader';
import './index.scss'

const vacations= gql`{
    missions(limit: 20) {
      description
      id
      manufacturers
      name
    }
  }
  `

const SectionHiring = () =>{

    const [type, newType] = useState('SSL');

    const toggleType = e =>{
        newType(e.target.id);
    }
    const toggleActive = id => {
        if (id===type){
            return 'active';
        }
        return 'inactive';
    }
    const {loading: hiringLoading, error: hiringError, data: hiringData} = useQuery(vacations);
    
    if(hiringLoading){
        return (<Loader/>   );
    }

    if(hiringError){
        return 'ERROR!'
    }
    return(
        <div className='jumbotron section hiring'>
            <div className='list'>
                <div>
                    <h1>We are hiring</h1>
                    <div className='news-list'>
                    <div className="nav">
                            <a id='SSL' className={'title '+toggleActive('SSL')} href="#1" onClick={toggleType}>SSL</a>
                            <a id='SpaceX' className={'title '+toggleActive('SpaceX')} href="#2" onClick={toggleType}>SpaceX</a>
                            <a id='Orbital ATK' className={'title '+ toggleActive('Orbital ATK')} href="#3"  onClick={toggleType}>Orbital ATK</a>
                            <a className='empty'>&nbsp;</a>
                    </div>
                    <div className='container-links'>
                        {hiringData.missions.filter(add=>add.manufacturers[0]===type).map(add=>{
                                    return(
                                        <a href={'/'+add.index} className='link' key={add.id}>
                                            <div className='item'>
                                                <div>
                                                    <div className='title'>{add.name}</div>
                                                    <div>{add.description}</div>
                                                </div>
                                            </div>
                                        </a>
                                    )
                                })}
                    </div>
                    </div>
                        <Link to='/all-positons'>
                            <div className='title all'>GO TO ALL POSITIONS</div>
                        </Link>
                </div>
            </div>
        </div>

    )
}


export default SectionHiring;