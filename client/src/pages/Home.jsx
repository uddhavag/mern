import { NavLink } from "react-router-dom";
import { Analytics } from "../Components/Analytics";
export const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid-two-cols">
                        <div className="hero-content">
                            <p>We are the World Best IT Company</p>
                            <h1>Welcome to Homepage</h1>
                            <p>
                                Are you ready to take your business to the next level with
                                cutting-edge IT solutions? Look no further! At Our Company,
                                we specialize in providing innovative IT services and solutions
                                tailored to meet your unique needs.
                            </p>
                            <div className="btn btn-group">
                                <NavLink to="/contact">
                                    <button className="btn">Connect Now</button>
                                </NavLink>
                                <NavLink to="/service">
                                    <button className="btn secondary-btn">Learn more</button>
                                </NavLink>
                            </div>
                        </div>
                        {/*hero images*/}
                        <div className="hero-image">
                            <img
                                src="/images/home.png"
                                width="400"
                                height="500"
                            />
                        </div>
                    </div>
                </section>
            </main>

            <Analytics/>
            {/*3rd section*/}
            <section className="section-hero">
                <div className="container grid-two-cols">
                    {/*hero images*/}
                    <div className="hero-image">
                        <img
                            src="/images/design.png"
                            width="400"
                            height="500"
                        />
                    </div>
                    <div className="hero-content">
                        <p>We are here to help you</p>
                        <h1>Get Started Today</h1>
                        <p>
                            Ready to take the first step towards a more efficient and secure
                            IT infrastructure? Contact us today for a free consultation and
                            let's discuss how we can help your business thrive in
                            the digital age.
                        </p>
                        <div className="btn btn-group">
                            <NavLink to="/contact">
                                <button className="btn">Connect Now</button>
                            </NavLink>
                            <NavLink to="/service">
                                <button className="btn secondary-btn">Learn more</button>
                            </NavLink>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};