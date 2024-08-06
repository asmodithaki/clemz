"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ReactTooltip from "react-tooltip";
import Slider from "react-slick";
import Social from "../Social";
import portfolioData from "../../data/portfolio";
import Image from "next/image";

const Portfolio = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const appElement = document.getElementById("__next");
      if (appElement) {
        Modal.setAppElement(appElement);
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
          autoplay: false,
          draggable: true,
          speed: 300,
          dots: true,
        },
      },
    ],
  };

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handlePortfolioData = (id) => {
    const find = portfolioData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModle = (id) => {
    handlePortfolioData(id);
  };

  return (
    <div className="portfolio_inner my_carousel gallery_zoom">
      <ul data-aos="fade-right" data-aos-duration="1200">
        <Slider {...settings}>
          {portfolioData.map((item) => (
            <li key={item.id}>
              <div className="list_inner">
                <div className="image">
                  <div onClick={() => handleModle(item?.id)} className="details">
                    <Image
                      width={357}
                      height={357}
                      src={item.portfolioImage}
                      data-tip
                      data-for={item.tooltipId}
                      alt="portfolio"
                    />

                    <ReactTooltip
                      id={item.tooltipId}
                      place="bottom"
                      type="light"
                      effect="float"
                      className="tooltip-wrapper"
                    >
                      <div>
                        <h5>{item.title}</h5>
                        <span>{item.meta}</span>
                      </div>
                    </ReactTooltip>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </Slider>
      </ul>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={() => setIsOpen(false)}>
            <Image
              width={45}
              height={45}
              src="/img/svg/cancel.svg"
              alt="close icon"
            />
          </button>

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${singleData?.portfolioImage})`,
                  }}
                ></div>
              </div>

              <div className="portfoiol_content-inner">
                <div className="left-content">
                  <h2 className="title">{singleData?.title}</h2>
                  {singleData?.projectDescriptions}
                </div>
                <div className="right-content">
                  <ul className="list">
                    <li>
                      <h5>Client</h5>
                      <span>{singleData?.clientName}</span>
                    </li>
                    <li>
                      <h5>Category</h5>
                      <span>{singleData?.category}</span>
                    </li>
                    <li>
                      <h5>Date</h5>
                      <span>{singleData?.date}</span>
                    </li>
                    <li>
                      <h5>Link</h5>
                      <span>
                        <a
                          href={singleData?.portfolioLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {singleData?.portfolioLink}
                        </a>
                      </span>
                    </li>
                    <li className="news_share d-blok">
                      <h5>Share</h5>
                      <Social />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Portfolio;
