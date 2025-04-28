<template>
  <div class="team-member-card text-center mb-4">
    <div class="profile-image-container mb-3">
      <img 
        :src="member.image" 
        :alt="`Profile photo of ${member.name}`" 
        class="rounded-circle profile-image"
        @error="handleImageError"
      >
    </div>
    <h3 class="member-name fw-bold mb-1">{{ member.name }}</h3>
    <p class="member-position mb-1">{{ member.position }}</p>
    <p class="member-department mb-1" v-if="member.department">{{ member.department }}</p>
    <p class="member-organization mb-3">{{ member.organization }}</p>
    
    <div class="social-links">
      <a 
        v-if="member.links.website" 
        :href="member.links.website" 
        target="_blank" 
        rel="noopener noreferrer"
        class="social-link mx-1"
        title="Website"
      >
        <i class="bi bi-globe"></i>
      </a>
      <a 
        v-if="member.links.email" 
        :href="`mailto:${member.links.email}`" 
        class="social-link mx-1"
        title="Email"
      >
        <i class="bi bi-envelope"></i>
      </a>
      <a 
        v-if="member.links.linkedin" 
        :href="member.links.linkedin" 
        target="_blank" 
        rel="noopener noreferrer"
        class="social-link mx-1"
        title="LinkedIn"
      >
        <i class="bi bi-linkedin"></i>
      </a>
      <a 
        v-if="member.links.googleScholar" 
        :href="member.links.googleScholar" 
        target="_blank" 
        rel="noopener noreferrer"
        class="social-link mx-1"
        title="Google Scholar"
      >
        <i class="bi bi-mortarboard"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamMemberCard',
  props: {
    member: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleImageError(e) {
      console.error('Image failed to load:', this.member.image);
      e.target.src = 'https://via.placeholder.com/180x180?text=No+Image';
    }
  }
}
</script>

<style scoped>
.profile-image {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border: 3px solid #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.team-member-card:hover .profile-image {
  transform: scale(1.05);
}

.member-name {
  font-size: 1.5rem;
}

.member-position, .member-department, .member-organization {
  color: #6c757d;
}

.social-links {
  display: flex;
  justify-content: center;
}

.social-link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #f8f9fa;
  color: #495057;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: #0d6efd;
  color: white;
}

.social-link i {
  font-size: 1.2rem;
}
</style> 