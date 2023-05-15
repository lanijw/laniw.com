const age = 20;
export const englishHeroText =
  "Hi, I'm <span class='font-semibold'>Lani</span> (<span " +
  `data-tooltip="${age} years old" ` +
  `class="after:text-2xl">${age}<span class="lg:hidden">y</span></span ` +
  ">), an up-and-coming software engineer based in Switzerland.";
export const germanHeroText =
  "Hallo, ich bin <span class='font-semibold'>Lani</span> (<span " +
  `data-tooltip="${age} Jahre alt" ` +
  `class="after:text-2xl">${age}<span class="lg:hidden">J</span></span ` +
  ">), ein " +
  "Informatiker bzw. Full Stack Entwickler aus der Schweiz.";

export const englishSkillsTitle = "Skills";
export const germanSkillsTitle = "F&auml;higkeiten";

export const englishExperienceTitle = "Education and Experience";
export const germanExperienceTitle = "Ausbildung und Erfahrung";

export const englishExtraChip = "Extracurricular";
export const englishWorkChip = "Work";
export const englishEduChip = "Education";
export const germanExtraChip = "Ehrenamtlich";
export const germanWorkChip = "Arbeit";
export const germanEduChip = "Ausbildung";

export const englishContactTitle = "Shoot me a Message!";
export const germanContactTitle = "Schick mir doch 'ne Nachricht!";

export const englishCopyInstruction = "Copy email address";
export const germanCopyInstruction = "E-Mail Adresse kopieren";

const colorfulGoogle =
  "<span class='font-semibold'><span class='text-[#4285F4]'>G</span>" +
  "<span class='text-[#DB4437]'>o</span>" +
  "<span class='text-[#F4B400]'>o</span>&shy;" +
  "<span class='text-[#4285F4]'>g</span>" +
  "<span class='text-[#0F9D58]'>l</span>" +
  "<span class='text-[#DB4437]'>e</span></span>";

const colorfulFhnw =
  "<span class='font-semibold'>FH&shy;" +
  "<span class='text-black bg-[#FDE70E] pl-0.5 pr-1 pb-0.5'>NW</span></span>";

const colorfulMakerstudio =
  "<span class='font-semibold text-green-700'>Ma&shy;ker&shy;Stu&shy;di&shy;o</span> ";

const colorfulStudents =
  "<span class='font-semibold'><span class='text-[#B10932]'>stu&shy;dents&shy;.&shy;</span>&shy;" +
  "<span class='text-[#FEED01]'>fhnw</span></span>";

class Skill {
  constructor(skill, completion) {
    this.skill = skill;
    this.completion = completion;
  }
}

const englishLanguageSkills = [
  new Skill("English", 1),
  new Skill("German", 1),
  new Skill("French", 0.8)
];

const germanLanguageSkills = [
  new Skill("Deutsch", 1),
  new Skill("Englisch", 1),
  new Skill("Franz&ouml;sisch", 0.8)
];

const devSkills = [
  new Skill("Frontend", 1),
  new Skill("Backend", 1),
  new Skill("DB", 0.8)
];

const englishOtherSkills = [
  new Skill("Web Development", 1),
  new Skill("Project Management", 0.6),
  new Skill("Event Organisation", 0.7),
  new Skill("Tutoring", 0.8)
];

const germanOtherSkills = [
  new Skill("Webentwicklung", 1),
  new Skill("Projektleitung", 0.6),
  new Skill("Veranstaltungsorganisation", 0.7),
  new Skill("Nachhilfeunterricht", 0.8)
];

export const SkillType = {
  LANGUAGE: 1,
  DEV: 2,
  OTHER: 4
};

class SkillCategory {
  constructor(skills, category) {
    this.skills = skills;
    this.category = category;
  }
}

export const englishSkills = [
  new SkillCategory(englishLanguageSkills, SkillType.LANGUAGE),
  new SkillCategory(devSkills, SkillType.DEV),
  new SkillCategory(englishOtherSkills, SkillType.OTHER)
];

export const germanSkills = [
  new SkillCategory(germanLanguageSkills, SkillType.LANGUAGE),
  new SkillCategory(devSkills, SkillType.DEV),
  new SkillCategory(germanOtherSkills, SkillType.OTHER)
];

export const ExperienceType = {
  EDUCATION: 1,
  EXTRACURRICULAR: 2,
  WORK: 3
};

export const EnglishExperienceTypeMap = new Map([
  [ExperienceType.EDUCATION, englishEduChip],
  [ExperienceType.EXTRACURRICULAR, englishExtraChip],
  [ExperienceType.WORK, englishWorkChip]
]);

