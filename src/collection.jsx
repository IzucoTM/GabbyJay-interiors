import Sheers from "./assets/collection-sheers.jpg";
import Blackout from "./assets/collection-quiet.jpg";
import Layered from "./assets/collection-texture.jpg";
import Blinds from "./assets/blinds.jpg";
import Reveal from "./reveal";

function Collection() {
  return (
    <section className="collection scroll-mt-[85px]" id="collections">
      <div className="container pr-[24px] pl-[24px] pb-[64px] pt-[32px] flex flex-col gap-[32px] lg:p-[80px] lg:pb-[104px] lg:pt-0 lg:gap-[48px] lg:pt-[88px] ">
        <Reveal>
          <div className="collection-header grid  sm:grid-cols-2 sm:gap-[50px] sm:items-end gap-[20px]">
            <div className="collection-title flex flex-col gap-[20px]">
              <span className="section-label text-[10px] text-[#6A5845] tracking-[0.022em]">
                The collections
              </span>
              <h2 className="section-heading text-[44px] text-[#302E29] leading-[1.04] tracking-[-0.040em]">
                Find your perfect fall.
              </h2>
            </div>
            <div className="collection-guidance">
              <p className="text-[14px] text-[#716B62] leading-[1.8]">
                From barely there sheers to cocooning drapes. Explore the
                texture that makes a space your own
              </p>
            </div>
          </div>
        </Reveal>
        <div className="collection-gallery grid sm:grid-cols-2 gap-[40px] xl:grid-cols-3">
          <Reveal>
            <div className="collection-card flex flex-col gap-[18px]">
              <div className="w[342px] h-[350px] overflow-hidden">
                <img
                  src={Sheers}
                  alt="sheer curtain"
                  className="w-full h-full object-cover object-center"
                ></img>
              </div>
              <div className="collection-card-content">
                <h3 className="collection-card-title text-[32px] text-[#302E29]">
                  Sheer curtains
                </h3>
                <p className="collection-card-para text-[14px] text-[#716B62] leading-[1.8]">
                  Lightweight curtain that welcome light while adding softness
                  and elegance to living rooms, bedrooms and lounge spaces
                </p>
                <small className="text-[9px] text-[#6A5845] tracking-[0.013em]">
                  SHEERS / SOFT & LUMINOUS
                </small>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="collection-card flex flex-col gap-[18px] xl:pt-[70px]">
              <div className="w[342px] h-[350px] overflow-hidden">
                <img
                  src={Blackout}
                  alt="black out curtain"
                  className="w-full h-full object-cover object-center"
                ></img>
              </div>
              <div className="collection-card-content">
                <h3 className="collection-card-title text-[32px] text-[#302E29]">
                  Blackout curtains
                </h3>
                <p className="collection-card-para text-[14px] text-[#716B62] leading-[1.8]">
                  Designed for bedrooms and spaces where light control and
                  privacy matters, available in colors that complement your
                  interior
                </p>
                <small className="text-[9px] text-[#6A5845] tracking-[0.013em]">
                  PRIVACY / BETTER REST
                </small>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="collection-card flex flex-col gap-[18px]">
              <div className="w[342px] h-[350px] overflow-hidden">
                <img
                  src={Layered}
                  alt="layered curtain"
                  className="w-full h-full object-cover object-center"
                ></img>
              </div>
              <div className="collection-card-content ">
                <h3 className="collection-card-title text-[32px] text-[#302E29]">
                  Layered curtains
                </h3>
                <p className="collection-card-para text-[14px] text-[#716B62] leading-[1.8]">
                  A combination of sheer and heavier curtains for a balanced
                  look that offers flexible light control, privacy and visual
                  depth
                </p>
                <small className="text-[9px] text-[#6A5845] tracking-[0.013em]">
                  DEPTH / VERSATILITY
                </small>
              </div>
            </div>
          </Reveal>
          {/* <Reveal>
            <div className="collection-card flex flex-col gap-[18px]">
              <div className="w[342px] h-[350px] overflow-hidden">
                <img
                  src={Blinds}
                  alt="window blinds"
                  className="w-full h-full object-cover object-center"
                ></img>
              </div>
              <div className="collection-card-content">
                <h3 className="collection-card-title text-[32px] text-[#302E29]">
                  Office window blind
                </h3>
                <p className="collection-card-para text-[14px] text-[#716B62] leading-[1.8]">
                  Clean practical window covering for offices, meeting rooms,
                  reception areas and workspaces. Designed to help manage
                  daylight while maintaining a polished look
                </p>
                <small className="text-[9px] text-[#6A5845] tracking-[0.013em]">
                  PROFESSIONAL / FUNCTIONAL
                </small>
              </div>
            </div>
          </Reveal> */}
        </div>
      </div>
    </section>
  );
}
export default Collection;
