<template>
  <div class="our-team-view container py-5">
    <div class="row mb-5">
      <div class="col-12 text-center">
        <h1 class="display-4 fw-bold mb-4">Our Team</h1>
      </div>
    </div>
    
    <div class="row">
      <div 
        v-for="member in teamMembers" 
        :key="member.id"
        class="col-lg-3 col-md-6 col-sm-12"
      >
        <TeamMemberCard :member="member" />
      </div>
    </div>
  </div>
</template>

<script>
import TeamMemberCard from '@/components/team/TeamMemberCard.vue'

export default {
  name: 'OurTeamView',
  components: {
    TeamMemberCard
  },
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: "Mostafa M. Rezaee",
          position: "Ph.D. Candidate",
          department: "Data Science Program",
          organization: "Bowling Green State University",
          image: "/images/mostafa.m.rezaee.png",
          links: {
            website: "https://mostafa-mr.com/",
            email: "rezaeem@bgsu.edu",
            linkedin: "https://www.linkedin.com/in/mostafa-m-rezaee/",
            googleScholar: "https://scholar.google.com/citations?user=jvcCIJYAAAAJ&hl=en"
          }
        },
        {
          id: 2,
          name: "Robert C. Green II",
          position: "Associate Professor",
          department: "Computer & Data Science",
          organization: "Bowling Green State University",
          image: "/images/robert.c.green.jpeg",
          links: {
            website: "https://rgreen13.gitlab.io/",
            email: "greenr@bgsu.edu",
            linkedin: "https://www.linkedin.com/in/rob-green-6371772/",
            googleScholar: "https://scholar.google.com/citations?hl=en&user=jNzxwwEAAAAJ"
          }
        },
        {
          id: 3,
          name: "Andrew Gregory",
          position: "Assistant Professor",
          department: "Conservation Biology and Landscape Ecology",
          organization: "University of North Texas",
          image: "/images/andrew.gregory.jpeg",
          links: {
            website: "https://biology.unt.edu/people/andrew-gregory",
            email: "andrew.gregory@unt.edu",
            linkedin: "https://www.linkedin.com/in/andrew-gregory-b1aa51159/",
            googleScholar: "https://scholar.google.com/citations?hl=en&user=I7rG0ksAAAAJ"
          }
        },
        {
          id: 4,
          name: "Hamid Shojaei",
          position: "Senior Data Science Advisor",
          department: "",
          organization: "Excelacom Inc.",
          image: "/images/hamid.shojaei.jpeg",
          links: {
            email: "hamid.shojaei@excelacom.com",
            linkedin: "https://www.linkedin.com/in/hamid-shojaei/",
            googleScholar: "https://scholar.google.com/citations?hl=en&user=RY50kBoAAAAJ"
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.our-team-view {
  min-height: 100vh;
}
</style> 