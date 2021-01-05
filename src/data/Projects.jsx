import randyland from '../images/RandylandSite.jpg'
import movies from '../images/movie.png'
import mineSweeper from '../images/mine-sweeper.png'

const Projects = [
    {
      title: 'Randyland',
      url: 'https://randy.land',
      imgSrc: `${randyland}`,
      altText: 'Randyland website screenshot',
      desc: 'This was originally a WordPress Site that I recreated with React.js so I could design it the way my client wanted.'
    },
    {
      title: 'Mine Sweeper', 
      url: 'https://mine-sweeper-danteharasz.netlify.com/',
      imgSrc: `${mineSweeper}`,
      altText: 'mine sweeper website screenshot', 
      desc: 'Mine Sweeper is a classic game I recreated with JavaScript using an Api to keep track of the game state.'
    },
    {
      title: 'Movie Api',
      url: 'https://movies-danteharasz.netlify.com/', 
      imgSrc: `${movies}`,
      altText: 'Movie website screenshot',
      desc: 'This was a fun group project where we used different modules and packages to interact with a movie Api and dynamically create pages based on the data that is returned by the Api.'
    }
  ];
  export default Projects