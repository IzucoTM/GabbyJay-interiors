import Fabric from "./assets/approach-fabric.jpg";
import Tailor from "./assets/approach-tailor.jpg";
import Outcome from "./assets/approach-outcome.jpg";
import Reveal from "./reveal";

function Process() {
  return (
    <section className="approach scroll-mt-[85px]" id="process">
      <div className="container bg-[#EAE4DA] flex flex-col gap-[36px] p-[64px] pr-[24px] pl-[24px]">
        <Reveal>
          <div className="approach-header flex flex-col gap-[28px]">
            <div className="approach-title flex flex-col gap-[28px]">
              <small className="text-[10px] text-[#6A5845] tracking-[0.022em]">
                From concept to completion
              </small>
              <h2 className=" text-[44px] text-[#302E29] leading-[1.04] tracking-[-0.014em]">
                Your vision, Your measurements, Your perfect finish
              </h2>
            </div>
            <div className="header-para text-[14px] text-[#716B62] leading-[1.8]">
              We make creating beautiful windows a persona experience, from
              selecting the perfecct fabric to achieving a finish tailored to
              your space
            </div>
          </div>
        </Reveal>

        <div className="approach-cards flex flex-col gap-[50px]">
          <Reveal>
            <div className="approach-card border-solid border-[1px] border-[#D7CFC3]">
              <div className="approach-card-img w[342px] h-[350px] overflow-hidden">
                <img
                  src={Fabric}
                  alt=""
                  className="mb-[10px] w-full h-full object-cover object-center"
                />
              </div>
              <div className="approach-card-content flex flex-col gap-[18px] p-[20px]">
                <small className="text-[9px] text-[#6A5845] tracking-[0.012em]">
                  Your style / your choice
                </small>
                <h3 className="text-[32px] text-[#302E29]">
                  Choose your fabric
                </h3>
                <p className="text-[14px] text-[#716B62] leading-[1.8]">
                  From soft sheers to rich luxurios drapes, explore textures,
                  colors and finishes that reflect your taste and complement
                  your space
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="approach-card border-solid border-[1px] border-[#D7CFC3]">
              <div className="approach-card-img w[342px] h-[350px] overflow-hidden">
                <img
                  src={Tailor}
                  alt=""
                  className="mb-[10px] w-full h-full object-cover object-center"
                />
              </div>
              <div className="approach-card-content flex flex-col gap-[18px] p-[20px]">
                <small className="text-[9px] text-[#6A5845] tracking-[0.012em]">
                  Precision in every detail
                </small>
                <h3 className="text-[32px] text-[#302E29] leading-[1.04]">
                  Made to fit your specifications
                </h3>
                <p className="text-[14px] text-[#716B62] leading-[1.8]">
                  every window is different. We tailor your curtain selection to
                  your measurements, preferred style and functional needs for a
                  finish that feels ,ade for your space.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="approach-card border-solid border-[1px] border-[#D7CFC3]">
              <div className="approach-card-img w[342px] h-[350px] overflow-hidden">
                <img
                  src={Outcome}
                  alt=""
                  className="mb-[10px] w-full h-full object-cover object-center"
                />
              </div>
              <div className="approach-card-content flex flex-col gap-[18px] p-[20px]">
                <small className="text-[9px] text-[#6A5845] tracking-[0.012em]">
                  The finishing touch
                </small>
                <h3 className="text-[32px] text-[#302E29]">
                  See the transformation
                </h3>
                <p className="text-[14px] text-[#716B62] leading-[1.8]">
                  Watch your vision come together as the right fabrics and
                  carefully finished curtains bring warmth, character and a new
                  sense of elegance to your interior
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
export default Process;
