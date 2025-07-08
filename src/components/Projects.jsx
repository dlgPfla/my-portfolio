import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const projectList = [
  {
    title: "저시력 시각장애인을 위한 메뉴판 앱",
    coverImage: "/project1.png", 
    detailImages: ["/project1-cover.avif"], 
    summary: "Flutter 기반 시각장애인을 위한 메뉴판 인식 앱 개발 프로젝트",
    description: `
2020년 고등학교 1학년 시절, 당시 키오스크 사용이 아직 활발하지 않았던 시기에  
저시력 시각장애인의 외식 경험 개선을 목표로 기획하고 Flutter로 개발했습니다.  

시각장애인이 겪는 일상적 불편함을 이해하기 위해  
관련 자료 조사 및 장애인 연합회 방문, 인터뷰를 진행하였습니다.  

앱은 체인점 메뉴판을 크롤링하여 텍스트로 보여주고,  
글씨체, 글씨 크기, 배경색 등을 자유롭게 조절할 수 있도록 구현하였으며  
비체인점 매장에서는 카메라 확대 기능과 음성 읽기 기능까지 탑재하였습니다.  

이 프로젝트는 기획, 디자인, 개발, 발표까지 전 과정을 스스로 주도한 경험으로,  
소수자를 위한 기술의 실질적 의미를 체감하고  
진로를 ‘사회적 가치를 실현하는 개발자’로 정하는 계기가 되었습니다.
`,
    tags: ["Flutter", "기획", "접근성", "사회적 소수자"],
  },
  {
    title: "육아맘을 위한 검색 플랫폼 개발",
    coverImage: "/project2.png",
    detailImages: ["/project2-cover.png"],
    summary: "육아맘 대상 AI 추천 기반 육아용품 검색 플랫폼 구현 ing wnd ~~",
    description: "React + TypeScript 기반 이미지 기반 육아템 검색 기능 구현.",
    tags: ["React", "TypeScript", "AI 추천", "UX"],
  },
  {
    title: "The CRUX 2025 – 산학협력 프로젝트 대상 수상",
    coverImage: "/project3.png",
    detailImages: ["/project3-cover.jpg"],
    summary: "실무 협업 프로젝트에서 ‘캠퍼스 서랍’ 기획 및 대상 수상",
    description: "‘캠퍼스 서랍’ 기획 및 UI/UX 설계. 실무형 협업 프로젝트 대상 수상.",
    tags: ["UI/UX", "기획", "산학협력"],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-24 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">프로젝트 소개</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectList.map((p, idx) => (
          <div key={idx} onClick={() => setSelectedProject(p)}>
            <ProjectCard {...p} />
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
