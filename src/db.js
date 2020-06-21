import Vue from 'vue'
// db
import projects from '@/assets/db/dataProjects.json'
import root from '@/assets/db/dataRoot.json'

Vue.prototype.$db = {
    root,
    projects
}