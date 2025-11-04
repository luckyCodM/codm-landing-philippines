import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====HERO AREA START =======*/}
            <div className="hero8" style={{ backgroundImage: "url('/assets/img/background.jpg')" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="main-heading">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                 No Code Low Code
                                </span>
                                <h1 className="text-anime-style-3">Expert Salesforce Consulting
                                </h1>
                                <p data-aos="fade-right" data-aos-duration={600} className="text-muted">Transforming businesses through excellent Salesforce solutions, unlock new ideas, enhance operations, and innovate continuously.</p>
                                <div className="space30" />
                                <Link className="theme-btn14" href="#contact">
                                See Our Expertise
                                </Link>
                                <div className="shape animate3">
                                    <img src="assets/img/shapes/hero8-shape1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img src="assets/img/hero/hero8-image1.png" alt="" className="image1" />
                <img src="assets/img/hero/hero8-image2.png" alt="" className="image2" /> */}
            </div>
            {/*=====HERO AREA END=======*/}
        </>
    );
}
