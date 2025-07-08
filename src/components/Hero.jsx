import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 흐릿한 배경 이미지 */}
      <img
        src="/hero.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />

        {/* 이름 + 타이틀 텍스트 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
    
       {/* 🔹 이름 부분 추가 */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
      이혜림 Lily Hyerim Lee
      </h2>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
      문제의 핵심을 꿰뚫는 개발자
    </h1>

    <p className="text-lg md:text-xl text-gray-200 max-w-xl" data-aos="fade-up" data-aos-delay="200">
      빠르게 습득하고, 깊이 해결하며 <br />
      기술로 사용자와 사회를 연결합니다.
        </p>
      </div>
    </section>
  );
};

export default Hero;
