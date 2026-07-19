// Static placeholder content. Replace via CMS when confirmed by the school.

export const siteSettings = {
  name: "First Class Private School",
  abbreviation: "FCPS",
  motto: "Non Ducor, Duco",
  address: "8514/11 Mbizo, Kwekwe, Zimbabwe",
  phones: ["+263 773 870 090", "+263 713 687 669"],
  email: "info@firstclassprivate.ac.zw",
  whatsapp: "+263 773 870 090",
  curricula: ["ZIMSEC", "Cambridge"],
  offering: "Day school and boarding",
  classSize: "Approximately 25 learners",
  officeHours: {
    weekday: "07:30 – 16:00",
    saturday: "08:00 – 12:00",
  },
  mapEmbedUrl:
    "https://www.google.com/maps?q=8514/11+Mbizo,Kwekwe,Zimbabwe&output=embed",
};

import { ALL_IMAGES, LANDSCAPE_IMAGES, PORTRAIT_IMAGES } from "./image-manifest";

export const images = {
  hero: LANDSCAPE_IMAGES[0] ?? ALL_IMAGES[0],
  intro: LANDSCAPE_IMAGES[2] ?? ALL_IMAGES[2],
  head: PORTRAIT_IMAGES[0] ?? ALL_IMAGES[4],
  boarding: LANDSCAPE_IMAGES[3] ?? ALL_IMAGES[3],
  life1: ALL_IMAGES[10] ?? ALL_IMAGES[0],
  life2: ALL_IMAGES[11] ?? ALL_IMAGES[1],
  life3: ALL_IMAGES[12] ?? ALL_IMAGES[2],
  life4: ALL_IMAGES[13] ?? ALL_IMAGES[3],
  life5: ALL_IMAGES[14] ?? ALL_IMAGES[4],
  life6: ALL_IMAGES[15] ?? ALL_IMAGES[5],
  academics: LANDSCAPE_IMAGES[5] ?? ALL_IMAGES[6],
  sports: LANDSCAPE_IMAGES[6] ?? ALL_IMAGES[7],
  aboutGrid1: LANDSCAPE_IMAGES[7] ?? ALL_IMAGES[8],
  aboutGrid2: LANDSCAPE_IMAGES[8] ?? ALL_IMAGES[9],
  aboutGrid3: LANDSCAPE_IMAGES[9] ?? ALL_IMAGES[10],
  aboutGrid4: LANDSCAPE_IMAGES[10] ?? ALL_IMAGES[11],
  admissions: LANDSCAPE_IMAGES[11] ?? ALL_IMAGES[12],
  transport: LANDSCAPE_IMAGES[13] ?? ALL_IMAGES[14],
  contact: LANDSCAPE_IMAGES[14] ?? ALL_IMAGES[15],
  studentLife: LANDSCAPE_IMAGES[15] ?? ALL_IMAGES[16],
  moments: ALL_IMAGES.slice(0, 20),
};

export const homeContent = {
  hero: {
    headline: "A First-Class Foundation for Every Learner",
    subhead:
      "First Class Private School provides ZIMSEC and Cambridge education in a disciplined, caring and ambitious environment where learners are encouraged to work hard, grow in confidence and take responsibility.",
  },
  intro: {
    title: "A school built on discipline, leadership and care",
    body: [
      "At First Class Private School we believe that strong values create strong learners. Our motto, Non Ducor, Duco — I am not led, I lead — reminds every learner that character, confidence and initiative matter as much as academic achievement.",
      "We serve families in Kwekwe and beyond, offering both day and boarding options, and guiding learners through ZIMSEC and Cambridge pathways in close partnership with parents and guardians.",
    ],
  },
  whyChoose: [
    { title: "Small classes", description: "Classes of approximately 25 learners so teachers can give personal attention." },
    { title: "ZIMSEC & Cambridge", description: "Curriculum pathways that suit each learner’s strengths and future goals." },
    { title: "Experienced teachers", description: "A dedicated teaching staff committed to academic growth and character." },
    { title: "Christian values", description: "A values-based culture rooted in respect, honesty and service." },
    { title: "Day & boarding", description: "Flexible enrolment for families who need day school or full boarding." },
    { title: "Sport & culture", description: "Athletics, clubs and activities that build teamwork and confidence." },
  ],
  head: {
    name: "Head of School",
    title: "[Name to be confirmed]",
    quote:
      "This section contains a draft welcome message. Please replace it with the confirmed head’s welcome once it has been reviewed and approved by the school.",
  },
  boardingTeaser: {
    title: "A supportive boarding environment",
    body: "Boarding at FCPS offers learners a structured, caring home away from home. Specific facilities and routines are available from the school office on request. Please contact us to arrange a visit or request the boarding information sheet.",
  },
  cta: {
    title: "Give your child a strong academic foundation",
    body: "Join a school that values discipline, confidence and personal growth. We invite parents to visit us, meet our staff and begin the admissions conversation.",
  },
};

