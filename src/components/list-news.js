import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useQuery} from "@apollo/react-hooks";
import {gql} from 'apollo-boost';
import './index.scss'

const data = gql`{
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
}
`

const ListNews = ({news}) =>{
    const [itemclassName, newItemclassName] = useState('active')
    const {loading: loadingData, error: errorData, data: successData} = useQuery(data);
    console.log(errorData)
    if(loadingData){
        return 'loading'
    }
    console.log(successData);
    return(
        <div className='jumbotron col-12 section news'>
            <div className='list'>
                <h1>Recent News</h1>
                    <div className="topnav">
                        <a className="active" href="#home">Home</a>
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a className='empty'>&nbsp;</a>
                    </div>
                    <div className='news'>
                        {news.map(item=>{
                            return(
                                <Link to={'/'+item.index} className='link'>
                                    <div className='news-item' key={item.index}>
                                        <div>
                                            <img src={item.url} alt='flow'/>
                                            <div>{item.name}</div>
                                            <div>{item.date.toString().slice(0, -30)}</div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            <Link to='/all-news'>
                <div className='all'>GO TO ALL NEWS</div>
            </Link>
        </div>
    )
}

export default ListNews;