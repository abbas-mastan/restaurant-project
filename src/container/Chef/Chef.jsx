import React from 'react';

import './Chef.css';
import { SubHeading } from '../../components';
import { images } from '../../constants/';
const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title={"Chef's Word"}/>
      <h1 className="headtext__cormorant">What We Belive In </h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="" />
          <p className="p__opensans">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum optio tempora distinctio cupiditate sed saepe ipsam soluta quaerat accusamus voluptatum vitae, libero nisi magni doloremque tempore accusantium ea perspiciatis. Facere?
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="" />
      </div>
    </div> 
  </div>
);

export default Chef;
