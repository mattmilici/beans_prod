import { createContext } from "react";

export const UserData = createContext({
    UserName: "Matt",
    SwipeRightPercentage: 0,
    Reasons: [
        "Overall",
        "Work",
        "Friends",
        "Family",
        "Eat Healthy",
        "Run 1 Mile",
        "Realtionship",
    ],
    OverallStreak: 0,
    BestBean: "-",
    WorstBean: "-",
    SwipeRights: 0,
    TotalSwipes: 0,
});