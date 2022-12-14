import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { gsap } from 'gsap';
// import smily_bg from '../../Images/Smile.png';

// import box_img_1 from '../../Images/how-1.png'
// import box_img_2 from '../../Images/how-2.png'
// import box_img_3 from '../../Images/how-3.png'

export const HowToSection = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  const HowToSectionRefContainer = useRef();
  const HowToSectionT1 = useRef();
  const StopAnimation = () => {
    HowToSectionT1.current.pause();
  };
  const ResumeAnimation = () => {
    HowToSectionT1.current.resume();
  };

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      var last_box_x_value = windowSize.innerWidth <= 424 ? '281%' : '200%';
      var move_to = windowSize.innerWidth > 1024 ? '110' : '150';
      var move_to_x = '+=' + move_to + 'vw';
      gsap.set('.moving_box', {
        y: (i) => (i == 2 ? last_box_x_value : '60px'),
        left: (i) => (i == 0 ? '0' : i == 1 ? '60%' : i == 2 ? '40%' : ''),
      });
      if (windowSize.innerWidth > 1440) {
        console.log('setted');
        // gsap.set(".moving_box", {
        //   y: (i) => i == 2 ? last_box_x_value : "60px",
        //   x: (i) => i == 0 ? "20vw" : i == 1 ? "70vw" : i == 2 ? "45vw" : ""
        // });
      }
      HowToSectionT1.current = gsap
        .timeline({
          defaults: {
            repeat: -1,
            ease: 'Linear.easeNone',
            align: 'start',
          },
        })
        .to('.box_1, .box_2, .box_3', {
          left: '+=100%',
          duration: 10,
          modifiers: {
            left: (x) => {
              // return x > 100 ? "%" : x + "%";
              return x;
            },
          },
        });
    }, HowToSectionRefContainer); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div className="HowToSection" ref={HowToSectionRefContainer}>
      <div className="HowToSection_bgWrapper">
        <div className="how_line how_line_1">
          how - how - how - how - how - how - how
        </div>
        <div className="how_line how_line_2">
          how - how
          <img
            src="https://i.ibb.co/99scg7p/Smile.png"
            alt=""
            className="smily_face"
          />{' '}
          - how - how
          <img
            src="https://i.ibb.co/99scg7p/Smile.png"
            alt=""
            className="smily_face"
          />{' '}
          - how - how
          <img
            src="https://i.ibb.co/99scg7p/Smile.png"
            alt=""
            className="smily_face"
          />{' '}
          - how
        </div>
        <div className="how_line how_line_3">
          how - how - how - how - how - how - how
        </div>
      </div>

      <div className="howToSection_box_wrapper">
        <div
          className="moving_box box_1"
          onMouseEnter={StopAnimation}
          onMouseLeave={ResumeAnimation}
        >
          <img src="https://i.ibb.co/k2PT1T6/how-1.png" alt="" />
        </div>
        <div
          className="moving_box box_2"
          onMouseEnter={StopAnimation}
          onMouseLeave={ResumeAnimation}
        >
          <img src="https://i.ibb.co/ZcbqbnC/how-2.png" alt="" />
        </div>
        <div
          className="moving_box box_3"
          onMouseEnter={StopAnimation}
          onMouseLeave={ResumeAnimation}
        >
          <img src="https://i.ibb.co/t2F6v1W/how-3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
