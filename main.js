// Create your own resume

var resume = {
    "Personal Info": {
      "Name": "Venkateswaran M",
      "DOB": "25-12-97",
      "Phone": "9952417395",
      "Email": "Testmail@gmail.com",
      "Address": "Test address for street, test city, test state"
    },
    "Education Details": {
      "Degree": "B.E Mech",
      "University": "Hindusthan"
    },
    "Skills": {
      "Programming Language": ["Java", "Javascript", "SQL", "Bootstrap"],
      "Web Development": ["HTML", "CSS", "React"]
    },
    "Languages": {
      "Language": ["English", "Tamil"]
    }
  }
  

// FOR IN

for (var key in resume) {
    console.log(key);
}

// FOR EACH

Object.keys(resume["Personal Info"]).forEach(key => {
    
console.log(key);
});

// FOR OF

for (var [a,b] of Object.entries(resume.Skills)) {
    console.log(a);
    console.log(b);    
}