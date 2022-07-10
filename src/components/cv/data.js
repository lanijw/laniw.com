const languageSkills = [
  {
    skill: "English",
    completion: 1
  },
  {
    skill: "German",
    completion: 1
  },
  {
    skill: "French",
    completion: 0.8
  }
];

const mainCodingSkills = [
  {
    skill: "Java",
    completion: 1
  },
  {
    skill: "HTML",
    completion: 1
  },
  {
    skill: "CSS",
    completion: 0.8
  },
  {
    skill: "JavaScript",
    completion: 1
  },
  {
    skill: "TypeScript",
    completion: 0.7
  },
  {
    skill: "Svelte/SvelteKit",
    completion: 0.9
  }
];

const secondaryCodingSkills = [
  {
    skill: "LaTeX",
    completion: 1
  },
  {
    skill: "Python",
    completion: 0.8
  },
  {
    skill: "PHP",
    completion: 0.7
  },
  {
    skill: "MySQL",
    completion: 0.85
  }
];

const otherSkills = [
  {
    skill: "Web Development",
    completion: 0.8
  },
  {
    skill: "Project Management",
    completion: 0.6
  },
  {
    skill: "Event Planning",
    completion: 0.7
  },
  {
    skill: "Tutoring",
    completion: 0.8
  }
];

export const allSkills = [
  {
    skills: languageSkills,
    color: "bg-sky-600"
  },
  {
    skills: mainCodingSkills,
    color: "bg-amber-500"
  },
  {
    skills: secondaryCodingSkills,
    color: "bg-red-500"
  },
  {
    skills: otherSkills,
    color: "bg-teal-500"
  }
];

export const ExperienceType = {
  EDUCATION: 1,
  EXTRACURRICULAR: 2,
  WORK: 3
};

export const ExperienceTypeMap = new Map([
  [ExperienceType.EDUCATION, "Education"],
  [ExperienceType.EXTRACURRICULAR, "Extracurricular"],
  [ExperienceType.WORK, "Work"],
])

class ExperienceItem {
  constructor(from, to, type, title, org = undefined) {
    this.from = from;
    this.to = to;
    this.type = type;
    this.title = title;
    this.org = org;
  }
}

export const experiences = [
  new ExperienceItem(
    "Jan 2022",
    "Now",
    ExperienceType.EXTRACURRICULAR,
    "Student's Union Vice President"
  ),
  new ExperienceItem(
    "Sep 2021",
    "Now",
    ExperienceType.WORK,
    "3D-Printer Lab Manager", "makerstudio"
  ),
  new ExperienceItem(
    "Sep 2021",
    "Now",
    ExperienceType.EDUCATION,
    "BSc Computer Sciences",
    "University of Applied Sciences and Arts Northwestern Switzerland"
  ),
  new ExperienceItem(
    "Aug 2017",
    "Aug 2021",
    ExperienceType.WORK,
    "Software Engineering Apprenticeship",
    "Google Switzerland GmbH"
  ),
  new ExperienceItem(
    "Aug 2017",
    "May 2021",
    ExperienceType.EDUCATION,
    "Berufsmaturit&auml;tsschule Z&uuml;rich"
  ),
  new ExperienceItem(
    "Aug 2017",
    "Jan 2021",
    ExperienceType.EDUCATION,
    "Technische BErufssschule Z&uuml;rich"
  ),
];