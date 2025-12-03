const people = [
  {
    fullName: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    profession: "Software Engineer",
    description:
      "Aarav is a full-stack developer passionate about building scalable modern applications. He loves solving complex problems and mentoring juniors.",
    tags: ["JavaScript", "React", "Node.js", "FullStack"]
  },
  {
    fullName: "Isha Verma",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "UI/UX Designer",
    description:
      "Isha designs clean, accessible, and beautiful user experiences. She focuses on simplicity, minimalism, and pixel-perfect interfaces.",
    tags: ["Figma", "UX", "Prototyping", "Design"]
  },
  {
    fullName: "Rohan Mehta",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    profession: "Data Scientist",
    description:
      "Rohan works with machine learning, data pipelines, and predictive analytics. He converts raw data into meaningful insights.",
    tags: ["Python", "ML", "Data", "AI"]
  },
  {
    fullName: "Sara Malik",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    profession: "Digital Marketer",
    description:
      "Sara is an expert in social media strategy and brand storytelling. She helps brands grow with creativity and analytics.",
    tags: ["Marketing", "SEO", "Branding", "Content"]
  },
  {
    fullName: "Vikram Singh",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Entrepreneur",
    description:
      "Vikram builds startups from scratch. He believes in innovation, leadership, and solving real-world problems through technology.",
    tags: ["Startup", "Leadership", "Business", "Innovation"]
  },
  {
    fullName: "Neha Kapoor",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Product Manager",
    description:
      "Neha manages cross-functional teams and drives product strategy. She ensures everything aligns with user needs and business goals.",
    tags: ["Product", "Strategy", "Management", "Agile"]
  },
  {
    fullName: "Kabir Nanda",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    profession: "Cybersecurity Analyst",
    description:
      "Kabir protects systems from threats and vulnerabilities. He is deeply passionate about digital safety and cryptography.",
    tags: ["Cybersecurity", "Network", "Encryption", "Ethical Hacking"]
  },
  {
    fullName: "Riya Desai",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Content Creator",
    description:
      "Riya creates engaging content, writes blogs, and manages digital campaigns. She loves creativity and storytelling.",
    tags: ["Content", "Writing", "Social Media", "Branding"]
  },
  {
    fullName: "Aditya Khanna",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profession: "Photographer",
    description:
      "Aditya captures beautiful moments and tells stories through his lens. Specializes in portraits and commercial photography.",
    tags: ["Photography", "Camera", "Editing", "Creative"]
  },
  {
    fullName: "Simran Kaur",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Psychologist",
    description:
      "Simran helps people improve their emotional well-being. She believes in empathy, deep listening, and healing the mind.",
    tags: ["Psychology", "Wellness", "Mental Health", "Counseling"]
  }
];

const main = document.querySelector('main') ; 
let sum = '' ; 
people.forEach((ele)=>{
    sum += `<div class="card">
            <img src="${ele.image}" alt="">
            <h2>${ele.fullName}</h2>
            <h3>${ele.profession}</h3>
            <p>${ele.description}</p>
        </div>`
})
main.innerHTML = sum ;

