import movies from '../images/movie.png'
import mineSweeper from '../images/mine-sweeper.png'
import OctoCat from '../images/octo-cat.png'

const Projects = [
    {
      title: 'Mine Sweeper', 
      url: 'https://mine-sweeper-danteharasz.netlify.com/',
      imgSrc: `${mineSweeper}`,
      altText: 'mine sweeper website screenshot', 
      desc: 'Mine Sweeper is a classic game I recreated with JavaScript using an Api to keep track of the game state.'
    },
    {
      title: 'Movie Api',
      url: 'https://movie-site-project-2019.netlify.app/', 
      imgSrc: `${movies}`,
      altText: 'Movie website screenshot',
      desc: 'This was a fun group project where we used different modules and packages to interact with a movie Api and dynamically create pages based on the data that is returned by the Api.'
    },
    {
      title: 'Octo-Cat Roledex',
      url: 'https://react-octocats-danteharasz.netlify.app/',
      imgSrc: `${OctoCat}`,
      altText: 'Octo-Cat website screenshot',
      desc: 'This is one of my projects from my time at Suncoast Developers Guild'
    }
  ];
  export default Projects