import './App.css';
import HorizontalWidget from './HorizontalWidget';
import FlexWidget from './FlexWidget';
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="App BackgroundGradient " >
      <main>
        <HorizontalWidget
          title="Hi there, i am Uljas Wennström."
          secondary="A 17 year old fullstack .NET and React developer."
          third="I create websites, crossplatform native apps and more." />
          

        <div className='flex-container'>
          <FlexWidget
            title="About me"
            secondary={<div><AboutMe /></div>} />
          <div className='margin' />
          <FlexWidget
            title="Contact me!"
            secondary={<div><ContactMe /></div>}
          />

        </div>

        <HorizontalWidget
          title="My work"
          secondary="Down bellow are some of my projekts listed"
          third={
            <form action="https://github.com/UljasW">
              <input className='Button' type="submit" value="My github" />
            </form>} />


        <div className='flex-container'>
          <FlexWidget />
          <div className='margin' />
          <FlexWidget />
        </div>

        <div className='margin' />

        <div className='flex-container'>
          <FlexWidget />
          <div className='margin' />
          <FlexWidget />
        </div>
      </main>

    </div>
  );
}

export default App;
