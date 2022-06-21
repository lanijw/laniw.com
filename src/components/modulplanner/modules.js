export const Profile = {
  NONE: 0,
  ICT: 1,
  WEB: 2,
  DATA_SCI: 3,
  SPATIAL_COMP: 4,
};

function generateModule(
  id,
  credits,
  hardDeps,
  softDeps = [],
  assessment = false,
  assessmentSpecial = false,
  relevantProfile = Profile.NONE
) {
  return {
    id,
    credits,
    hardDeps,
    softDeps,
    assessment,
    assessmentSpecial,
    relevantProfile,
  };
}

function generateProjectModules() {
  const starterProjects = ["pro1I", "pro2I", "pro3I", "pro4I", "pro5I"];
  const starterProjectModules = starterProjects.map((n, i) =>
    generateModule(n, 6, starterProjects.slice(0, i))
  );
  const finalProject = generateModule("pro6I", 12, [
    "pro1I",
    "pro2I",
    "pro3I",
    "pro4I",
    "pro5I",
  ]);
  return [...starterProjectModules, finalProject];
}

function generateBwlModules() {
  return ["bufor", "brwsm", "bprma"].map(n => generateModule(n, 2, []));
}

function generateCommModules() {
  return ["agrh", "sprx", "df2", "df1"].map(n => generateModule(n, 2, []));
}

function generateEnglModules() {
  const englModules = [
    "den1",
    "den2",
    "ten1",
    "ten2",
    "edse",
    "engw",
    "ewr",
    "eidpe",
    "ehsw",
    "erctc",
    "etc1",
    "ecpe",
    "ecpe1",
    "ecpe2",
    "ecae",
    "ecae1",
    "ecae2",
    "eadc",
    "eace",
    "ecura",
    "ecro",
    "ebec1",
    "ebec2",
    "esfss",
    "egi",
    "eprco",
    "efst",
    "edc",
    "ells",
    "ekn",
    "ekn2",
    "emm",
    "edd",
    "etmm",
  ];
  return englModules.map(n => generateModule(n, 2, []));
}

function generateGswModules() {
  const cultureHistoryModules = [
    "apgz",
    "awrp",
    "chgw",
    "ents",
    "etm",
    "gswbb",
    "incaw",
    "inder",
    "infge",
    "jkg",
    "koge",
    "moke",
    "mgfg",
    "nmo",
    "oekg",
    "rgf",
    "sapp",
    "scc",
    "teph",
    "umb",
    "wccw",
    "wusa",
    "rukg",
    "mbb",
    "lwl",
    "krko",
    "phil",
    "veth",
    "teg",
  ];
  const societyEconomyRights = [
    "apsy",
    "arwk",
    "cemB",
    "fhrg",
    "infg",
    "infre",
    "kmgt",
    "opd",
    "patr",
    "psych",
    "rweENG",
    "sisop",
    "soz",
    "ter",
    "topsiB",
    "wiwaB",
    "imchB",
    "lean",
    "gef",
  ];
  const ethicsEcologySustainabilityModules = [
    "enstr",
    "krgw",
    "kufm",
    "oek",
    "sys",
    "tehab",
    "tet",
    "uwe",
    "ffup",
    "nww",
  ];
  return [
    ...cultureHistoryModules,
    ...societyEconomyRights,
    ...ethicsEcologySustainabilityModules,
  ].map(n => generateModule(n, 2, []));
}

function generateProgModules() {
  const oop1 = generateModule("oop1", 3, [], ["eipr"], true);
  const oop2 = generateModule("oop2", 3, ["oop1"], [], true);
  const algd1 = generateModule("algd1", 3, ["mgli", "oop1"], ["eana"], true);
  const algd2 = generateModule("algd2", 3, ["algd1", "oop2"]);
  const prcpp = generateModule("prcpp", 3, ["algd2"]);
  const conpr = generateModule("conpr", 3, ["algd2"]);
  const cpib = generateModule("cpib", 3, ["mgli", "oop2"]);
  const fprog = generateModule("fprog", 3, [], ["eipr"]);
  return [oop1, oop2, algd1, algd2, prcpp, conpr, cpib, fprog];
}

