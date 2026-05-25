export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  avatar: string;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Suganthi Pattappan",
    role: "Full-Stack Developer",
    location: "Chennai, India",
    avatar: "https://github.com/pssuganthi11.png",
    review:
      "A great course review highlights instructor engagement — clear explanations, real-world examples, and energy. The content was relevant and practical with a good mix of theory and practice.",
  },
  {
    id: 2,
    name: "Anbu Selvan",
    role: "Senior Frontend Engineer",
    location: "Bangalore, India",
    avatar: "https://github.com/anburocky3.png",
    review:
      "The curriculum is brilliantly structured. Each module builds naturally on the last, and the hands-on projects gave me confidence to tackle real-world problems immediately.",
  },
  {
    id: 3,
    name: "Vishnu Prakash",
    role: "UI/UX Designer",
    location: "Coimbatore, India",
    avatar: "https://github.com/awizp.png",
    review:
      "What sets this apart is the community and mentorship. The instructors genuinely care about your growth, and the peer support system keeps you motivated throughout.",
  },
  {
    id: 4,
    name: "Sidhgeetha",
    role: "Backend Developer",
    location: "Hyderabad, India",
    avatar: "https://github.com/sidhgeetha.png",
    review:
      "I went from barely understanding APIs to building full production-ready applications. The step-by-step approach and real project experience made all the difference.",
  },
  {
    id: 5,
    name: "Prakash M",
    role: "DevOps Engineer",
    location: "Mumbai, India",
    avatar: "https://github.com/prakashmcodes.png",
    review:
      "The best investment I've made in my career. The course content stays updated with industry trends, and the deployment and CI/CD sections were incredibly thorough.",
  },
];
