import { MessageCircle, ArrowUpRight } from "lucide-react";
import HeroImg from "./assets/hero.jpg";

function Hero() {
  return (
    <section className="hero scroll-mt-[85px]" id="home">
      <div className="hero-container">
        <div className="hero-content bg-[#302E29] pl-[24px] pr-[24px] pt-[48px] pb-[44px] flex flex-col gap-[28px]">
          <span className="section-label text-[#D9D0C3] text-[10px]">
            custom curtains / considered interiors
          </span>
          <h1 className="section-heading text-[57px] leading-[1.04] tracking-[-0.014em] text-[#F6F3ED]">
            Beautifully framed living.
          </h1>
          <p className="hero-para text-[14px] leading-[1.8] text-[#D9D0C3]">
            Curtains that bring a room together. thoughtfully designed, made to
            measure and installed with care from the first fabric to the final
            fold
          </p>
          <div className="hero-cta flex flex-col gap-[12px] items-start">
            <button className="hero-btn bg-[#F6F3ED] text-[#302E29] p-[22px] flex gap-[14px] text-[12px] items-center">
              <MessageCircle size={18} color="#6A5845" />
              Get a quote on whatsapp
              <ArrowUpRight size={16} color="#6A5845" />
            </button>
            <small className=" text-[10px] text-[#D9D0C3]">
              lets find the right finish for your space
            </small>
          </div>
        </div>
        <div className="hero-img relative">
          <img src={HeroImg} alt="lurxury curtain"></img>
          <p className="absolute bottom-[20px] left-[10px] bg-[#292823] text-[#F6F3ED] text-[9px] pt-[10px] pb-[10px] pr-[14px] pl-[14px] ">
            soft light, beautiful drape
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