export const newsItems = [
  {
    id: "1",
    slug: "athletics-day",
    title: "Athletics Day 2026",
    excerpt: "Our annual athletics day brings the whole school together for track and field events.",
    date: "2026-07-25",
    category: "Sport",
  },
  {
    id: "2",
    slug: "valentines-kindness",
    title: "Valentine’s Kindness Activity",
    excerpt: "Learners took part in a kindness campaign supporting the local community.",
    date: "2026-02-14",
    category: "Community",
  },
  {
    id: "3",
    slug: "term-calendar",
    title: "Term Calendar Released",
    excerpt: "Important dates for the new term are now available for parents.",
    date: "2026-01-08",
    category: "Notice",
  },
];

export const upcomingEvents = [
  {
    id: "1",
    slug: "open-day",
    title: "Open Day",
    startDate: "2026-08-05",
    endDate: "2026-08-05",
    time: "09:00 – 13:00",
    location: "FCPS Main Campus",
    category: "Open day",
    featured: true,
  },
  {
    id: "2",
    slug: "civics-day",
    title: "Civics Day",
    startDate: "2026-08-15",
    endDate: "2026-08-15",
    time: "08:00 – 14:00",
    location: "School Grounds",
    category: "Culture",
    featured: false,
  },
  {
    id: "3",
    slug: "educational-trip",
    title: "Educational Trip",
    startDate: "2026-09-02",
    endDate: "2026-09-04",
    time: "All day",
    location: "Bulawayo",
    category: "Trip",
    featured: false,
  },
];

export const downloads = [
  { id: "1", title: "Prospectus", category: "Admissions", fileType: "PDF", fileSize: "—", updatedAt: "—" },
  { id: "2", title: "Application Form", category: "Admissions", fileType: "PDF", fileSize: "—", updatedAt: "—" },
  { id: "3", title: "Fees Document", category: "Finance", fileType: "PDF", fileSize: "—", updatedAt: "—" },
  { id: "4", title: "Term Calendar", category: "Calendar", fileType: "PDF", fileSize: "—", updatedAt: "—" },
  { id: "5", title: "Uniform List", category: "General", fileType: "PDF", fileSize: "—", updatedAt: "—" },
  { id: "6", title: "Boarding Requirements", category: "Boarding", fileType: "PDF", fileSize: "—", updatedAt: "—" },
  { id: "7", title: "Parent Notices", category: "Notices", fileType: "PDF", fileSize: "—", updatedAt: "—" },
  { id: "8", title: "School Policies", category: "Policies", fileType: "PDF", fileSize: "—", updatedAt: "—" },
];

export const aboutContent = {
  title: "About First Class Private School",
  intro:
    "First Class Private School is a private day and boarding school in Mbizo, Kwekwe, Zimbabwe. We combine ZIMSEC and Cambridge curricula with a strong culture of discipline, leadership and care.",
  values: [
    { title: "Discipline", description: "Clear boundaries, respectful behaviour and personal responsibility." },
    { title: "Leadership", description: "Encouraging learners to take initiative and lead by example." },
    { title: "Christian values", description: "A foundation of respect, honesty, kindness and service." },
    { title: "Academic ambition", description: "A strong focus on effort, progress and clear learning goals." },
  ],
};

export const academicsContent = {
  title: "Academic Pathways",
  intro:
    "FCPS offers both ZIMSEC and Cambridge curricula. Grade coverage, subject choices and entry requirements are confirmed annually by the school administration.",
  pathways: [
    {
      name: "ZIMSEC",
      description:
        "The Zimbabwe School Examinations Council pathway provides a locally recognised curriculum that prepares learners for national examinations and further study in Zimbabwe and the region.",
    },
    {
      name: "Cambridge",
      description:
        "The Cambridge pathway offers an international curriculum with recognised qualifications. Specific stages, subjects and examination centres are confirmed by the school.",
    },
  ],
  note:
    "Detailed subject lists, grade levels and academic calendars are available from the school office or can be downloaded from the Downloads page once confirmed.",
};

export const transportContent = {
  title: "Transport & Bus Hire",
  intro:
    "FCPS provides school transport for day learners and hires buses for educational trips, church conferences, birthdays, funerals and other outings. Contact us for availability, routes and conditions.",
  services: [
    "Daily learner transport",
    "Educational-trip transport",
    "General bus-hire enquiries",
  ],
  note:
    "Vehicle capacity, air-conditioning and certification details must be confirmed with the school office before booking.",
};

export const privacyPolicy = `
This Privacy Policy explains how First Class Private School collects, uses and protects personal information provided through this website, enquiry forms and the admissions process.

Information we collect
We collect only the information needed to respond to enquiries, process applications and communicate with parents or guardians. This may include names, contact numbers, email addresses and learner details.

How we use information
We use information to respond to enquiries, manage admissions, keep parents informed and meet legal obligations. We do not sell personal information to third parties.

How we protect information
We store information securely and limit access to authorised staff. Paper records and digital systems are kept in controlled environments.

Your rights
You may request access to, correction of or deletion of your personal information by contacting the school office.

This draft policy is for administrator and legal review. It should be updated to reflect the school's final wording and legal requirements.
`;

export const termsOfUse = `
Welcome to the First Class Private School website. By using this site you agree to these Terms of Use.

The content of this website is for general information and does not constitute a binding offer. Information about admissions, fees and policies is subject to confirmation by the school office.

Intellectual property including the school name, logo and photographs belongs to First Class Private School and may not be used without permission.

The school reserves the right to update this website and these terms at any time.

This draft is for administrator review and should be finalised with appropriate legal advice.
`;