function generateSweModules() {
  const req = generateModule("req", 3, [], [], true);
  const edbs = generateModule("edbs", 3, [], [], true);
  const swc = generateModule("swc", 3, ["oop1"], [], true);
  const uuid = generateModule("uuid", 3, [], [], false, true);
  const depa = generateModule("depa", 3, ["oop2"]);
  const sepC = generateModule("sepC", 3, ["req"]);
  const swa = generateModule("swa", 3, ["depa", "req"]);
  const vesys = generateModule(
    "vesys",
    3,
    ["oop2"],
    [],
    false,
    false,
    Profile.WEB
  );
  return [req, edbs, swc, uuid, depa, sepC, swa, vesys];
}

function generateIctModules() {
  const sysad = generateModule("sysad", 3, [], [], true);
  const dnet1 = generateModule("dnet1", 3, [], [], true);
  const bsys = generateModule("bsys", 3, ["sysad"], [], true);
  const syspr = generateModule("syspr", 3, ["bsys"]);
  const cloud = generateModule("cloud", 3, []);
  const dnet2 = generateModule("dnet2", 3, ["dnet1"]);
  const itsm = generateModule("itsm", 3, ["bsys"]);
  const infsec = generateModule("infsec", 3, [], [], false, true);
  return [sysad, dnet1, bsys, syspr, cloud, dnet2, itsm, infsec];
}

function generateMathModules() {
  const mgli = generateModule("mgli", 3, [], [], true);
  const lag = generateModule("lag", 3, [], [], true);
  const eana = generateModule("eana", 3, ["mgli", "lag"], [], true);
  const mada = generateModule("mada", 3, ["mgli"], [], false, true);
  const dist = generateModule("dist", 3, ["mgli", "lag", "eana"]);
  const vana = generateModule("vana", 3, ["mgli", "lag", "eana"]);
  const kry = generateModule("kry", 3, ["mada"]);
  const eti = generateModule("eti", 3, ["mgli"]);
  return [mgli, lag, eana, mada, dist, vana, kry, eti];
}

function generateBaseModules() {
  return {
    prog: {
      minCredits: 18,
      modules: generateProgModules(),
    },
    swe: {
      minCredits: 18,
      modules: generateSweModules(),
    },
    ict: {
      minCredits: 18,
      modules: generateIctModules(),
    },
    math: {
      minCredits: 18,
      modules: generateMathModules(),
    },
  };
}

function generateAdvancedIctModules() {
  const pcls = generateModule(
    "pcls",
    3,
    ["cloud", "dnet2"],
    [],
    false,
    false,
    Profile.ICT
  );
  const cysL = generateModule(
    "cysL",
    3,
    ["netsi", "bsys"],
    [],
    false,
    false,
    Profile.ICT
  );
  const cpnet = generateModule(
    "cpnet",
    3,
    ["dnet2"],
    [],
    false,
    false,
    Profile.ICT
  );
  const netsi = generateModule(
    "netsi",
    3,
    ["kry", "dnet2"],
    [],
    false,
    false,
    Profile.ICT
  );
  const itfs = generateModule(
    "itfs",
    3,
    ["pcls"],
    [],
    false,
    false,
    Profile.ICT
  );
  const wosm = generateModule(
    "wosm",
    3,
    ["itfs", "cysL"],
    [],
    false,
    false,
    Profile.ICT
  );
  return {
    requiredModule: "wosm",
    minModules: 6,
    modules: [pcls, cysL, cpnet, netsi, itfs, wosm],
  };
}

