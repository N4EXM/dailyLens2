import article0 from './assets/article0.jpg'
import userImage from './assets/userImage.png'
import elderScrollsImage from './assets/elderScrolls.jpg'
import bitcoinImage from './assets/bitcoin.png'
import exerciseImage from './assets/exercise.jpg'
import codeImage from './assets/code.jpg'
import creditImage from './assets/credit.jpg'
import diabloImage from './assets/Diablo.jpg'
import dietImage from './assets/diet.jpg'
import emergencyImage from './assets/emergency.jpg'
import AiImage from './assets/Ai.jpg'
import gadgetsImage from './assets/gadgets.png'
import marsImage from './assets/mars.jpg'
import mediaImage from './assets/media.png'
import minimalismImage from './assets/minimalism.jpg'
import quantumImage from './assets/Quantum.jpg'
import sci_fiImage from './assets/Scifi.jpg'
import sleepImage from './assets/sleep.jpg'
import starfieldImage from './assets/starfield.png'
import superfoodImage from './assets/superfoods.jpg'

const articles = [
    {
        id: 0,
        title: "AI Cheating Is So Out of Hand In America’s Schools That the Blue Books Are Coming...",
        articleImage: article0,
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod cumque sequi nulla delectus eum fuga consequatur labore dignissimos, quibusdam itaque laborum, odit, natus sit necessitatibus tempora? Dicta possimus facilis repudiandae?...",
        authorName: "John Doe",
        authorImage: userImage,
        date: "22/03/12",
        category: ["Tech", "Recommended"]
    },
    {
        id: 1,
        title: "The Next Elder Scrolls Game: Everything We Know So Far",
        articleImage: elderScrollsImage,
        content: "Bethesda has teased some details about the upcoming Elder Scrolls VI. From potential locations to new gameplay mechanics, here's what fans can expect...",
        authorName: "Sarah Johnson",
        authorImage: userImage,
        date: "23/05/15",
        category: ["Gaming", "Recommended"]
    },
    {
        id: 2,
        title: "Bitcoin Surges Past $60K: What's Driving the Rally?",
        articleImage: bitcoinImage,
        content: "Cryptocurrency markets are booming again as Bitcoin crosses the $60,000 mark. Analysts point to institutional adoption and ETF approvals as key factors...",
        authorName: "Michael Chen",
        authorImage: userImage,
        date: "23/05/10",
        category: ["Finance"]
    },
    {
        id: 3,
        title: "5 Simple Exercises to Improve Your Posture While Working From Home",
        articleImage: exerciseImage,
        content: "With remote work becoming permanent for many, posture-related issues are on the rise. These easy exercises can help prevent back pain and improve your alignment...",
        authorName: "Dr. Emily Wilson",
        authorImage: userImage,
        date: "23/05/08",
        category: ["Health"]
    },
    {
        id: 4,
        title: "Why Everyone Should Learn Basic Programming in 2023",
        articleImage: codeImage,
        content: "In today's digital world, understanding fundamental coding concepts is becoming as important as reading and writing. Here's how to get started...",
        authorName: "Alex Rivera",
        authorImage: userImage,
        date: "23/05/05",
        category: ["Tech","Recommended"]
    },
    {
        id: 5,
        title: "Diablo IV Review: A Hellish Good Time",
        articleImage: diabloImage,
        content: "After years of anticipation, Diablo IV delivers a satisfying mix of classic ARPG gameplay with modern improvements. Our in-depth review...",
        authorName: "Kevin Zhang",
        authorImage: userImage,
        date: "23/05/18",
        category: ["Gaming"]
    },
    {
        id: 6,
        title: "How to Build an Emergency Fund in 6 Months",
        articleImage: emergencyImage,
        content: "Financial experts recommend having 3-6 months of expenses saved. This practical guide shows you how to achieve that goal even on a tight budget...",
        authorName: "Jessica Williams",
        authorImage: userImage,
        date: "23/05/12",
        category: ["Finance"]
    },
    {
        id: 7,
        title: "The Mediterranean Diet: Science-Backed Benefits",
        articleImage: dietImage,
        content: "Numerous studies confirm the health benefits of the Mediterranean diet. From heart health to longevity, here's why it's consistently ranked #1...",
        authorName: "Dr. Robert Klein",
        authorImage: userImage,
        date: "23/05/03",
        category: ["Health"]
    },
    {
        id: 8,
        title: "The Most Anticipated Tech Products of 2023",
        articleImage: gadgetsImage,
        content: "From foldable phones to AR glasses, these are the groundbreaking tech products expected to launch this year that are worth waiting for...",
        authorName: "Lisa Park",
        authorImage: userImage,
        date: "23/05/20",
        category: ["Tech","Recommended"]
    },
    {
        id: 9,
        title: "Starfield Review: Bethesda’s Ambitious Space RPG Delivers",
        articleImage: starfieldImage,
        content: "After years of hype, Starfield finally launches with a massive universe to explore. Does it live up to expectations? Our review dives into its strengths and weaknesses...",
        authorName: "Chris Roberts",
        authorImage: userImage,
        date: "23/09/10",
        category: ["Gaming"]
    },
    {
        id: 10,
        title: "How AI Is Revolutionizing Stock Market Predictions",
        articleImage: AiImage,
        content: "Hedge funds and traders are increasingly using machine learning to forecast market trends. We examine the risks and rewards of algorithmic trading...",
        authorName: "Daniel Lee",
        authorImage: userImage,
        date: "23/08/22",
        category: ["Finance"]
    },
    {
        id: 11,
        title: "The Science of Sleep: Why 8 Hours Isn’t Enough for Everyone",
        articleImage: sleepImage,
        content: "New research suggests sleep needs vary genetically. Learn how to optimize your sleep cycle based on your body’s unique requirements...",
        authorName: "Dr. Rachel Adams",
        authorImage: userImage,
        date: "23/07/15",
        category: ["Health"]
    },
    {
        id: 12,
        title: "Quantum Computing Breakthrough: What It Means for the Future",
        articleImage: quantumImage,
        content: "Scientists have achieved quantum supremacy with a 256-qubit processor. We break down how this could transform cryptography, medicine, and AI...",
        authorName: "Priya Patel",
        authorImage: userImage,
        date: "23/09/05",
        category: ["Tech"]
    },
    {
        id: 13,
        title: "10 Must-Watch Sci-Fi Movies Coming in 2024",
        articleImage: sci_fiImage,
        content: "From dystopian epics to interstellar adventures, here’s the ultimate list of sci-fi films to add to your watchlist next year...",
        authorName: "Marcus Cole",
        authorImage: userImage,
        date: "23/08/30",
        category: ["Entertainment"]
    },
    {
        id: 14,
        title: "Minimalism: How Living With Less Can Reduce Stress",
        articleImage: minimalismImage,
        content: "A growing movement advocates for decluttering physical and digital spaces. Here’s how minimalism improved mental health for these individuals...",
        authorName: "Sophia Nguyen",
        authorImage: userImage,
        date: "23/07/20",
        category: ["Health"]
    },
    {
        id: 15,
        title: "NASA’s Mars Mission: New Evidence of Ancient Water",
        articleImage: marsImage,
        content: "Perseverance rover discoveries suggest Mars once had rivers and lakes. Could this mean life existed there? Scientists weigh in...",
        authorName: "Dr. Neil Carter",
        authorImage: userImage,
        date: "23/09/12",
        category: ["Science"]
    },
    {
        id: 16,
        title: "Why You Should Switch to a Credit Union in 2023",
        articleImage: creditImage,
        content: "Lower fees, better customer service, and community focus make credit unions a smart alternative to big banks. Here’s how to make the switch...",
        authorName: "Olivia Martinez",
        authorImage: userImage,
        date: "23/08/05",
        category: ["Finance"]
    },
    {
        id: 17,
        title: "The Psychology of Social Media Addiction",
        articleImage: mediaImage,
        content: "Why can’t we stop scrolling? Neuroscientists explain how platforms hijack our dopamine systems—and how to break the cycle...",
        authorName: "Jordan Kim",
        authorImage: userImage,
        date: "23/07/25",
        category: ["Health","Recommended"]
    },
    {
        id: 18,
        title: "Superfoods Debunked: What’s Really Worth the Hype?",
        articleImage: superfoodImage,
        content: "Nutritionists analyze popular superfoods like kale, acai, and quinoa to reveal which ones actually deliver health benefits...",
        authorName: "Dr. Hannah Lee",
        authorImage: userImage,
        date: "23/08/18",
        category: ["Health"]
    }
];

export default articles 