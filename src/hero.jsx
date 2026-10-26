import { MessageCircle, ArrowUpRight } from "lucide-react";
import HeroImg from "./assets/hero.jpg";
import Reveal from "./reveal";

function Hero() {
  const phoneNumber = "2348033287989";
  const message =
    "Hello GabbyJay Interiors, i'd like to get a quote for custom curtains";

  return (
    <section className="hero scroll-mt-[85px] bg-[#302E29]" id="home">
      <div className="container sm:flex">
        <div className="hero-content bg-[#302E29] pl-[24px] pr-[24px] pt-[48px] pb-[44px] flex flex-col justify-center gap-[28px] sm:max-w-[560px] lg:pt-[88px] lg:pl-[80px] lg:pr-[48px] lg:pb-[58px]">
          <Reveal>
            <span className="section-label text-[#D9D0C3] text-[10px]">
              custom curtains / considered interiors
            </span>
          </Reveal>
          <Reveal>
            <h1 className="section-heading text-[min(10vw,82px)] leading-[1.04] tracking-[-0.014em] text-[#F6F3ED] lg:text-[82px]">
              Beautifully framed <span className="xl:block">living.</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="hero-para text-[14px] leading-[1.8] text-[#D9D0C3]">
              Curtains that bring a room together. thoughtfully designed, made
              to measure and installed with care from the first fabric to the
              final fold
            </p>
          </Reveal>
          <Reveal>
            <div className="hero-cta flex flex-col gap-[12px] items-start">
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn bg-[#F6F3ED] text-[#302E29] p-[22px] flex gap-[14px] text-[12px] items-center transition-all duration-300 lg:hover:bg-[#dddbd5] lg:hover:text-[#302E29] lg:hover:-translate-y-0.5 lg:hover:shadow-lg lg:active:translate-y-0 lg:active:scale-[0.98]"
              >
                <MessageCircle size={18} color="#6A5845" />
                Get a quote on whatsapp
                <ArrowUpRight size={16} color="#6A5845" />
              </a>
              <small className=" text-[10px] text-[#D9D0C3]">
                lets find the right finish for your space
              </small>
            </div>
          </Reveal>
        </div>
        <div className="hero-img relative ">
          <img
            className="w-full h-full object-cover object-center "
            src={HeroImg}
            alt="lurxury curtain "
          ></img>
          <p className="absolute bottom-[20px] left-[10px] bg-[#292823] text-[#F6F3ED] text-[9px] pt-[10px] pb-[10px] pr-[14px] pl-[14px] ">
            soft light, beautiful drape
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
