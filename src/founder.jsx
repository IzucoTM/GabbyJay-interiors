import FounderImg from "./assets/founder.jpg";
import Reveal from "./reveal";

function Founder() {
  return (
    <section className="founder scroll-mt-[85px]" id="about">
      <div className="container pr-[24px] pl-[24px] pb-[64px] pt-[32px] grid sm:grid-cols-2 sm:items-end gap-[50px] lg:p-[80px] lg:pb-[104px] lg:pt-0 lg:gap-[48px] lg:pt-[88px]">
        <Reveal>
          <div className="founder-content flex flex-col gap-[20px]">
            <small className="section-label text-[10px] text-[#6A5845] tracking-[0.022em]">
              THE PERSON BEHIND THE BRAND
            </small>
            <h2 className="section-heading text-[44px] text-[#302E29] leading-[1.04] tracking-[-0.040em]">
              A personal vision for beautiful spaces.
            </h2>
            <p className="text-[14px] text-[#716B62] leading-[1.8]">
              Every beautiful space begins with a vision, and Gabby Jay
              Interiors was created around the idea that the details of an
              interior matter. Through Gabby Jay Interiors, our aim is to help
              people find window treatments that complement their homes, reflect
              their individual preferences, and make their everyday spaces feel
              more inviting.
            </p>
            <p className="text-[14px] text-[#716B62] leading-[1.8]">
              We believe that choosing curtains or blinds should be an enjoyable
              experience, guided by thoughtful choices, attention to detail, and
              an understanding of what each space needs. Our commitment is to
              help turn those ideas into window treatments that feel right for
              the people who live and work behind them.
            </p>
            <small className="section-label text-[10px] text-[#6A5845] tracking-[0.022em]">
              Founder, Gabby Jay Interiors
            </small>
          </div>
        </Reveal>
        <Reveal>
          <div className="founder-img relative ">
            <small className="absolute bottom-[20px] left-[10px] bg-[#292823] text-[#F6F3ED] text-[9px] pt-[10px] pb-[10px] pr-[14px] pl-[14px] ">
              DON GABRIEL
            </small>
            <div className="w[342px] h-[350px] overflow-hidden">
              <img
                src={FounderImg}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Founder;