function generateAdvancedWebModules() {
  const webcl = generateModule(
    "webcl",
    3,
    ["webpr"],
    [],
    false,
    false,
    Profile.WEB
  );
  const webfr = generateModule(
    "webfr",
    3,
    ["depa", "vesys"],
    [],
    false,
    false,
    Profile.WEB
  );
  const eaf = generateModule(
    "eaf",
    3,
    ["depa", "vesys", "dbarc"],
    [],
    false,
    false,
    Profile.WEB
  );
  const apm = generateModule(
    "apm",
    3,
    ["algd2", "vesys", "bsys"],
    [],
    false,
    false,
    Profile.WEB
  );
  const apsi = generateModule(
    "apsi",
    3,
    ["infsec", "syspr", "kry", "infsec"],
    [],
    false,
    false,
    Profile.WEB
  );
  const ddm = generateModule(
    "ddm",
    3,
    ["dbarc"],
    [],
    false,
    false,
    Profile.WEB
  );
  const woweb = generateModule(
    "woweb",
    3,
    ["apsi", "webfr", "eaf", "apm", "webcl"],
    [],
    false,
    false,
    Profile.WEB
  );
  return {
    requiredModule: "woweb",
    minModules: 10,
    modules: [webcl, webfr, eaf, apm, apsi, ddm, woweb],
  };
}

function generateAdvancedDataSciModules() {
  const nlp = generateModule(
    "nlp",
    3,
    ["oop2", "dist"],
    [],
    false,
    false,
    Profile.DATA_SCI
  );
  const efalg = generateModule(
    "efalg",
    3,
    ["mada", "eana", "algd2"],
    [],
    false,
    false,
    Profile.DATA_SCI
  );
  const bverI = generateModule(
    "bverI",
    3,
    ["vana", "magb", "algd1"],
    [],
    false,
    false,
    Profile.DATA_SCI
  );
  const pac = generateModule(
    "pac",
    3,
    ["syspr"],
    [],
    false,
    false,
    Profile.DATA_SCI
  );
  const ml = generateModule(
    "ml",
    3,
    ["dsp", "dist", "vana"],
    [],
    false,
    false,
    Profile.DATA_SCI
  );
  const wods = generateModule(
    "wods",
    3,
    ["ml", "efalg", "nlp", "bverI"],
    [],
    false,
    false,
    Profile.DATA_SCI
  );
  return {
    requiredModule: "wods",
    minModules: 8,
    modules: [nlp, efalg, bverI, pac, ml, wods],
  };
}

function generateAdvancedSpatialCompModules() {
  const comgr = generateModule(
    "comgr",
    3,
    ["oop2", "magb"],
    [],
    false,
    false,
    Profile.SPATIAL_COMP
  );
  const efalg = generateModule(
    "efalg",
    3,
    ["mada", "eana", "algd2"],
    [],
    false,
    false,
    Profile.SPATIAL_COMP
  );
  const bverI = generateModule(
    "bverI",
    3,
    ["vana", "magb"],
    [],
    false,
    false,
    Profile.SPATIAL_COMP
  );
  const exr = generateModule(
    "exr",
    3,
    ["comgr", "ecnf", "uied"],
    [],
    false,
    false,
    Profile.SPATIAL_COMP
  );
  const simag = generateModule(
    "simag",
    3,
    ["algd2"],
    [],
    false,
    false,
    Profile.SPATIAL_COMP
  );
  const wosc = generateModule(
    "wosc",
    3,
    ["efalg", "bverI"],
    ["simag", "exr", "sdent"],
    false,
    false,
    Profile.SPATIAL_COMP
  );
  return {
    requiredModule: "wosc",
    minModules: 7,
    modules: [comgr, efalg, bverI, exr, simag, wosc],
  };
}

