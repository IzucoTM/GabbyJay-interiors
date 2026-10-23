import FooterImg from "./assets/footerImg.jpg";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import Reveal from "./reveal";

function Footer() {
  const phoneNumber = "2348033287989";
  const message =
    "Hello GabbyJay Interiors, i'd like to get a quote for custom curtains";

  return (
    <footer className="bg-[#292823]">
      <div className="container">
        <div className="grid sm:grid-cols-2 ">
          <Reveal>
            <div className="min-h-[280px] overflow-hidden sm:min-h-[400px] sm:max-h-[400px] lg:max-h-[450px]">
              <img src={FooterImg} alt="" />
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-col gap-[24px] p-[56px] pr-[24px] pl-[24px] lg:p-[80px] lg:pt-[72px] lg:pb-[72px]">
              <small className="text-[10px] text-[#D9D0C3] tracking-[0.022em]">
                YOUR HOME, BEAUTIFULLY FINISHED
              </small>
              <h2 className="text-[48px] text-[#F6F3ED] tracking-[-0.014em] leading-[1.04]">
                Let's dress your windows
              </h2>
              <p className="text-[14px] text-[#D9D0C3]  leading-[1.8]">
                A room photo, an idea, a fresh start. Tell us what you have in
                mind, and we'll help bring it into focus
              </p>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn bg-[#F6F3ED] text-[#302E29] p-[22px] flex gap-[14px] text-[12px] items-center justify-center"
              >
                <MessageCircle size={18} color="#6A5845" />
                Get a quote on whatsapp
                <ArrowUpRight size={16} color="#6A5845" />
              </a>
              <small className="text-[10px] text-[#D9D0C3]  leading-[1.6]">
                Have window photos and approximaate sizes ready? That's a lovely
                place to begin
              </small>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="flex flex-col gap-[32px] p-[24px] pt-[40px] lg:p-[80px] lg:pt-[56px] lg:pb-[28px]">
            <hr className="text-[#56534A]" />
            <div className="footer-navigation flex flex-col sm:flex-row sm:justify-between gap-[32px] items-start">
              <div className="flex flex-col gap-[16px] items-start">
                <div className="navlogo text-[56px] flex flex-col gap-[2px] items-center font-Cormorant text-[#F6F3ED] leading-[1] tracking-[0.007em]">
                  GabbyJay
                  <span className=" text-[10px] text-[#D9D0C3] tracking-[0.05em]">
                    Interiors
                  </span>
                </div>
                <p className="text-[#D9D0C3] text-[11px] text-[#D9D0C3]">
                  Custom curtains. Thoughtfully finished
                </p>
              </div>
              <div className="footer-links flex gap-[44px]">
                <div className="flex flex-col gap-[14px]">
                  <p className="text-[#D9D0C3] text-[10px] tracking-[0.022em]">
                    explore
                  </p>
                  <a className="text-[#F6F3ED] text-[12px]" href="#home">
                    Home
                  </a>
                  <a className="text-[#F6F3ED] text-[12px]" href="#collections">
                    Collection
                  </a>
                  <a className="text-[#F6F3ED] text-[12px]" href="#process">
                    Process
                  </a>
                  <a className="text-[#F6F3ED] text-[12px]" href="about">
                    About us
                  </a>
                  <a className="text-[#F6F3ED] text-[12px]" href="#faq">
                    Faq
                  </a>
                </div>
                <div className="flex flex-col gap-[14px]">
                  <p className="text-[#D9D0C3] text-[10px] tracking-[0.022em]">
                    LET'S CONNECT
                  </p>
                  <a
                    href="https://wa.me/2348037744229"
                    className="text-[#F6F3ED] text-[12px] flex items-center gap-[1px]"
                  >
                    Chat on Whatsapp <ArrowUpRight size={14} color="#D9D0C3" />
                  </a>
                  <p className="text-[#F6F3ED] text-[12px]">
                    Start your curtain enquiry
                  </p>
                </div>
              </div>
            </div>
            <hr className="text-[#56534A]" />
            <div className="flex flex-col sm:flex-row sm:justify-between gap-[12px]">
              <p className="text-[9px] text-[#D9D0C3]">
                &copy; GabbyJay interiors. All rights reserved.
              </p>
              <p className="text-[9px] text-[#D9D0C3]">
                Imagery is illustrative and intended as design inspiration.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
export default Footer;
