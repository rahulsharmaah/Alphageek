const dummyData = [
  {
    title: "Core Fans",
    partner: "75,748",
    logo: "microsoft.png",
    image: "image11.svg",
    tagline: "EasyCredit 2023 League Preview ",
    likes: 120,
    shares: 30,
    progressBarsHeading: "Stickiness Ratio <i>(specific to quarter)</i>",
    progressBarsPercentage: 75,
    buttonText: "View Activation",
    progressBars: [
      { title: "Engagement (% of)", label: "Progress 1", percentage: 50 },
      { title: "Social Shares (% of) ", label: "Progress 2", percentage: 75 },
      { title: "Invitations Sent (% of)", label: "Progress 3", percentage: 30 },
      { title: "Downloads (total)", label: "Progress 4", percentage: 90 },
      {
        title: "Video Watch Time (avg per)",
        label: "Progress 5",
        percentage: 92,
      },
    ],
  },
  {
    title: "Next Fans",
    partner: "40,347",
    logo: "microsoft.png",
    image: `${process.env.PUBLIC_URL}/image11.svg`,
    tagline: "EasyCredit 2023 League Preview ",
    likes: 120,
    shares: 30,
    progressBarsHeading: "Stickiness Ratio (specific to quarter)",
    progressBarsPercentage: 75,
    buttonText: "Mobile View",
    progressBars: [
      { title: "Engagement (% of)", label: "Progress 1", percentage: 50 },
      { title: "Social Shares (% of) ", label: "Progress 2", percentage: 75 },
      { title: "Invitations Sent (% of)", label: "Progress 3", percentage: 30 },
      { title: "Downloads (total)", label: "Progress 4", percentage: 90 },
      {
        title: "Video Watch Time (avg per)",
        label: "Progress 5",
        percentage: 92,
      },
    ],
  },
  {
    title: "Orignal Fans",
    partner: "75,748",
    logo: "microsoft.png",
    image: `${process.env.PUBLIC_URL}/image11.svg`,
    tagline: "EasyCredit 2023 League Preview ",
    likes: 120,
    shares: 30,
    progressBarsHeading: "Stickiness Ratio (specific to quarter)",
    progressBarsPercentage: 75,
    buttonText: "Newsletter View",

    progressBars: [
      { title: "Engagement (% of)", label: "Progress 1", percentage: 50 },
      { title: "Social Shares (% of) ", label: "Progress 2", percentage: 75 },
      { title: "Invitations Sent (% of)", label: "Progress 3", percentage: 30 },
      { title: "Downloads (total)", label: "Progress 4", percentage: 90 },
      {
        title: "Video Watch Time (avg per)",
        label: "Progress 5",
        percentage: 92,
      },
    ],
  },
];
export default dummyData;