export const GermanExperienceTypeMap = new Map([
  [ExperienceType.EDUCATION, germanEduChip],
  [ExperienceType.EXTRACURRICULAR, germanExtraChip],
  [ExperienceType.WORK, germanWorkChip]
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

export const englishExperiences = [
  new ExperienceItem(
    "Jan 2022",
    "Now",
    ExperienceType.EXTRACURRICULAR,
    "Student Union President",
    "Since January 2022 I have been active in a co-presidency leading the " +
      "student's union. We represent the student body toward the school and " +
      "organizes events during the semester. The following list gives you an " +
      "overview of the projects I worked on." +
      '<ul class="list-disc ml-6">' +
      "<li>Organizing events for 1000+ people</li>" +
      "<li>Organizing meetings with members</li>" +
      "<li>Organizing meetings with the student union board</li>" +
      "<li>Taking minutes for meetings</li>" +
      "<li>General oversight of student union involvment</li>" +
      "<li>Student's union Lead</li>" +
      "</ul>",
    colorfulStudents
  ),
  new ExperienceItem(
    "Sep 2021",
    "Jul 2022",
    ExperienceType.WORK,
    "3D-Printer Lab Manager",
    "I joined the MakerStudio as a Lab Manager when I started my BSc in " +
      "Computer Science. I am responsible for organizing introductory courses to " +
      "print 3D objects on our printers and leading sessions for people to help " +
      "them start their prints.",
    colorfulMakerstudio
  ),
  new ExperienceItem(
    "Sep 2021",
    "Now",
    ExperienceType.EDUCATION,
    "BSc Computer Science",
    "After my apprenticeship I went to study " +
      "<a href='https://www.fhnw.ch/en/degree-programmes/engineering/computer-sciences' class='d-link d-link-primary'>computer science at the FHNW</a> " +
      "(University of Applied Sciences and Arts Northwestern Switzerland, German: " +
      "Fachhochschule Nordwestschweiz) because I want to complement the practical " +
      "experience I got through my apprenticeship with the theory.",
    colorfulFhnw
  ),
  new ExperienceItem(
    "Aug 2017",
    "Aug 2021",
    ExperienceType.WORK,
    "Software Engineering Apprenticeship",
    'I was originally interested in taking the typical "American" ' +
      "educational path, but quickly realised that the purely theoretical " +
      "application of my knowledge seemed rather boring, so I finished the last " +
      "years of mandatory education and started my apprenticeship at Google. " +
      "The following list gives you an overview of the projects " +
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
    `${colorfulGoogle} Switzerland GmbH`
  ),
  new ExperienceItem(
    "Aug 2017",
    "Aug 2021",
    ExperienceType.EDUCATION,
    "Berufsmaturit&auml;tsschule Z&uuml;rich<br>Technische Berufsschule Z&uuml;rich",
    "Every apprenticeship in Switzerland has a work portion and an school " +
      "portion. In my case I visited a school for my general education called the " +
      "<a href='https://www.berufsberatung.ch/dyn/show/3309' class='d-link d-link-primary'>BMS</a> " +
      "and a school for my technical education called the TBZ, which is mandatory " +
      "for the <a href='https://www.berufsberatung.ch/dyn/show/1922' class='d-link d-link-primary'>EFZ</a> " +
      "diploma I received at the end." +
      "<ul class='list-disc ml-6'>" +
      "<li>Final grade BMS: " +
      "<span data-tooltip='passing: 4, good: 5, exceeds: 6'>5.2</span></li>" +
      "<li>Final grade TBZ: " +
      "<span data-tooltip='passing: 4, good: 5, exceeds: 6'>5.5</span></li>" +
      "</ul>"
  )
];

export const germanExperiences = [
  new ExperienceItem(
    "Jan 2022",
    "Jetzt",
    ExperienceType.EXTRACURRICULAR,
    "Pr&auml;&shy;si&shy;di&shy;um Stu&shy;den&shy;ten&shy;ver&shy;ein&shy;i&shy;gung",
    "Seit Januar 2022 bin ich in der Fachschaft Technik in einem " +
      "Kopr&auml;sidium aktiv. Die Studentenvereinigiung an der FHNW " +
      "repr&auml;sentiert die Studenten gegen&uuml;ber der Schule und organisiert " +
      "Veranstaltungen f&uuml;r die Studenten w&auml;hrend dem Semester. Die " +
      "Liste bietet eine &Uuml;bersicht der verschiedenen Projekte an denen ich " +
      "w&auml;hrend dieser Zeit gearbeitet habe." +
      '<ul class="list-disc ml-6">' +
      "<li>Veranstaltungsorganisation f&uuml;r 1000+ Personen</li>" +
      "<li>Mitgliedssitzungen organisieren</li>" +
      "<li>Vorstandssitzungen organisieren</li>" +
      "<li>Protokoll f&uuml;r Sitzungen f&uuml;hren</li>" +
      "<li>&Uuml;bersicht der studentischen Mitwirkung</li>" +
      "<li>Leitung Fachschaft</li>" +
      "</ul>",
    colorfulStudents
  ),
  new ExperienceItem(
    "Sep 2021",
    "Jul 2022",
    ExperienceType.WORK,
    "3D-Drucker Lab Manager",
    "Als ich meinen BSc in Informatik an der FHNW gestartet habe, bin ich " +
      "auch dem MakerStudio als Lab Manager beigetreten. Ich bin " +
      "daf&uuml;r verantwortlich Einf&uuml;hrungskurse f&uuml;r die 3D-Drucker " +
      "zu leiten und die Kunden beim Drucken zu unterst&uuml;tzen.",
    colorfulMakerstudio
  ),
  new ExperienceItem(
    "Sep 2021",
    "Jetzt",
    ExperienceType.EDUCATION,
    "BSc Informatik",
    "Nach meiner Lehre ging ich " +
      "<a href='https://www.fhnw.ch/de/studium/technik/informatik'>Informatik an der FHNW</a> " +
      "(Fachhochschule Nordwestschweiz) studieren, weil ich meine praktische " +
      "Erfahrung durch die entsprechende Theorie erg&auml;nzen m&ouml;chte.",
    colorfulFhnw
  ),
  new ExperienceItem(
    "Aug 2017",
    "Aug 2021",
    ExperienceType.WORK,
    "Lehre Informatik Applikationsentwicklung",
    "Ich wollte urspr&uuml;nglich den typischen Ausbildungsweg der Schweiz " +
      "mit Gymnasium gehen, merkte aber sehr schnell, dass ich den rein " +
      "theoretischen Weg sehr langweilig " +
      "finde. Also wechselte ich stattdessen in die Sekundarstufe und begann " +
      "anschliessend meine Lehre bei Google. Die folgende " +
      "Liste bietet eine &Uuml;bersicht der verschiedenen Projekte an denen ich " +
      "w&auml;hrend dieser Zeit gearbeitet habe." +
      '<ul class="list-disc ml-6">' +
      "<li>Wartung und Erweiterung interner Pr&uuml;fsysteme im Privatsph&auml;renbereich</li>" +
      '<li>Migration eines internen Reviewsystems im <a href="https://shopping.google.com/" class="d-link d-link-primary">Google Shopping</a> Internal Tools and Automation Team</li>' +
      '<li>Unterst&uuml;tzung bei der Migration auf ein neues Framework im <a href="https://www.google.com/intl/de/calendar/about/" class="d-link d-link-primary">Android Calendar</a> Team</li>' +
      "<li>Interner technischer Support</li>" +
      '<li>Unterst&uuml;tzung bei externem technischen Support <a href="https://cloud.google.com/" class="d-link d-link-primary">Google Cloud</a></li>' +
      "<li>Planung Lehrlingsanl&auml;sse</li>" +
      "<li>Erstellung von Projektdokumentation und Anforderungsanalyse</li>" +
      "</ul>",
    `${colorfulGoogle} Schweiz GmbH`
  ),
  new ExperienceItem(
    "Aug 2017",
    "Aug 2021",
    ExperienceType.EDUCATION,
    "Berufsmaturit&auml;tsschule Z&uuml;rich<br>Technische Berufsschule Z&uuml;rich",
    "Jede Lehre umfasst einen Arbeitsteil und einen Schulteil. " +
      "In meinem Fall habe ich die " +
      "<a href='https://www.berufsberatung.ch/dyn/show/3309' class='d-link d-link-primary'>BMS</a> " +
      "f&uuml;r meine Allgemeinbildung und die TBZ f&uuml;r meine technische " +
      "Ausbildung besucht, welche f&uuml;r mein abschliessendes " +
      "<a href='https://www.berufsberatung.ch/dyn/show/1922' class='d-link d-link-primary'>EFZ</a> " +
      "Diplom erforderlich ist." +
      "<ul class='list-disc ml-6'>" +
      "<li>Abschlussnote BMS: " +
      "<span data-tooltip='bestanden: 4, gut: 5, ausgezeichnet: 6'>5.2</span></li>" +
      "<li>Abschlussnote TBZ: " +
      "<span data-tooltip='bestanden: 4, gut: 5, ausgezeichnet: 6'>5.5</span></li>" +
      "</ul>"
  )
];