function generateAdditionalModules() {
  const noDepModules = [
    "adxd",
    "blch",
    "cose",
    "cuie",
    "dnead",
    "dtpC",
    "ebssd",
    "ecnf",
    "emoba",
    "esol",
    "gict",
    "iot",
    "ism",
    "magb",
    "mpm",
    "ios",
    "pct1",
    "pct2",
    "pefu",
    "witec",
  ].map(n => generateModule(n, 3, []));
  const sna = generateModule(
    "sna",
    3,
    ["algd2"],
    [],
    false,
    false,
    Profile.DATA_SCI
  );
  const dsp = generateModule(
    "dsp",
    3,
    ["oop2", "eana"],
    [],
    false,
    false,
    Profile.DATA_SCI
  );
  const ivis = generateModule(
    "ivis",
    3,
    ["lag", "dtpC", "oop2"],
    [],
    false,
    false,
    Profile.DATA_SCI
  );
  const dawr = generateModule(
    "dawr",
    3,
    ["dsp"],
    [],
    false,
    false,
    Profile.DATA_SCI
  );
  const stads = generateModule(
    "stads",
    3,
    ["lag", "mgli"],
    [],
    false,
    false,
    Profile.DATA_SCI
  );
  const fprod = generateModule(
    "fprod",
    3,
    ["fprog"],
    ["eipr"],
    false,
    false,
    Profile.WEB
  );
  const dbarc = generateModule("dbarc", 3, ["edbs"]);

  const eipr = generateModule("eipr", 3, [], [], false, true);
  const perl = generateModule("perl", 3, ["oop2"]);
  const pfcs = generateModule("pfcs", 3, ["lag", "eana"]);
  const qpmC = generateModule("qpmC", 3, ["sepC"]);
  const sdent = generateModule(
    "sdent",
    3,
    ["comgr", "pfcs", "ecnf"],
    [],
    false,
    false,
    Profile.SPATIAL_COMP
  );
  const stqm = generateModule(
    "stqm",
    3,
    ["swc"],
    [],
    false,
    false,
    Profile.WEB
  );
  const uied = generateModule(
    "uied",
    3,
    ["dtpC"],
    [],
    false,
    false,
    Profile.SPATIAL_COMP
  );
  const webeC = generateModule(
    "webeC",
    3,
    ["oop2", "edbs"],
    [],
    false,
    true,
    Profile.WEB
  );
  const webpr = generateModule(
    "webpr",
    3,
    ["oop2"],
    ["algd1", "webeC"],
    false,
    false,
    Profile.WEB
  );
  return [
    ...noDepModules,
    eipr,
    perl,
    pfcs,
    qpmC,
    sdent,
    stqm,
    uied,
    webeC,
    webpr,
    sna,
    dsp,
    ivis,
    dawr,
    stads,
    fprod,
    dbarc,
  ];
}

export const modules = {
  minCredits: 180,
  projects: {
    minCredits: 42,
    modules: generateProjectModules(),
  },
  mainModules: {
    minCredits: 111,
    baseModules: generateBaseModules(),
    advancedModules: {
      minCredits: 18,
      ict: generateAdvancedIctModules(),
      web: generateAdvancedWebModules(),
      dataSci: generateAdvancedDataSciModules(),
      spatialComp: generateAdvancedSpatialCompModules(),
    },
    additionalModules: {
      minCredits: 0,
      modules: generateAdditionalModules(),
    },
  },
  bwl: {
    minCredits: 4,
    modules: generateBwlModules(),
  },
  comm: {
    minCredits: 4,
    modules: generateCommModules(),
  },
  engl: {
    minCredits: 8,
    modules: generateEnglModules(),
  },
  gsw: {
    minCredits: 6,
    modules: generateGswModules(),
  },
};

export const allModules = [
  ...modules.projects.modules,
  ...modules.mainModules.baseModules.prog.modules,
  ...modules.mainModules.baseModules.swe.modules,
  ...modules.mainModules.baseModules.ict.modules,
  ...modules.mainModules.baseModules.math.modules,
  ...modules.mainModules.advancedModules.ict.modules,
  ...modules.mainModules.advancedModules.web.modules,
  ...modules.mainModules.advancedModules.dataSci.modules,
  ...modules.mainModules.advancedModules.spatialComp.modules,
  ...modules.mainModules.additionalModules.modules,
  ...modules.bwl.modules,
  ...modules.comm.modules,
  ...modules.engl.modules,
  ...modules.gsw.modules,
];
