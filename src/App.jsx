import './App.css';
import Card from './components/Card';

const App = () => {
  const rec = [
    {
      name: 'coolors',
      description: 'color palette generator',
      link: 'https://coolors.co'
    },
    {
      name: 'Realtime Colors',
      description: 'visualize your colors and fonts in realtime',
      link: 'https://www.realtimecolors.com'
    },
    {
      name: 'fontpair',
      description: 'font pairings for your next project',
      link: 'https://www.fontpair.co'
    },
    {
      name: 'CSS Layout - Digital Garden',
      description: 'a really clean css layout generator',
      link: 'https://layout.bradwoods.io'
    },
    {
      name: 'Main - Digital Garden',
      description: 'notes about creative coding on the web',
      link: 'https://garden.bradwoods.io'
    },
    {
      name: 'CSS - MDN Web Docs ',
      description: 'css basics',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      name: 'Dribble',
      description: "discover the world's top designers",
      link: 'https://dribbble.com'
    },
    {
      name: 'Stack Sorted',
      description: "find inspiration in design elements",
      link: 'https://stacksorted.com/buttons'
    },
    {
      name: 'awwwards',
      description: 'a collection of the best web designs',
      link: 'https://www.awwwards.com'
    },
    {
      name: 'The A11Y Project',
      description: 'learn to implement web accessibility',
      link: 'https://www.a11yproject.com/checklist/'
    },
    {
      name: 'Checklist Design',
      description: 'best design practices',
      link: 'https://www.checklist.design'
    },
    {
      name: 'Flexbox Guide - CSS Tricks',
      description: 'a complete guide to CSS flexbox',
      link: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/'
    }
  ];

  return (
    <div className="App">
      <h1>DesignConnect</h1>
      <h2>Web Design Resources for All!</h2>
      <div className='container'>
        {rec.map((rec, i) => (
          <Card
            name={rec.name}
            key={i}
            description={rec.description}
            link={rec.link}
          />
        ))}
      </div>
    </div>
  )
}

export default App
