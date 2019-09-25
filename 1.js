function biodata() {
  return {
    "name" : "Arian Derida Hamami",
    "age" : 23,
    "address" : "Jalan Jepara-Kudus, Kriyan Rt 002/001, Kalinyamatan, Jepara",
    "hobbies" : ["Coding", "Designing", "Analysis"],
    "is_married" : false,
    "list_school" : [
      {
        "name" : "Universitas Muhammadiyah Surakarta",
        "year_in" : 2014,
        "year_out" : 2018,
        "major" : "Development of Informatics"
      },
      
      {
        "name" : "SMA Muhammadiyah Kudus",
        "year_in" : 2011,
        "year_out" : 2014,
        "major" : "Science"
      },
      
      {
        "name" : "SMP ISA 03",
        "year_in" : 2008,
        "year_out" : 2011,
        "major" : "null"
      },
      
      {
        "name" : "SDN ISA 05",
        "year_in" : 2002,
        "year_out" : 2008,
        "major" : "null"
      }
    ],
    "skills": [
      {
        "skill_name": "HTML",
        "level": "expert"
      },
      {
        "skill_name": "CSS",
        "level": "expert"
      },
      {
        "skill_name": "JavaScript",
        "level": "advanced"
      },
      {
        "skill_name": "PHP",
        "level": "advanced"
      },
      {
        "skill_name": "Git",
        "level": "advanced"
      },
      {
        "skill_name": "ReactJS",
        "level": "beginner"
      },
      {
        "skill_name": "Python Data Science",
        "level": "advanced"
      },
      {
        "skill_name": "Amazon Web Service",
        "level": "beginner"
      },
      {
        "skill_name": "Design",
        "level": "expert"
      },
    ],
    "interest_in_coding": true
  }
}

let getBiodata = biodata();
console.log(getBiodata);
