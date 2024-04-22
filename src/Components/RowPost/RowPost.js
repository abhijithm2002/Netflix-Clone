import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import Youtube from 'react-youtube'
import './RowPost.css'
import { imageUrl,API_KEY } from '../../constants/Constants'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(props.url);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data)
      if(response.data.results.length !== 0) {
        setUrlId(response.data.results[0])
      } else  {
        console.log('trailer not available')
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>   
      <div className='posters'>
        {
          movies.map((obj)=> {
            return <img onClick={()=> handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />

          })
        }

      </div>
      {
       urlId ?  <Youtube opts={opts} videoId={urlId.key} />:null

       }
    </div>
  )
}

export default RowPost
