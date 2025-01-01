import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const Body = (props) => {
  return (
    <>
      <div className="body-container1">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="body-body">
          <div className="body-navigation1">
            <div className="body-container2">
              <img
                alt="Img56"
                src="/external/img56-11hd.svg"
                className="body-img"
              />
              <div className="body-navigation2">
                <div className="body-link1">
                  <span className="body-text10">Start</span>
                </div>
                <div className="body-link2">
                  <span className="body-text11">Mitt CV</span>
                </div>
              </div>
            </div>
          </div>
          <div className="body-hero">
            <h2 className="body-text12">Portfolio</h2>
            <h1 className="body-text13">Sitecraft</h1>
          </div>
          <video
            src="https://cdn.pixabay.com/video/2021/07/08/80711-573496150_large.mp4"
            loop
            muted
            preload="auto"
            autoPlay="true"
            controls={false}
            className="body-video"
          ></video>
          <div className="body-scroller">
            <p className="body-text14">
              <span>Hej! Jag heter Anders, en produktdesigner och</span>
              <br></br>
              <span>webbutvecklare plaserad i Stockholm. Jag skapar</span>
              <br></br>
              <span>gränssnitt för hobbyister, småföretag och skapare.</span>
            </p>
            <div className="body-section1">
              <p className="body-text20">
                <span>Web Developer (Mimo)</span>
                <br></br>
                <span>Certifiering i JS HTML CSS</span>
              </p>
              <p className="body-text24">
                <span>(Jan</span>
                <br></br>
                <span>2022)</span>
              </p>
            </div>
            <div className="body-section2">
              <div className="body-container3">
                <a
                  href="https://www.dyoid.se/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="body-link3"
                >
                  <h3 className="body-text28">bydyoid</h3>
                </a>
                <p className="body-text29">Webflow</p>
              </div>
              <div className="body-container4">
                <h3 className="body-text30">Sitecraft</h3>
                <p className="body-text31">Nextjs</p>
              </div>
            </div>
            <div className="body-container5">
              <p className="body-text32">
                <span>React.js</span>
                <br></br>
                <span className="body-text35">NextJs</span>
                <br className="body-text36"></br>
                <span>Github</span>
                <br></br>
                <span className="body-text39">Figma</span>
                <br className="body-text40"></br>
                <span>Shopify</span>
                <br></br>
                <span className="body-text43">Webflow</span>
                <br className="body-text44"></br>
                <span>TeleportHQ</span>
                <br></br>
              </p>
            </div>
            <div className="body-section3">
              <h2 className="body-text47">Kontakt</h2>
              <p className="body-text48">
                <span>Anders Altmann,</span>
                <br></br>
                <span>48 år, bor på</span>
                <br></br>
                <span>adressen</span>
                <br></br>
                <span>Enlundavägen 46</span>
                <br></br>
                <span>Stensborg, 179 75 i</span>
                <br></br>
                <span>Skå.</span>
                <br></br>
                <span>Telefonnummer</span>
                <br></br>
                <span>070-231 21 73</span>
              </p>
              <a
                href="mailto:aaltismann@gmail.com?subject="
                className="body-text64"
              >
                aaltismann@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .body-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .body-body {
            width: 100%;
            height: 3999px;
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            background-color: rgba(0, 0, 0, 1);
          }
          .body-navigation1 {
            gap: 10px;
            left: 0px;
            right: 0px;
            width: auto;
            height: 60px;
            margin: auto;
            display: flex;
            padding: 0 130px;
            position: fixed;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(0, 0, 0, 1);
          }
          .body-container2 {
            gap: 20px;
            display: flex;
            padding: 0 386px;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .body-img {
            width: 40px;
            height: 40px;
          }
          .body-navigation2 {
            gap: var(--dl-space-space-twounits);
            width: 167px;
            height: 61px;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .body-link1 {
            width: auto;
            height: 60px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .body-text10 {
            top: 21px;
            color: rgba(255, 255, 255, 1);
            width: 35px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Bold;
            text-align: left;
            font-family: Montserrat;
            font-weight: 700;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .body-link2 {
            width: 51.40999984741211px;
            height: 60px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .body-text11 {
            color: rgba(255, 255, 255, 1);
            right: -5px;
            width: auto;
            bottom: 19px;
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Bold;
            text-align: left;
            font-family: Montserrat;
            font-weight: 700;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .body-hero {
            top: 60px;
            left: 0px;
            width: 1920px;
            height: 1041px;
            display: flex;
            padding: 325px 298px;
            z-index: 3;
            overflow: hidden;
            position: fixed;
            align-self: center;
            align-items: center;
            padding-top: 136px;
            flex-direction: column;
            padding-bottom: 307px;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0);
          }
          .body-text12 {
            color: rgba(255, 255, 255, 1);
            width: 146px;
            height: auto;
            font-size: 34px;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .body-text13 {
            color: rgba(255, 255, 255, 1);
            width: 604px;
            height: auto;
            font-size: 130px;
            font-style: Black;
            text-align: center;
            font-family: Montserrat;
            font-weight: 900;
            line-height: 130px;
            font-stretch: normal;
            text-decoration: none;
          }
          .body-video {
            top: 60px;
            width: auto;
            height: 1082px;
            position: fixed;
          }
          .body-scroller {
            gap: 433px;
            width: 100%;
            height: 2902px;
            display: flex;
            z-index: 4;
            position: relative;
            align-self: stretch;
            margin-top: 1100px;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: 300px 0;
            margin-bottom: 0px;
            padding-right: 300px 0;
            flex-direction: column;
            background-color: rgba(0, 0, 0, 1);
          }
          .body-text14 {
            color: rgba(255, 255, 255, 1);
            width: 1686px;
            height: 377px;
            display: block;
            font-size: 64px;
            align-self: flex-start;
            font-style: Black;
            text-align: left;
            font-family: Montserrat;
            font-weight: 900;
            line-height: 60px;
            font-stretch: normal;
            text-transform: uppercase;
            text-decoration: none;
          }
          .body-section1 {
            gap: 7px;
            top: 496px;
            left: 613px;
            width: 787px;
            display: flex;
            position: absolute;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .body-text20 {
            color: rgba(255, 255, 255, 1);
            width: 620px;
            height: auto;
            font-size: 64px;
            font-style: Black;
            text-align: left;
            font-family: Montserrat;
            font-weight: 900;
            line-height: 64px;
            font-stretch: normal;
            text-decoration: none;
          }
          .body-text24 {
            fill: transparent;
            color: #ffffff;
            width: auto;
            height: auto;
            display: flex;
            font-size: 36px;
            font-style: normal;
            text-align: center;
            align-items: center;
            font-family: Montserrat;
            font-weight: 900;
            line-height: 36px;
            font-stretch: normal;
            padding-left: 0px;
            padding-right: 0px;
            text-transform: lowercase;
            justify-content: center;
            text-decoration: none;
          }
          .body-section2 {
            top: 975px;
            left: 688px;
            width: 585px;
            height: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .body-container3 {
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .body-link3 {
            display: contents;
          }
          .body-text28 {
            color: rgb(255, 255, 255);
            height: auto;
            font-size: 120px;
            font-style: Black;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 900;
            line-height: 46px;
            font-stretch: normal;
            text-decoration: none;
          }
          .body-text29 {
            color: #ffffff;
            height: auto;
            display: block;
            font-size: 24px;
            font-style: Black;
            text-align: center;
            font-family: Montserrat;
            font-weight: 900;
            line-height: 46px;
            font-stretch: normal;
            text-transform: lowercase;
            text-decoration: none;
          }
          .body-container4 {
            display: flex;
            position: relative;
            align-self: center;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-shrink: 0;
            flex-direction: row;
            justify-content: center;
          }
          .body-text30 {
            color: #ffffff;
            width: auto;
            height: auto;
            font-size: 72px;
            font-style: Black;
            text-align: center;
            font-family: Montserrat;
            font-weight: 900;
            line-height: 64px;
            font-stretch: normal;
            text-transform: lowercase;
            text-decoration: none;
          }
          .body-text31 {
            color: #ffffff;
            width: auto;
            height: auto;
            font-size: 24px;
            font-style: Black;
            text-align: center;
            font-family: Montserrat;
            font-weight: 900;
            line-height: 36px;
            font-stretch: normal;
            text-transform: lowercase;
            text-decoration: none;
          }
          .body-container5 {
            top: 1338px;
            left: 484px;
            width: 991px;
            height: 523px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .body-text32 {
            color: rgb(255, 255, 255);
            width: 541px;
            height: 340px;
            font-size: 46px;
            font-style: normal;
            text-align: center;
            font-family: Montserrat;
            font-weight: 900;
            line-height: 48px;
            font-stretch: normal;
            text-decoration: none;
          }
          .body-text35 {
            letter-spacing: 25px;
          }
          .body-text36 {
            letter-spacing: 25px;
          }
          .body-text39 {
            letter-spacing: 25px;
          }
          .body-text43 {
            letter-spacing: 25px;
          }
          .body-text44 {
            letter-spacing: 25px;
          }
          .body-section3 {
            gap: 10px;
            left: 542px;
            width: 813px;
            bottom: 317px;
            height: 675px;
            display: flex;
            position: absolute;
            align-self: center;
            align-items: center;
            padding-top: 200px;
            padding-left: 200px;
            padding-right: 200px;
            flex-direction: column;
            padding-bottom: 200px;
            justify-content: center;
          }
          .body-text47 {
            color: rgba(255, 255, 255, 1);
            width: 274px;
            height: auto;
            font-size: 46px;
            font-style: Black;
            text-align: right;
            font-family: Montserrat;
            font-weight: 900;
            line-height: 36px;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .body-text48 {
            color: rgba(255, 255, 255, 1);
            width: auto;
            height: auto;
            font-size: 36px;
            align-self: center;
            font-style: normal;
            text-align: right;
            font-family: Montserrat;
            font-weight: 900;
            line-height: 36px;
            font-stretch: normal;
            text-decoration: none;
          }
          .body-text64 {
            color: #ffffff;
            width: 448px;
            height: auto;
            font-size: 36px;
            font-style: Bold;
            margin-top: var(--dl-space-space-halfunit);
            text-align: left;
            font-family: Montserrat;
            font-weight: 700;
            line-height: 18px;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
          }
          @media (max-width: 1600px) {
            .body-body {
              height: 3300px;
            }
            .body-hero {
              width: 100%;
              height: 899px;
              align-self: center;
              margin-bottom: 0px;
              background-color: rgba(0, 0, 0, 0);
            }
            .body-video {
              width: 100%;
              height: auto;
            }
            .body-scroller {
              width: 1600px;
              height: 2379px;
              margin-left: 0px;
              padding-top: 0px;
              margin-right: 0px;
              padding-bottom: 0px;
            }
            .body-text14 {
              width: 1434px;
              height: 375px;
              margin-left: var(--dl-space-space-fiveunits);
              margin-right: var(--dl-space-space-fiveunits);
              padding-left: 193px;
              margin-bottom: 0px;
            }
            .body-section1 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .body-section2 {
              left: 0px;
              right: 0px;
              width: 683px;
              height: 150px;
              margin: auto;
              align-items: center;
              justify-content: center;
            }
            .body-text30 {
              color: #ffffff;
            }
            .body-container5 {
              top: 1119px;
              left: 324px;
              margin: auto;
            }
            .body-section3 {
              left: 393px;
              bottom: var(--dl-space-space-halfunit);
              margin: auto;
            }
          }
          @media (max-width: 1200px) {
            .body-navigation1 {
              width: 1200px;
            }
            .body-container2 {
              width: 1189px;
            }
            .body-hero {
              width: 1200px;
              height: 669px;
              padding-bottom: 258px;
              background-color: rgba(0, 0, 0, 0);
            }
            .body-video {
              width: 100%;
              height: 672px;
            }
            .body-scroller {
              width: 1195px;
              height: 2535px;
              margin-top: 740px;
              padding-top: 0px;
              margin-bottom: 0px;
              padding-bottom: 0px;
            }
            .body-text14 {
              width: 961px;
              height: 222px;
              font-size: 46px;
              align-self: center;
              line-height: 34px;
              margin-left: 0px;
              margin-right: 0px;
              padding-left: 0px;
            }
            .body-section1 {
              top: 401px;
              left: 0px;
              right: 0px;
              width: 655px;
              height: 298px;
              margin: auto;
            }
            .body-section2 {
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .body-container3 {
              width: 364px;
              height: 110px;
              justify-content: center;
            }
            .body-text28 {
              display: flex;
              align-items: center;
              text-transform: lowercase;
              justify-content: center;
            }
            .body-text29 {
              top: 12px;
              color: #ffffff;
              right: 84px;
              margin: auto;
              font-size: 36px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 900;
              line-height: 36px;
              text-transform: lowercase;
              text-decoration: none;
            }
            .body-container4 {
              width: 397px;
              height: 71px;
            }
            .body-text30 {
              text-transform: lowercase;
            }
            .body-text31 {
              top: 10px;
              left: 29px;
              color: #ffffff;
              margin: auto;
              font-size: 36px;
              font-family: Montserrat;
              font-weight: 900;
              line-height: 36px;
              text-transform: lowercase;
              text-decoration: none;
            }
            .body-container5 {
              top: 1258px;
              left: 85px;
              position: absolute;
            }
            .body-text32 {
              color: rgb(255, 255, 255);
            }
            .body-text35 {
              letter-spacing: 25px;
            }
            .body-text36 {
              letter-spacing: 25px;
            }
            .body-text39 {
              letter-spacing: 20px;
            }
            .body-text40 {
              letter-spacing: 20px;
            }
            .body-text43 {
              letter-spacing: 25px;
            }
            .body-text44 {
              letter-spacing: 25px;
            }
            .body-section3 {
              left: 166px;
              bottom: 36px;
              height: auto;
              margin: auto;
            }
            .body-text47 {
              align-self: center;
            }
            .body-text64 {
              color: #ffffff;
            }
          }
          @media (max-width: 991px) {
            .body-body {
              height: 3504px;
            }
            .body-navigation1 {
              width: auto;
            }
            .body-container2 {
              width: auto;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .body-hero {
              width: 991px;
              height: 566px;
              padding-top: 117px;
            }
            .body-video {
              width: 991px;
              height: 548px;
            }
            .body-scroller {
              width: 991px;
              height: 2799px;
              margin-top: 550px;
            }
            .body-text14 {
              color: rgb(255, 255, 255);
              width: 951px;
              height: 255px;
              font-size: 40px;
              align-self: center;
              font-weight: 900;
              line-height: 40px;
              margin-left: 0px;
              padding-left: var(--dl-space-space-halfunit);
            }
            .body-section1 {
              top: 463px;
              left: 0px;
              right: 0px;
              width: auto;
              height: 305px;
              margin: auto;
              position: absolute;
              align-self: center;
            }
            .body-text20 {
              align-self: center;
            }
            .body-text24 {
              align-self: center;
            }
            .body-section2 {
              top: 1030px;
              right: -20px;
              width: 100%;
              margin: auto;
              position: absolute;
            }
            .body-container3 {
              width: 725px;
              height: 87px;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .body-container4 {
              width: 516px;
              height: 85px;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .body-container5 {
              top: 1276px;
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .body-text32 {
              width: auto;
              height: auto;
              align-items: center;
              line-height: 36px;
              flex-direction: column;
              justify-content: center;
            }
            .body-section3 {
              left: 143px;
              width: 705px;
              bottom: 270px;
              height: 613px;
              margin: auto;
              padding-left: 184px;
              padding-right: 252px;
            }
            .body-text48 {
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .body-hero {
              width: 767px;
              height: 423px;
              position: fixed;
              padding-top: 250px;
              padding-bottom: 213px;
            }
            .body-video {
              width: 767px;
              height: 430px;
              margin-left: 0px;
            }
            .body-scroller {
              width: 767px;
              height: 2745px;
            }
            .body-text14 {
              top: -43px;
              left: 19px;
              width: 645px;
              height: 125px;
              margin: auto;
              position: absolute;
              font-size: 24px;
              line-height: 24px;
              padding-left: 0px;
            }
            .body-section1 {
              top: 278px;
              left: 0px;
              right: 0px;
              width: 657px;
              height: 354px;
              margin: auto;
            }
            .body-section2 {
              top: 722px;
              left: 0px;
              right: 0px;
              width: 541px;
              height: 133px;
              margin: auto;
            }
            .body-container3 {
              width: 498px;
            }
            .body-text28 {
              font-size: 84px;
            }
            .body-container4 {
              height: auto;
              margin-top: 0px;
            }
            .body-container5 {
              top: 944px;
              left: 6px;
              width: 767px;
              margin: 0px;
            }
            .body-text32 {
              line-height: 46px;
            }
            .body-section3 {
              left: 3px;
              width: 767px;
              bottom: 353px;
              height: 906px;
              margin: 0px;
            }
          }
          @media (max-width: 479px) {
            .body-hero {
              left: 0px;
              width: 479px;
              height: 281px;
              padding: 0px;
            }
            .body-text13 {
              font-size: 66px;
              line-height: 66px;
            }
            .body-video {
              width: 479px;
              height: 282px;
            }
            .body-scroller {
              width: 479px;
              height: 2840px;
              margin-top: 373px;
            }
            .body-text14 {
              top: 26px;
              right: -17px;
              width: 479px;
              height: auto;
              margin: auto;
              position: absolute;
              font-size: 24px;
              line-height: 24px;
              margin-right: 0px;
            }
            .body-section1 {
              top: 287px;
              left: 0px;
              right: 0px;
              width: auto;
              height: auto;
              margin: auto;
              position: absolute;
              align-self: center;
              padding-left: 0px;
            }
            .body-text20 {
              width: auto;
              font-size: 24px;
              line-height: 24px;
            }
            .body-text24 {
              font-size: 24px;
            }
            .body-section2 {
              top: 541px;
              left: 0px;
              right: 0px;
              width: 478px;
              margin: auto;
              position: absolute;
            }
            .body-container3 {
              width: auto;
              height: auto;
            }
            .body-text28 {
              font-size: 46px;
              padding-right: var(--dl-space-space-unit);
            }
            .body-text29 {
              font-size: 24px;
            }
            .body-container4 {
              width: auto;
              height: auto;
            }
            .body-text30 {
              font-size: 34px;
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .body-text31 {
              font-size: 24px;
            }
            .body-container5 {
              top: 783px;
              right: -8px;
              width: 463px;
            }
            .body-section3 {
              top: 1361px;
              right: 2px;
              width: 476px;
              height: 902px;
            }
            .body-text64 {
              font-size: 24px;
              align-self: center;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Body

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
