'use strict';

export const projects = () => {
  const categories = document.querySelector('.categories');
  const projectList = document.querySelectorAll('.project');
  const projectListContainer = document.querySelector('.projects');

  categories.addEventListener('click', (e) => {
    const filter = e.target.dataset.category;

    if (!filter) return;

    handleActiveSelection(e.target);
    filterProjects(filter, projectList, projectListContainer);
  });
};

const handleActiveSelection = (target) => {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
};

const filterProjects = (filter, projectList, projectListContainer) => {
  projectList.forEach((project) => {
    if (filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
  projectListContainer.classList.add('anim-out');
  setTimeout(() => {
    projectListContainer.classList.remove('anim-out');
  }, 250);
};
