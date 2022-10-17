const COURSE_MAP = {
    "icp": "Intership Chourt Program",
    "c": "C Programmimg",
    "cpp": "C++ Programming ",
    "python": "Python Programming"
}

// console.log(COURSE_MAP.icp);

function getCourses(Course){
    return COURSE_MAP[Course]
}

const result = getCourses("icp")
console.log(result);