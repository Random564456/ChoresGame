export type taskType = {
  taskId: number;
  name: string;
  description: string;
  completed: boolean;
  category:
    | "kitchen"
    | "bathroom"
    | "bedroom"
    | "living"
    | "clothing"
    | "pet"
    | "general";
  frequency: "daily" | "weekly" | "monthly";
  dateCompleted?: Date | null;
};

export type taskListType = taskType[];

const taskList: taskListType = [
  {
    taskId: 1,
    name: "Clean kitchen counters",
    description: "Wipe down all countertops with cleaner",
    completed: false,
    category: "kitchen",
    frequency: "daily",
    dateCompleted: null,
  },
  {
    taskId: 2,
    name: "Wash dishes",
    description: "Hand wash or load dishwasher and put away clean dishes",
    completed: false,
    category: "kitchen",
    frequency: "daily",
    dateCompleted: null,
  },
  {
    taskId: 3,
    name: "Sweep kitchen floor",
    description: "Sweep to remove crumbs and debris",
    completed: false,
    category: "kitchen",
    frequency: "daily",
    dateCompleted: null,
  },
  {
    taskId: 4,
    name: "Clean toilet",
    description: "Scrub inside and outside of toilet",
    completed: false,
    category: "bathroom",
    frequency: "weekly",
    dateCompleted: null,
  },
  {
    taskId: 5,
    name: "Clean shower",
    description: "Spray and scrub shower walls and floor",
    completed: false,
    category: "bathroom",
    frequency: "weekly",
    dateCompleted: null,
  },
  {
    taskId: 6,
    name: "Wipe bathroom mirrors",
    description: "Clean mirrors with glass cleaner",
    completed: false,
    category: "bathroom",
    frequency: "weekly",
    dateCompleted: null,
  },
  {
    taskId: 7,
    name: "Sort laundry",
    description: "Separate lights, darks, and delicates",
    completed: false,
    category: "clothing",
    frequency: "weekly",
    dateCompleted: null,
  },
  {
    taskId: 8,
    name: "Fold and put away clothes",
    description: "Don't leave clean clothes in baskets",
    completed: false,
    category: "clothing",
    frequency: "daily",
    dateCompleted: null,
  },
  {
    taskId: 9,
    name: "Clean cat litter box",
    description: "Scoop waste and refresh litter",
    completed: false,
    category: "pet",
    frequency: "daily",
    dateCompleted: null,
  },
  {
    taskId: 10,
    name: "Vacuum living room",
    description: "Focus on high-traffic areas and under furniture",
    completed: false,
    category: "living",
    frequency: "weekly",
    dateCompleted: null,
  },
  {
    taskId: 11,
    name: "Dust surfaces",
    description: "Use microfiber cloth on all furniture surfaces",
    completed: false,
    category: "general",
    frequency: "weekly",
    dateCompleted: null,
  },
  {
    taskId: 12,
    name: "Mop floors",
    description: "After sweeping, mop all hard surfaces",
    completed: false,
    category: "general",
    frequency: "weekly",
    dateCompleted: null,
  },
  {
    taskId: 13,
    name: "Change bed sheets",
    description: "Replace with clean sheets for all beds",
    completed: false,
    category: "bedroom",
    frequency: "weekly",
    dateCompleted: null,
  },
  {
    taskId: 14,
    name: "Clean refrigerator",
    description: "Discard old food and wipe shelves",
    completed: false,
    category: "kitchen",
    frequency: "monthly",
    dateCompleted: null,
  },
  {
    taskId: 15,
    name: "Organize closet",
    description: "Put clothes in proper places, donate unused items",
    completed: false,
    category: "clothing",
    frequency: "monthly",
    dateCompleted: null,
  },
  {
    taskId: 16,
    name: "Clean oven",
    description: "Use oven cleaner or self-clean function",
    completed: false,
    category: "kitchen",
    frequency: "monthly",
    dateCompleted: null,
  },
  {
    taskId: 17,
    name: "Wash windows",
    description: "Inside and outside if accessible",
    completed: false,
    category: "general",
    frequency: "monthly",
    dateCompleted: null,
  },
  {
    taskId: 18,
    name: "Vacuum upholstery",
    description: "Couches and chairs where cat likes to sit",
    completed: false,
    category: "pet",
    frequency: "weekly",
    dateCompleted: null,
  },
  {
    taskId: 19,
    name: "Water plants",
    description: "Check all houseplants and water as needed",
    completed: false,
    category: "general",
    frequency: "weekly",
    dateCompleted: null,
  },
  {
    taskId: 20,
    name: "Take out trash and recycling",
    description: "All bins throughout the house",
    completed: false,
    category: "general",
    frequency: "daily",
    dateCompleted: null,
  },
];

export default taskList;
