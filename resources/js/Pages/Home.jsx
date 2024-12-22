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
    
    //console.log(doctors)
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

            
            {/* service area start */}
            <Service_area />
            {/* service area end */}
            
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
