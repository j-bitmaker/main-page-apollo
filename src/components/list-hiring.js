import React from 'react';
import {Link} from 'react-router-dom';
import {useQuery} from "@apollo/react-hooks";
import {gql} from 'apollo-boost';
import './index.scss'

const  vacations= gql`{
    jobs{
    id
    title
    slug
    commitment{
          id
    title
    }
    remotes{
      id 
      name
    }
    cities{
    id
          name
    }
    description
}
}`

const SectionHiring = () =>{
    const {loading: hiringLoading, error: hiringError, data: hiringData} = useQuery(vacations);
    if(hiringLoading){
        return 'now I am loading, bro'
    }
    if(hiringError!=undefined){
        return hiringError.toString();
    }
    console.log(hiringData)
    return(
        <div className='jumbotron section hiring'>
            <div className='list'>
                <h1>We are hiring</h1>
                <div className='news-list'>
                <div className="topnav">
                        <a className="active" href="#home">Home</a>
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a className='empty'>&nbsp;</a>
                </div>
                {hiringData.jobs.map(add=>{
                            return(
                                <Link to={'/'+add.index} className='link'>
                                    <div className='news-item' key={add.index}>
                                        <div>
                                            <div>{add.title}</div>
                                            <div>{add.description.slice(0, add.description.indexOf('.')+1)}</div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                </div>
                    <Link to='/all-positons'>
                        <div className='all'>Go TO ALL POSITIONS</div>
                    </Link>
            </div>
        </div>

    )
}


export default SectionHiring;