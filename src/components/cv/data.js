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
  [ExperienceType.WORK, "Work"]
]);

class ExperienceItem {
  constructor(from, to, type, title, desc, org = undefined) {
    this.from = from;
    this.to = to;
    this.type = type;
    this.title = title;
    this.desc = desc;
    this.org = org;
  }
}

export const experiences = [
  new ExperienceItem(
    "Jan 2022",
    "Now",
    ExperienceType.EXTRACURRICULAR,
    "Student's Union President",
    "Since January 2022 I have been active in a co-presidency leading the student's union. The student's union at the FHNW (my college) represents the student body toward the school and organizes events during the semester."
  ),
  new ExperienceItem(
    "Sep 2021",
    "Now",
    ExperienceType.WORK,
    "3D-Printer Lab Manager",
    "I joined the makerstudio as a Lab Manager when I started my BSc in" +
    "Computer Science. I am responsible for organizing introductory courses to" +
    "print 3D objects on our printers and leading sessions for people to start" +
    "their prints.",
    "makerstudio"
  ),
  new ExperienceItem(
    "Sep 2021",
    "Now",
    ExperienceType.EDUCATION,
    "BSc Computer Science",
    "After my apprenticeship I went to study " +
    "<a href='https://www.fhnw.ch/en/degree-programmes/engineering/computer-sciences' class='d-link d-link-primary'>computer science at the FHNW</a> " +
    "(University of Applied Sciences and Arts Northwestern Switzerland, German: " +
    "Fachhochschule Nordwestschweiz) because I wanted to complement the practical " +
    "experience I got through my apprenticeship with a focus on the practical applications.",
    "FHNW"
  ),
  new ExperienceItem(
    "Aug 2017",
    "Aug 2021",
    ExperienceType.WORK,
    "Software Engineering Apprenticeship",
    'I was originally interested in taking the typical "American" ' +
      "educational path, but quickly realised that the purely theoretical " +
      "application of my knowledge seemed rather boring, so I finish the last " +
      "years of mandatory education and started my apprenticeship at Google at " +
      "the age of 15. The following list gives you an overview of the projects " +
      "I worked on." +
      '<ul class="list-disc ml-6">' +
      "<li>Maintenance and Development of internal validation systems for Privacy and Policy</li>" +
      '<li>Migration of internal review system for <a href="https://shopping.google.com/" class="d-link d-link-primary">Google Shopping</a> Internal Tools and Automation Team</li>' +
      '<li>Migration support for a new <a href="https://www.google.com/intl/de/calendar/about/" class="d-link d-link-primary">Android Calendar</a> Framework</li>' +
      "<li>Internal technical support</li>" +
      '<li>External technical support for <a href="https://cloud.google.com/" class="d-link d-link-primary">Google Cloud</a></li>' +
      "<li>Apprentice event organisation</li>" +
      "<li>Documentation and Requirements Engineering</li>" +
      "</ul>",
    "Google Switzerland GmbH"
  ),
  new ExperienceItem(
    "Aug 2017",
    "Aug 2021",
    ExperienceType.EDUCATION,
    "Berufsmaturit&auml;tsschule Z&uuml;rich<br>Technische Berufssschule Z&uuml;rich",
    "Every apprenticeship in Switzerland has a work portion and an school " +
    "portion. In my case I visited a school for my general education called a " +
    "<a href='https://www.berufsberatung.ch/dyn/show/3309' class='d-link d-link-primary'>BMS</a> " +
    "and a school for my technical education called the TBZ, which is mandatory " +
    "for the <a href='https://www.berufsberatung.ch/dyn/show/1922' class='d-link d-link-primary'>EFZ</a> " +
    "diploma I received at the end."
  )
];
