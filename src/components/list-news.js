import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useQuery} from "@apollo/react-hooks";
import {gql} from 'apollo-boost';
import Loader from './loader';
import './index.scss'

const news = gql`{
    launchesPast(limit: 20) {
      ships {
        id
        name
        home_port
        image
        type
      }
    }
  }
`

const ListNews = () =>{

    const [typeShip, newTypeShip] = useState('Cargo');

    let countLoop = 0;
    const {loading: loadingNews, error: errorNews, data: successNews} = useQuery(news);

    const toggleType = e =>{
        newTypeShip(e.target.id);
    }
    const toggleActive = id => {
        if (id===typeShip){
            return 'active';
    }
        return 'inactive';
    }

    if(loadingNews){
        return (<Loader/>)
}
    if(errorNews){
        return 'ERROR!';
    }
    return(
        <div className='jumbotron section news'>
            <div className='list'>
                <h1>Recent Ships</h1>
                    <div className="nav">
                    <a id='Cargo' className={'title ' + toggleActive('Cargo')} onClick={toggleType} href="#3">Cargo</a>
                        <a id='Barge' className={'title '+ toggleActive('Barge')} onClick={toggleType} href="#1">Barge</a>
                        <a id='Tug' className={'title '+ toggleActive('Tug')} onClick={toggleType} href="#2">Tug</a>
                        <a className='empty'>&nbsp;</a>
                    </div>
                    <div className='container-links'>
                        {console.log(successNews)}
                        {successNews.launchesPast.map(i=>{
                            if(i.ships.hasOwnProperty(0)){
                                console.log(i.ships)
                            return i.ships.map(item=>{
                            if (item&&item.type===typeShip&&countLoop<4){
                                countLoop++;
                                return(
                                    <Link to={'/'+item.id} className='link' key={item.id}>
                                        <div className='item'>
                                            <div>
                                                <img src={item.image} alt='flow'/>
                                                <div className='title'>{item.name}</div>
                                                <div className='sub'>{item.home_port}</div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                            })
                        }
                        })
                        }
                    </div>
                </div>
            <Link to='/all-news'>
                <div className='title all'>GO TO ALL NEWS</div>
            </Link>
        </div>
    )
}

export default ListNews;