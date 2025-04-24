/**
 * An identifier for the current revision of the legal terms.
 * Every time they are updated, this must be incremented.
 */
export const TERMS_LEVEL = 1;

/**
 * A user and balance in the database.
 */
export interface LeaderboardRecord {
    picture: string;
    /**
     * The user's ID, which is unique to it.
     */
    id: number;

    /**
     * The prize's name.
     */
    name: string;

    /**
     * The number of hackeroons in account.
     */
    balance: number;
}

/**
 * A user record in the database.
 */
export interface User {
    /**
     * The user's ID, which is unique to them.
     */
    id: number;

    /**
     * The user's google ID, used for OAuth2 with google.
     */
    googleId: string;

    /**
     * The user's name.
     */
    name: string;

    /**
     * The user's email, which is unique per-account.
     */
    email: string;

    /**
     * A URL to the user's picture, or a Gravatar URL
     * if it doesn't exist.
     */
    picture: string;

    /**
     * The user's balance.
     *
     * This needs to be retrieved separately from the user.
     */
    balance: number;

    /**
     * The terms level that the user has agreed to.
     * @see TERMS_LEVEL
     */
    terms: number;

    /**
     * Has the user agreed to be displayed
     * on the leaderboard?
     */
    leaderboardConsent: boolean;
}

/**
 * What privileges is the user able to access.
 *
 * In general, Staff is for things like adding
 * hackaroons, and Admin is for managing the
 * database.
 */
export enum PermissionLevel {
    /**
     * Something everyone can do.
     */
    User = 0,

    /**
     * Something like adding hackaroons.
     */
    Staff = 1,

    /**
     * Something like managing the database.
     */
    Admin = 2,
}

/**
 * Determines whether a user meets the permission requirements.
 * @param user - is the permissions of the user to check.
 * @param requires - is the required permission level.
 */
export function hasPermissions(
    user: PermissionLevel,
    requires: { has: PermissionLevel },
): boolean {
    return user >= requires.has;
}

/**
 * An event record in the database.
 */
export interface Event {
    /**
     * The event's ID, which is unique to it.
     */
    id: number;

    /**
     * The event's name.
     */
    name: string;

    /**
     * The event's description.
     */
    description: string;

    /**
     * The data/time when the event will start (if it exists).
     */
    start: Date | null;

    /**
     * The data/time when the event will end (if it exists).
     */
    end: Date | null;

    /**
     * The physical or virtual location for an event (if it exists).
     */
    location: string | null;

    /**
     * The number of hackeroons that should be awarded
     * for attending this event.
     */
    attendanceAmount: number;
}

/**
 * A prize record in the database.
 */
export interface Prize {
    /**
     * The prize's ID, which is unique to it.
     */
    id: number;

    /**
     * The prize's name.
     */
    name: string;

    /**
     * The prize's description (if it exists).
     */
    description: string | null;

    /**
     * The initial stock of the prize.
     */
    initialStock: number;

    /**
     * The number of prizes that have been sold so far.
     */
    sold: number;

    /**
     * The prize's price.
     */
    price: number;

    /**
     * An identifier for the image that should be shown
     * for this prize.
     */
    imageName: string | null;
}

/**
 * Data stored in Redis that a check-in code maps to.
 */
export interface CheckInInfo {
    /**
     * Is the duration of the code in seconds.
     */
    duration: number;

    /**
     * Is the staff member who created by the code (if they exist).
     */
    authorized_by: number | null;

    /**
     * Is the ID of the event which the code corresponds to.
     */
    event: number;
}

/**
 * A transaction record in the database.
 */
export interface Transaction {
    /**
     * The event's ID, which is unique to it.
     */
    id: number;

    /**
     * The ID of the user who this transaction is about.
     */
    user: number;

    /**
     * The type of the transaction (i.e., its purpose).
     */
    type: TransactionType;

    /**
     * The amount added to the user's balance.
     * This field can be negative, in which case it
     * means how much is removed.
     */
    amount: number;

    /**
     * The ID of the user who authorized this transaction (if they exist).
     */
    authorized_by: number | null;

    /**
     * If this transaction was related to an event, this is the ID of that event.
     */
    event: number | null;

    /**
     * If this transaction was related to a prize, this is the ID of that prize.
     */
    prize: number | null;

    /**
     * If this transaction was related to an event, this is the name of that event.
     */
    eventName: string | null;

    /**
     * If this transaction was related to a prize, this is the name of that prize.
     */
    prizeName: string | null;

    /**
     * The time at which the transaction occurred.
     */
    time: Date;

    /**
     * Has the transaction been reverted?
     * If true, it no longer counts towards the
     * user's balance.
     */
    reverted: boolean;
}

/**
 * A transaction type.
 *
 * This is used to determine what the transaction
 * was for.
 */
export enum TransactionType {
    /**
     * A generic transaction.
     */
    Unknown = 0,

    /**
     * A reward associated with attending an event.
     */
    EventAttendance = 1,

    /**
     * A payment to purchase a prize.
     */
    PrizePurchase = 2,

    /**
     * Someone did well in an event, asked a good question,
     * or helped out.
     */
    Performance = 3,

    /**
     * Someone won an event activity.
     */
    MonthOfHackingActivityWinner = 4,

    /** Friday Transactions! */
    FridayCostumeFandom = 5,

    FridayFireSideChat = 8,

    FridayHollyTheHusky = 9,

    /** Saturday Transactions! */
    SaturdayCostumeHusky = 6,

    SaturdayTalkWithDanTerry = 11,

