import "./stats.scss"
import GitHubCalendar from 'react-github-calendar';

function Stats() {
  return (
    <div className='stats' id='stats'>
      <div className='wrapper'>
        <h2>My GitHub Statistics</h2>
       
          <GitHubCalendar username='shubhamksingh' />
          <div className="gitImages">
          <img src='https://github-readme-streak-stats.herokuapp.com/?user=shubhamksingh' alt='Shubham Singh' />
          <img src='https://github-readme-stats.vercel.app/api?username=shubhamksingh&show_icons=true&locale=en' alt='Shubham Singh' />
          </div>

      </div>
    </div>
  )
}

export default Stats