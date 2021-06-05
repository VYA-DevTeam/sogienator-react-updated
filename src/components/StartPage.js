import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { bounceInLeft, bounceInUp, fadeInUp } from "react-animations";
import styled, { keyframes } from "styled-components";
import { useSpring, animated } from "react-spring";
import Delay from "react-delay";
import "../App.css";
import "./Header.css";

const bounceInLeftAnimation = keyframes`${bounceInLeft}`;
const BounceInLeftDiv = styled.div`
  animation: 2s ${bounceInLeftAnimation};
`;
const bounceInUpAnimation = keyframes`${bounceInUp}`;
const BounceInUpDiv = styled.div`
  animation: 2s ${bounceInUpAnimation};
`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;
const FadeInUpDiv = styled.div`
  animation: 1s ${fadeInUpAnimation};
`;

function StartPage() {
  return (
    <div className="container-fluid">
      {/* <div className="intro">
        <div className="logo">Logo</div>
        // <div className="name">Sogiesc Test</div>
      </div> */}
      <div className="header-container d-flex flex-column text-center">
        <div className="logo align-self-start">
          <img
            src="/images/header-footer/logoVYA.png"
            className="img-fluid"
            alt="logo"
            // style={{ "max-width": "70px" }}
          />
        </div>
        <div
          className="name align-self-center flex-grow-1"
          style={{ "margin-top": "-40px" }}
        >
          Sogiesc Test{" "}
        </div>
      </div>
      <div className="form-container main d-flex flex-column bd-highlight mb-3 text-center">
        <BounceInLeftDiv>
          <div className="name--organization">Vietnam Youth Alliance</div>
        </BounceInLeftDiv>
        <Delay wait={0}>
          <FadeInUpDiv>
            {/* <div className = "d-flex flex-column"> */}
            <Button
              buttonSize="btn--large"
              buttonType="btn--home"
              className="btn-start"
              //   className="btn-animation"
            >
              <div className="pt-3 justify-content-center text-center">
                GET STARTED
              </div>
              {/* <animated.div
                style={{ transform: y.interpolate((v) => `translateY(${v}%`) }}
                className="glance"
              /> */}
            </Button>
            <img
              src="/images/M1.gif"
              className="img-fluid px-3 mx-auto d-block"
              alt="welcome mascos"
              style={{ width: "500px" }}
            />
            <div className="btn--control">
              <Button
                // className="home-btn"
                buttonSize="btn--medium"
                buttonStyle="btn--home"
                className="btn-ref pt-3"
                //   className="btn-animation"
              >
                <div className="justify-content-center text-center">
                  <a
                    href="https://vnyouthally.org/7-dinh-nghia-ve-tinh-duc/"
                    className="text-decoration-none text-white"
                    style={{ "background-color": "unset" }}
                  >
                    Tìm hiểu thêm
                  </a>
                </div>
              </Button>
              {/* </div> */}
            </div>
          </FadeInUpDiv>
        </Delay>
      </div>
    </div>
  );
}

export default StartPage;
