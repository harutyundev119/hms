import React from "react";
import './Main.css';
import logo from '../assets/img/logo.png';
import nav_1 from '../assets/svg/nav_1.svg';
import nav_2 from '../assets/svg/nav_2.svg';
import nav_3 from '../assets/svg/nav_3.svg';
import nav_4 from '../assets/svg/nav_4.svg';
import nav_5 from '../assets/svg/nav_5.svg';
import life_1 from '../assets/img/life_1.png';
import life_2 from '../assets/img/life_2.png';
import life_3 from '../assets/img/life_3.png';
import life_4 from '../assets/img/life_4.png';
import life_5 from '../assets/img/life_5.png';

function MainContent(){
    const items = [
        {url: nav_1, name: 'About us', color: '#16BBCA', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus a auctor ullamcorper pellentesque eget sit. Enim, dapibus ultricies justo a. Tellus a orci lacus, donec a porta at morbi. Cursus nam tellus pellentesque eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus a auctor ullamcorper pellentesque eget sit. Enim, dapibus ultricies justo a. Tellus a orci lacus, donec a porta at morbi. Cursus nam tellus pellentesque eget."},
        {url: nav_2, name: 'Mission', color: '#1D5872',  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus a auctor ullamcorper pellentesque eget sit. Enim, dapibus ultricies justo a. Tellus a orci lacus, donec a porta at morbi. Cursus nam tellus pellentesque eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus a auctor ullamcorper pellentesque eget sit. Enim, dapibus ultricies justo a. Tellus a orci lacus, donec a porta at morbi. Cursus nam tellus pellentesque eget."},
        {url: nav_3, name: 'Values', color: '#F68B27' ,  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus a auctor ullamcorper pellentesque eget sit. Enim, dapibus ultricies justo a. Tellus a orci lacus, donec a porta at morbi. Cursus nam tellus pellentesque eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus a auctor ullamcorper pellentesque eget sit. Enim, dapibus ultricies justo a. Tellus a orci lacus, donec a porta at morbi. Cursus nam tellus pellentesque eget."},
        {url: nav_4, name: 'Products', color: '#EF4858', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus a auctor ullamcorper pellentesque eget sit. Enim, dapibus ultricies justo a. Tellus a orci lacus, donec a porta at morbi. Cursus nam tellus pellentesque eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus a auctor ullamcorper pellentesque eget sit. Enim, dapibus ultricies justo a. Tellus a orci lacus, donec a porta at morbi. Cursus nam tellus pellentesque eget."},
        {url: nav_5, name: 'Contacts', color: '#F1AD04', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus a auctor ullamcorper pellentesque eget sit. Enim, dapibus ultricies justo a. Tellus a orci lacus, donec a porta at morbi. Cursus nam tellus pellentesque eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus a auctor ullamcorper pellentesque eget sit. Enim, dapibus ultricies justo a. Tellus a orci lacus, donec a porta at morbi. Cursus nam tellus pellentesque eget."}
    ];
    const itemList = items.map( item => {
        return (
            <div className='nav_item'>
                <img src={item.url} alt={item.name}/>
                <p style={{color: item.color}}>{item.name}</p>
            </div>
        );
    })
    return (
        <div className='main'>
            <header>
                <div>
                    <img src={logo} alt='logo' />
                </div>
                <nav>
                    {itemList}
                </nav>
            </header>
            <div className='romb_wrapper'>
                <img className='first_img' src={life_1} />
                <div className='small_rectangle' style={{width: '88px', height: '90px', left: '165px', top: '21px'}}  />
                <div className='small_rectangle' style={{width: '88px', height: '90px', left: '210px', top: '32px' }}  />
                <img className='second_img' src={life_2} />
                <div className='big_rectangle' style={{width: '155px', height: '156px', top: '134px', right: '415px'}}  />
                <div className='small_rectangle' style={{width: '56px', height: '58px', top: '188px', right: '400px'}}  />
                <div className='big_rectangle' style={{width: '120px', height: '122px', bottom: '45px', left: '245px'}}  />
                <div className='big_rectangle' style={{width: '120px', height: '122px', bottom: '35px', left: '260px' }}  />
                <div className='small_rectangle' style={{width: '56px', height: '58px', bottom: '-20px', left: '285px'}}  />
                <div className='small_rectangle' style={{width: '88px', height: '90px', right: '240px' , top: '140px'}} />
                <a target='blank' href='https://www.facebook.com/'>
                    <img className='fifth_img' src={life_5} />
                </a>
                <div className='big_rectangle' style={{width: '104px', height: '105px', bottom: '100px', left: '380px'}}  />
                <img className='third_img' src={life_3} />
                <div className='small_rectangle' style={{width: '66px', height: '67px', top: '35px', left: '380px' }} />
                <img className='fourth_img' src={life_4} />
                <div className='small_rectangle' style={{width: '66px', height: '67px', top: '18px', right: '20px'}} />
                <div className='small_rectangle' style={{width: '56px', height: '58px', top: '100px', right: '75px'}} />
                <div className='big_rectangle' style={{width: '120px', height: '122px', top: '45px', right: '60px'}}  />
                <div className='small_rectangle' style={{width: '66px', height: '67px', bottom: '45px',  left: '174px'}} />
            </div>
            <div className='categories'>
                <div className='first_col'>
                    <div className='categ'>
                        <div className='row'>
                            <img src={items[0].url} alt={items[0].name}/>
                            <p style={{color: items[0].color}}>{items[0].name}</p>
                        </div>
                        <div className='categ_text'>
                            {items[0].text}
                        </div>
                    </div>
                    <div className='categ'>
                        <div className='row'>
                            <img src={items[2].url} alt={items[2].name}/>
                            <p style={{color: items[2].color}}>{items[2].name}</p>
                        </div>
                        <div className='categ_text'>
                            {items[2].text}
                        </div>
                    </div>
                </div>
                <div className='second_col'>
                    <div className='categ'>
                        <div className='row1'>
                            <p style={{color: items[1].color}}>{items[1].name}</p>
                            <img src={items[1].url} alt={items[1].name}/>
                        </div>
                        <div className='categ_text'>
                            {items[1].text}
                        </div>
                    </div>
                    <div className='categ'>
                        <div className='row1'>
                            <p style={{color: items[3].color}}>{items[3].name}</p>
                            <img src={items[3].url} alt={items[3].name}/>
                        </div>
                        <div className='categ_text'>
                            {items[3].text}
                        </div>
                    </div>
                </div>
            </div>
            <div  className='contact_wrap'>
                <div className='contact_row'>
                    <img src={items[4].url} alt={items[4].name}/>
                    <p>{items[4].name}</p>
                </div>
                <div className='description'>
                    <div>
                        <span>Lorem ipsum dolor sit</span>
                        <span>Lorem ipsum dolor sit</span>
                        <span>Lorem ipsum dolor sit</span>
                    </div>
                    <div>
                        <span>Lorem ipsum dolor sit</span>
                        <span>Lorem ipsum dolor sit</span>
                        <span>Lorem ipsum dolor sit</span>
                    </div>
                    <div>
                        <span>Lorem ipsum dolor sit</span>
                        <span>Lorem ipsum dolor sit</span>
                        <span>Lorem ipsum dolor sit</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;