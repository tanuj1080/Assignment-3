const teamMembers = [
  {
    name: "Sarah Jones",
    position: "Founder",
    image: "images/team_sarah.jpg",
    bio: "A lifelong book enthusiast with a passion for sharing her love of literature. Sarah believes that books have the power to transform lives and ignite imaginations. Her dedication to fostering a vibrant reading community is the driving force behind The Literary Voyage.",
  },
  {
    name: "David Lee",
    position: "Curator",
    image: "images/team_david.jpg",
    bio: "David brings his extensive knowledge and discerning taste to curate a captivating selection of books across all genres. With a keen eye for hidden gems and emerging authors, David ensures that The Literary Voyage offers something for every reading preference.",
  },
  {
    name: "Emily Garcia",
    position: "Marketing",
    image: "images/team_emily.jpg",
    bio: "Emily is a passionate advocate for the magic of books. Her creative marketing strategies spread the word about The Literary Voyage and connect with the reading community. Emily brings a vibrant energy to building relationships and fostering a love of reading.",
  },
];

const teamMembersContainer = document.querySelector(".team");

function createTeamMemberCard(member) {
  const card = document.createElement("article");
  card.classList.add("team-member-card");

  const image = document.createElement("img");
  image.src = member.image;
  image.alt = member.name;
  card.appendChild(image);

  const info = document.createElement("div");
  info.classList.add("team-member-info");

  const name = document.createElement("h4");
  name.textContent = member.name;
  info.appendChild(name);

  const position = document.createElement("p");
  position.classList.add("position");
  position.textContent = member.position;
  info.appendChild(position);

  const bio = document.createElement("p");
  bio.classList.add("bio");
  bio.textContent = member.bio;
  info.appendChild(bio);

  card.appendChild(info);

  return card;
}

function displayTeamMembers() {
  teamMembers.forEach((member) => {
    const card = createTeamMemberCard(member);
    teamMembersContainer.appendChild(card);

    // Add hover event listener for expansion
    card.addEventListener("mouseover", () => {
      card.classList.add("expanded"); // Adjust class name as needed
    });

    card.addEventListener("mouseout", () => {
      card.classList.remove("expanded"); // Adjust class name as needed
    });
  });
}

displayTeamMembers();

// Responsive adjustments (optional)
window.addEventListener("resize", () => {
  const teamMemberCards = document.querySelectorAll(".team-member-card");

  // Adjust number of cards per row based on screen size
  if (window.innerWidth < 768) {
    teamMembersContainer.classList.add("responsive-grid-2"); // Adjust class name as needed
  } else {
    teamMembersContainer.classList.remove("responsive-grid-2"); // Adjust class name as needed
  }
});
