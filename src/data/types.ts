export type ActivityCategory =
  | "fun"
  | "leadership"
  | "communication"
  | "problem-solving"
  | "employee-engagement"
  | "corporate-outing"
  | "games";

export type Activity = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: ActivityCategory[];
  format: "Indoor" | "Outdoor" | "Virtual" | "Hybrid";
  objectives: string[];
  idealFor: string[];
  groupSize: string;
  duration: string;
  energyLevel: "Low" | "Medium" | "High";
  difficulty: "Easy" | "Moderate" | "Challenging";
  materials: string[];
  location: string[];
  howItWorks: string[];
  outcomes: string[];
  facilitatorNotes: string[];
  variations: string[];
  faqs: { question: string; answer: string }[];
  relatedActivities: string[];
};
