import React from "react";
import twitter_icon from "../assets/img/twitter.png";
import Gif from "../assets/img/1.gif";
import discord_icon from "../assets/img/discord.png";
import twitterlogo from "../assets/img/twitterlogo.svg";
import "../assets/css/style.css";

export default function Main() {
  return (
    <>
      <div className="swampboat">
        <div className="swampboat-img"></div>
        <div className="overlay">
          <div className="site-heading">
            <h1>Swampverse</h1>
          </div>
          <div className="header-container container-pd mb text-center">
          <br />
          <p>
            Where 9600 generated frogs croak on the Ethereum blockchain.
            Join a strong tight-knit community and enjoy benefits only
            to swampverse holders. Our goal is to help anyone journey their way
            into the NFT world successfully while having fun.
          </p>
        </div>
        </div>
      </div>
      <div className="root-container">
        {/* <div className="container border container-pd mb">
          <h2>WHAT IS SWAMPVERSE?</h2> <br />
          <br />
          <p>
            Where 9600 pixel generated frogs croak on the Ethereum blockchain.
            Join a strong tight-knit community and enjoy exclusive benefits only
            to swampverse holders. Our goal is to help anyone journey their way
            into the NFT world successfully while having fun.
          </p>
        </div> */}
<br />        
<div className="container border container-pd mb">
          <h1>What is Swampverse</h1> <br />
          <br />
          <div className="container">
            <p>Not so long ago, genesis frogs roamed the universe in hopes of finding a home. What seemed like eternity, they eventually find an abandoned swamp. In hope of saving the Swampian race, they decide to make this their new home. They call it Swampverse. Tired, the genesis under looks a problem, their new home is so vast & unexplored they need help but with time running low. Combining there DNA together with what !vibe they have left, they fuse and spawn 9600 unique frogs. Everyone will once again live, croak and prosper together. But the journey just begins. The genesis are out of !vibe; they have to ascend into Swamphalla to rest. Leaving the frogs with a lore to decipher. Everyone will gather in Swampville to explore and conquer what comes next....<br />
<br />Every frog likes to croak. They are also important to the Swampconomy. You'll be able to croak (stake) for a token in Swampmap v2.</p><br /><br />
<p>Use this token to:</p><br />
<li>Fuse frogs together for a mysterious swamp creature</li>
<li>Breed & create tadpoles</li>
<li>Claim limited merchandise that's not on the merch store</li>
<br /><p>The mysterious swamp creatures & tadpoles are currently being researched in the lab on what they do. The lore is taking time to decipher.</p>
<br /><br />
<p>A new section in discord called Swampville will appear after mint and only available to Swampverse holders. Some additional sections like micro & macro analysis charts, community building & alpha will also be available.</p>
<br /><br />
<p>Genesis are 96 animated frogs from the Swampverse collection. The first of the Swampian race. To be released sometime after the main collection. They may also be summoned from Swamphalla.</p><br />
<li>The first 32 will be airdropped to holders.</li>
<li>64 will be stealth dropped</li>
<br />
<p>Tip: (a mysterious creature and 2 tadpoles will give you a better chance to get the airdrop)</p>
          </div>
        </div>
        <div className="gif-container border">
          <div className="gif-wrapper">
            <img src={Gif} alt="1Gif" />
          </div>
        </div>
        <div className="social-container">
          <h2>Join the Swamp</h2>
          <div className="social-icon">
            <a href="https://twitter.com/SwampverseNFT">
              <img src={twitter_icon} alt="twitter" />
            </a>
            <a href="https://discord.gg/swampverse">
              <img src={discord_icon} alt="discord" />
            </a>
          </div>
        </div>

        <div className="container border container-pd mb faq">
          <h1>FAQ</h1> <br />
          <br />
          <p>LAUNCH DATE?</p>
          <span>TBA</span>
          <br />
          <br />
          <p>HOW MANY IN TOTAL?</p>
          <span>9600</span>
          <br />
          <br />
          <p>BLOCKCHAIN?</p>
          <span>Ethereum</span>
          <br />
          <br />
          <p>MINT PRICE?</p>
          <span>0.06 ETH</span>
          <br />
          <br />
          <p>WHITELIST?</p>
          <span>2100/2500 SPOTS FILLED</span>
          <br />
          <br />
          <p>
            A visual map will be available for Swampmap v1.
          </p>
        </div>

        <div className="container border container-pd mb">
          <h1>SWAMPMAP</h1> <br />
          <br />
          <p>LAUNCH</p>
          <div className="in-progress-list">
          <li>Complete minting of frogs</li>
<li>Opensea reveal & rarity.tools listing</li>
          <li>Swampville welcomes everyone. Private discord opens</li>
          </div>
          <br />
          <p>SWAMPMAP v1</p>
          <div className="in-progress-list">
            <li>
              25% - We host our fist twitter space. 10 random frogs will also be airdropped to holders.
            </li>
            <li>
              50% - Get to the swamptree. You can now begin to croak for a token. A website will be available to stake or unstake your frog.
            </li>
            <li>
              75% - 1st merchandise drop. Limited with only 50 of each item available. Community vote to ether sweep the floor or buy a bluechip for a giveaway to holders. 
            </li>
            <li>
              100% - City of stars, the lore shows symbols of this vast utopia that still needs more deciphering. Let's host a IRL party to kill the time. Miami? Bali? LA?
            </li>
          </div>
          <br />
        </div>
      </div>

      <div className="bg-container">
        <div className="builders">
          <div className="builder">
            <div className="builder-img first"></div>
            <div className="builder-info">
              <div className="info">
                <h3>0xWart</h3>
                <a href="https://twitter.com/0xWart"><img src={twitterlogo} alt="twitterlogo" /></a>
              </div>
              <br />
              <span>Creator / Front-end Developer</span>
            </div>
          </div>
          <div className="builder">
            <div className="builder-img second"></div>
            <div className="builder-info">
              <div className="info">
                <h3>OGRE</h3>
                <a href="https://twitter.com/SV_Ogre"><img src={twitterlogo} alt="twitterlogo" /></a>
              </div>
              <br />
              <span>Manager / Crypto Analyst</span>
            </div>
          </div>
          <div className="builder">
            <div className="builder-img third"></div>
            <div className="builder-info">
              <div className="info">
                <h3>NFTJunkiee</h3>
                <a href="https://twitter.com/NFT_Junkiee"><img src={twitterlogo} alt="twitterlogo" /></a>
              </div>
              <br />
              <span>Marketing / NFT Analyst</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
