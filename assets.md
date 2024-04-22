netflix-logo='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'

nav-avatar='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'§

banner='https://wallpaperaccess.com/full/2703652.png

card = 'https://images.squarespace-cdn.com/content/v1/59232e19579fb3fa44a693c2/1589212826160-UM9PEPGOS3OJPR0FJ81X/ke17ZwdGBToddI8pDm48kHZUaJeKzodyg_sXWBMxNTdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxCBUU7B-_SAG1kGvCwYgmUjQXvn8_OJjtz3K1llMQBa1MPsuSXPSY3X-tgg78M7lI/SKOyqL1qFLIhbK6ho2lB-696x975.jpg?format=1500w'

//////////////////////////////////////////////////////////////API's//////////////////////////////////////////////////////////////////////////

imageUrl = 'https://image.tmdb.org/t/p/original'

apiBaseUrl='https://api.themoviedb.org/3'

trending ='https://api.themoviedb.org/3/trending/all/week?api_key={API_KEY_HERE}&language=en-US'

action ='https://api.themoviedb.org/3/discover/movie?api_key={API_KEY_HERE}&with_genres=28'

originals ='https://api.themoviedb.org/3/discover/tv?api_key={API_KEY_HERE}&with_networks=213' 

ComedyMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=35',

HorrorMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=27',

ActionMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=28',

RomanceMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=10749',

Documentaries: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=99',

////////////////////////////////////////////////////////////////////API KEY////////////////////////////////////////////////////////////////////////////

 API_KEY = "YOUR API KEY"


 
.banner {
    background-size: cover;
    height: 448px;
    color: white;
    
}

.content {
    padding-top: 140px;
    height: 190px;
    padding: left 15px; 
}

.title {
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
}

.button {
    color: white;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 5px;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: rgba(51, 51, 51, 0.5);
    cursor: pointer;
    margin-right: 1rem;
}

.button:hover {
    color: black;
    background-color: #e6e6e6;
}

.description {
    width: 45rem;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 1rem;
    height: 80px;
    max-width: 360px;
}

.fade {
    height: 7.4rem;
    background-image: linear-gradient(180deg,transparent,rgba(37,37,37,.61),#111);
}