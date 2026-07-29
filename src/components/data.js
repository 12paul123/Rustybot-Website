export const accordionData = [
    {
        heading: "!gather",
        description: "Showcase gather rates of specified tool",
        content: "!gather [tool] shows gather rates of the specified tool.",
        category: "Rust"
    },
    {
        heading: "!destroy",
        description: "Shows the amount of explosives to destroy a entity",
        content: "!destroy [amount] [entity] will showcase different explosives and the amount of explosives to destroy the entity.",
        category: "Rust"
    },
    {
        heading: "!craft",
        description: "See what resources you need to craft an item",
        content: "!craft [amount] [entity] will showcase the resources and the time you need to craft the specified amount.",
        category: "Rust"
    },
    {
        heading: "!refine",
        description: "Output the time and resources from refining crude oil",
        content: "!refine [amount] will output the time and resources you gain by refining. The only resource that you can refine is crude oil as of now.",
        category: "Rust"
    },
    {
        heading: "!smelt",
        description: "Show the time, resources you gain & wood consumed by smelting",
        content: "!smelt [amount] [resource] will show the time, amount of wood to smelt and resources you gain. !smelt simulates the normal furnace in rust.",
        category: "Rust"
    },
    {
        heading: "!compost",
        description: "See what you get from composting your items",
        content: "!compost [amount] [item] Find out how much fertilizer you get from an item.",
        category: "Rust"
    },
    {
        heading: "!experiment",
        description: "Experiment scrap on 3 different tiers",
        content: "!experiment [tier] Experiment your luck! There are 3 tiers and they respectively cost 75, 300, 500 scrap. You win by the amount of scrap the blueprint is worth.",
        category: "Economy"
    },
    {
        heading: "!spin",
        description: "Spin the wheel to win scrap just like in bandit camp",
        content: "!Spin [number] [scrap] will bet on the specified number with a multiplier the number.",
        category: "Economy"
    },
    {
        heading: "!scrap",
        description: "How much scrap do you have?",
        content: "Just type !scrap to see for yourself.",
        category: "Economy"
    },
    {
        heading: "!coderaid",
        description: "Guess the code in time",
        content: "!coderaid will start a minigame where the user has to try and quess the code in a set amount of time for 100 scrap. You can buy hints aswell.",
        category: "Economy"
    },
    {
        heading: "!init",
        description: "Initialize moderation roles",
        content: "This command will create moderation roles such as Verified, Unverified, New and Moderator. These roles are necessary for applications to work as intended.",
        category: "Admin"
    },
    {
        heading: "!apply",
        description: "Apply to the server",
        content: "This command will create a application in your configured channel. It is only available to the New role and can be called privately in dms and through the guild channels. Rusty Bot will ask four questions (Your age, Rust Hours, Reason to apply and your Steam URL).",
        category: "Moderation"
    },
    {
        heading: "!verify",
        description: "Verify a user in your guild",
        content: "!verify [username]. Verify is only accessed by moderators and admins. Verify will remove the role 'Unverified' and add the 'Verified' role.",
        category: "Moderation"
    },
    {
        heading: "!code",
        description: "Get a random 4 digit base code",
        content: "!code will give you a 4 digit code.",
        category: "General"
    },
    {
        heading: "!search",
        description: "Try to find barrels to destroy",
        content: "!search will earn you scrap based on the loot collected from the barrels.",
        category: "Economy"
    },
    {
        heading: "!showstats",
        description: "Will show you your stats in rust.",
        content: "!showstats [stats] will show you up to 6 stats with [stats] being a short name for the stat.",
        category: "General"
    },
    {
        heading: "!showachievements",
        description: "Will show you your achievements",
        content: "!showachievements [achievements] will show you up to 6 achievments. [achievements] is a abbreviation for the achievement you're looking for.",
        category: "General"
    },
    {
        heading: "!showdeaths",
        description: "Showcase your death statistics.",
        content: "Will show you statistics on your deaths in rust.",
        category: "General"
    },
    {
        heading: "!showplayers",
        description: "Will the playercount.",
        content: "Show how many players are playing rust currently.",
        category: "General"
    },
    {
        heading: "!recycle",
        description: "Check what you get from recycling",
        content: "!recycle [amount] [item]",
        category: "Rust"
    },
    {
        heading: "!quizgame",
        description: "Give you a random question",
        content: "!quizgame will give you a couple random questions. There are three grades of questions and based on your performance you will be able to win scrap.",
        category: "Economy"
    },
    {
        heading: "!buy",
        description: "Buy a tool to farm with",
        content: "!buy [tool]",
        category: "Economy"
    },
    {
        heading: "!inventory",
        description: "Show your rusty bot inventory",
        content: "!inventory will show your items and the amount of that item",
        category: "General"
    },
    {
        heading: "!equip",
        description: "Equip a tool",
        content: "!equip [tool] will equip a tool in your inventory.",
        category: "General"
    },
    {
        heading: "!setnews",
        description: "Set a channel for rust news",
        content: "!setnews [Channel ID/Name] will set a channel where rust news will be sent.",
        category: "Admin"
    },
    {
        heading: "!setwipes",
        description: "Set a channel for rus wipes",
        content: "!setwipes [Channel ID/Name] will set a channel where newly wiped servers will be sent.",
        category: "Admin"
    },
    {
        heading: "!setapplications",
        description: "Set a application channel",
        content: "!setapplications [Channel ID/Name] will set a channel where user applications will be sent for verification",
        category: "Admin"
    },
    {
        heading: "!setrules",
        description: "Give a reaction role",
        content: "!setrules [Message ID] will give users who react on the message the New role. Specifically used for approving of server rules.",
        category: "Admin"
    },
    {
        heading: "!allowroles",
        description: "Allow scrap roles",
        content: "!allowroles [True/False] allows roles to be created as scrap roles. Beware might overflood the server with roles.",
        category: "Admin"
    },
    {
        heading: "!help",
        description: "Show help for commands",
        content: "!help [category] will show how to use different commands.",
        category: "General"
    },
    {
        heading: "!info",
        description: "Info about the bot",
        content: "!info will give information about the server count & owner.",
        category: "General"
    },
    {
        heading: "!unverify",
        description: "Unverify a user",
        content: "!unverify [username] to decline the application they made.",
        category: "Moderation"
    },
    {
        heading: "!farm",
        description: "Farm resources with your tool",
        content: "!farm [resource] to farm a resource which you can sell for scrap.",
        category: "Economy"
    },
    {
        heading: "!sell",
        description: "Sell resources for scrap",
        content: "!sell [resource] to gain more scrap.",
        category: "Economy"
    },
    {
        heading: "!delallscrap",
        description: "Delete all scrap roles in your guild",
        content: "!delallscrap to delete all the users scrap roles in your guild.",
        category: "Admin"
    },
    {
        heading: "!deldata",
        description: "Delete all your data collected by our bot",
        content: "!deldata to delete all your data in our database.",
        category: "General"
    },
    {
        heading: "!delscrap",
        description: "Delete your scrap role",
        content: "!delscrap to delete your scrap role in the server.",
        category: "General"
    },
    {
        heading: "!eoka",
        description: "See how many attempts it takes to fire the eoka",
        content: "!eoka will fire a eoka and show how many attempts it takes.",
        category: "General"
    }
]