import Vue from 'vue';
import projects from '../src/resources/api/pictures.json'

export const ProjectsList = new Vue({
    data() {
        return {
            projects
        }
    }
})