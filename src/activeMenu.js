'use strict';

export const activeMenu = () => {
  const sectionIds = [
    '#home',
    '#about',
    '#skills',
    '#work',
    '#testimonial',
    '#contact',
  ];

  const sections = sectionIds.map((id) => document.querySelector(id));
  const navItems = sectionIds.map((id) =>
    document.querySelector(`[href="${id}"]`),
  );
  const visibleSections = sectionIds.map(() => false);

  let activeNavItem = navItems[0];

  const findFirstInterSecting = (intersections) => {
    const index = intersections.indexOf(true);
    return index >= 0 ? index : 0;
  };

  const selectNavItem = (index) => {
    const navItem = navItems[index];

    // 방어로직 추가
    if (!navItem) return;

    activeNavItem.classList.remove('active');
    activeNavItem = navItem;
    activeNavItem.classList.add('active');
  };

  const callback = (entries) => {
    let selectLastOne = undefined;
    entries.forEach((entry) => {
      const index = sectionIds.indexOf(`#${entry.target.id}`);
      visibleSections[index] = entry.isIntersecting;
      selectLastOne =
        index === sectionIds.length - 1 &&
        entry.isIntersecting &&
        //threshold 보다 낮게 조정.
        entry.intersectionRatio >= 0.95;
    });

    const navIndex = selectLastOne
      ? sectionIds.length - 1
      : findFirstInterSecting(visibleSections);

    selectNavItem(navIndex);
  };

  const options = {
    rootMargin: '-20% 0px 0px 0px',
    // 처음들어왔을때 / 나갈때 측정 0.98 (더정확한 측정을 위해) -> 1로하면 오작동하는 경우가 존재
    threshold: [0, 0.98],
  };

  const observer = new IntersectionObserver(callback, options);
  sections.forEach((section) => {
    observer.observe(section);
  });
};