    SaturdayPhotoWithHolly = 13,

    SaturdayTalkToKody = 14,

    SaturdayBadmintonSocial = 15,

    /** Sunday Transactions! */
    SundayCostumeProfessional = 7,

    SundayDemoDay = 16,
}

/**
 * A map of transaction types to their hackeroon amounts.
 * This only includes transaction types which have a constant value.
 * MUST BE NON-NEGATIVE.
 */
export const valuedTransactionAmounts = {
    [TransactionType.Performance]: 25,
    [TransactionType.MonthOfHackingActivityWinner]: 100,
    [TransactionType.FridayCostumeFandom]: 100,
    [TransactionType.FridayFireSideChat]: 100,
    [TransactionType.FridayHollyTheHusky]: 50,

    [TransactionType.SaturdayCostumeHusky]: 100,
    [TransactionType.SaturdayTalkWithDanTerry]: 100,
    [TransactionType.SaturdayPhotoWithHolly]: 50,
    [TransactionType.SaturdayTalkToKody]: 100,
    [TransactionType.SaturdayBadmintonSocial]: 100,

    [TransactionType.SundayCostumeProfessional]: 100,
    [TransactionType.SundayDemoDay]: 100,
} as const;

/**
 * A map of valued transaction types to the
 * maximum number of them a user may achieve.
 * Use Infinity to allow no limit.
 * MUST BE NON-NEGATIVE.
 */
export const valuedTransactionLimits: Record<
    keyof typeof valuedTransactionAmounts,
    number
> = {
    [TransactionType.Performance]: Infinity,
    [TransactionType.MonthOfHackingActivityWinner]: 3,
    [TransactionType.FridayCostumeFandom]: 1,
    [TransactionType.FridayFireSideChat]: 1,
    [TransactionType.FridayHollyTheHusky]: 1,

    [TransactionType.SaturdayCostumeHusky]: 1,
    [TransactionType.SaturdayTalkWithDanTerry]: 1,
    [TransactionType.SaturdayPhotoWithHolly]: 1,
    [TransactionType.SaturdayTalkToKody]: 1,
    [TransactionType.SaturdayBadmintonSocial]: 1,

    [TransactionType.SundayCostumeProfessional]: 1,
    [TransactionType.SundayDemoDay]: 1,
};

export const reasonTypeMap = {
    unknown: TransactionType.Unknown,
    performance: TransactionType.Performance,
    "activity-winner": TransactionType.MonthOfHackingActivityWinner,

    "friday-costume-fandom": TransactionType.FridayCostumeFandom,
    "friday-fire-side-chat": TransactionType.FridayFireSideChat,
    "friday-holly-the-husky": TransactionType.FridayHollyTheHusky,

    "saturday-costume-husky": TransactionType.SaturdayCostumeHusky,
    "saturday-talk-dan-terry": TransactionType.SaturdayTalkWithDanTerry,
    "saturday-holly-photo": TransactionType.SaturdayPhotoWithHolly,
    "saturday-talk-kody": TransactionType.SaturdayTalkToKody,
    "saturday-badminton": TransactionType.SaturdayBadmintonSocial,

    "sunday-costume-professional": TransactionType.SundayCostumeProfessional,
    "sunday-demo-day": TransactionType.SundayDemoDay,
} as const;

export const reasonNameMap: Record<keyof typeof reasonTypeMap, string> = {
    unknown: "Unknown",
    performance: "Performance",
    "activity-winner": "Activity Winner",
    "friday-costume-fandom": "Fandom Costume (Friday)",
    "friday-fire-side-chat": "Fire Side Chat (Friday)",
    "friday-holly-the-husky": "Picture with Holly (Friday)",

    "saturday-costume-husky": "Husky Spirit Costume (Saturday)",
    "saturday-talk-dan-terry": "Talk with Dan Terry (Saturday)",
    "saturday-holly-photo": "Picture with Holly (Saturday)",
    "saturday-talk-kody": "Talk with Kody (Saturday)",
    "saturday-badminton": "Badminton Social (Saturday)",

    "sunday-costume-professional": "Professional Costume (Sunday)",
    "sunday-demo-day": "Demo Day (Sunday)",
};

export const typeNameMap: Record<TransactionType, string> = {
    [TransactionType.Unknown]: "Unknown",
    [TransactionType.EventAttendance]: "Event Attendance",
    [TransactionType.PrizePurchase]: "Prize Purchase",
    [TransactionType.Performance]: "Performance",
    [TransactionType.MonthOfHackingActivityWinner]: "Activity Winner",
    [TransactionType.FridayCostumeFandom]: "Fandom Costume (Friday)",
    [TransactionType.FridayFireSideChat]: "Fire Side Chat (Friday)",
    [TransactionType.FridayHollyTheHusky]: "Picture with Holly (Friday)",
    [TransactionType.SaturdayCostumeHusky]: "Husky Spirit Costume (Saturday)",
    [TransactionType.SaturdayTalkWithDanTerry]:
        "Talk with Dan Terry (Saturday)",
    [TransactionType.SaturdayPhotoWithHolly]: "Picture with Holly (Saturday)",
    [TransactionType.SaturdayTalkToKody]: "Talk with Kody (Saturday)",
    [TransactionType.SaturdayBadmintonSocial]: "Badminton Social (Saturday)",
    [TransactionType.SundayCostumeProfessional]:
        "Professional Costume (Sunday)",
    [TransactionType.SundayDemoDay]: "Demo Day (Sunday)",
};
