import { Container } from "@/components/shared/Container";

function Vision() {
  return (
    <section className="py-16 md:py-24">
      <Container className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* cart 1 */}
          {/* Mission Card */}
          <div className="bg-[#F6F9F8] rounded-2xl p-9 flex flex-col gap-6">
            {/* Icon */}
            <div className="w-[59px] h-[59px] bg-[#00853F] rounded-full flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="10" stroke="white" strokeWidth="2" />
                <circle cx="16" cy="16" r="4" fill="white" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-[32px] font-bold text-[#00853F]">Mission</h3>

            {/* Description */}
            <p className="text-base text-black font-light leading-relaxed">
              Continuing to Provide Innovative and Sustainable Financial
              Solutions: Enhancing Service Levels to achieve the highest levels
              of customer satisfaction. Committed to keeping pace with
              sustainable technological developments in our sector. Preserving
              and enhancing the investments of our portfolio shareholders.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#F6F9F8] rounded-2xl p-9 flex flex-col gap-6">
            <div className="w-[59px] h-[59px] bg-primary rounded-full flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="10" stroke="white" strokeWidth="2" />
                <circle cx="16" cy="16" r="4" fill="white" />
              </svg>
            </div>
            <h3 className="text-[32px] font-bold text-primary">Vision</h3>
            <p className="text-base text-black font-light leading-relaxed">
              To achieve success by providing the best services, allowing us to
              maintain a distinguished position in local and regional markets.
            </p>
          </div>

          {/* Values Card */}
          <div className="bg-[#F6F9F8] rounded-2xl p-9 flex flex-col gap-6">
            <div className="w-[59px] h-[59px] bg-secondary rounded-full flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 4L20 14L30 16L20 18L16 28L12 18L2 16L12 14L16 4Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3 className="text-[32px] font-bold text-secondary">Values</h3>
            <p className="text-base text-black font-light leading-relaxed">
              Integrity, transparency, customer focus, innovation, and
              excellence. We are committed to ethical practices, continuous
              improvement, and creating lasting relationships built on trust and
              mutual success.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Vision;
