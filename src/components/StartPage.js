import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { bounceInLeft, bounceInUp, fadeInUp } from "react-animations";
import styled, { keyframes } from "styled-components";
import { useSpring, animated } from "react-spring";
import Delay from "react-delay";
import "../App.css";
import "./Header.css";
import { Col, Row } from "react-bootstrap";

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
    <div style={{ marginTop: "2em" }} className="container-fluid">
      {/* <div className="intro">
        <div className="logo">Logo</div>
        // <div className="name">Sogiesc Test</div>
      </div> */}
      <div className="header-container d-flex flex-row text-center">
        <img
          src="/images/header-footer/logoVYA.png"
          className="img-fluid"
          alt="logo"
          style={{ maxWidth: 150, position: "fixed" }}
        />
        <span className="name-start align-self-center flex-grow-1">
          Sogiesc Test{" "}
        </span>
      </div>
      <div className="form-container main d-flex flex-column bd-highlight mt-2 mb-3 text-center">
        <BounceInLeftDiv>
          <div className="name--organization">Vietnam Youth Alliance</div>
        </BounceInLeftDiv>
        <Delay wait={0}>
          <FadeInUpDiv>
            {/* <div className = "d-flex flex-column"> */}
            <Row className="justify-content-center" style={{ margin: "0 5em" }}>
              {/* logo */}
              <Col>
                <img
                  src="/images/M1.gif"
                  className="img-fluid px-2 mx-auto d-block"
                  alt="welcome mascos"
                  style={{ width: "400px" }}
                />
              </Col>
              <Col className="d-flex flex-column align-items-center justify-content-center">
                <Link to={{ pathname: "/quiz" }}>
                  <Button
                    buttonSize="btn--large"
                    buttonType="btn--home"
                    className="btn-start"
                    //   className="btn-animation"
                  >
                    <div className="pt-3 justify-content-center text-center">
                      BẮT ĐẦU
                    </div>
                    {/* <animated.div
                style={{ transform: y.interpolate((v) => `translateY(${v}%`) }}
                className="glance"
              /> */}
                  </Button>
                </Link>
                <div>
                  <Delay wait={2000}>
                    <a
                      href="https://vnyouthally.org/7-dinh-nghia-ve-tinh-duc/"
                      target="_blank"
                      className="text-decoration-none"
                      style={{ backgroundRowor: "unset", color: "#54424b" }}
                    >
                      Tìm hiểu thêm
                    </a>
                  </Delay>
                </div>
              </Col>
            </Row>
          </FadeInUpDiv>
        </Delay>
      </div>
    </div>
  );
}

export default StartPage;
