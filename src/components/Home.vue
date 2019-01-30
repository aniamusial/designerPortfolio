<template>
<v-layout>
        <v-container v-bind="{ [`grid-list`]: true }" fluid>
          <v-layout row wrap>
            <v-flex
              v-for="(project) in projects"
              :key="project.id"
              xs4
            >
              <v-card flat tile>
                <v-img
                  :src="project.image[0]" class="image"
                >
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
  </v-layout>
</template>
<script>

import {ProjectsList} from '../projectsList.js'

export default {
    name: 'Home',
    data() {
      return {
        projects: ProjectsList.$data.projects
      }
    }
}
</script>

<style scoped>


</style>