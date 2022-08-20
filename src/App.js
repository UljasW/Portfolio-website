import './App.css';
import HorizontalWidget from './HorizontalWidget';
import FlexWidget from './FlexWidget';

function App() {
  return (
    <div className="App " >
      <header className="App-header BackgroundGradient">
        <HorizontalWidget
          title="Hi there, i am Uljas Wennström."
          secondary="A 17 year old fullstack .NET and React developer."
          third="I create websites, crossplatform native apps and more." />

        <div className='flex-container'>
          <FlexWidget
            title="Hi there, i am Uljas Wennström."
            secondary="A 17 year old fullstack .NET and React developer."
            third="I create websites, crossplatform native apps and more." />

          <div className='margin' />

          <FlexWidget
            title="Hi there, i am Uljas Wennström."
            secondary="A 17 year old fullstack .NET and React developer."
            third="I create websites, crossplatform native apps and more." />

        </div>

        <HorizontalWidget
          title="Hi there, i am Uljas Wennström."
          secondary="A 17 year old fullstack .NET and React developer."
          third="I create websites, crossplatform native apps and more." />

        <div className='flex-container'>
          <FlexWidget
            title="Hi there, i am Uljas Wennström."
            secondary="A 17 year old fullstack .NET and React developer."
            third="I create websites, crossplatform native apps and more." />

          <div className='margin' />

          <FlexWidget
            title="Hi there, i am Uljas Wennström."
            secondary="A 17 year old fullstack .NET and React developer."
            third="I create websites, crossplatform native apps and more." />

        </div>
        
        <div className='margin' />

        <div className='flex-container'>
          <FlexWidget
            title="Hi there, i am Uljas Wennström."
            secondary="A 17 year old fullstack .NET and React developer."
            third="I create websites, crossplatform native apps and more." />

          <div className='margin' />

          <FlexWidget
            title="Hi there, i am Uljas Wennström."
            secondary="A 17 year old fullstack .NET and React developer."
            third="I create websites, crossplatform native apps and more." />

          
        </div>

      </header>
    </div>
  );
}

export default App;
