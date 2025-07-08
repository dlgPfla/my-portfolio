const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* 여러 이미지 보여주기 */}
        <div className="mb-4">
          {project.detailImages.map((src, i) => (
            <img key={i} src={src} alt={`${project.title}-${i}`} className="w-full mb-2 rounded" />
          ))}
        </div>

        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        
        {/* 줄바꿈(\n) 처리 */}
        <p className="text-sm text-gray-700 whitespace-pre-line">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectModal;
