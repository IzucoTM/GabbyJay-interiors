import ApproachSection from "./assets/approach.jpg";
import Reveal from "./reveal";

function Approach() {
  return (
    <section className="approach-section">
      <div className="container flex flex-col gap-[36px] pr-[24px] pl-[24px] pt-[64px] pb-[64px] bg-[#F6F3ED] border-b-[1px] border-solid border-[#D7CFC3]">
        <Reveal>
          <div className="flex flex-col gap-[24px]">
            <span className="section-label text-[10px] text[#6A5845] text-[#716B62] ">
              The GabbyJay approach
            </span>
            <h2 className="section-heading text-[42px] leading-[1.04] text-[#302E29] tracking-[0.014em]">
              A soft space, A more considered home.
            </h2>
            <p className="section-para text-[14px] leading-[1.8] text-[#716B62]">
              The right curtains do more than dress a window, They shape the
              light, soften the room and make your home feel like you. We bring
              fabric, proportion and thoughtful detail together in one personal,
              end to end service
            </p>
            <p className="philosophy text-[24px] text-[#6A5845] mt-[12px]">
              Designed around the way you live
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex flex-col gap-[12px]">
            <div className="img w-[342px] h-[280px] overflow-hidden">
              <img
                src={ApproachSection}
                alt="curtain view"
                className="w-full h-full object-cover object-center"
              ></img>
            </div>
            <p className=" text-[10px] text-[#716B62]">
              A study in texture, light and natural movement
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Approach;
