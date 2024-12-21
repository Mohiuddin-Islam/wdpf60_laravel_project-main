import React from "react";
import Popup from "@/Sections/Popup";
import Header from "@/Sections/Header";
import Slider from "@/Sections/Slider";
import Contact_area from "@/Sections/Contact_area";
import Features_area from "@/Sections/Features_area";
import Footer_area from "@/Sections/Footer_area";
import About_area from "@/Sections/About_area";
import Service_area from "@/Sections/Service_area";

export default function Home() {
    return (
        <>
            {/* <!-- back to top start --> */}
            <div className="back-to-top-wrapper">
                <button
                    id="back_to_top"
                    type="button"
                    className="back-to-top-btn"
                >
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                        <path
                            d="M11 6L6 1L1 6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
            {/*<!-- back to top end -->*/}

            {/*<!-- search popup start -->*/}
            <Popup />

            {/*<!-- preloader area end -->*/}

            {/*<!-- header top area start -->*/}

            <Header />

            <main>
                {/*<!-- slider area start -->*/}
                <Slider />
                {/*<!-- slider area end -->*/}
                {/*<!-- contact area start -->*/}
                <Contact_area />
                {/*<!-- contact area end -->*/}

                {/*<!-- features area start -->*/}
                <Features_area />
                {/*<!-- features area end -->*/}
            </main>

            

            {/* About area end */}
            <About_area/>

                {/* About area end */}
                {/* service area start */}
            <Service_area/>
                {/* service area end */}
                {/* choose  area strat */}
                <section className="rr-choose pt-100 fix ">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-lg-12 wow rrfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".3s"
                            >
                                <div className="rr-choose  text-center mb-40">
                                    <span className="rr-section-subtitle p-relative">
                                        <img
                                            src="assets/img/testimonial/section-icon.png"
                                            alt="img"
                                        />{" "}
                                        What Choose Us{" "}
                                        <img
                                            src="assets/img/testimonial/section-icon.png"
                                            alt="img"
                                        />
                                    </span>
                                    <h4 className="rr-section-title">
                                        The Heart And Science Of <br /> Medicine
                                        Choose
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div
                                    className="rr-icon-box rr-style-1 wow rrfadeUp"
                                    data-wow-duration=".9s"
                                    data-wow-delay=".3s"
                                >
                                    <div className="rr-icon-box-wrapper">
                                        <div className="rr-icon">
                                            <i className="icofont-blood" />
                                        </div>
                                        <div className="rr-icon-box-content">
                                            <h6 className="rr-icon-box-title">
                                                <a href="service-details.html">
                                                    Improve Your Blood
                                                </a>
                                            </h6>
                                            <p className="rr-icon-box-description">
                                                Lorem Ipsum is simply dummy text
                                                of the printing
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rr-icon-box rr-style-2 wow rrfadeUp"
                                    data-wow-duration=".9s"
                                    data-wow-delay=".5s"
                                >
                                    <div className="rr-icon-box-wrapper">
                                        <div className="rr-icon">
                                            <i className="icofont-heart-beat-alt" />
                                        </div>
                                        <div className="rr-icon-box-content">
                                            <h6 className="rr-icon-box-title">
                                                <a href="service-details.html">
                                                    Normal Heart Beat
                                                </a>
                                            </h6>
                                            <p className="rr-icon-box-description">
                                                Lorem Ipsum is simply dummy text
                                                of the printing
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rr-icon-box rr-style-1 wow rrfadeUp"
                                    data-wow-duration=".9s"
                                    data-wow-delay=".7s"
                                >
                                    <div className="rr-icon-box-wrapper">
                                        <div className="rr-icon">
                                            <i className="icofont-surgeon" />
                                        </div>
                                        <div className="rr-icon-box-content">
                                            <h6 className="rr-icon-box-title">
                                                <a href="service-details.html">
                                                    Surgeon Of Allha
                                                </a>
                                            </h6>
                                            <p className="rr-icon-box-description">
                                                Lorem Ipsum is simply dummy text
                                                of the printing
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 p-relative">
                                <div
                                    className="tp-choose-oman-img wow rrfadeUp"
                                    data-wow-duration=".9s"
                                    data-wow-delay=".3s"
                                >
                                    <img
                                        src="assets/img/choose/oman-img.png"
                                        alt="service-img"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div
                                    className="rr-icon-box rr-style-1 wow rrfadeUp"
                                    data-wow-duration=".9s"
                                    data-wow-delay=".3s"
                                >
                                    <div className="rr-icon-box-wrapper">
                                        <div className="rr-icon">
                                            <i className="icofont-brain" />
                                        </div>
                                        <div className="rr-icon-box-content">
                                            <h6 className="rr-icon-box-title">
                                                <a href="service-details.html">
                                                    Brain Insanely Fast
                                                </a>
                                            </h6>
                                            <p className="rr-icon-box-description">
                                                Lorem Ipsum is simply dummy text
                                                of the printing
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rr-icon-box rr-style-3 wow rrfadeUp"
                                    data-wow-duration=".9s"
                                    data-wow-delay=".5s"
                                >
                                    <div className="rr-icon-box-wrapper">
                                        <div className="rr-icon">
                                            <i className="icofont-doctor-alt" />
                                        </div>
                                        <div className="rr-icon-box-content">
                                            <h6 className="rr-icon-box-title">
                                                <a href="service-details.html">
                                                    Doctor Support
                                                </a>
                                            </h6>
                                            <p className="rr-icon-box-description">
                                                Lorem Ipsum is simply dummy text
                                                of the printing
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rr-icon-box rr-style-1 wow rrfadeUp"
                                    data-wow-duration=".9s"
                                    data-wow-delay=".7s"
                                >
                                    <div className="rr-icon-box-wrapper">
                                        <div className="rr-icon">
                                            <i className="icofont-patient-bed" />
                                        </div>
                                        <div className="rr-icon-box-content">
                                            <h6 className="rr-icon-box-title">
                                                <a href="service-details.html">
                                                    Medical Bad Health
                                                </a>
                                            </h6>
                                            <p className="rr-icon-box-description">
                                                Lorem Ipsum is simply dummy text
                                                of the printing
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* choose  area mobail end */}
                {/* video area start */}
                <section
                    className="rr-video-arae rr-video-before p-relative pt-115 pb-115 fix"
                    data-background="assets/img/video/bg-2-1.jpg"
                >
                    <div className="rr-video-shap z-index-1 d-none d-xxl-block">
                        <img src="assets/img/video/plus-icon.png" alt="img" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-8  col-md-10 col-12 ">
                                <div className="rr-video-title-box z-index-2">
                                    <span
                                        className="rr-video-subtitle p-relative wow rrfadeUp"
                                        data-wow-duration=".9s"
                                        data-wow-delay=".3s"
                                    >
                                        <img
                                            src="assets/img/testimonial/section-icon.png"
                                            alt="img"
                                        />{" "}
                                        OUR VIDEO MORE
                                    </span>
                                    <h4
                                        className="rr-video-title wow rrfadeUp"
                                        data-wow-duration=".9s"
                                        data-wow-delay=".5s"
                                    >
                                        Immediately Video Medical <br />
                                        Every Health Care{" "}
                                    </h4>
                                    <p
                                        className="wow rrfadeUp"
                                        data-wow-duration=".9s"
                                        data-wow-delay=".7s"
                                    >
                                        Medical tailored it design, management
                                        &amp; support services <br />
                                        business agency elit, sed do eiusmod
                                        tempor.{" "}
                                    </p>
                                    <a
                                        className="rr-btn-1 popup-video wow rrfadeUp"
                                        data-wow-duration=".9s"
                                        data-wow-delay=".9s"
                                        href="https://www.youtube.com/watch?v=cEgbPHcUhT4"
                                    >
                                        <span>
                                            Video MOre{" "}
                                            <i className="fa-sharp fa-solid fa-plus" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-6  col-lg-4 col-md-2  col-12 p-relative">
                                <div className="rr-video-area">
                                    <div className="rr-video-play z-index-2">
                                        <a
                                            className="popup-video"
                                            href="https://www.youtube.com/watch?v=cEgbPHcUhT4"
                                        >
                                            <i className="fa-regular fa-play" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* video area end */}
                {/* team area start */}
                <section className="rr-team-4-area pt-100 pb-80 fix">
                    <div className="container">
                        <div className="row mb-40">
                            <div
                                className="col-xl-12 wow rrfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".3s"
                            >
                                <div className="rr-price-2-title-box text-center mb-45">
                                    <span className="rr-section-subtitle p-relative">
                                        <img
                                            src="assets/img/testimonial/section-icon.png"
                                            alt="img"
                                        />{" "}
                                        Our Team Member{" "}
                                        <img
                                            src="assets/img/testimonial/section-icon.png"
                                            alt="img"
                                        />
                                    </span>
                                    <h4 className="rr-section-title rr-section-title-space">
                                        Meet Better The Team Doctor{" "}
                                    </h4>
                                </div>
                            </div>
                            <div
                                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 wow rrfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".3s"
                            >
                                <div className="rr-team-4-item p-relative mb-60">
                                    <div className="rr-team-4-thumb p-relative ">
                                        <div className="rr-team-4-img">
                                            <img
                                                className="w-100"
                                                src="assets/img/team/team-1.jpg"
                                                alt="img"
                                            />
                                        </div>
                                        <div className="rr-team-4-icon">
                                            <a href="team.html">
                                                <img
                                                    src="assets/img/team/icon.png"
                                                    alt="img"
                                                />
                                            </a>
                                        </div>
                                        <div className="rr-team-4-social">
                                            <span className="icon" />
                                            <a
                                                className=" mt-20 rr-el-team-social"
                                                href="#"
                                            >
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a
                                                className="rr-el-team-social"
                                                href="#"
                                            >
                                                <i className="fab fa-twitter" />
                                            </a>
                                            <a
                                                className="rr-el-team-social"
                                                href="#"
                                            >
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="rr-team-4-content text-center p-relative">
                                        <h3 className="rr-team-4-title">
                                            <a href="team.html">
                                                Dr. Meran Bara
                                            </a>
                                        </h3>
                                        <span>Physiotherapy</span>
                                    </div>
                                    <div className="rr-team-4-arrow">
                                        {" "}
                                        <a href="team.html">
                                            <i className="fa-solid fa-arrow-up" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 wow rrfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".5s"
                            >
                                <div className="rr-team-4-item p-relative mb-60">
                                    <div className="rr-team-4-thumb p-relative ">
                                        <div className="rr-team-4-img">
                                            <img
                                                className="w-100"
                                                src="assets/img/team/team-2.jpg"
                                                alt="img"
                                            />
                                        </div>
                                        <div className="rr-team-4-icon">
                                            <a href="team.html">
                                                <img
                                                    src="assets/img/team/icon.png"
                                                    alt="img"
                                                />
                                            </a>
                                        </div>
                                        <div className="rr-team-4-social">
                                            <span className="icon" />
                                            <a
                                                className=" mt-20 rr-el-team-social"
                                                href="#"
                                            >
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a
                                                className="rr-el-team-social"
                                                href="#"
                                            >
                                                <i className="fab fa-twitter" />
                                            </a>
                                            <a
                                                className="rr-el-team-social"
                                                href="#"
                                            >
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="rr-team-4-content text-center p-relative">
                                        <h3 className="rr-team-4-title">
                                            <a href="team.html">
                                                Dr. Lanas Mara
                                            </a>
                                        </h3>
                                        <span>Plastic Surgery</span>
                                    </div>
                                    <div className="rr-team-4-arrow">
                                        {" "}
                                        <a href="team.html">
                                            <i className="fa-solid fa-arrow-up" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 wow rrfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".7s"
                            >
                                <div className="rr-team-4-item p-relative mb-60">
                                    <div className="rr-team-4-thumb p-relative ">
                                        <div className="rr-team-4-img">
                                            <img
                                                className="w-100"
                                                src="assets/img/team/team-3.jpg"
                                                alt="img"
                                            />
                                        </div>
                                        <div className="rr-team-4-icon">
                                            <a href="team.html">
                                                <img
                                                    src="assets/img/team/icon.png"
                                                    alt="img"
                                                />
                                            </a>
                                        </div>
                                        <div className="rr-team-4-social">
                                            <span className="icon" />
                                            <a
                                                className=" mt-20 rr-el-team-social"
                                                href="#"
                                            >
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a
                                                className="rr-el-team-social"
                                                href="#"
                                            >
                                                <i className="fab fa-twitter" />
                                            </a>
                                            <a
                                                className="rr-el-team-social"
                                                href="#"
                                            >
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="rr-team-4-content text-center p-relative">
                                        <h3 className="rr-team-4-title">
                                            <a href="team.html">
                                                Dr. Marat Nara
                                            </a>
                                        </h3>
                                        <span>Emergency Services</span>
                                    </div>
                                    <div className="rr-team-4-arrow">
                                        {" "}
                                        <a href="team.html">
                                            <i className="fa-solid fa-arrow-up" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 wow rrfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".9s"
                            >
                                <div className="rr-team-4-item p-relative mb-60">
                                    <div className="rr-team-4-thumb p-relative ">
                                        <div className="rr-team-4-img">
                                            <img
                                                className="w-100"
                                                src="assets/img/team/team-4.jpg"
                                                alt="img"
                                            />
                                        </div>
                                        <div className="rr-team-4-icon">
                                            <a href="team.html">
                                                <img
                                                    src="assets/img/team/icon.png"
                                                    alt="img"
                                                />
                                            </a>
                                        </div>
                                        <div className="rr-team-4-social">
                                            <span className="icon" />
                                            <a
                                                className=" mt-20 rr-el-team-social"
                                                href="#"
                                            >
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a
                                                className="rr-el-team-social"
                                                href="#"
                                            >
                                                <i className="fab fa-twitter" />
                                            </a>
                                            <a
                                                className="rr-el-team-social"
                                                href="#"
                                            >
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="rr-team-4-content text-center p-relative">
                                        <h3 className="rr-team-4-title">
                                            <a href="team.html">
                                                Dr. Porat Karat
                                            </a>
                                        </h3>
                                        <span>Plastic Surgery</span>
                                    </div>
                                    <div className="rr-team-4-arrow">
                                        {" "}
                                        <a href="team.html">
                                            <i className="fa-solid fa-arrow-up" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div
                                className="team-btn text-center wow rrfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".9s"
                            >
                                <a className="rr-btn-black" href="team.html">
                                    <span>
                                        View all Team{" "}
                                        <i className="fa-sharp fa-solid fa-plus" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* team area end */}
                {/* COUNTER  area start */}
                <section className="rr-counter-area  pt-100 pb-100 grey-bg p-relative fix">
                    <div className="rr-counter-shap">
                        <div className="rr-counter-shap-img wow slideInLeft">
                            <img
                                src="assets/img/counter/shap-icon.png"
                                alt="img"
                            />
                        </div>
                        <div className="rr-counter-man-bg">
                            <img
                                src="assets/img/counter/man-img.png"
                                alt="img"
                            />
                        </div>
                    </div>
                    <div className="rr-counter-circle-bottom " />
                    <div className="rr-counter-circle-right " />
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-xl-6  col-lg-6  col-md-12 wow rrfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".3s"
                            >
                                <div className="rr-counter-circle p-relative">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="rr-funfact-content rr-funfact-white-bg text-center fix p-relative mb-10">
                                                <div className="rr-funfact_shap">
                                                    <img
                                                        src="assets/img/footer/footer-shap.png"
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className="rr-funfact-icon">
                                                    <img
                                                        src="assets/img/counter/icon1.png"
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className="rr-funfact-number d-flex align-items-center justify-content-center">
                                                    <h5
                                                        className="rr-funfact-number purecounter"
                                                        data-purecounter-duration={
                                                            1
                                                        }
                                                        data-purecounter-end={
                                                            56
                                                        }
                                                    >
                                                        0
                                                    </h5>
                                                    <b>k+</b>
                                                </div>
                                                <div className="rr-funfact-text">
                                                    <span>Happy Clients</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="rr-funfact-content text-center rr-funfact-white-bg fix p-relative rr-funfact-content-2 mb-10">
                                                <div className="rr-funfact_shap">
                                                    <img
                                                        src="assets/img/footer/footer-shap.png"
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className="rr-funfact-icon">
                                                    <img
                                                        src="assets/img/counter/icon2.png"
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className="rr-funfact-number d-flex align-items-center justify-content-center">
                                                    <h5
                                                        className="rr-funfact-number purecounter"
                                                        data-purecounter-duration={
                                                            1
                                                        }
                                                        data-purecounter-end={
                                                            266
                                                        }
                                                    >
                                                        0
                                                    </h5>
                                                    <b>+</b>
                                                </div>
                                                <div className="rr-funfact-text">
                                                    <span>Team Support</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="rr-funfact-content text-center rr-funfact-white-bg fix p-relative rr-funfact-content-2">
                                                <div className="rr-funfact_shap">
                                                    <img
                                                        src="assets/img/footer/footer-shap.png"
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className="rr-funfact-icon">
                                                    <img
                                                        src="assets/img/counter/icon4.png"
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className="rr-funfact-number d-flex align-items-center justify-content-center">
                                                    <h5
                                                        className="rr-funfact-number purecounter"
                                                        data-purecounter-duration={
                                                            1
                                                        }
                                                        data-purecounter-end={
                                                            59
                                                        }
                                                    >
                                                        0
                                                    </h5>
                                                    <b>k+</b>
                                                </div>
                                                <div className="rr-funfact-text">
                                                    <span>Medical Award</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="rr-funfact-content text-center rr-funfact-white-bg fix p-relative">
                                                <div className="rr-funfact_shap">
                                                    <img
                                                        src="assets/img/footer/footer-shap.png"
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className="rr-funfact-icon">
                                                    <img
                                                        src="assets/img/counter/icon3.png"
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className="rr-funfact-number d-flex align-items-center justify-content-center">
                                                    <h5
                                                        className="rr-funfact-number purecounter"
                                                        data-purecounter-duration={
                                                            1
                                                        }
                                                        data-purecounter-end={
                                                            63
                                                        }
                                                    >
                                                        0
                                                    </h5>
                                                    <b>k+</b>
                                                </div>
                                                <div className="rr-funfact-text">
                                                    <span>Docktor Number</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-6 col-lg-6 col-md-12 wow rrfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".5s"
                            >
                                <div className="rr-counter-info z-index-2">
                                    <div className="rr-counter-title-box mb-30">
                                        <span className="rr-section-subtitle p-relative">
                                            <img
                                                src="assets/img/testimonial/section-icon.png"
                                                alt="img"
                                            />{" "}
                                            OUR COUNTER US
                                        </span>
                                        <h4 className="rr-section-title pb-15">
                                            Great Medical Improve This Approach
                                            Counter
                                        </h4>
                                        <p>
                                            Sed ut pers piciatis unde omnis iste
                                            natus error volu ptatem accus antium
                                            one dolor emque laudan tium, totam
                                            rem aperiam,
                                        </p>
                                    </div>
                                    <div className="rr-counter-img">
                                        <img
                                            src="assets/img/counter/main-img.png"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="rr-counter-box p-relative">
                                        <div className="rr-counter-box-wapper mb-20 d-flex align-items-center justify-content-center">
                                            <div className="rr-counter-box-icon mr-20 ">
                                                <span>
                                                    {" "}
                                                    <i className="icofont-brain" />
                                                </span>
                                            </div>
                                            <div className="rr-counter-box-info-text">
                                                <h4>Improve Your Health </h4>
                                                <p>
                                                    We will give you a complete
                                                    account of the system and
                                                    expound
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rr-counter-btn">
                                        <a
                                            className="rr-btn-black"
                                            href="service-details.html"
                                        >
                                            <span>
                                                learn more{" "}
                                                <i className="fa-sharp fa-solid fa-plus" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* COUNTER  area end */}
                {/* tab area start */}
                <section className="tab-area rr-tab__ptb theme-background pt-90 pb-50 p-relative fix">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-xl-12 col-12 wow rrfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".3s"
                            >
                                <div className="rr-price-2-title-box text-center mb-45">
                                    <span className="rr-section-subtitle p-relative">
                                        <img
                                            src="assets/img/testimonial/section-icon.png"
                                            alt="img"
                                        />{" "}
                                        Our solution TAb{" "}
                                        <img
                                            src="assets/img/testimonial/section-icon.png"
                                            alt="img"
                                        />
                                    </span>
                                    <h4 className="rr-section-title">
                                        Medical Largest Healthcare Solution
                                    </h4>
                                </div>
                                <div className="rr-tab__section">
                                    <nav>
                                        <div
                                            className="nav rr-tab justify-content-center "
                                            id="nav-tab"
                                            role="tablist"
                                        >
                                            <button
                                                className="nav-links"
                                                id="nav-Home-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#Home"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-Home-tab"
                                                aria-selected="false"
                                            >
                                                <span className="rr-tab">
                                                    <span className="rr-tab__item d-flex justify-content-between align-items-center">
                                                        <span className="rr-tab__item-info d-flex align-items-center">
                                                            <b>
                                                                {" "}
                                                                <i className="icofont-brain" />
                                                            </b>
                                                            <span className="rr-tab__item-title m-0">
                                                                Brain-althim
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </button>
                                            <button
                                                className="nav-links active"
                                                id="nav-Car-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#Car"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-Car-tab"
                                                aria-selected="true"
                                                tabIndex={-1}
                                            >
                                                <span className="rr-tab">
                                                    <span className="rr-tab__item d-flex justify-content-between align-items-center">
                                                        <span className="rr-tab__item-info d-flex align-items-center">
                                                            <b>
                                                                <i className="icofont-ambulance-cross" />
                                                            </b>
                                                            <span className="rr-tab__item-title m-0">
                                                                Emergency
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </button>
                                            <button
                                                className="nav-links"
                                                id="nav-Health-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#Health"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-Health-tab"
                                                aria-selected="false"
                                                tabIndex={-1}
                                            >
                                                <span className="rr-tab">
                                                    <span className="rr-tab__item d-flex justify-content-between align-items-center">
                                                        <span className="rr-tab__item-info d-flex align-items-center">
                                                            <b>
                                                                <i className="icofont-heart-beat-alt" />
                                                            </b>
                                                            <span className="rr-tab__item-title m-0">
                                                                Heart-beat
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </button>
                                            <button
                                                className="nav-links"
                                                id="nav-Education-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#Education"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-Education-tab"
                                                aria-selected="false"
                                                tabIndex={-1}
                                            >
                                                <span className="rr-tab">
                                                    <span className="rr-tab__item d-flex justify-content-between align-items-center">
                                                        <span className="rr-tab__item-info d-flex align-items-center">
                                                            <b>
                                                                {" "}
                                                                <i className="icofont-blood" />
                                                            </b>
                                                            <span className="rr-tab__item-title m-0">
                                                                Blood-test
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="rr-tab_content fix">
                    <div className="container p-0">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div
                                    className="tab-content"
                                    id="nav-tabContent"
                                >
                                    <div
                                        className="tab-pane fade"
                                        id="Home"
                                        role="tabpanel"
                                        aria-labelledby="nav-Home-tab"
                                        tabIndex={0}
                                    >
                                        <div className="rr-tab__wrapper">
                                            <div className="rr-tab__section-box">
                                                <div className="container p-0">
                                                    <div className="row">
                                                        <div className="col-xl-6 col-lg-6  col-md-6 col-12">
                                                            <div className="rr-tab__thumb rr-cursor-point-area text-end p-relative">
                                                                <img
                                                                    className="w-100"
                                                                    src="assets/img/tab/img-2.jpg"
                                                                    alt="img"
                                                                />
                                                                <div className="rr-tab-video-play">
                                                                    <a
                                                                        className="popup-video"
                                                                        href="https://www.youtube.com/watch?v=cEgbPHcUhT4"
                                                                    >
                                                                        <i className="fa-solid fa-play" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6  col-md-6 col-12">
                                                            <div className="rr-tab__item pt-30 ">
                                                                <h2 className="rr-tab-title-3">
                                                                    Brain Althim
                                                                    Service:
                                                                </h2>
                                                                <p>
                                                                    It is issued
                                                                    free of
                                                                    charge in
                                                                    medical
                                                                    offices or
                                                                    at home with
                                                                    time
                                                                    purchase of
                                                                    services in
                                                                    the amount
                                                                    of more than
                                                                    $40 per
                                                                    person
                                                                    elevated
                                                                    ambience,
                                                                    completed.
                                                                </p>
                                                                <div className="rr-tab-lists">
                                                                    <div className="rr-tab-item">
                                                                        <div className="rr-tab-list-item d-flex align-items-center">
                                                                            <div className="rr-tab-list-icon">
                                                                                <span>
                                                                                    <i className="icofont-patient-bed" />
                                                                                </span>
                                                                            </div>
                                                                            <div className="rr-tab-info">
                                                                                <p>
                                                                                    Effective
                                                                                    For
                                                                                    Cough,
                                                                                    Wheezing,
                                                                                    Asthma,
                                                                                    medical
                                                                                    service
                                                                                    State
                                                                                    of
                                                                                    the
                                                                                    art
                                                                                    technology:
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="rr-tab-list-item d-flex align-items-center">
                                                                            <div className="rr-tab-list-icon">
                                                                                <span>
                                                                                    <i className="icofont-heart-beat-alt" />
                                                                                </span>
                                                                            </div>
                                                                            <div className="rr-tab-info">
                                                                                <p>
                                                                                    Effective
                                                                                    For
                                                                                    Cough,
                                                                                    Wheezing,
                                                                                    Asthma,
                                                                                    medical
                                                                                    service
                                                                                    State
                                                                                    of
                                                                                    the
                                                                                    art
                                                                                    technology:
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rr-tab-link">
                                                                        <a href="service-details.html">
                                                                            <span>
                                                                                +
                                                                            </span>{" "}
                                                                            Best
                                                                            Medical
                                                                            &amp;
                                                                            Health
                                                                            Care
                                                                            mistaken
                                                                            idea
                                                                            of
                                                                            denouncing.
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <a
                                                                    className="rr-btn-black mb-20"
                                                                    href="service-details.html"
                                                                >
                                                                    <span>
                                                                        Click
                                                                        Here{" "}
                                                                        <i className="fa-sharp fa-solid fa-plus" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade active show"
                                        id="Car"
                                        role="tabpanel"
                                        aria-labelledby="nav-Car-tab"
                                        tabIndex={0}
                                    >
                                        <div className="rr-tab__wrapper">
                                            <div className="rr-tab__section-box">
                                                <div className="container p-0">
                                                    <div className="row">
                                                        <div className="col-xl-6 col-lg-6  col-md-6 col-12">
                                                            <div className="rr-tab__thumb rr-cursor-point-area text-end p-relative">
                                                                <img
                                                                    className="w-100"
                                                                    src="assets/img/tab/img.jpg"
                                                                    alt="img"
                                                                />
                                                                <div className="rr-tab-video-play">
                                                                    <a
                                                                        className="popup-video"
                                                                        href="https://www.youtube.com/watch?v=cEgbPHcUhT4"
                                                                    >
                                                                        <i className="fa-solid fa-play" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6  col-md-6 col-12">
                                                            <div className="rr-tab__item pt-30 ">
                                                                <h2 className="rr-tab-title-3">
                                                                    Emergency
                                                                    Service:
                                                                </h2>
                                                                <p>
                                                                    It is issued
                                                                    free of
                                                                    charge in
                                                                    medical
                                                                    offices or
                                                                    at home with
                                                                    time
                                                                    purchase of
                                                                    services in
                                                                    the amount
                                                                    of more than
                                                                    $40 per
                                                                    person
                                                                    elevated
                                                                    ambience,
                                                                    completed.
                                                                </p>
                                                                <div className="rr-tab-lists">
                                                                    <div className="rr-tab-item">
                                                                        <div className="rr-tab-list-item d-flex align-items-center">
                                                                            <div className="rr-tab-list-icon">
                                                                                <span>
                                                                                    <i className="icofont-patient-bed" />
                                                                                </span>
                                                                            </div>
                                                                            <div className="rr-tab-info">
                                                                                <p>
                                                                                    Effective
                                                                                    For
                                                                                    Cough,
                                                                                    Wheezing,
                                                                                    Asthma,
                                                                                    medical
                                                                                    service
                                                                                    State
                                                                                    of
                                                                                    the
                                                                                    art
                                                                                    technology:
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="rr-tab-list-item d-flex align-items-center">
                                                                            <div className="rr-tab-list-icon">
                                                                                <span>
                                                                                    <i className="icofont-heart-beat-alt" />
                                                                                </span>
                                                                            </div>
                                                                            <div className="rr-tab-info">
                                                                                <p>
                                                                                    Effective
                                                                                    For
                                                                                    Cough,
                                                                                    Wheezing,
                                                                                    Asthma,
                                                                                    medical
                                                                                    service
                                                                                    State
                                                                                    of
                                                                                    the
                                                                                    art
                                                                                    technology:
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rr-tab-link">
                                                                        <a href="service-details.html">
                                                                            <span>
                                                                                +
                                                                            </span>{" "}
                                                                            Best
                                                                            Medical
                                                                            &amp;
                                                                            Health
                                                                            Care
                                                                            mistaken
                                                                            idea
                                                                            of
                                                                            denouncing.
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <a
                                                                    className="rr-btn-black mb-20"
                                                                    href="service-details.html"
                                                                >
                                                                    <span>
                                                                        Click
                                                                        Here{" "}
                                                                        <i className="fa-sharp fa-solid fa-plus" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="Health"
                                        role="tabpanel"
                                        aria-labelledby="nav-Health-tab"
                                        tabIndex={0}
                                    >
                                        <div className="rr-tab__wrapper">
                                            <div className="rr-tab__section-box">
                                                <div className="container p-0">
                                                    <div className="row">
                                                        <div className="col-xl-6 col-lg-6  col-md-6 col-12">
                                                            <div className="rr-tab__thumb rr-cursor-point-area text-end p-relative">
                                                                <img
                                                                    className="w-100"
                                                                    src="assets/img/tab/img-2.jpg"
                                                                    alt="img"
                                                                />
                                                                <div className="rr-tab-video-play">
                                                                    <a
                                                                        className="popup-video"
                                                                        href="https://www.youtube.com/watch?v=cEgbPHcUhT4"
                                                                    >
                                                                        <i className="fa-solid fa-play" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6  col-md-6 col-12">
                                                            <div className="rr-tab__item pt-30 ">
                                                                <h2 className="rr-tab-title-3">
                                                                    Heart Beat
                                                                    Service:
                                                                </h2>
                                                                <p>
                                                                    It is issued
                                                                    free of
                                                                    charge in
                                                                    medical
                                                                    offices or
                                                                    at home with
                                                                    time
                                                                    purchase of
                                                                    services in
                                                                    the amount
                                                                    of more than
                                                                    $40 per
                                                                    person
                                                                    elevated
                                                                    ambience,
                                                                    completed.
                                                                </p>
                                                                <div className="rr-tab-lists">
                                                                    <div className="rr-tab-item">
                                                                        <div className="rr-tab-list-item d-flex align-items-center">
                                                                            <div className="rr-tab-list-icon">
                                                                                <span>
                                                                                    <i className="icofont-patient-bed" />
                                                                                </span>
                                                                            </div>
                                                                            <div className="rr-tab-info">
                                                                                <p>
                                                                                    Effective
                                                                                    For
                                                                                    Cough,
                                                                                    Wheezing,
                                                                                    Asthma,
                                                                                    medical
                                                                                    service
                                                                                    State
                                                                                    of
                                                                                    the
                                                                                    art
                                                                                    technology:
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="rr-tab-list-item d-flex align-items-center">
                                                                            <div className="rr-tab-list-icon">
                                                                                <span>
                                                                                    <i className="icofont-heart-beat-alt" />
                                                                                </span>
                                                                            </div>
                                                                            <div className="rr-tab-info">
                                                                                <p>
                                                                                    Effective
                                                                                    For
                                                                                    Cough,
                                                                                    Wheezing,
                                                                                    Asthma,
                                                                                    medical
                                                                                    service
                                                                                    State
                                                                                    of
                                                                                    the
                                                                                    art
                                                                                    technology:
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rr-tab-link">
                                                                        <a href="service-details.html">
                                                                            <span>
                                                                                +
                                                                            </span>{" "}
                                                                            Best
                                                                            Medical
                                                                            &amp;
                                                                            Health
                                                                            Care
                                                                            mistaken
                                                                            idea
                                                                            of
                                                                            denouncing.
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <a
                                                                    className="rr-btn-black mb-20"
                                                                    href="service-details.html"
                                                                >
                                                                    <span>
                                                                        Click
                                                                        Here{" "}
                                                                        <i className="fa-sharp fa-solid fa-plus" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="Education"
                                        role="tabpanel"
                                        aria-labelledby="nav-Education-tab"
                                        tabIndex={0}
                                    >
                                        <div className="rr-tab__wrapper">
                                            <div className="rr-tab__section-box">
                                                <div className="container p-0">
                                                    <div className="row">
                                                        <div className="col-xl-6 col-lg-6  col-md-6 col-12">
                                                            <div className="rr-tab__thumb rr-cursor-point-area text-end p-relative">
                                                                <img
                                                                    className="w-100"
                                                                    src="assets/img/tab/img.jpg"
                                                                    alt="img"
                                                                />
                                                                <div className="rr-tab-video-play">
                                                                    <a
                                                                        className="popup-video"
                                                                        href="https://www.youtube.com/watch?v=cEgbPHcUhT4"
                                                                    >
                                                                        <i className="fa-solid fa-play" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6  col-md-6 col-12">
                                                            <div className="rr-tab__item pt-30 ">
                                                                <h2 className="rr-tab-title-3">
                                                                    Blood Test
                                                                    Service:
                                                                </h2>
                                                                <p>
                                                                    It is issued
                                                                    free of
                                                                    charge in
                                                                    medical
                                                                    offices or
                                                                    at home with
                                                                    time
                                                                    purchase of
                                                                    services in
                                                                    the amount
                                                                    of more than
                                                                    $40 per
                                                                    person
                                                                    elevated
                                                                    ambience,
                                                                    completed.
                                                                </p>
                                                                <div className="rr-tab-lists">
                                                                    <div className="rr-tab-item">
                                                                        <div className="rr-tab-list-item d-flex align-items-center">
                                                                            <div className="rr-tab-list-icon">
                                                                                <span>
                                                                                    <i className="icofont-patient-bed" />
                                                                                </span>
                                                                            </div>
                                                                            <div className="rr-tab-info">
                                                                                <p>
                                                                                    Effective
                                                                                    For
                                                                                    Cough,
                                                                                    Wheezing,
                                                                                    Asthma,
                                                                                    medical
                                                                                    service
                                                                                    State
                                                                                    of
                                                                                    the
                                                                                    art
                                                                                    technology:
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="rr-tab-list-item d-flex align-items-center">
                                                                            <div className="rr-tab-list-icon">
                                                                                <span>
                                                                                    <i className="icofont-heart-beat-alt" />
                                                                                </span>
                                                                            </div>
                                                                            <div className="rr-tab-info">
                                                                                <p>
                                                                                    Effective
                                                                                    For
                                                                                    Cough,
                                                                                    Wheezing,
                                                                                    Asthma,
                                                                                    medical
                                                                                    service
                                                                                    State
                                                                                    of
                                                                                    the
                                                                                    art
                                                                                    technology:
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rr-tab-link">
                                                                        <a href="service-details.html">
                                                                            <span>
                                                                                +
                                                                            </span>{" "}
                                                                            Best
                                                                            Medical
                                                                            &amp;
                                                                            Health
                                                                            Care
                                                                            mistaken
                                                                            idea
                                                                            of
                                                                            denouncing.
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <a
                                                                    className="rr-btn-black mb-20"
                                                                    href="service-details.html"
                                                                >
                                                                    <span>
                                                                        Click
                                                                        Here{" "}
                                                                        <i className="fa-sharp fa-solid fa-plus" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* tab area end */}
                {/* brand area start */}
                <div
                    className="rr-brand-area rr-brand-padding-top pb-80 fix"
                    data-bg-color="#203240"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="rr-brand-wrapper">
                                    <div className="swiper-container rr-brand-active">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="rr-brand-item text-center">
                                                    <img
                                                        src="assets/img/brand/brand-1-6.png"
                                                        alt="img"
                                                    />
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="rr-brand-item text-center">
                                                    <img
                                                        src="assets/img/brand/brand-1-7.png"
                                                        alt="img"
                                                    />
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="rr-brand-item text-center">
                                                    <img
                                                        src="assets/img/brand/brand-1-8.png"
                                                        alt="img"
                                                    />
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="rr-brand-item text-center">
                                                    <img
                                                        src="assets/img/brand/brand-1-9.png"
                                                        alt="img"
                                                    />
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="rr-brand-item text-center">
                                                    <img
                                                        src="assets/img/brand/brand-1-6.png"
                                                        alt="img"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* brand area end */}
                {/* blog area start */}
                <div className="rr-blog-area pt-90 pb-90 fix">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-xl-12 wow rrfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".3s"
                            >
                                <div className="rr-blog-title-box text-center mb-45">
                                    <span className="rr-section-subtitle p-relative">
                                        <img
                                            src="assets/img/testimonial/section-icon.png"
                                            alt="img"
                                        />{" "}
                                        Our Largest Blog{" "}
                                        <img
                                            src="assets/img/testimonial/section-icon.png"
                                            alt="img"
                                        />
                                    </span>
                                    <h4 className="rr-section-title">
                                        Latest News Health and Medical
                                    </h4>
                                </div>
                            </div>
                            <div
                                className="col-xl-4 col-lg-4 col-md-6 mb-30 wow rrfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".3s"
                            >
                                <div className="rr-blog-item">
                                    <div className="rr-blog-thumb-main p-relative">
                                        <a href="blog-details.html">
                                            <div className="rr-blog-thumb">
                                                <img
                                                    src="assets/img/blog/blog04.jpg"
                                                    alt="img"
                                                />
                                                <span>Employment</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="rr-blog-content rr-blog-content-opcity p-relative">
                                        <div className="rr-blog-content-info d-flex mb-15">
                                            <span>
                                                <a href="blog-details.html">
                                                    <i className="fa-sharp fa-solid fa-comments" />{" "}
                                                    02 Comments
                                                </a>
                                            </span>
                                            <span className="ml-30">
                                                <i className="fa-regular fa-calendar-days" />{" "}
                                                Apr - 32 - 2024
                                            </span>
                                        </div>
                                        <div className="rr-blog-text">
                                            <h4 className="rr-blog-title mb-0 pb-10">
                                                <a href="blog-details.html">
                                                    Improve Assistant Health
                                                    Medical This Blog
                                                </a>
                                            </h4>
                                            <p>
                                                We will give you a complete
                                                account theen teachings of the
                                                great.
                                            </p>
                                        </div>
                                        <div className="rr-blog-wrap d-flex align-items-center justify-content-between">
                                            <div className="rr-blog-item-user d-flex align-items-center">
                                                <div className="rr-blog-item-user-thumb">
                                                    <img
                                                        src="assets/img/blog/avada.png"
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className="rr-blog-item-user-content">
                                                    <span className="rr-blog-item-user-title">
                                                        <a href="blog-details.html">
                                                            Dr: Meran Bara
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="rr-blog-link">
                                                <a href="blog-details.html">
                                                    See More{" "}
                                                    <i className="fa-light fa-angle-right" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-4 col-lg-4 col-md-6 mb-30 wow rrfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".5s"
                            >
                                <div className="rr-blog-item">
                                    <div className="rr-blog-thumb-main p-relative">
                                        <a href="blog-details.html">
                                            <div className="rr-blog-thumb">
                                                <img
                                                    src="assets/img/blog/blog05.jpg"
                                                    alt="img"
                                                />
                                                <span>Employment</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="rr-blog-content rr-blog-content-opcity p-relative">
                                        <div className="rr-blog-content-info d-flex mb-15">
                                            <span>
                                                <a href="blog-details.html">
                                                    <i className="fa-sharp fa-solid fa-comments" />{" "}
                                                    02 Comments
                                                </a>
                                            </span>
                                            <span className="ml-30">
                                                <i className="fa-regular fa-calendar-days" />{" "}
                                                Apr - 32 - 2024
                                            </span>
                                        </div>
                                        <div className="rr-blog-text">
                                            <h4 className="rr-blog-title mb-0 pb-10">
                                                <a href="blog-details.html">
                                                    How We Can Fix Problem in
                                                    Tailbone in Back
                                                </a>
                                            </h4>
                                            <p>
                                                We will give you a complete
                                                account theen teachings of the
                                                great.
                                            </p>
                                        </div>
                                        <div className="rr-blog-wrap d-flex align-items-center justify-content-between">
                                            <div className="rr-blog-item-user d-flex align-items-center">
                                                <div className="rr-blog-item-user-thumb">
                                                    <img
                                                        src="assets/img/blog/avada.png"
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className="rr-blog-item-user-content">
                                                    <span className="rr-blog-item-user-title">
                                                        <a href="blog-details.html">
                                                            Dr: Meran Bara
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="rr-blog-link">
                                                <a href="blog-details.html">
                                                    See More{" "}
                                                    <i className="fa-light fa-angle-right" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-4 col-lg-4 col-md-6 mb-30 wow rrfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".7s"
                            >
                                <div className="rr-blog-item">
                                    <div className="rr-blog-thumb-main p-relative">
                                        <a href="blog-details.html">
                                            <div className="rr-blog-thumb">
                                                <img
                                                    src="assets/img/blog/blog06.jpg"
                                                    alt="img"
                                                />
                                                <span>Employment</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="rr-blog-content rr-blog-content-opcity p-relative">
                                        <div className="rr-blog-content-info d-flex mb-15">
                                            <span>
                                                <a href="blog-details.html">
                                                    <i className="fa-sharp fa-solid fa-comments" />{" "}
                                                    02 Comments
                                                </a>
                                            </span>
                                            <span className="ml-30">
                                                <i className="fa-regular fa-calendar-days" />{" "}
                                                Apr - 32 - 2024
                                            </span>
                                        </div>
                                        <div className="rr-blog-text">
                                            <h4 className="rr-blog-title mb-0 pb-10">
                                                <a href="blog-details.html">
                                                    Medical Which Helps This
                                                    Medical This Blog
                                                </a>
                                            </h4>
                                            <p>
                                                We will give you a complete
                                                account theen teachings of the
                                                great.
                                            </p>
                                        </div>
                                        <div className="rr-blog-wrap d-flex align-items-center justify-content-between">
                                            <div className="rr-blog-item-user d-flex align-items-center">
                                                <div className="rr-blog-item-user-thumb">
                                                    <img
                                                        src="assets/img/blog/avada.png"
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className="rr-blog-item-user-content">
                                                    <span className="rr-blog-item-user-title">
                                                        <a href="blog-details.html">
                                                            Dr: Meran Bara
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="rr-blog-link">
                                                <a href="blog-details.html">
                                                    See More{" "}
                                                    <i className="fa-light fa-angle-right" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="blog-btn text-center wow rrfadeUp pt-20"
                                data-wow-duration=".9s"
                                data-wow-delay=".9s"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "0.9s",
                                    animationDelay: "0.9s",
                                    animationName: "rrfadeUp",
                                }}
                            >
                                <a className="rr-btn-black" href="team.html">
                                    <span>
                                        View all Blog{" "}
                                        <i className="fa-sharp fa-solid fa-plus" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* blog area end */}
                {/* cta area start */}
                <div className="rr-cta-area  rr-cta-bg  fix p-relative">
                    <div className="container">
                        <div className="row align-items-center rr-cta-wrap">
                            <div className="col-xl-6 col-lg-6 col-md-6 wow rrfadeUp">
                                <div className="rr-cta-left-box d-flex align-items-center">
                                    <div className="rr-cta-icon">
                                        <img
                                            src="assets/img/footer/email-icon.png"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="rr-cta-content ml-20">
                                        <h4 className="rr-cta-title">
                                            Our Newslatter
                                        </h4>
                                        <span>
                                            We are dolor sit amet csectetur
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 wow rrfadeUp">
                                <div className="rr-cta-right-box p-relative">
                                    <input
                                        type="text"
                                        placeholder="Email address"
                                    />
                                    <div className="rr-cta-button">
                                        <button className="black-bg rr-cta-btn">
                                            <span>Subscribe</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/*<!-- footer area start -->*/}
            <Footer_area />
            {/*<!-- footer area End -->*/}
        </>
    );
}
