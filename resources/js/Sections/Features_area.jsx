import React from 'react'
import { usePage } from "@inertiajs/react";

export default function Features_area() {
    const{doctors,specialists} = usePage().props;
    const spname = (sid) => {
    const sptype = specialists.find(abc => abc.find === sid);
        return sptype ? sptype.name : 'Unknown';
    };
    
  return (
    <>
    
    <section className="rr-features-area pt-90 pb-70 fix">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-xl-12 wow rrfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".3s"
                            >
                                <div className="rr-features-title-box text-center mb-45">
                                    <span className="rr-section-subtitle p-relative">
                                        <img
                                            src="assets/img/testimonial/section-icon.png"
                                            alt="img"
                                        />{" "}
                                        Our features Us{" "}
                                        <img
                                            src="assets/img/testimonial/section-icon.png"
                                            alt="img"
                                        />
                                    </span>
                                    <h4 className="rr-section-title">
                                        Experts in Every Aspect Service
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* Loop Start */}
                            {doctors.map(({id, name, specialist_id, email,photo,status}) => (
                            <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                                <div
                                    className="rr-features-item p-relative wow rrfadeUp"
                                    data-wow-duration=".9s"
                                    data-wow-delay=".3s"
                                >
                                    <div className="rr-features-thumb p-relative">
                                        <img
                                            src={photo}
                                            alt="img"
                                        />
                                        <span>{id}</span>
                                    </div>
                                    <div className="rr-features-icon">
                                        <img
                                            src="assets/img/feature/icon-1.png"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="rr-features-content text-center">
                                        <h3 className="rr-features-title">
                                            <a href="service-details.html">
                                                {name}
                                            </a>
                                        </h3>
                                        <p>
                                        {email}
                                        </p>
                                        <a
                                            className="rr-features-btn"
                                            href="service-details.html"
                                        >
                                            <span>
                                                See More{" "}
                                                <i className="fa-solid fa-angle-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            ))}
                            
                            
                        </div>
                    </div>
                </section>
    </>
  )
}
