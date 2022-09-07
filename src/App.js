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
          <FlexWidget 
          title="VulcanStocksKnnTradingSystem" 
          secondary={<p style={{padding: "20px"}}>VulcanStocksKnnTradingSystem is a full backtesting and demo trading system with the K-nearest neighbors Algorithm. While building the system, I learned a lot, including managing a larger project. Everything is built or implemented from scratch by myself.</p>} 
          third={
            <form action="https://github.com/VulcanStocks/VulcanStocksKnnTradingSystem">
              <input className='Button' type="submit" value="Github" />
            </form>}/>
          <div className='margin' />
          <FlexWidget title="AuthenticationApi"
          secondary={<p style={{padding: "20px"}}>Authentication Api is an API I built to develop my skills within ASP.NET but also handle authentication. While building the project I learned to use Json web tokens and general authentication.</p>}
          third={
            <form action="https://github.com/UljasW/authentication">
              <input className='Button' type="submit" value="Github" />
            </form>} />
        </div>

        <div className='margin' />

        <div className='flex-container'>
          <FlexWidget title="RealTimeStockPriceLibrary"
          secondary={<p style={{padding: "20px"}}>RealTimeStockPriceLibrary is a small library for web scraping yahoo finance. By entering any ticker symbol, price and volume will be returned. In this project I learned the basics of web scraping.</p>}
          third={
            <form action="https://github.com/VulcanStocks/RealTimeStockPriceLibrary">
              <input className='Button' type="submit" value="Github" />
            </form>} />
          <div className='margin' />
          <FlexWidget title="VulcanStocks-Site"
          secondary={<p style={{padding: "20px"}}>Official site for VulcanStocks</p>}
          third={
            <form action="https://github.com/VulcanStocks/VulcanStocks-Site">
              <input className='Button' type="submit" value="Github" />
            </form>} />
        </div>
      </main>

    </div>
  );
}

export default App;
