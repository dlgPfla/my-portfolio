import React from "react";

const About = () => {
  return (
    <section className="py-24 bg-gray-50 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <img
          src="/me.jpg"
          alt="My Profile"
          className="w-60 h-60 object-cover rounded-full shadow-lg"
        />
        <div className="text-left space-y-4 text-lg text-gray-800 w-full">
          <p>🧑‍🏫 동대전 고등학교 41대 전교 부회장 역임</p>
          <p>🤖 동대전고 카카오톡 챗봇 직접 개발 – 학사 알림 자동화</p>
          <p>🎓 이화여대 사이버보안학과 25학번 재학 중</p>
          <p> 이화여대실전창업학회 UNIS 25년.3~ing</p>
          <p>💬 MBTI: INTP</p>

          {/* 개발 능력치 */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">👩‍💻 개발 능력치</h3>
            <SkillBar skill="React" level={75} />
            <SkillBar skill="Flutter" level={60} />
            <SkillBar skill="JavaScript" level={80} />
            <SkillBar skill="HTML/CSS" level={90} />
            <SkillBar skill="TypeScript" level={60} />
          </div>
        </div>
      </div>
    </section>
  );
};


const SkillBar = ({ skill, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium">{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-indigo-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default About;
