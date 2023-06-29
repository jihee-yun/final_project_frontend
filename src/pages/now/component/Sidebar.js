import React, { useEffect } from "react";
import { styled } from "styled-components";
import { Swiper } from "swiper/react";

import "swiper/css";

const SwiperSidebar = styled.div`

`;





const Sidebar = () => {
    useEffect(() => {
        const menuButton = document.querySelector('.menu-button');

        const openMenu = () => {
            Swiper.slidePrev();
        };

        const swiper = new Swiper('.swiper', {
            slidesPerView: 'auto',
            initialSlide: 1,
            resistanceRatio: 0,
            slideToClickedSlide: true,
            on: {
                slideChangeTransitionStart: () => {
                    const slider = swiper;
                    if(slider.activeIndex === 0) {
                        menuButton.classList.add('cross');
                        menuButton.removeEventListener('click', openMenu, true);
                    } else {
                        menuButton.classList.remove('cross');
                    }
                },
                slideChangeTransitionEnd: () => {
                    const slider = swiper;
                    if(slider.activeIndex === 1) {
                        menuButton.addEventListener('click', openMenu, true);
                    }
                },
            },
        });
    }, []);

 

    return (
        <SwiperSidebar>
        <div className="swiper-wrapper">
          <div className="swiper-slide menu">Menu slide</div>
          <div className="swiper-slide content">
            <div className="menu-button">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            Content slide
          </div>
        </div>
      </SwiperSidebar>


    );
};

export default Sidebar;