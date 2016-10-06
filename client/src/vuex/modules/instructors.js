import {
    LOAD_INSTRUCTORS,
    LOAD_INSTRUCTOR
} from '../mutationTypes';

// initial state
const state = {
    list: [],
    instructor: {
        hireDate: null,
        officeAssignment: {
            location: null
        }
    }
};

// mutations
const mutations = {
    [LOAD_INSTRUCTORS] (state, instructors) {
        state.list = instructors;
    },
    [LOAD_INSTRUCTOR] (state, instructor) {
        state.instructor = instructor;
    }
};

export default {
    state,
    mutations
};