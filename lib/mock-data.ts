export type RoundStatus = "open" | "locked" | "upcoming";

export type Team = {
  id: string;
  name: string;
  project: string;
  table: string;
  members: string[];
};

export type Mentor = {
  id: string;
  name: string;
  email: string;
  expertise: string;
  assigned: number;
  scored: number;
  invited: boolean;
};

export type Round = {
  id: string;
  name: string;
  starts: string;
  status: RoundStatus;
  teams: number;
  scored: number;
};

export type AuditEntry = {
  id: string;
  time: string;
  actor: string;
  action: string;
  target: string;
};

export const event = {
  name: "Spring Build Weekend",
  currentRound: "Round 2 · Demo",
};

export const criteria = [
  { id: "innovation", label: "Innovation", hint: "How original is the idea?" },
  { id: "execution", label: "Execution", hint: "How well is it built?" },
  { id: "impact", label: "Impact", hint: "Who benefits and how much?" },
  { id: "presentation", label: "Presentation", hint: "Was the pitch clear?" },
];

export const teams: Team[] = [
  { id: "t1", name: "Lumen", project: "Smart lighting for study spaces", table: "A1", members: ["Ava", "Noah", "Mia"] },
  { id: "t2", name: "Harvest", project: "Surplus food matching for cafes", table: "A2", members: ["Liam", "Zoe"] },
  { id: "t3", name: "Waypoint", project: "Accessible campus wayfinding", table: "A3", members: ["Ella", "Kai", "Iris", "Leo"] },
  { id: "t4", name: "Quill", project: "AI feedback for essay drafts", table: "B1", members: ["Ruby", "Sam"] },
  { id: "t5", name: "Tidepool", project: "Citizen water-quality sensors", table: "B2", members: ["Omar", "Jade", "Finn"] },
  { id: "t6", name: "Stitch", project: "Repair cafe booking platform", table: "B3", members: ["Nina", "Theo"] },
];

export const mentorAssignments: { teamId: string; status: "scored" | "pending" }[] = [
  { teamId: "t1", status: "scored" },
  { teamId: "t2", status: "scored" },
  { teamId: "t3", status: "pending" },
  { teamId: "t4", status: "pending" },
];

export const leaderboard = [
  { teamId: "t3", score: 34.5, change: 1 },
  { teamId: "t1", score: 33.8, change: -1 },
  { teamId: "t5", score: 31.2, change: 0 },
  { teamId: "t2", score: 29.9, change: 2 },
  { teamId: "t4", score: 28.4, change: -1 },
  { teamId: "t6", score: 26.1, change: -1 },
];

export const mentors: Mentor[] = [
  { id: "m1", name: "Priya Shah", email: "priya@example.com", expertise: "Product", assigned: 4, scored: 2, invited: true },
  { id: "m2", name: "Daniel Okafor", email: "daniel@example.com", expertise: "Engineering", assigned: 4, scored: 4, invited: true },
  { id: "m3", name: "Hana Kim", email: "hana@example.com", expertise: "Design", assigned: 3, scored: 1, invited: true },
  { id: "m4", name: "Marco Rossi", email: "marco@example.com", expertise: "Business", assigned: 3, scored: 0, invited: false },
];

export const rounds: Round[] = [
  { id: "r1", name: "Round 1 · Pitch", starts: "Sat 10:00", status: "locked", teams: 6, scored: 6 },
  { id: "r2", name: "Round 2 · Demo", starts: "Sat 15:00", status: "open", teams: 6, scored: 4 },
  { id: "r3", name: "Final", starts: "Sun 13:00", status: "upcoming", teams: 3, scored: 0 },
];

export const auditLog: AuditEntry[] = [
  { id: "a1", time: "15:42", actor: "Daniel Okafor", action: "Submitted score", target: "Harvest · Round 2" },
  { id: "a2", time: "15:38", actor: "Priya Shah", action: "Edited score", target: "Lumen · Round 2" },
  { id: "a3", time: "15:30", actor: "Organizer", action: "Opened round", target: "Round 2 · Demo" },
  { id: "a4", time: "15:02", actor: "Organizer", action: "Locked round", target: "Round 1 · Pitch" },
  { id: "a5", time: "14:15", actor: "Organizer", action: "Imported teams", target: "6 teams from CSV" },
  { id: "a6", time: "13:50", actor: "Organizer", action: "Sent invites", target: "3 mentors" },
];

export function teamById(id: string) {
  return teams.find((t) => t.id === id);
}
