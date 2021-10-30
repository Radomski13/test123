import React from 'react'
import twitter_icon from '../assets/img/twitter.png'
import discord_icon from '../assets/img/discord.png'
import bank from '../assets/img/chest.gif'
import vote from '../assets/img/vote.png'
import present from '../assets/img/present.png'
import game from '../assets/img/game.png'
import swampboat from '../assets/img/swampboat.gif'
import oxwart from '../assets/img/oxwart.png'
import ogre from '../assets/img/ogre.png'
import junkiee from '../assets/img/junkiee.png'
import twitterlogo from '../assets/img/twitterlogo.svg'
import '../assets/css/style.css'


export default function Main() {
    return (
        <>
            <div className="root-container">
                <div className="content-section">
                    <h1>Swampverse</h1>
                    <div className="whatis">
                        <h2>WHAT IS SWAMPVERSE?</h2><br /><br />
                        <p>Where 9600 pixel generated frogs croak on the Ethereum blockchain. Join a strong tight-knit community and enjoy exclusive benefits only to swampverse holders. Our goal is to help anyone journey their way into the NFT world successfully while having fun.</p> <br />
                    </div>
        <div className="wrapper"><div className="img-wrapper"></div></div><br />
        <div className="faqs">
                        <h2>Community Chest</h2><br /><br />
                        <div className="bank-img">
                            <div className="faq-content">
                                <span>The community chest is a designated wallet where assets purchased such as blue chip NFTs will be stored. 50 % of secondary sales will also be stored in the chest. Any asset stored here will be fractionalized to the community to provide value. Access to the chest will be available through the DAO.</span>
                            </div>
        <img src={bank} alt="bank_img" />
        </div>
        </div>
        <div className="faqs">
                        <h2>The Swamp DAO</h2><br /><br />
                        <div className="vote-img">
                            <div className="faq-content">
                                <span>Every hojjlder can join the DAO & make a decision on how the commuity will grow or function. You will be able to vote on which NFTs to fractionalize, what community made projects should be brought to life & much more.<br /><br />1 frog = 1 vote</span>
                            </div>
        <img src={vote} alt="vote_img" />
        </div>
        </div>
                <div className="faqs">
                        <h2>Staking / Utility </h2><br /><br />
                        <div className="present-img">
                            <div className="faq-content">
                                <span>Frogs are important to the swampconomy. You'll be able to stake a token that will be announced in Swampmap v2. <br /><br />Use this token to sacrifice 2 frogs to create a mysterious creature. Not tamed enough to reveal yet. This will decrease the amount of frogs available & make the floor deflationary naturally. You can also breed 2 frogs to create tadpoles, which have not been studied yet. <br />Other great options like renaming your frog, access to future drops & exclusive merch will also be available.<br / ></span>
                            </div>
                            <img src={present} alt="present_img" />
                        </div>
                    </div>
<div className="faqs">
                        <h2>Gamification</h2><br /><br />
                        <div className="game-img">
                            <div className="faq-content">
                                <span>Swampverse holders will eventually have gamification access to their PFP. You will be able to access a variety of games on the blockchain and use your frog to play. The DAO will also vote on if community made games should be built.</span>
                            </div>
        <img src={game} alt="game_img" />
        </div>
        </div>
<div className="faqs">
                        <h2>City of stars</h2><br /><br />
                        <div className="present-img">
                            <div className="faq-content">
                                <span>An vast utopia in swampverse where the community & developers of the DAO will go to purchase NFTs for the chest. Each NFT will be fractionalized & every holder will own a part. Some blues chips & other projects such as BAYC, KaijuKingz, Cool Cats or even a Crypto Punk shall be considered to be purchased.<br / ></span>
                            </div>
                            
                        </div>
                    </div>
<div className="faqs">
                        <h2>Swamp boat</h2><br /><br />
                        <div className="present-img">
                            <div className="faq-content">
                                <span>The swamp boat is what you use to get around in swampverse. An exclusive website for swampverse holders that will give you access to all the areas in the swamp. This is where you will be able to stake your frog, see what is inside the community chest or have tools to make your PFP look even better. Once in a while, Captian Pops who runs the boat, will randomly leave free airdrops to be claimed on the homepage of the website.</span>
                            </div>
                            
                        </div>
                    </div>
<div className="joining">
                        <h2>join the swamp</h2>
                        <div className="social-icons">
                            <a href="https://twitter.com/SwampverseNFT"><img src={twitter_icon} alt="twitter" /></a>
                            <a href="https://discord.gg/swampverse"><img src={discord_icon} alt="discord" /></a>
                        </div>
                    </div>
                    <div className="faqs">
                        <h2>FAQ</h2><br /><br />
                        <span>LAUNCH DATE?</span>
                        <p>TBA</p><br />
                        <span>HOW MANY IN TOTAL?</span>
                        <p>9600</p>
                        <div className="faq-img">
                            <div className="faq-content">
                                <span>BLOCKCHAIN?</span>
                                <p>Ethereum</p><br />
                                <span>MINT PRICE?</span>
                                <p>0.06 ETH</p>
                            </div>
                        </div>
                        <span>WHITELIST?</span>
                        <p>2000/2500 SPOTS FILLED</p><br />
                            <span>WHEN IS STAKING?</span>
                        <p>ANNOUNCED IN SWAMPMAP V2</p><br /><br />
                       <span>A whitepaper & visual map will be available for an in-depth explanation on swampmap V1.</span>

                    </div>
                    <div className="toadmap">
                        <h2>SWAMPMAP</h2><br /><br />
                        <p>LAUNCH</p> <br />
                        <div className="in-progress-list">
                            <li>Complete minting of swampverse frogs</li>
                            <li>Opensea reveal & rarity.tools listing</li>
                            <li>Board the swamp boat & head to the verse</li>
                            <li>Tons of giveaway's will happen & 10 random frogs will be airdropped to holders</li>
                        </div><br />
                        <p>SWAMPMAP v1</p> <br />
                        <div className="in-progress-list">
                            <li>25% - A charity donation will be made to a foundation chosen by the community.</li>
                            <li>50% - The community chest has been uncovered. A pile of ETH has been found. Let's call it the Swamp chest!</li>
                            <li>75% - Bluechips not potato chips. Devs will take the swamp boat to city of stars where the first NFT will be purchased & stored in the chest.</li>
                            <li>100% - Lore of the SwampDAO. Formation of the DAO begins. Every frog will have a vote in the community.</li>
                        </div>
                        <br />
                        <br /><br />
                        <p>SWAMPMAP v2</p> <br />
                            <div className="in-progress-list">
                            <li>Available after completion of V1</li>
                    </div>
</div>

            </div>
<div className="team-main">
<div className="content-container">                           
<div className="cards">

<div className="card-whole">
<div className="team-card-img">
<img src={oxwart} width="200" className="rounded-circle" alt="social_card" /></div>
<div className="card-container">
<h2 className="card-header">0xWart<a href="https://twitter.com/0xWart" target="_blank" rel="noreferrer">
<img className="sociallogo" src={twitterlogo} alt="social_logo" /></a></h2>
<p className="card-desc">Artist / Front-end Developer</p>
</div></div>

<div className="card-whole">
<div className="team-card-img">
<img src={ogre} width="200" className="rounded-circle" alt="social_card" /></div>
<div className="card-container">
<h2 className="card-header">OGRE<a href="https://twitter.com/SV_OGRE" target="_blank" rel="noreferrer">
<img className="sociallogo" src={twitterlogo} alt="social_logo" /></a></h2>
<p className="card-desc">Manager / Crypto Analyst</p>
</div></div>

<div className="card-whole">
<div className="team-card-img">
<img src={junkiee} width="200" className="rounded-circle" alt="social_card" /></div>
<div className="card-container">
<h2 className="card-header">NFTJunkiee<a href="https://twitter.com/NFT_Junkiee" target="_blank" rel="noreferrer">
<img className="sociallogo" src={twitterlogo} alt="social_logo" /></a></h2>
<p className="card-desc">Marketing / NFT Analyst</p>
</div></div>

</div>
</div>
</div>
</div>
<div className="swampboat">
                        <img src={swampboat} alt="game_img" />
                        </div>
        </>
    )
}
