import './footer.css';
export default function Footer(){
    return (
        <div class="footer-section pt-5 pb-5">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-3">
                    <div class="text-center">
                        <img src="logo192.png" class="footer-section-logo" alt="" />
                        <div class="d-flex flex-row justify-content-center mt-3">
                        <div>
                        <p class="footer-section-top-text mt-4">HHO <br />Helping Hands Organisation <br/>RGUKT RK Valley</p>
                        <p class="footer-section-top-text mt-4">Help For The Needy</p>
                        <div class="d-flex flex-row justify-content-center mt-3">
                            <div class="social-media-logo-container">
                                <i class="fa-brands fa-google social-media-logo"></i>
                            </div>
                            <div class="social-media-logo-container ml-2">
                                <i class="fa-brands fa-twitter social-media-logo"></i>
                            </div>
                            <div class="social-media-logo-container ml-2">
                                <i class="fa-brands fa-instagram social-media-logo"></i>
                            </div>
                            <div class="social-media-logo-container ml-2">
                                <i class="fa-brands fa-linkedin social-media-logo"></i>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-3 d-none d-lg-block">
                    <div class="d-flex flex-column justify-content-end mt-2">
                        <div class="m-auto mt-5">
                            <h1 class="footer-section-head">Contact Us</h1>
                            <p class="footer-section-bottom-text"><i class="fa-solid fa-envelope footer-contact-logo mr-3"></i>hho@rguktrkv.ac.in</p>
                            <p class="footer-section-bottom-text"><i class="fa-solid fa-phone mr-3 footer-contact-logo"></i>1234506789</p>
                            <p class="footer-section-bottom-text"><i class="fa-brands fa-skype mr-3 footer-contact-logo"></i>HHO</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-3 d-none d-lg-block">
                    <div class="d-flex flex-row justify-content-between mt-2">
                        <div class="m-auto mt-5">
                            <h1 class="footer-section-head">Contact Us</h1>
                            <p class="footer-section-bottom-text"><i class="fa-solid fa-envelope footer-contact-logo mr-3"></i>hho@rguktrkv.ac.in</p>
                            <p class="footer-section-bottom-text"><i class="fa-solid fa-phone mr-3 footer-contact-logo"></i>1234506789</p>
                            <p class="footer-section-bottom-text"><i class="fa-brands fa-skype mr-3 footer-contact-logo"></i>HHO</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-3 d-none d-lg-block">
                    <div class="d-flex flex-row justify-content-between mt-2">
                        <div class="m-auto mt-5">
                        <div class="social-media-logo-container">
                                <a href='/' className='link-text'><i class="fa-brands fa-google social-media-logo"></i> hho.in </a>
                            </div>
                            <div class="social-media-logo-container ml-2">
                                <a href="/" className="link-text"><i class="fa-brands fa-twitter social-media-logo"></i>hho twitter</a>
                            </div>
                            <div class="social-media-logo-container ml-2">
                                <a href="/" className="link-text"><i class="fa-brands fa-instagram social-media-logo"></i> hho rgukt</a>
                            </div>
                            <div class="social-media-logo-container ml-2">
                                <a href="/" className="link-text"><i class="fa-brands fa-linkedin social-media-logo"></i>hho.in</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 text-center">
                    <hr class="footer-hrule" />
                    <p class="footer-section-copyright"><i class="fa-regular fa-copyright"></i> Copyright Text</p>
                </div>
            </div>
        </div>


    </div>
    )
}